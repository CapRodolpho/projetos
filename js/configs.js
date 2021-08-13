
const statesAndColors = [
    'Previsto', 'rgb(255,255,255)',
    'Digitalização', 'rgb(252,141,89)',
    'Reambulação', 'rgb(254,224,139)',
    'Validação', 'rgb(255,255,191)',
    'Edição', 'rgb(217,239,139)',
    'Disseminação', 'rgb(145,207,96)',
    'Vetorização', 'rgb(222,119,174)',
    'Avaliação', 'rgb(175,141,195)',
    'Generalização', 'rgb(224,243,248)',
    'Fototriangulação', 'rgb(44,127,184)',
    'Restituição', 'rgb(186,186,186)',
    'Processamento Digital de Imagens', 'rgb(215,48,39)',
    'Medição de pontos de controle', 'rgb(0,0,0)',
    'Geração de ortoimagem', 'rgb(128,205,193)',
    'Geração de MDE', 'rgb(191,129,45)',
    'Levantamento topográfico', 'rgb(37,52,148)'
]

const legends = {
    'generalizacao-cartografica': [
        'Previsto', 'rgb(255,255,255)',
        'Generalização', 'rgb(224,243,248)',
        'Validação', 'rgb(255,255,191)',
        'Edição', 'rgb(217,239,139)',
        'Disseminação', 'rgb(145,207,96)'
    ],
    'plano-desenvolvimento': [
        'Previsto', 'rgb(255,255,255)',
        'Processamento Digital de Imagens', 'rgb(215,48,39)',
        'Digitalização', 'rgb(252,141,89)',
        'Validação', 'rgb(255,255,191)',
        'Edição', 'rgb(217,239,139)',
        'Disseminação', 'rgb(145,207,96)'
    ],
    'mapeamento-interesse-da-forca': [
        'Previsto', 'rgb(255,255,255)',
        'Processamento Digital de Imagens', 'rgb(215,48,39)',
        'Digitalização', 'rgb(252,141,89)',
        'Validação', 'rgb(255,255,191)',
        'Edição', 'rgb(217,239,139)',
        'Disseminação', 'rgb(145,207,96)'
    ],
    'sisfron': [
        'Previsto', 'rgb(255,255,255)',
        'Processamento Digital de Imagens', 'rgb(215,48,39)',
        'Digitalização', 'rgb(252,141,89)',
        'Validação', 'rgb(255,255,191)',
        'Edição', 'rgb(217,239,139)',
        'Disseminação', 'rgb(145,207,96)'
    ],
    'outros': [
        'Disseminação', 'rgb(145,207,96)'
    ]
}

const chapters = {
    'generalizacao-cartografica-50k': {
        zoom: {
            center: [-52.22622678432623, -27.137993330284196],
            zoom: 5.8,
            speed: 0.2
        },
        legend: legends['generalizacao-cartografica'],
        styles: [
            {
                'id': 'generalizacao-cartografica-50k-fill',
                'source': 'generalizacao-cartografica-50k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['generalizacao-cartografica'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'generalizacao-cartografica-50k-border',
                'source': 'generalizacao-cartografica-50k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'generalizacao-cartografica-100k': {
        zoom: {

            center: [-52.92679195401877, -27.156225041901187],
            zoom: 5.9,
            speed: 0.1
        },
        legend: legends['generalizacao-cartografica'],
        styles: [
            {
                'id': 'generalizacao-cartografica-100k-fill',
                'source': 'generalizacao-cartografica-100k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['generalizacao-cartografica'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'generalizacao-cartografica-100k-border',
                'source': 'generalizacao-cartografica-100k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'plano-desenvolvimento': {
        zoom: {
            center: [-54.703820489471184, -30.703135363313734],
            zoom: 6.6,
            speed: 0.4
        },
        legend: legends['plano-desenvolvimento'],
        styles: [
            {
                'id': 'plano-desenvolvimento-fill',
                'source': 'plano-desenvolvimento',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['plano-desenvolvimento'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'plano-desenvolvimento-border',
                'source': 'plano-desenvolvimento',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-25k': {
        zoom: {

            center: [-54.586648393294354, -28.581908610413116],
            zoom: 5.46,
            speed: 0.4
        },
        legend: legends['mapeamento-interesse-da-forca'],
        styles: [
            {
                'id': 'mapeamento-interesse-da-forca-25k-fill',
                'source': 'mapeamento-interesse-da-forca-25k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['mapeamento-interesse-da-forca'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'mapeamento-interesse-da-forca-25k-border',
                'source': 'mapeamento-interesse-da-forca-25k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-50k': {
        zoom: {

            center: [-53.06753045861967, -27.55097306338611],
            zoom: 6.07,
            speed: 0.1
        },
        legend: legends['mapeamento-interesse-da-forca'],
        styles: [
            {
                'id': 'mapeamento-interesse-da-forca-50k-fill',
                'source': 'mapeamento-interesse-da-forca-50k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['mapeamento-interesse-da-forca'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'mapeamento-interesse-da-forca-50k-border',
                'source': 'mapeamento-interesse-da-forca-50k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-100k': {
        zoom: {

            center: [-52.4209731466492, -27.58217773873597],
            zoom: 6.12,
            speed: 0.1
        },
        legend: legends['mapeamento-interesse-da-forca'],
        styles: [
            {
                'id': 'mapeamento-interesse-da-forca-100k-fill',
                'source': 'mapeamento-interesse-da-forca-100k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['mapeamento-interesse-da-forca'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'mapeamento-interesse-da-forca-100k-border',
                'source': 'mapeamento-interesse-da-forca-100k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-250k': {
        zoom: {

            center: [-53.050902075615795, -27.576913170912206],
            zoom: 6.12,
            speed: 0.1
        },
        legend: legends['mapeamento-interesse-da-forca'],
        styles: [
            {
                'id': 'mapeamento-interesse-da-forca-250k-fill',
                'source': 'mapeamento-interesse-da-forca-250k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['mapeamento-interesse-da-forca'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'mapeamento-interesse-da-forca-250k-border',
                'source': 'mapeamento-interesse-da-forca-250k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'sisfron-ms': {
        zoom: {

            center: [-57.481443677737275, -20.63317130738001],
            zoom: 8.24,
            speed: 0.4
        },
        legend: legends['sisfron'],
        styles: [
            {
                'id': 'sisfron-ms-fill',
                'source': 'sisfron-ms',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['sisfron'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'sisfron-ms-border',
                'source': 'sisfron-ms',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'sisfron-rr': {
        zoom: {

            center: [-61.84761897980104, 3.8584791939794343],
            zoom: 7.51,
            speed: 0.9
        },
        legend: legends['sisfron'],
        styles: [
            {
                'id': 'sisfron-rr-fill',
                'source': 'sisfron-rr',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['sisfron'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'sisfron-rr-border',
                'source': 'sisfron-rr',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'rio-grande-do-sul': {
        zoom: {

            center: [-51.84956962370279, -30.4171421915292],
            zoom: 7.35,
            speed: 0.9
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'rio-grande-do-sul-fill',
                'source': 'rio-grande-do-sul',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'rio-grande-do-sul-border',
                'source': 'rio-grande-do-sul',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'uraricoera': {
        zoom: {

            center: [-60.980116513115775, 3.0402035676133465],
            zoom: 7.27,
            speed: 0.9
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'uraricoera-fill',
                'source': 'uraricoera',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'uraricoera-border',
                'source': 'uraricoera',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'campo-instrucao-25k': {
        zoom: {

            center: [-52.56447005601535, -28.464887988160896],
            zoom: 6.69,
            speed: 0.9
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'campo-instrucao-25k-fill',
                'source': 'campo-instrucao-25k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'campo-instrucao-25k-border',
                'source': 'campo-instrucao-25k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'campo-instrucao-50k': {
        zoom: {

            center: [-52.56447005601535, -28.464887988160896],
            zoom: 6.69,
            speed: 0.1
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'campo-instrucao-50k-fill',
                'source': 'campo-instrucao-50k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'campo-instrucao-50k-border',
                'source': 'campo-instrucao-50k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'santa-catarina-25k': {
        zoom: {

            center: [-50.950083965560566, -27.33157771494986],
            zoom: 7.68,
            speed: 0.1
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'santa-catarina-25k-fill',
                'source': 'santa-catarina-25k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'santa-catarina-25k-border',
                'source': 'santa-catarina-25k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'santa-catarina-50k': {
        zoom: {

            center: [-50.950083965560566, -27.33157771494986],
            zoom: 7.68,
            speed: 0.1
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'santa-catarina-50k-fill',
                'source': 'santa-catarina-50k',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'santa-catarina-50k-border',
                'source': 'santa-catarina-50k',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'radiografia-am': {
        zoom: {

            center: [-63.37555374085974, -2.7845044058285993],
            zoom: 5.07,
            speed: 0.9
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'radiografia-am-fill',
                'source': 'radiografia-am',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['outros'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'radiografia-am-border',
                'source': 'radiografia-am',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    },
    'sisfron-pr': {
        zoom: {

            center: [-53.983634785859465, -23.779145473689596],
            zoom: 8.24,
            speed: 0.9
        },
        legend: legends['outros'],
        styles: [
            {
                'id': 'sisfron-pr-fill',
                'source': 'sisfron-pr',
                'type': 'fill',
                'layout': {},
                'paint': {
                    'fill-color': ['match', ['string', ['get', 'situacao']], ...legends['sisfron'], '#AAAAAA'],
                    'fill-opacity': 0.9
                }
            },
            {
                'id': 'sisfron-pr-border',
                'source': 'sisfron-pr',
                'type': 'line',
                'layout': {},
                'paint': {
                    'line-color': '#050505',
                    'line-width': 0.5
                }
            }
        ]
    }

};