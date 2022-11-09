import React from "react";
import { ContenedorDeBandera } from "./ContenedorDeBandera";

export const ContenedorDeBanderas = ({
    contenedor,
    indiceFase,
    faseFinal
}) => {
    return (
        <div className={`contenedor-banderas ${faseFinal
            ? "w-auto"
            : ""}`}>
            {contenedor.equipos.map((equipo, indice) => (
                <ContenedorDeBandera 
                    key={indice}
                    indiceFase={indiceFase}
                    equipo={equipo} />
            ))}
        </div>
    );
};
