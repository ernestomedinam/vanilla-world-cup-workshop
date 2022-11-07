const initialContextValue = {
    torneo: undefined,
    campeon: undefined,
    tercerLugar: undefined
};

export const initContextReducer = (initialValue) => {
    return Object.assign(
        initialContextValue,
        initialValue
    );
};

export const appContextReducer = (state, action) => {
    switch(action.type) {
        case "SET_TORNEO":
            return {
                ...state,
                torneo: action.payload
            };
        case "SET_CAMPEON":
            return {
                ...state,
                campeon: action.payload
            };
        case "SET_TERCER":
            return {
                ...state,
                tercerLugar: action.payload
            };
        case "REMOVE_CAMPEON":
            return {
                ...state,
                campeon: undefined
            };
        case "REMOVE_TERCER":
            return {
                ...state,
                tercerLugar: undefined
            };
        case "ACTUALIZAR EQUIPO":
            return {
                ...state,
                fases: state.fases.map((fase, indiceFase) => {
                    if (indiceFase !== action.payload.indiceFase) return fase;
                    const faseActualizada = {
                        ...fase,
                        contenedores: fase.contenedores.map((contenedor) => {
                            const contenedorActualizado = {
                                ...contenedor,
                                equipos: contenedor.equipos.map((equipo) => {
                                    if (equipo.bandera !== action.payload.equipo.bandera) return equipo;
                                    return {
                                        ...equipo,
                                        nombre: action.payload.equipo.nombre,
                                        bandera: action.payload.equipo.bandera,
                                        pasaDeFase: action.payload.equipo.pasaDeFase || false
                                    };
                                })
                            };
                            return contenedorActualizado;
                        })
                    };
                    return faseActualizada;
                })
            };
    };
};
