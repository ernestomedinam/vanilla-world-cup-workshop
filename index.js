const nombre = "Qatar";

const equipo = {
    nombre: "Qatar",
    bandera: "qat",
    pasaDeFase: false,
};

const contenedor = {
    cantidadEquipos: 4,
    equipos: [{ // cada contenedor posee una lista de equipos
        nombre: "Qatar",
        bandera: "qat",
        pasaDeFase: false,
    }, {
        nombre: "Ecuador",
        bandera: "ecu",
        pasaDeFase: false,
    }, {
        nombre: "Senegal",
        bandera: "sen",
        pasaDeFase: false,
    }, {
        nombre: "Países bajos",
        bandera: "ned",
        pasaDeFase: false,
    }]
}

const fase = {
    nombre: "Fase de grupos",
    contenedores: [{ // cantidad de contenedores de banderas de la fase
        cantidadEquipos: 4,
        equipos: [{ // cada contenedor posee una lista de equipos
            nombre: "Qatar",
            bandera: "qat",
            pasaDeFase: false,
        }, {
            nombre: "Ecuador",
            bandera: "ecu",
            pasaDeFase: false,
        }, {
            nombre: "Senegal",
            bandera: "sen",
            pasaDeFase: false,
        }, {
            nombre: "Países bajos",
            bandera: "ned",
            pasaDeFase: false,
        }]
    }, // aquí vendrían los demás contenedores de la fase
    ]
};

const torneo = {
    nombre: "Copa del Mundo Qatar 2022",
    fases: [{ // lista con todas las fases del torneo
        nombre: "Fase de grupos",
        contenedores: [{ // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Qatar",
                bandera: "qat",
                pasaDeFase: false,
            }, {
                nombre: "Ecuador",
                bandera: "ecu",
                pasaDeFase: false,
            }, {
                nombre: "Senegal",
                bandera: "sen",
                pasaDeFase: false,
            }, {
                nombre: "Países bajos",
                bandera: "ned",
                pasaDeFase: false,
            }]
        }, // aquí vendrían los demás contenedores de la fase
    ]},
        // aquí vendrían las demás fases
    ]
};
