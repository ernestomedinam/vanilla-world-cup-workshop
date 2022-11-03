function _permitirEntreFases(destino) {
    const fase = window.state.torneo.fases
        .findIndex(_fase => _fase.nombre === destino);
    if (window.state.arrastrar.indiceFase - fase == 1) return true;
    if (window.state.arrastrar.indiceFase == 2) return true;
    return false;
}

function _vecinoIndeterminado(id, indice) {
    // encontrar contenedor
    const contenedores = window.state.torneo.fases[indice].contenedores;
    let contenedor;
    for (let _contenedor of contenedores) {
        for (let equipo of _contenedor.equipos) {
            if (equipo.id == id) {
                contenedor = _contenedor
            }
        }
    }
    for (let equipo of contenedor.equipos) {
        if (equipo.bandera == "tbd") return true;
    }
    return false;
}

function iniciarArrastre(event) {
    // si el contenedor no es arrastable
    if (!event.currentTarget.draggable) {
        event.preventDefault();
        return;
    }
    const nombreFase = event.currentTarget.parentElement.parentElement.id;
    const indiceFase = window.state.torneo.fases.findIndex(
        _fase => _fase.nombre === nombreFase
    )
    if (_vecinoIndeterminado(
        event.currentTarget.id,
        indiceFase
    )) return; 
    // actualizar el estado arrastrar
    window.state.arrastrar = {
        id: event.currentTarget.id,
        valido: event.currentTarget.draggable,
        indiceFase: indiceFase
    }
};

function manejarArrastre(event) {
    event.preventDefault();
};

function manejarArrastreEntrante(event) {
    // si el arrastrar es válido, actualiza la clase del target para drop
    if (!window.state.arrastrar.valido) return;
    if (!_permitirEntreFases(
        event.currentTarget.parentElement.parentElement.id
    )) return;
    event.currentTarget.children[0].classList.add("drag-over");
};

function manejarArrastreSaliente(event) {
    // si el target tiene el estilo, se lo quita
    if (!event.currentTarget.children[0].classList.contains("drag-over")) return;
    event.currentTarget.children[0].classList.remove("drag-over");
}

function recibirElemento(event) {
    event.preventDefault();
    if (!window.state.arrastrar.valido) return;
    // verificar que el drop target sea un destino valido
    const nombreFase = event.currentTarget.parentElement.parentElement.id;
    if (!_permitirEntreFases(nombreFase)) return;
    const fase = window.state.torneo.fases.findIndex(
        _fase => _fase.nombre === nombreFase
    );
    // capturar el equipo que viene
    const contenedores = window.state.torneo.fases[
        window.state.arrastrar.indiceFase
    ].contenedores;
    let equipo;
    for (let contenedor of contenedores) {
        for (let _equipo of contenedor.equipos) {
            if (_equipo.id != window.state.arrastrar.id) continue;
            equipo = {..._equipo};
            _equipo.pasaDeFase = true;
        }
    };
    // introducirlo en este target
    const nuevosContenedores = window.state.torneo.fases[fase].contenedores.map(_contenedor => {
        for (let _equipo of _contenedor.equipos) {
            if (_equipo.id == event.currentTarget.id) {
                _equipo.nombre = equipo.nombre;
                _equipo.bandera = equipo.bandera;
            }
        }
        return _contenedor;
    });
    window.state.torneo.fases[fase].contenedores = nuevosContenedores;
    // actualizar la propiedad soltar del state
    window.state.soltar = {
        id: event.currentTarget.id,
        valido: true
    };
    refrescarContenedorDeBandera(event.currentTarget.id, equipo);
};

function finalizarArrastre(event) {
    event.preventDefault();
    // refrescar la bandera que se fue si el soltar es valido
    if (!window.state.soltar.valido) return;
    const contenedores = window.state.torneo.fases[
        window.state.torneo.fases.findIndex(
            _fase => _fase.nombre == event.currentTarget
                .parentElement
                .parentElement
                .id
        )
    ].contenedores;
    let equipo;
    for (let contenedor of contenedores) {
        for (let _equipo of contenedor.equipos) {
            if (_equipo.id == event.currentTarget.id) {
                equipo = {..._equipo}
            }
        }
    }
    refrescarContenedorDeBandera(event.currentTarget.id, equipo);
    // limpiar arrastrar y soltar
    window.state.arrastrar = {
        id: undefined,
        valido: false,
        indiceFase: undefined
    };
    window.state.soltar = {
        id: undefined,
        valido: false
    };
};
