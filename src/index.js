import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "./contexts/AppContext";
import Board from "./pages/Board";
import "./styles.css";

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
    <AppContextProvider>
        <Board />
    </AppContextProvider>
);
