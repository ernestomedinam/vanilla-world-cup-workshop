import React from "react";

export const ContenedorDeBandera = ({
    equipo
}) => {
    return (
        <div 
            onDragStart={e => {}}
            onDragEnter={e => {}}
            onDragOver={e => {}}
            onDragLeave={e => {}}
            onDrop={e => {}}
            onDragEnd={e => {}}
            onClick={e => {}}
            draggable={!equipo.pasaDeFase}
            className="contenedor-bandera">
            <img 
                className={`bandera ${equipo.pasaDeFase
                    ? "qualified"
                    : ""}`}
                src={`${equipo.bandera}.png`}
                alt={`bandera de ${equipo.nombre}`} />
        </div>
    );
};
