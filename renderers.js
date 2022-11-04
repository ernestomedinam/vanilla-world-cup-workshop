function renderizarFase(fase) {
    // construimos el div
    const divFase = document.createElement("div");
    // le agregamos sus clases
    divFase.classList.add("fase");
    // y el id
    divFase.setAttribute("id", fase.nombre);
    // capturamos los contenedores de la fase
    const contenedores = fase.contenedores;
    const fasesFinales = contenedores.length < 8;
    // si fase es una fase final 
    if (fasesFinales) {
        // agregamos las clases adicionales
        divFase.classList.add("justify-center", "fases-finales");
    }
    
    if (fase.nombre === "Final" || fase.nombre === "Tercer lugar") {
        const botonGanaCasa = renderizarBotonGanador(fase);
        divFase.appendChild(botonGanaCasa);
    }
    // para cada contenedor de banderas creamos un div
    // con las banderas de los equipos
    for (let contenedor of contenedores) {
        const contenedorDeBanderas = renderizarContenedorDeBanderas(
            contenedor,
            fasesFinales
        );
        divFase.appendChild(contenedorDeBanderas);
    }
    if (fase.nombre === "Final" || fase.nombre === "Tercer lugar") {
        const botonGanaVisita = renderizarBotonGanador(fase, true);
        divFase.appendChild(botonGanaVisita);
    }
    return divFase;
};

function renderizarContenedorDeBanderas(contenedor, fasesFinales) {
    // construimos el div
    const divContenedorDeBanderas = document.createElement("div");
    // le agregamos sus clases
    divContenedorDeBanderas.classList.add("contenedor-banderas");
    // si pertenece a una fase final
    if (fasesFinales) {
        divContenedorDeBanderas.classList.add("w-auto");
    }
    // para cada equipo queremos construir un contenedor de bandera
    for (let equipo of contenedor.equipos) {
        const contenedorDeBandera = renderizarContenedorDeBandera(equipo);
        divContenedorDeBanderas.appendChild(contenedorDeBandera);
    }
    return divContenedorDeBanderas;
};

function renderizarContenedorDeBandera(equipo) {
    // construir el div
    const divContenedorDeBandera = document.createElement("div");
    // le agregamos sus clases
    divContenedorDeBandera.classList.add("contenedor-bandera");
    // y el id
    divContenedorDeBandera.setAttribute("id", equipo.id);
    // construir el img
    const imgBandera = document.createElement("img");
    // le agregamos su clases
    imgBandera.classList.add("bandera");
    // le agregamos el src (source)
    const src = `./assets/${equipo.bandera}.png`;
    imgBandera.src = src;
    imgBandera.alt = `bandera de ${equipo.nombre}`;
    divContenedorDeBandera.addEventListener("dragstart", iniciarArrastre);
    divContenedorDeBandera.draggable = false;
    // si el equipo no es tbd
    if (equipo.bandera !== "tbd") {
        if (!equipo.pasaDeFase) {
            // agregamos cursor para arrastrar
            imgBandera.style.cursor = "move";
            // agregamos propiedad para hacer arrastrable el div
            divContenedorDeBandera.draggable = true;
            // agregamos escuchador de eventos drag
            divContenedorDeBandera.addEventListener("dragend", finalizarArrastre);
        } else {
            divContenedorDeBandera.classList.add("qualified");
        }
    } else {
        divContenedorDeBandera.addEventListener("dragenter", manejarArrastreEntrante);
        divContenedorDeBandera.addEventListener("dragleave", manejarArrastreSaliente);
        divContenedorDeBandera.addEventListener("dragover", manejarArrastre);
        divContenedorDeBandera.addEventListener("drop", recibirElemento);
    }
    // agregamos escucha de eventos click
    divContenedorDeBandera.addEventListener("click", manejarClick);
    // metemos la img en el div
    divContenedorDeBandera.appendChild(imgBandera);
    return divContenedorDeBandera;
};

function refrescarContenedorDeBandera(id, equipo) {
    const nuevoContenedor = renderizarContenedorDeBandera({
        ...equipo,
        id
    });
    const contenedor = document.getElementById(id);
    contenedor.parentElement.replaceChild(nuevoContenedor, contenedor);
    const fase = nuevoContenedor.parentElement.parentElement.id;
    if (fase === "Final" || fase === "Tercer lugar") {
        refrescarBotonesGanadores(window.state.torneo.fases.find(
            _fase => _fase.nombre === fase
        ));
    }
    localStorage.setItem("state", JSON.stringify(window.state));
};

function renderizarBotonGanador(fase, visita=false) {
    const button = document.createElement("button");
    button.setAttribute("id", `${fase.nombre}-${visita ? 1 : 0}`);
    button.classList.add("boton-ganador");
    const img = document.createElement("img");
    // obtener el equipo
    const indiceFase = window.state.torneo.fases.findIndex(
        _fase => _fase.nombre === fase.nombre
    );
    const equipo = window.state.torneo.fases[indiceFase]
        .contenedores[0].equipos[
            visita ? 1 : 0
        ];
    if (equipo.bandera === "tbd") {
        img.src = `./assets/gray-star.png`;
    } else {
        if (fase.nombre === "Final" && window.state.campeon) {
            if (window.state.campeon.id == equipo.id) {
                // este es el boton del campeon, trofeo oro
                img.src = `./assets/oro.png`;
            } else {
                //este es el subcampeon, plata
                img.src = `./assets/plata.png`;
            }
        } else if (
            fase.nombre === "Tercer lugar" && 
            window.state.tercerLugar
        ) {
            if (window.state.tercerLugar.id == equipo.id) {
                // este es el tercer lugar, bronze
                img.src = `./assets/bronze.png`;
            } else {
                // cuarto lugar, medallita
                img.src = `/assets/silver-star.png`;
            }
        } else {
            // boton activo
            img.src = `./assets/star.png`;
            button.addEventListener("click", (event) => {
                if (_faseLista(fase)) {
                    window.state[
                        fase.nombre === "Final"
                            ? "campeon"
                            : "tercerLugar"
                    ] = equipo;
                    refrescarBotonesGanadores(fase);
                }
            });
            button.style.cursor = "pointer";
        }
    }
    img.classList.add("icono");
    button.appendChild(img);
    return button;
};

function _faseLista(fase) {
    for (let contenedor of fase.contenedores) {
        for (let equipo of contenedor.equipos) {
            if (equipo.bandera === "tbd") return false;
        }
    }
    return true;
};

function refrescarBotonesGanadores(fase) {
    const botones = document.querySelectorAll(`button[id^='${fase.nombre}']`);
    for (let boton of botones) {
        const _boton = renderizarBotonGanador(
            fase,
            boton.id.split("-")[1] == 0
                ? false
                : true
        );
        boton.parentElement.replaceChild(_boton, boton);
    }
};