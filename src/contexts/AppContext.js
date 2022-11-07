import React, { useContext, useReducer, useEffect } from "react";
import { torneoCompleto } from "../../worldCup";
import { appContextReducer, initContextReducer } from "./appContextRedulcer";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(
        appContextReducer,
        {},
        initContextReducer
    );
    useEffect(() => {
        let torneo = torneoCompleto;
        torneo.fases.reverse();
        const stored = localStorage.getItem("state");
        if (stored) {
            torneo = JSON.parse(stored);
        }
        dispatch({
            type: "SET_TORNEO",
            payload: torneo
        });
    }, [torneoCompleto]);
    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                {state.torneo && props.children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    );
};

export const useAppState = (props) => {
    const context = useContext(AppStateContext);
    if (!context) throw new Error("state context out of bounds")
    return context;
};

export const useAppDispatch = (props) => {
    const context = useContext(AppDispatchContext);
    if (!context) throw new Error("dispatch context out of bounds")
    return context;
};
