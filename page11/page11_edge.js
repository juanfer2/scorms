/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.1.min.js",
            js+"PxLoader.js",
            js+"PxLoaderSound.js",
            js+"soundmanager2-nodebug.js",
            js+"jquery-migrate-1.4.1.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '55px', '1024px', '595px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.jpg",'0px','0px']
                        },
                        {
                            id: 'cuadro',
                            type: 'image',
                            rect: ['95px', '89px', '847px', '437px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cuadro.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '27px', 'auto', 'auto'],
                            fill: ["rgba(226,226,226,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['0px', '623px', '1024px', '27px', 'auto', 'auto'],
                            fill: ["rgba(226,226,226,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'pause_12',
                            display: 'none',
                            type: 'image',
                            rect: ['107px', '611px', '72px', '30px', 'auto', 'auto'],
                            opacity: '0.59310344827586',
                            fill: ["rgba(0,0,0,0)",im+"pause_1.png",'0px','0px']
                        },
                        {
                            id: 'play_12',
                            display: 'none',
                            type: 'image',
                            rect: ['32px', '611px', '72px', '30px', 'auto', 'auto'],
                            opacity: '0.59310344827586',
                            fill: ["rgba(0,0,0,0)",im+"play_1.png",'0px','0px']
                        },
                        {
                            id: 'btn_play',
                            symbolName: 'btn_play',
                            type: 'rect',
                            rect: ['3.6%', '94%', '35', '34', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'btn_stop',
                            symbolName: 'btn_stop',
                            type: 'rect',
                            rect: ['11%', '94%', '35', '34', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'btn_rebobinar',
                            symbolName: 'btn_rebibinar',
                            type: 'rect',
                            rect: ['18.4%', '93.7%', '35', '34', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'audioCopy',
                            type: 'image',
                            rect: ['859px', '7px', '73px', '31px', 'auto', 'auto'],
                            opacity: '0.58620689655172',
                            fill: ["rgba(0,0,0,0)",im+"audio.png",'0px','0px']
                        },
                        {
                            id: 'aniaudioCopy',
                            symbolName: 'aniaudio',
                            type: 'rect',
                            rect: ['859px', '7px', '73', '31', 'auto', 'auto']
                        },
                        {
                            id: 'mc_brillo',
                            symbolName: 'mc_brillo_1_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['783', '581', '221', '86', 'auto', 'auto']
                        },
                        {
                            id: 'circulo',
                            type: 'image',
                            rect: ['71px', '237px', '234px', '232px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circulo.svg",'0px','0px']
                        },
                        {
                            id: 'muneco',
                            symbolName: 'muneco',
                            type: 'rect',
                            rect: ['74px', '296px', '225', '168', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.2','0.2']]
                        },
                        {
                            id: 'sombra2',
                            symbolName: 'sombra2',
                            type: 'rect',
                            rect: ['334', '276', '182', '82', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 4, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'b1',
                            display: 'none',
                            type: 'image',
                            rect: ['463px', '164px', '286px', '85px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b1.png",'0px','0px']
                        },
                        {
                            id: 'b2',
                            display: 'none',
                            type: 'image',
                            rect: ['335px', '276px', '182px', '83px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b2.png",'0px','0px']
                        },
                        {
                            id: 'b3',
                            display: 'none',
                            type: 'image',
                            rect: ['530px', '275px', '181px', '83px', 'auto', 'auto'],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,0)",im+"b3.png",'0px','0px']
                        },
                        {
                            id: 'b4',
                            display: 'none',
                            type: 'image',
                            rect: ['724px', '270px', '184px', '86px', 'auto', 'auto'],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,0)",im+"b4.png",'0px','0px']
                        },
                        {
                            id: 'b5',
                            display: 'none',
                            type: 'image',
                            rect: ['464px', '382px', '288px', '82px', 'auto', 'auto'],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,0)",im+"b5.png",'0px','0px']
                        },
                        {
                            id: 'chulo',
                            type: 'image',
                            rect: ['435px', '178px', '59px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"chulo.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '650px', 'auto', 'auto'],
                            sizeRange: ['','1024px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3695,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10983",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11581",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${sombra2}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid11002",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${b3}",
                            '348px',
                            '275px'
                        ],
                        [
                            "eid10867",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${muneco}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10982",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10665",
                            "opacity",
                            155,
                            500,
                            "easeOutSine",
                            "${btn_play}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10984",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11000",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${b5}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid11005",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${b5}",
                            '455px',
                            '382px'
                        ],
                        [
                            "eid11001",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${b1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11006",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${b1}",
                            '237px',
                            '164px'
                        ],
                        [
                            "eid11003",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${b2}",
                            '349px',
                            '276px'
                        ],
                        [
                            "eid10986",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10663",
                            "opacity",
                            655,
                            500,
                            "easeOutSine",
                            "${btn_rebobinar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10985",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10664",
                            "opacity",
                            427,
                            500,
                            "easeOutSine",
                            "${btn_stop}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10653",
                            "left",
                            427,
                            500,
                            "easeOutSine",
                            "${btn_stop}",
                            '8.98%',
                            '11.04%'
                        ],
                        [
                            "eid10657",
                            "left",
                            927,
                            180,
                            "easeOutSine",
                            "${btn_stop}",
                            '11.04%',
                            '10.59%'
                        ],
                        [
                            "eid10655",
                            "left",
                            655,
                            500,
                            "easeOutSine",
                            "${btn_rebobinar}",
                            '16.31%',
                            '18.36%'
                        ],
                        [
                            "eid10658",
                            "left",
                            1155,
                            180,
                            "easeOutSine",
                            "${btn_rebobinar}",
                            '18.36%',
                            '17.87%'
                        ],
                        [
                            "eid10775",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${circulo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10998",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${b2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10773",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${mc_brillo}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10997",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${b3}",
                            '0',
                            '0.3'
                        ],
                        [
                            "eid10868",
                            "scaleX",
                            0,
                            0,
                            "easeOutCirc",
                            "${muneco}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid10651",
                            "left",
                            155,
                            500,
                            "easeOutSine",
                            "${btn_play}",
                            '1.56%',
                            '3.61%'
                        ],
                        [
                            "eid10656",
                            "left",
                            655,
                            180,
                            "easeOutSine",
                            "${btn_play}",
                            '3.61%',
                            '3.17%'
                        ],
                        [
                            "eid10669",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${pause_12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10667",
                            "display",
                            1335,
                            0,
                            "easeOutSine",
                            "${pause_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11004",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${b4}",
                            '343px',
                            '270px'
                        ],
                        [
                            "eid10668",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${play_12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10666",
                            "display",
                            1335,
                            0,
                            "easeOutSine",
                            "${play_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10871",
                            "top",
                            0,
                            0,
                            "easeOutCirc",
                            "${muneco}",
                            '354px',
                            '296px'
                        ],
                        [
                            "eid10869",
                            "scaleY",
                            0,
                            0,
                            "easeOutCirc",
                            "${muneco}",
                            '0.2',
                            '1'
                        ],
                        [
                            "eid10870",
                            "left",
                            0,
                            0,
                            "easeOutCirc",
                            "${muneco}",
                            '74px',
                            '74px'
                        ],
                        [
                            "eid10999",
                            "opacity",
                            0,
                            0,
                            "easeOutCirc",
                            "${b4}",
                            '0',
                            '0.3'
                        ]
                    ]
                }
            },
            "btn_play": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_play',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_play_2',
                            fill: ['rgba(0,0,0,0)', 'images/play_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10637",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${b_play_2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "btn_rebibinar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '2px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_rebobinar',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/reb_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '2px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_rebobinar_2',
                            fill: ['rgba(0,0,0,0)', 'images/reb_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10626",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${b_rebobinar_2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "btn_stop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_stop',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pause_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_stop_2',
                            fill: ['rgba(0,0,0,0)', 'images/pause_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10636",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${b_stop_2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "mc_brillo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'brillo_2',
                            opacity: '0',
                            rect: ['0px', '0px', '150px', '240px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/brillo_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '217px', '125px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "sale": 0
                    },
                    data: [
                        [
                            "eid10410",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${brillo_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10400",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${brillo_2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_menu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'menu_2',
                            type: 'image',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_2.png', '0px', '0px']
                        },
                        {
                            id: 'menu_1',
                            type: 'image',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '72px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "aniaudio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'audio',
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/audio.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            id: 'onda_2',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/onda_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            id: 'onda_1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/onda_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 2307,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10729",
                            "opacity",
                            326,
                            248,
                            "linear",
                            "${onda_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10737",
                            "opacity",
                            1457,
                            248,
                            "linear",
                            "${onda_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10746",
                            "display",
                            0,
                            0,
                            "linear",
                            "${onda_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10748",
                            "display",
                            698,
                            0,
                            "linear",
                            "${onda_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10745",
                            "display",
                            0,
                            0,
                            "linear",
                            "${onda_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10747",
                            "display",
                            326,
                            0,
                            "linear",
                            "${onda_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10730",
                            "opacity",
                            698,
                            248,
                            "linear",
                            "${onda_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10739",
                            "opacity",
                            1457,
                            248,
                            "linear",
                            "${onda_2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "mc_brillo_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'resplandor2',
                            opacity: '0',
                            rect: ['0px', '0px', '221px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/resplandor.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '221px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 2055,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10753",
                            "opacity",
                            0,
                            426,
                            "linear",
                            "${resplandor2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10754",
                            "opacity",
                            426,
                            403,
                            "linear",
                            "${resplandor2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "mc_brillo_1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '221px', '86px', 'auto', 'auto'],
                            id: 'resplandor2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/resplandor2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '221px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "ini": 71
                    },
                    data: [
                        [
                            "eid10753",
                            "opacity",
                            171,
                            426,
                            "linear",
                            "${resplandor2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10754",
                            "opacity",
                            597,
                            403,
                            "linear",
                            "${resplandor2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "contenedor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'contenedor',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['299px', '365px', '1024px', '595px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "muneco": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'torso',
                            rect: ['0px', '0px', '225px', '168px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/torso.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'cabeza2',
                            symbolName: 'cabeza',
                            rect: ['47', '-116', '129', '170', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '225px', '168px']
                        }
                    }
                },
                timeline: {
                    duration: 3695,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10846",
                            "rotateZ",
                            361,
                            1048,
                            "linear",
                            "${cabeza2}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid10848",
                            "rotateZ",
                            2647,
                            1048,
                            "linear",
                            "${cabeza2}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid10776",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza2}",
                            [43,100],
                            [43,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid11637",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza2}",
                            [43,100],
                            [43,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid11638",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza2}",
                            [43,100],
                            [43,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid11639",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${cabeza2}",
                            [43,100],
                            [43,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid11640",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza2}",
                            [43,100],
                            [43,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid11641",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${cabeza2}",
                            [43,100],
                            [43,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "cabeza": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '129px', '170px', 'auto', 'auto'],
                            id: 'cabeza',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cabeza.svg', '0px', '0px']
                        },
                        {
                            rect: ['48px', '107px', '62', '39', 'auto', 'auto'],
                            id: 'boca',
                            symbolName: 'boca',
                            type: 'rect'
                        },
                        {
                            rect: ['37', '59', '94', '38', 'auto', 'auto'],
                            id: 'ojos',
                            symbolName: 'ojos',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '129px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 3333,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ojos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '94px', '38px', 'auto', 'auto'],
                            id: 'ojo1',
                            fill: ['rgba(0,0,0,0)', 'images/ojo1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '5px', '92px', '30px', 'auto', 'auto'],
                            id: 'ojo2',
                            fill: ['rgba(0,0,0,0)', 'images/ojo2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '94px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 3333,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10777",
                            "display",
                            1166,
                            0,
                            "linear",
                            "${ojo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10779",
                            "display",
                            1457,
                            0,
                            "linear",
                            "${ojo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10778",
                            "display",
                            1166,
                            0,
                            "linear",
                            "${ojo1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10780",
                            "display",
                            1457,
                            0,
                            "linear",
                            "${ojo1}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "boca": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '62px', '39px', 'auto', 'auto'],
                            id: 'boc1',
                            fill: ['rgba(0,0,0,0)', 'images/boc1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['2px', '1px', '58px', '36px', 'auto', 'auto'],
                            id: 'boc2',
                            fill: ['rgba(0,0,0,0)', 'images/boc2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['7px', '4px', '53px', '34px', 'auto', 'auto'],
                            id: 'boc3',
                            fill: ['rgba(0,0,0,0)', 'images/boc3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['2px', '-5px', '59px', '41px', 'auto', 'auto'],
                            id: 'boc4',
                            fill: ['rgba(0,0,0,0)', 'images/boc4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['2px', '-2px', '59px', '37px', 'auto', 'auto'],
                            id: 'boc5',
                            fill: ['rgba(0,0,0,0)', 'images/boc5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 823,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10818",
                            "display",
                            823,
                            0,
                            "linear",
                            "${boc5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10812",
                            "display",
                            201,
                            0,
                            "linear",
                            "${boc2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10813",
                            "display",
                            397,
                            0,
                            "linear",
                            "${boc2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10811",
                            "display",
                            201,
                            0,
                            "linear",
                            "${boc1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10814",
                            "display",
                            397,
                            0,
                            "linear",
                            "${boc3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10815",
                            "display",
                            604,
                            0,
                            "linear",
                            "${boc3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10816",
                            "display",
                            604,
                            0,
                            "linear",
                            "${boc4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10817",
                            "display",
                            823,
                            0,
                            "linear",
                            "${boc4}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sombra2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '182px', '82px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRect',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(98,179,230,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '182px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid11584",
                            "opacity",
                            193,
                            557,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid11586",
                            "opacity",
                            924,
                            557,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page11_edgeActions.js");
})("EDGE-2530226574");
