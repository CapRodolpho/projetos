
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
        description: `O objetivo do presente projeto foi elaborar cartas topográficas nas escalas 1:25.000 e 1:50.000 consideradas como áreas de Interesse da Força Terrestre.`,
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
    'coter-2020': {
        title: 'COTER 2020',
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
    }
        
}