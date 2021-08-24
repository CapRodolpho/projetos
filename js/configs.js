
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
        zoom: [
            [-54.60516441090726, -31.59015763447726], // southwestern corner of the bounds
            [-50.14483553439275, -22.90972914019692] // northeastern corner of the bounds
        ],
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
            },
            {
                'id': 'generalizacao-cartografica-50k-text',
                'source': 'generalizacao-cartografica-50k',
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
    },
    'generalizacao-cartografica-100k': {
        zoom: [
            [-54.60516441090726, -31.59015763447726], // southwestern corner of the bounds
            [-50.14483553439275, -22.90972914019692] // northeastern corner of the bounds
        ],
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
            },
            {
                'id': 'generalizacao-cartografica-100k-text',
                'source': 'generalizacao-cartografica-100k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 6.14,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'plano-desenvolvimento': {
        zoom: [
            [-58.999999898, -32.999999850000002], // southwestern corner of the bounds
            [-52.0000001041, -27.499999969] // northeastern corner of the bounds
        ],
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
            },
            {
                'id': 'plano-desenvolvimento-text',
                'source': 'plano-desenvolvimento',
                "type": "symbol",
                "maxzoom": 10,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-25k': {
        zoom: [
            [-57.85792524319584, -33.96505531990365], // southwestern corner of the bounds
            [-50.14207493280416, -22.909789655302163] // northeastern corner of the bounds
        ],
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
            },
            {
                'id': 'mapeamento-interesse-da-forca-25k-text',
                'source': 'mapeamento-interesse-da-forca-25k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 8.86,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-50k': {
        zoom: [
            [-54.104642771209704, -31.090174775111926],
            [-50.395357523790295, -23.909732006690916]
        ],
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
            },
            {
                'id': 'mapeamento-interesse-da-forca-50k-text',
                'source': 'mapeamento-interesse-da-forca-50k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 7.34,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-100k': {
        zoom:[
            [-54.104642771209704, -31.090174775111926],
            [-50.395357523790295, -23.909732006690916]
        ],
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
            },
            {
                'id': 'mapeamento-interesse-da-forca-100k-text',
                'source': 'mapeamento-interesse-da-forca-100k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 6.03,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'mapeamento-interesse-da-forca-250k': {
        zoom: [
            [-54.104642487394564, -31.09019171550016],
            [-52.39535777550543, -23.909716233711624]
        ],
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
            },
            {
                'id': 'mapeamento-interesse-da-forca-250k-text',
                'source': 'mapeamento-interesse-da-forca-250k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 4.56,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'sisfron-ms': {
        zoom: [
            [-58.00961789820789, -21.009031787082876],
            [-56.990381788192096, -19.990966854945665]
        ],
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
            },
            {
                'id': 'sisfron-ms-text',
                'source': 'sisfron-ms',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 8.88,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'sisfron-rr': {
        zoom: [
            [-63.759010716772494, 3.990958376806931],
            [-59.990989283227506, 4.509041501813903]
        ],
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
            },
            {
                'id': 'sisfron-rr-text',
                'source': 'sisfron-rr',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 7.29,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'rio-grande-do-sul': {
        zoom: [
            [-52.51051155017842, -31.384018169281973],
            [-50.23948867872158, -29.24097876335743]
        ],
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
            },
            {
                'id': 'rio-grande-do-sul-text',
                'source': 'rio-grande-do-sul',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 8.89,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'uraricoera': {
        zoom: [
            [-61.509012475599526, 1.4909562825715987],
            [-60.49098722400048, 4.75904295524796]
        ],
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
            },
            {
                'id': 'uraricoera-text',
                'source': 'uraricoera',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 7.26,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'campo-instrucao-25k': {
        zoom: [
            [-55.76038790313186, -30.259015085434463],
            [-50.11461197696814, -26.115978807393443]
        ],
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
            },
            {
                'id': 'campo-instrucao-25k-text',
                'source': 'campo-instrucao-25k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 8.86,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'campo-instrucao-50k': {
        zoom: [
            [-55.76038790313186, -30.259015085434463],
            [-50.11461197696814, -26.115978807393443]
        ],
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
            },
            {
                'id': 'campo-instrucao-50k-text',
                'source': 'campo-instrucao-50k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 9.01,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'santa-catarina-25k': {
        zoom: [
            [-52.26021357165334, -28.509022154962935],
            [-49.98978660234666, -26.24097472235442]
        ],
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
            },
            {
                'id': 'santa-catarina-25k-text',
                'source': 'santa-catarina-25k',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 9.01,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    },
    'santa-catarina-50k': {
        zoom: [
            [-52.26021357165334, -28.509022154962935],
            [-49.98978660234666, -26.24097472235442]
        ],
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
            },
            {
                'id': 'santa-catarina-50k-text',
                'source': 'santa-catarina-50k',
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
    },
    'radiografia-am': {
        zoom: [
            [-73.75908278949825, -9.508997036002405],
            [-53.99091741540177, 5.508999366522698]
        ],
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
            },
            {
                'id': 'radiografia-am-text',
                'source': 'radiografia-am',
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
    },
    'sisfron-pr': {
        zoom: [
            [-54.384866243172475, -24.509027741479414],
            [-53.490134107727535, -22.9909701451744]
        ],
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
            },
            {
                'id': 'sisfron-pr-text',
                'source': 'sisfron-pr',
                "type": "symbol",
                "maxzoom": 10,
                "minzoom": 8.89,
                'layout': {
                    'text-field': ['to-string', ['get', 'identificador']]
                  
                },
                'paint': {
                    
                }
            }
        ]
    }

};