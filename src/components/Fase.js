import React, { useState } from "react";
import { BotonGanador } from "./BotonGanador";
import { ContenedorDeBanderas } from "./ContenedorDeBanderas";

export const Fase = ({ fase, indiceFase }) => {
    const [faseFinal, setFaseFinal] = useState(
        fase.contenedores.length < 8
    );
    return (
        <div className={`fase ${faseFinal
            ? "justify-center fases-finales"
            : ""}`}>
            {faseFinal && <BotonGanador fase={fase} />}
            {fase.contenedores.map((contenedor, indice) => (
                <ContenedorDeBanderas
                    key={indice}
                    contenedor={contenedor}
                    indiceFase={indiceFase}
                    faseFinal={faseFinal} />
            ))}
            {faseFinal && <BotonGanador fase={fase} visita />}
        </div>
    );
};
