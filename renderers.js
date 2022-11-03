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
    // para cada contenedor de banderas creamos un div
    // con las banderas de los equipos
    for (let contenedor of contenedores) {
        const contenedorDeBanderas = renderizarContenedorDeBanderas(
            contenedor,
            fasesFinales
        );
        divFase.appendChild(contenedorDeBanderas);
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
};