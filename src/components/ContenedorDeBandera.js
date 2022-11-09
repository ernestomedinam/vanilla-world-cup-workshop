import React, { useCallback, useState } from "react";
import { useAppDispatch, useAppState } from "../contexts/AppContext";

export const ContenedorDeBandera = ({
    equipo,
    indiceFase
}) => {
    const state = useAppState();
    const dispatch = useAppDispatch();
    const [valido, setValido] = useState();
    const vecinoIndeterminado = useCallback(() => {
        const fase = state.torneo.fases[indiceFase];
        const contenedor = fase.contenedores.find(
            contenedor => {
                let found = false;
                for (let _equipo of contenedor.equipos) {
                    if (_equipo.id == equipo.id) {
                        found = true;
                    }
                }
                return found;
            }
        );
        for (let _equipo of contenedor.equipos) {
            if (_equipo.bandera === "tbd") return true;
        }
        return false;
    }, [indiceFase, equipo, state.torneo]);
    const vecinoCalificado = useCallback((times=1) => {
        const fase = state.torneo.fases[indiceFase];
        const contenedor = fase.contenedores.find(
            contenedor => {
                let found = false;
                for (let _equipo of contenedor.equipos) {
                    if (_equipo.id == equipo.id) {
                        found = true;
                    }
                }
                return found;
            }
        );
        let found = 0;
        for (let _equipo of contenedor.equipos) {
            if (_equipo.pasaDeFase) found += 1;
        }
        return found == times;
    }, [indiceFase, equipo, state.torneo]);
    const iniciarArrastre = useCallback((event) => {
        if (
            equipo.pasaDeFase || 
            equipo.bandera === "tbd" || 
            indiceFase < 2 ||
            vecinoIndeterminado()
        ) {
            localStorage.setItem("equipo", undefined);
            localStorage.setItem("indiceFase", undefined);
            return event.preventDefault();
        }
        if (indiceFase == 4 || indiceFase == 3) {
            if (vecinoCalificado()) {
                localStorage.setItem("equipo", undefined);
                localStorage.setItem("indiceFase", undefined);
                return event.preventDefault();
            }
        }
        if (indiceFase == 5 && vecinoCalificado(2)) {
            localStorage.setItem("equipo", undefined);
            localStorage.setItem("indiceFase", undefined);
            return event.preventDefault();
        }
        localStorage.setItem("equipo", JSON.stringify(equipo));
        localStorage.setItem("indiceFase", indiceFase);
    }, [equipo, indiceFase, vecinoIndeterminado]);
    const manejarArrastreEntrante = useCallback((event) => {
        if (equipo.bandera !== "tbd") return event.preventDefault();
        if (equipo.pasaDeFase) return event.preventDefault();
        const indiceOrigen = localStorage.getItem("indiceFase");
        if (indiceOrigen - indiceFase != 1 && indiceOrigen != 2) return event.preventDefault();
        setValido(true);
    }, [equipo, indiceFase]);
    const manejarArrastre = useCallback((event) => {
        event.preventDefault();
    }, []);
    const manejarArrastreSaliente = useCallback((event) => {
        setValido((prev) => prev ? undefined : prev);
    }, []);
    const recibirElemento = useCallback((event) => {
        event.preventDefault();
        const indiceOrigen = localStorage.getItem("indiceFase");
        if (indiceOrigen - indiceFase != 1 && indiceOrigen != 2) return event.preventDefault();
        console.warn("RECIBI");
        const _equipo = JSON.parse(localStorage.getItem("equipo"));
        dispatch({
            type: "ACTUALIZAR_EQUIPO",
            payload: {
                indiceFase: indiceFase,
                equipo: {
                    ..._equipo,
                    id: equipo.id
                }
            }
        });
        setValido((prev) => prev ? undefined : prev);
        localStorage.setItem("soltar", true);
    }, [indiceFase, equipo]);
    const finalizarArrastre = useCallback((event) => {
        event.preventDefault();
        const soltar = localStorage.getItem("soltar");
        console.log(soltar);
        if (soltar === null) return;
        console.warn("SOLTE");
        dispatch({
            type: "ACTUALIZAR_EQUIPO",
            payload: {
                indiceFase: indiceFase,
                equipo: {
                    ...equipo,
                    pasaDeFase: true
                }
            }
        });
        localStorage.clear();
    }, [equipo, indiceFase]);
    const manejarClick = useCallback((event) => {
        if (equipo.pasaDeFase) return event.preventDefault();
        if (state.torneo.fases[indiceFase].nombre === "Fase de grupos") return event.preventDefault();
        dispatch({
            type: "ACTUALIZAR_EQUIPO",
            payload: {
                indiceFase,
                equipo: {
                    ...equipo,
                    nombre: "Por decidir",
                    bandera: "tbd",
                    pasaDeFase: false
                }
            }
        });
        // encontrar equipo en fase previa
        let _equipo;
        let indiceFaseAnterior = parseInt(indiceFase) + 1;
        if (indiceFase == 0) indiceFaseAnterior += 1;
        console.log(indiceFase, indiceFaseAnterior);
        for (let contenedor of state.torneo.fases[indiceFaseAnterior].contenedores) {
            for (let eq of contenedor.equipos) {
                if (equipo.bandera === eq.bandera) {
                    _equipo = eq;
                }
            }
        }
        dispatch({
            type: "ACTUALIZAR_EQUIPO",
            payload: {
                indiceFase: indiceFaseAnterior,
                equipo: {
                    ..._equipo,
                    pasaDeFase: false
                }
            }
        });
        if (indiceFase == 0) dispatch({
            type: "REMOVE_CAMPEON"
        });
        if (indiceFase == 1) dispatch({
            type: "REMOVE_TERCER"
        });
    }, [equipo, indiceFase, state.torneo]);
    return (
        <div 
            onDragStart={iniciarArrastre}
            onDragEnter={manejarArrastreEntrante}
            onDragOver={manejarArrastre}
            onDragLeave={manejarArrastreSaliente}
            onDrop={recibirElemento}
            onDragEnd={finalizarArrastre}
            onClick={manejarClick}
            draggable={!equipo.pasaDeFase}
            className={`contenedor-bandera ${equipo.pasaDeFase
                ? "qualified"
                : ""}`}>
            <img 
                className={`bandera ${valido
                    ? "drag-over"
                    : ""}`}
                src={`${equipo.bandera}.png`}
                alt={`bandera de ${equipo.nombre}`} />
        </div>
    );
};
