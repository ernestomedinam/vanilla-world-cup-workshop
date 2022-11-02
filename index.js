// const torneo = require("./worldCup");

document.onreadystatechange = () => {
    const cancha = document.querySelector("#cancha");
    if (document.readyState === "interactive") {
        // cambiamos la opacidad de la cancha a 0 desde el inicio
        cancha.style.opacity = 0;
    }
    if (document.readyState === "complete") {
        // capturamos las fases
        const fases = window.state.torneo.fases;
        // las ordenamos
        fases.reverse();
        // agregamos la propiedad transición a la cancha
        cancha.style.transition = "opacity";
        cancha.style.transitionTimingFunction = "ease-in";
        cancha.style.transitionDuration = "1s";
        cancha.style.transitionDelay = "1s";
        // para cada fase queremos construir un contenedor
        // y agregarlo a la cancha
        for (let fase of fases) {
            const divFase = renderizarFase(fase);
            cancha.appendChild(divFase);
        }
        // hacemos la cancha visible
        cancha.style.opacity = 1;
    }
};

function renderizarFase(fase) {
    // construimos el div
    const divFase = document.createElement("div");
    // le agregamos sus clases
    divFase.classList.add("fase");
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
    // construir el img
    const imgBandera = document.createElement("img");
    // le agregamos su clases
    imgBandera.classList.add("bandera");
    // le agregamos el src (source)
    const src = `./assets/${equipo.bandera}.png`;
    imgBandera.src = src;
    imgBandera.alt = `bandera de ${equipo.nombre}`;
    // metemos la img en el div
    divContenedorDeBandera.appendChild(imgBandera);
    return divContenedorDeBandera;
};