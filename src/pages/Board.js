import React, { useState } from "react";
import { Fase } from "../components/Fase";
import { useAppState } from "../contexts/AppContext";

const Board = (props) => {
    const state = useAppState();
    return (
        <section id="cancha" className="linea-campo">
            {/* meta izquierda */}
            <div className="meta meta-izquierda">
                <div className="medialuna medialuna-izquierda linea-campo"></div>
            </div>
            <div className="linea-campo meta meta-izquierda" style={{borderLeft: "none"}}></div>
            {/* mediocampo */}
            <div className="medialuna-central linea-campo"></div>
            <div className="mediocampo linea-campo"></div>
            {/* meta derecha */}
            <div className="meta meta-derecha">
                <div className="medialuna medialuna-derecha linea-campo"></div>
            </div>
            <div className="linea-campo meta meta-derecha" style={{borderRight: "none"}}></div>
            {state.torneo.fases.map((fase, indice) => (
                <Fase
                    key={indice} 
                    fase={fase} />
            ))}
        </section>
    )
};

export default Board;