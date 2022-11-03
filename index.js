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
