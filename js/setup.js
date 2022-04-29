
const SUBTITLE_STATES = [
    {
        id: 1,
        name: 'Previsto',
        color: 'rgb(255,255,255)'
    },
    {
        id: 2,
        name: 'Digitalização',
        color: 'rgb(252,141,89)'
    },
    {
        id: 3,
        name: 'Disseminação',
        color: 'rgb(145,207,96)'
    },
    {
        id: 4,
        name: 'Reambulação',
        color: 'rgb(254,224,139)'
    },
    {
        id: 5,
        name: 'Validação',
        color: 'rgb(255,255,191)'
    },
    {
        id: 6,
        name: 'Edição',
        color: 'rgb(217,239,139)'
    },
    {
        id: 7,
        name: 'Vetorização',
        color: 'rgb(222,119,174)'
    },
    {
        id: 8,
        name: 'Avaliação',
        color: 'rgb(175,141,195)'
    },
    {
        id: 9,
        name: 'Generalização',
        color: 'rgb(224,243,248)'
    },
    {
        id: 10,
        name: 'Fototriangulação',
        color: 'rgb(44,127,184)'
    },
    {
        id: 11,
        name: 'Restituição',
        color: 'rgb(186,186,186)'
    },
    {
        id: 12,
        name: 'Processamento Digital de Imagens',
        color: 'rgb(215,48,39)'
    },
    {
        id: 13,
        name: 'Medição de pontos de controle',
        color: 'rgb(0,0,0)'
    },
    {
        id: 14,
        name: 'Geração de ortoimagem',
        color: 'rgb(128,205,193)'
    },
    {
        id: 15,
        name: 'Geração de MDE',
        color: 'rgb(191,129,45)'
    },
    {
        id: 16,
        name: 'Levantamento topográfico',
        color: 'rgb(37,52,148)'
    }
]

const INIT_ZOOM = {
    center: [-53.99235736195203, -27.426307807866984],
    zoom: 4.83
}

var PROJECTS = {
    'copa-10k': {
        title: 'Copa do Mundo 1:10.000',
        legend: [3],
        description: `O objetivo do presente projeto foi elaborar dados geoespaciais na escala 1:10.000 para uso no planejamento e execução das equipes responsáveis pela segurança dos jogos da Copa do Mundo 2014, bem como da Copa das Confederações 2013.`,
        lotes: [
            {
                name: 'copa-10k',
                subtitle: '',
                zoom: [
                    [-43.88633, -23.14725],
                    [-42.8429, -22.5928]
                ],
                styles: [
                    {
                        'id': 'copa-10k-fill',
                        'source': 'copa-10k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'copa-10k-border',
                        'source': 'copa-10k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'copa-10k-text',
                        'source': 'copa-10k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    
    'copa-25k': {
        title: 'Copa do Mundo 1:25.000',
        legend: [3],
        description: `O objetivo do presente projeto foi elaborar dados geoespaciais na escala 1:25.000 para uso no planejamento e execução das equipes responsáveis pela segurança dos jogos da Copa do Mundo 2014, bem como da Copa das Confederações 2013.`,
        lotes: [
            {
                name: 'copa-25k',
                subtitle: '',
                zoom: [
                    [-44.4397, -23.2562],
                    [-42.8547, -22.4254]
                ],
                styles: [
                    {
                        'id': 'copa-25k-fill',
                        'source': 'copa-25k',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'copa-25k-border',
                        'source': 'copa-25k',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'copa-25k-text',
                        'source': 'copa-25k',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'bahia': {
        title: 'Projeto Bahia',
        legend: [3],
        description: `O objetivo do presente projeto foi fornecer ao Estado da Bahia dados geoespaciais com acurácia planialtimétrica que atendam as necessidades de planejamento, fiscalização e execução de diversas atividades, como meio ambiente, agronegócios, monitoramento e abastecimento de água, saneamento, energia elétrica, transporte, segurança pública, defesa civil, administração pública e base territorial. Além disso, teve como objetivo a produção de dados geoespaciais para a cartografia sistemática nacional, missão de responsabilidade da Diretoria de Serviço Geográfico.`,
        lotes: [
            {
                name: 'bahia',
                subtitle: '',
                zoom: [
                    [-44.9808, -16.2345],
                    [-36.2096, -6.7580]
                ],
                styles: [
                    {
                        'id': 'bahia-fill',
                        'source': 'bahia',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'bahia-border',
                        'source': 'bahia',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'bahia-text',
                        'source': 'bahia',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'coter-2020': {
        title: 'Combater 2020',
        legend: [3],
        description: `O objetivo do presente projeto foi atender demandas de dados geoespaciais vetoriais solicitos pelo COTER. Tais dados possuem uma estruturação particular, sendo necessário realizar a conversão a partir das normas da EDGV para a estruturação utilizada pelo sistema COMBATER.`,
        lotes: [
            {
                name: 'coter-2020',
                subtitle: '',
                zoom: [
                    [-52.0038, -24.3862],
                    [-44.2437, -19.2061]
                ],
                styles: [
                    {
                        'id': 'coter-2020-fill',
                        'source': 'coter-2020',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'coter-2020-border',
                        'source': 'coter-2020',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'coter-2020-text',
                        'source': 'coter-2020',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
        'combater-2021': {
        title: 'Combater 2021',
        legend: [3],
        description: `O objetivo do presente projeto foi apoioar a 1ª Divisão de Exército na execução de exercícios de simulação virtual (Op Membeca) e o Comando Militar do Leste em exercício de Força de Apoio a Defesa Civil, elaborando dados geoespaciais vetoriais personalizados para utilização no sistema COMBATER.`,
        lotes: [
            {
                name: 'combater-2021',
                subtitle: '',
                zoom: [
                    [-44.8195, -23.3425],
                    [-42.2459, -19.2656]
                ],
                styles: [
                    {
                        'id': 'combater-2021-fill',
                        'source': 'combater-2021',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'combater-2021-border',
                        'source': 'combater-2021',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'combater-2021-text',
                        'source': 'combater-2021',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },      
    'map-int-ft': {
        title: 'Mapeamento de Interesse da Força Terrestre 2020',
        legend: [3],
        description: `O objetivo do presente projeto foi elaborar cartas topográficas nas escalas 1:25.000 e 1:50.000 nas áreas de Três Corações, São Paulo e Resende, consideradas como áreas de Interesse da Força Terrestre.`,
        lotes: [
            {
                name: 'map-int-ft',
                subtitle: '',
                zoom: [
                    [-41.7178, -19.1328],
                    [-52.7419, -24.0783]
                ],
                styles: [
                    {
                        'id': 'map-int-ft-fill',
                        'source': 'map-int-ft',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'map-int-ft-border',
                        'source': 'map-int-ft',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'map-int-ft-text',
                        'source': 'map-int-ft',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'map-int-ft-2021': {
        title: 'Mapeamento de Interesse da Força Terrestre 2021',
        legend: [2,5,6],
        description: `Teste objetivo do presente projeto foi elaborar cartas topográficas nas escalas 1:25.000 e 1:50.000 nas áreas de Vitória e Três Corações, consideradas como áreas de Interesse da Força Terrestre.`,
        lotes: [
            {
                name: 'map-int-ft-2021',
                subtitle: '',
                zoom: [
                    [-45.7312, -22.1875],
                    [-38.6489, -19.7685]
                ],
                styles: [
                    {
                        'id': 'map-int-ft-2021-fill',
                        'source': 'map-int-ft-2021',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'map-int-ft-2021-border',
                        'source': 'map-int-ft-2021',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'map-int-ft-2021-text',
                        'source': 'map-int-ft-2021',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'ram-2020': {
        title: 'Projeto Cartografia da Amazônia 2020',
        legend: [3],
        description: `O objetivo do presente projeto é elaborar dados geoespaciais da região da Amazônia Legal a partir de imagens de radares de abertura sintética (SAR), nas bandas X e P, compatíveis com a escala 1:50.000.`,
        lotes: [
            {
                name: 'ram-2020',
                subtitle: '',
                zoom: [
                    [-61.0455, -11.4676],
                    [-54.3609, 3.0079]
                ],
                styles: [
                    {
                        'id': 'ram-2020-fill',
                        'source': 'ram-2020',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ram-2020-border',
                        'source': 'ram-2020',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ram-2020-text',
                        'source': 'ram-2020',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'ram-2021': {
        title: 'Projeto Cartografia da Amazônia 2021',
        legend: [12,
            3],
        description: `O objetivo do presente projeto é elaborar dados geoespaciais da região da Amazônia Legal a partir de imagens de radares de abertura sintética (SAR), nas bandas X e P, compatíveis com a escala 1:50.000.`,
        lotes: [
            {
                name: 'ram-2021',
                subtitle: '',
                zoom: [
                    [-60.9940, -13.8044],
                    [-56.6088, -8.4209]
                ],
                styles: [
                    {
                        'id': 'ram-2021-fill',
                        'source': 'ram-2021',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'ram-2021-border',
                        'source': 'ram-2021',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'ram-2021-text',
                        'source': 'ram-2021',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    },
    'pddmt-2021': {
        title: 'Plano de Desenvolvimento da Doutrina Militar Terrestre 2021',
        legend: [2,
            5,
            3],
        description: `O objetivo do presente projeto é elaborar dados geoespaciais para suprir a demanda dos Comandos Militares de Área a serem utilizados em preparo, emprego e doutrina da F Ter.`,
        lotes: [
            {
                name: 'pddmt-2021',
                subtitle: '',
                zoom: [
                    [-49.9306, -24.4235],
                    [-38.4782, -17.4558]
                ],
                styles: [
                    {
                        'id': 'pddmt-2021-fill',
                        'source': 'pddmt-2021',
                        'type': 'fill',
                        'layout': {},
                        'paint': {
                            'fill-opacity': 0.9
                        }
                    },
                    {
                        'id': 'pddmt-2021-border',
                        'source': 'pddmt-2021',
                        'type': 'line',
                        'layout': {},
                        'paint': {
                            'line-color': '#050505',
                            'line-width': 0.5
                        }
                    },
                    {
                        'id': 'pddmt-2021-text',
                        'source': 'pddmt-2021',
                        "type": "symbol",
                        "maxzoom": 10,
                        "minzoom": 7.4,
                        'layout': {
                            'text-field': ['to-string', ['get', 'identificador']]

                        },
                        'paint': {

                        }
                    }
                ]
            }
        ]
    }
        
}