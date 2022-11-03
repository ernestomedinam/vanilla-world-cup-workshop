const torneo = {
    nombre: "Copa del Mundo Qatar 2022",
    fases: [{ // lista con todas las fases del torneo
        nombre: "Fase de grupos",
        cantidadContenedores: 8,
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
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Inglaterra",
                bandera: "eng",
                pasaDeFase: false,
            }, {
                nombre: "Irán",
                bandera: "irn",
                pasaDeFase: false,
            }, {
                nombre: "Estados Unidos",
                bandera: "usa",
                pasaDeFase: false,
            }, {
                nombre: "Gales",
                bandera: "wal",
                pasaDeFase: false,
            }]
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Argentina",
                bandera: "arg",
                pasaDeFase: false,
            }, {
                nombre: "Arabia Saudita",
                bandera: "ksa",
                pasaDeFase: false,
            }, {
                nombre: "México",
                bandera: "mex",
                pasaDeFase: false,
            }, {
                nombre: "Polonia",
                bandera: "pol",
                pasaDeFase: false,
            }]
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Francia",
                bandera: "fra",
                pasaDeFase: false,
            }, {
                nombre: "Dinamarca",
                bandera: "den",
                pasaDeFase: false,
            }, {
                nombre: "Túnez",
                bandera: "tun",
                pasaDeFase: false,
            }, {
                nombre: "Australia",
                bandera: "aus",
                pasaDeFase: false,
            }]
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "España",
                bandera: "esp",
                pasaDeFase: false,
            }, {
                nombre: "Alemania",
                bandera: "ger",
                pasaDeFase: false,
            }, {
                nombre: "Japón",
                bandera: "jpn",
                pasaDeFase: false,
            }, {
                nombre: "Costa Rica",
                bandera: "crc",
                pasaDeFase: false,
            }]
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Bélgica",
                bandera: "bel",
                pasaDeFase: false,
            }, {
                nombre: "Canadá",
                bandera: "can",
                pasaDeFase: false,
            }, {
                nombre: "Marruecos",
                bandera: "mar",
                pasaDeFase: false,
            }, {
                nombre: "Croacia",
                bandera: "cro",
                pasaDeFase: false,
            }]
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Brasil",
                bandera: "bra",
                pasaDeFase: false,
            }, {
                nombre: "Serbia",
                bandera: "srb",
                pasaDeFase: false,
            }, {
                nombre: "Suiza",
                bandera: "sui",
                pasaDeFase: false,
            }, {
                nombre: "Camerún",
                bandera: "cmr",
                pasaDeFase: false,
            }]
        }, { // cantidad de contenedores de banderas de la fase
            cantidadEquipos: 4,
            equipos: [{ // cada contenedor posee una lista de equipos
                nombre: "Portugal",
                bandera: "por",
                pasaDeFase: false,
            }, {
                nombre: "Ghana",
                bandera: "gha",
                pasaDeFase: false,
            }, {
                nombre: "Uruguay",
                bandera: "uru",
                pasaDeFase: false,
            }, {
                nombre: "República de Corea",
                bandera: "kor",
                pasaDeFase: false,
            }]
        }
    ]}, {
        nombre: "16vos de Final",
        cantidadContenedores: 8,
        contenedores: [{
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }]
    }, {
        nombre: "8vos de Final",
        cantidadContenedores: 4,
        contenedores: [{
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }]
    }, {
        nombre: "Semifinales",
        cantidadContenedores: 2,
        contenedores: [{
            cantidadEquipos: 2,
            equipos: []
        }, {
            cantidadEquipos: 2,
            equipos: []
        }] 
    }, {
        nombre: "Tercer lugar",
        cantidadContenedores: 1,
        contenedores: [{
            cantidadEquipos: 2,
            equipos: []
        }] 
    }, {
        nombre: "Final",
        cantidadContenedores: 1,
        contenedores: [{
            cantidadEquipos: 2,
            equipos: []
        }] 
    }]
};

function completarTorneo(_torneo) {
    // para cada fase 
    for (let fase of _torneo.fases) {
        // para cada contenedor
        for (let contenedor of fase.contenedores) {
            // si hay menos equipos que cantidadEquipos
            if (contenedor.cantidadEquipos > contenedor.equipos.length) {
                // agregamos cuantos equipos TBD sean necesarios
                const tbd = {
                    nombre: "Por decidir",
                    bandera: "tbd",
                    pasaDeFase: false
                }
                const veces = contenedor.cantidadEquipos - contenedor.equipos.length;
                for (
                    let vez = 0; 
                    vez < veces;
                    vez++
                ) {
                    contenedor.equipos.push(tbd);
                }
            }
        }
    }
    let contenedorId = 1;
    // para cada fase 
    for (let fase of _torneo.fases) {
        // para cada contenedor 
        for (let contenedor of fase.contenedores) {
            // para cada equipo
            const equipos = [];
            for (let equipo of contenedor.equipos) {
                equipos.push({
                    ...equipo,
                    id: contenedorId
                });
                contenedorId += 1; 
            }
            contenedor.equipos = [...equipos];
        }
    }
    return _torneo;
}

window.state = {
    torneo: completarTorneo(torneo),
    arrastrar: {
        id: undefined,
        valido: false,
        indiceFase: undefined,
    },
    soltar: {
        id: undefined,
        valido: false
    }
};