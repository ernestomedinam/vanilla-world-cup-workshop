import React, { useMemo, useCallback } from "react";
import { useAppDispatch, useAppState } from "../contexts/AppContext";

export const BotonGanador = ({
    fase,
    visita=false
}) => {
    const state = useAppState();
    const dispatch = useAppDispatch();
    const manejarClick = useCallback((event) => {
        if (fase.nombre === "Final" && state.campeon) return event.preventDefault();
        if (fase.nombre === "Tercer lugar" && state.tercerLugar) return event.preventDefault();
        dispatch({
            type: fase.nombre === "Final"
                ? "SET_CAMPEON"
                : "SET_TERCER",
            payload: fase.contenedores[0].equipos[visita
                ? 1
                : 0
            ]
        });
    }, [fase, state]);
    const equipo = useMemo(() => {
        if (fase.nombre === "Final" || fase.nombre === "Tercer lugar") {
            if (visita) return fase.contenedores[0].equipos[1];
            return fase.contenedores[0].equipos[0]
        }
        return;
    }, [fase, visita]);
    const src = useMemo(() => {
        if (!equipo) return;
        if (equipo.bandera === "tbd") return "gray-star.png";
        if (fase.nombre === "Final" && state.campeon) {
            if (state.campeon.id == equipo.id) return `oro.png`;
            return `plata.png`;
        }
        if (fase.nombre === "Tercer lugar" && state.tercerLugar) {
            if (state.tercerLugar.id == equipo.id) return `bronze.png`;
            return `silver-star.png`
        }
        return "star.png";
    }, [equipo, fase, state.campeon, state.tercerLugar]);
    return (
        <button
            onClick={manejarClick}
            className="boton-ganador">
            <img
                src={src}
                className="icono" />
        </button>
    );
};
