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
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['59px', '72px', '784px', '518px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'contenedor',
                                symbolName: 'contenedor',
                                type: 'rect',
                                rect: ['47px', '-30px', '0', '0', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'Rectangle2',
                            display: 'block',
                            type: 'rect',
                            rect: ['33px', '64px', '968px', '529px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
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
                    duration: 19184,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
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
                            "eid10775",
                            "display",
                            18895,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
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
                            type: 'image',
                            id: 'b_play',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_play_2',
                            type: 'image',
                            display: 'none',
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
                            type: 'image',
                            id: 'b_rebobinar',
                            rect: ['0px', '2px', '72px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/reb_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '2px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_rebobinar_2',
                            type: 'image',
                            display: 'none',
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
                            type: 'image',
                            id: 'b_stop',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/pause_1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            id: 'b_stop_2',
                            type: 'image',
                            display: 'none',
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
                            rect: ['0px', '0px', '150px', '240px', 'auto', 'auto'],
                            id: 'brillo_2',
                            opacity: '0',
                            type: 'image',
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
            "Symbol_1": {
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
                            id: 'mask',
                            opacity: '0',
                            rect: ['-35px', '25px', '323px', '323px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mask.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'maskCopy',
                            opacity: '0',
                            rect: ['-35px', '25px', '323px', '323px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mask.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'personaje',
                            opacity: '0',
                            rect: ['0px', '0px', '361px', '345px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/personaje.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '361px', '345px']
                        }
                    }
                },
                timeline: {
                    duration: 948,
                    autoPlay: true,
                    data: [
                        [
                            "eid10719",
                            "left",
                            250,
                            335,
                            "linear",
                            "${maskCopy}",
                            '30px',
                            '-35px'
                        ],
                        [
                            "eid10720",
                            "left",
                            585,
                            165,
                            "linear",
                            "${maskCopy}",
                            '-35px',
                            '-18px'
                        ],
                        [
                            "eid10744",
                            "top",
                            585,
                            363,
                            "linear",
                            "${personaje}",
                            '0px',
                            '-19px'
                        ],
                        [
                            "eid10692",
                            "height",
                            0,
                            335,
                            "linear",
                            "${mask}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10699",
                            "height",
                            335,
                            165,
                            "linear",
                            "${mask}",
                            '323px',
                            '287px'
                        ],
                        [
                            "eid10714",
                            "top",
                            250,
                            335,
                            "linear",
                            "${maskCopy}",
                            '88px',
                            '23px'
                        ],
                        [
                            "eid10715",
                            "top",
                            585,
                            165,
                            "linear",
                            "${maskCopy}",
                            '23px',
                            '42px'
                        ],
                        [
                            "eid10716",
                            "height",
                            250,
                            335,
                            "linear",
                            "${maskCopy}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10717",
                            "height",
                            585,
                            165,
                            "linear",
                            "${maskCopy}",
                            '323px',
                            '287px'
                        ],
                        [
                            "eid10718",
                            "opacity",
                            250,
                            335,
                            "linear",
                            "${maskCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10746",
                            "opacity",
                            585,
                            363,
                            "linear",
                            "${personaje}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10696",
                            "left",
                            0,
                            335,
                            "linear",
                            "${mask}",
                            '30px',
                            '-35px'
                        ],
                        [
                            "eid10701",
                            "left",
                            335,
                            165,
                            "linear",
                            "${mask}",
                            '-35px',
                            '-18px'
                        ],
                        [
                            "eid10721",
                            "width",
                            250,
                            335,
                            "linear",
                            "${maskCopy}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10722",
                            "width",
                            585,
                            165,
                            "linear",
                            "${maskCopy}",
                            '323px',
                            '287px'
                        ],
                        [
                            "eid10704",
                            "opacity",
                            0,
                            335,
                            "linear",
                            "${mask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10698",
                            "top",
                            0,
                            335,
                            "linear",
                            "${mask}",
                            '88px',
                            '23px'
                        ],
                        [
                            "eid10702",
                            "top",
                            335,
                            165,
                            "linear",
                            "${mask}",
                            '23px',
                            '42px'
                        ],
                        [
                            "eid10694",
                            "width",
                            0,
                            335,
                            "linear",
                            "${mask}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10700",
                            "width",
                            335,
                            165,
                            "linear",
                            "${mask}",
                            '323px',
                            '287px'
                        ]
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
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            id: 'audio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/audio.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            type: 'image',
                            id: 'onda_2',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/onda_2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            type: 'image',
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
            "bocamale": {
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
                            display: 'none',
                            rect: ['17px', '0px', '69px', '34px', 'auto', 'auto'],
                            id: 'boca_m_5',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1px', '1px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_4',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['18px', '1px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_3',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['18px', '4px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_1',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['18px', '2px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_2',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 1944,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10954",
                            "display",
                            149,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10955",
                            "display",
                            302,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10964",
                            "display",
                            586,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10965",
                            "display",
                            691,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10968",
                            "display",
                            1069,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10969",
                            "display",
                            1199,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10978",
                            "display",
                            1697,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10979",
                            "display",
                            1826,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10956",
                            "display",
                            302,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10957",
                            "display",
                            444,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10966",
                            "display",
                            691,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10967",
                            "display",
                            815,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10970",
                            "display",
                            1199,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10971",
                            "display",
                            1335,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10980",
                            "display",
                            1826,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10981",
                            "display",
                            1944,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10960",
                            "display",
                            933,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10961",
                            "display",
                            1069,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10974",
                            "display",
                            1575,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10975",
                            "display",
                            1697,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10952",
                            "display",
                            0,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10953",
                            "display",
                            149,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10962",
                            "display",
                            444,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10963",
                            "display",
                            586,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10972",
                            "display",
                            1335,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10973",
                            "display",
                            1455,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10958",
                            "display",
                            815,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10959",
                            "display",
                            933,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10976",
                            "display",
                            1455,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10977",
                            "display",
                            1575,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
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
                            rect: ['0px', '0px', '221px', '86px', 'auto', 'auto'],
                            id: 'resplandor2',
                            opacity: '0',
                            type: 'image',
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
                            type: 'image',
                            id: 'resplandor2',
                            opacity: '0',
                            rect: ['0px', '0px', '221px', '86px', 'auto', 'auto'],
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
                            rect: ['299px', '365px', '1024px', '595px', 'auto', 'auto'],
                            id: 'contenedor',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page16_edgeActions.js");
})("EDGE-2530226574");
