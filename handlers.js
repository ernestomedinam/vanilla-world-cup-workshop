function _permitirEntreFases(destino) {
    const fase = window.state.torneo.fases
        .findIndex(_fase => _fase.nombre === destino);
    if (window.state.arrastrar.indiceFase - fase == 1) return true;
    if (window.state.arrastrar.indiceFase == 2) return true;
    return false;
}

function _obtenerBanderaEnFase(bandera, indice) {
    console.log(bandera, indice);
    for (let contenedor of window.state.torneo.fases[indice].contenedores) {
        for (let equipo of contenedor.equipos) {
            if (equipo.bandera === bandera) return equipo;
        }
    }
}

function _obtenerEquipo(
    id, // del equipo buscado
) {
    // para cada fase
    for (let fase of window.state.torneo.fases) {
        // para cada contendor
        for (let contenedor of fase.contenedores) {
            // para cada equipo
            for (let equipo of contenedor.equipos) {
                if (equipo.id == id) return  equipo;
            }
        }
    }
}

function _vecinoIndeterminado(id, indice) {
    // encontrar contenedor
    const contenedores = window.state.torneo.fases[indice].contenedores;
    let contenedor;
    for (let _contenedor of contenedores) {
        for (let equipo of _contenedor.equipos) {
            if (equipo.id == id) {
                for (let equipo of _contenedor.equipos) {
                    if (equipo.bandera == "tbd") return true;
                }
                // contenedor = _contenedor
            }
        }
    }
    // for (let equipo of contenedor.equipos) {
    //     if (equipo.bandera == "tbd") return true;
    // }
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

function manejarClick(event) {
    const nombreFase = event.currentTarget.parentElement.parentElement.id;
    console.log("nombre fase:", nombreFase);
    const indiceFase = window.state.torneo.fases.findIndex(
        fase => fase.nombre === nombreFase 
    );
    console.log("indice fase:", indiceFase);
    switch(nombreFase.toLowerCase()) {
        case "fase de grupos":
            console.log("no click for you");
            return;
        case "16vos de final":
        case "8vos de final":
        case "semifinales":
        case "tercer lugar":
        case "final":
            const equipo = _obtenerEquipo(event.currentTarget.id);
            if (equipo.bandera == "tbd") {
                console.log("no click for you");
                return;
            }
            // quitar equipo de esta fase
            const _bandera = equipo.bandera;
            equipo.bandera = "tbd";
            equipo.nombre = "Por determinar";
            refrescarContenedorDeBandera(equipo.id, equipo);
            // devolver equipo a fase anterior
            const _faseAnterior = nombreFase == "Final"
                ? indiceFase + 2
                : indiceFase + 1
            const _equipo = _obtenerBanderaEnFase(_bandera, _faseAnterior);
            _equipo.pasaDeFase = false;
            refrescarContenedorDeBandera(_equipo.id, _equipo);
            return;
            console.log("not yet solved 405");
            return;
        default: 
            console.log("what did you click?");
            return;
    }
}
