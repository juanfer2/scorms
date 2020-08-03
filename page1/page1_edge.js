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
                            id: 'fondo_2',
                            type: 'image',
                            rect: ['1px', '183px', '1022px', '356px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo_2.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['132px', '287px', '732px', '140px', 'auto', 'auto'],
                            clip: 'rect(0px 384px 140px 377px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"titulo.png",'0px','0px']
                        },
                        {
                            id: 'per_2',
                            display: 'block',
                            type: 'image',
                            rect: ['680px', '156px', '368px', '494px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"per_2.png",'0px','0px']
                        },
                        {
                            id: 'brazoani',
                            symbolName: 'brazoani',
                            display: 'none',
                            type: 'rect',
                            rect: ['705px', '320', '125', '243', 'auto', 'auto']
                        },
                        {
                            id: 'per_3',
                            display: 'none',
                            type: 'image',
                            rect: ['753px', '155px', '229px', '495px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"per_3.png",'0px','0px']
                        },
                        {
                            id: 'per_1',
                            display: 'block',
                            type: 'image',
                            rect: ['-17px', '129px', '334px', '521px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"per_1.png",'0px','0px']
                        },
                        {
                            id: 'arm',
                            symbolName: 'arm',
                            display: 'none',
                            type: 'rect',
                            rect: ['223', '288', '134', '290', 'auto', 'auto']
                        },
                        {
                            id: 'per_4',
                            display: 'none',
                            type: 'image',
                            rect: ['40px', '126px', '240px', '523px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"per_4.png",'0px','0px']
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
                            id: 'audio',
                            type: 'image',
                            rect: ['859px', '7px', '73px', '31px', 'auto', 'auto'],
                            opacity: '0.58620689655172',
                            fill: ["rgba(0,0,0,0)",im+"audio.png",'0px','0px']
                        },
                        {
                            id: 'aniaudio',
                            symbolName: 'aniaudio',
                            type: 'rect',
                            rect: ['859px', '7px', '73', '31', 'auto', 'auto']
                        },
                        {
                            id: 'mc_brillo',
                            symbolName: 'mc_brillo',
                            display: 'none',
                            type: 'rect',
                            rect: ['783', '581', '221', '86', 'auto', 'auto']
                        },
                        {
                            id: 'mc_boca_hombre',
                            symbolName: 'mc_boca_hombre_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['173px', '224px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.93617','0.85106']]
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
                    duration: 37016,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10797",
                            "rotateZ",
                            1895,
                            0,
                            "easeOutSine",
                            "${mc_boca_hombre}",
                            '0deg',
                            '0deg'
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
                            "eid10832",
                            "left",
                            1895,
                            0,
                            "easeOutSine",
                            "${mc_boca_hombre}",
                            '173px',
                            '173px'
                        ],
                        [
                            "eid10789",
                            "display",
                            1895,
                            0,
                            "linear",
                            "${arm}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10676",
                            "clip",
                            1895,
                            415,
                            "linear",
                            "${titulo}",
                            [0,384,140,377],
                            [0,732,140,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10782",
                            "display",
                            2422,
                            0,
                            "linear",
                            "${per_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10806",
                            "display",
                            1895,
                            0,
                            "easeOutExpo",
                            "${mc_boca_hombre}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10807",
                            "display",
                            37016,
                            0,
                            "easeOutSine",
                            "${mc_boca_hombre}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10822",
                            "scaleX",
                            1895,
                            0,
                            "easeOutSine",
                            "${mc_boca_hombre}",
                            '0.93617',
                            '0.93617'
                        ],
                        [
                            "eid10680",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10679",
                            "display",
                            1895,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10801",
                            "opacity",
                            1895,
                            0,
                            "easeOutSine",
                            "${mc_boca_hombre}",
                            '1',
                            '1'
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
                            "eid10690",
                            "opacity",
                            1500,
                            395,
                            "linear",
                            "${per_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10788",
                            "display",
                            1895,
                            0,
                            "linear",
                            "${per_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10686",
                            "opacity",
                            1500,
                            395,
                            "linear",
                            "${per_1}",
                            '0',
                            '1'
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
                            "eid10763",
                            "display",
                            0,
                            0,
                            "linear",
                            "${brazoani}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10764",
                            "display",
                            2422,
                            0,
                            "linear",
                            "${brazoani}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10688",
                            "left",
                            1500,
                            395,
                            "linear",
                            "${per_2}",
                            '680px',
                            '615px'
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
                            "eid10847",
                            "top",
                            1895,
                            1983,
                            "linear",
                            "${mc_boca_hombre}",
                            '222px',
                            '224px'
                        ],
                        [
                            "eid10682",
                            "opacity",
                            1335,
                            415,
                            "linear",
                            "${fondo_2}",
                            '0',
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
                            "eid10678",
                            "opacity",
                            1895,
                            415,
                            "linear",
                            "${titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10833",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${mc_brillo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10757",
                            "display",
                            2369,
                            0,
                            "linear",
                            "${per_3}",
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
                            "eid10684",
                            "left",
                            1500,
                            395,
                            "linear",
                            "${per_1}",
                            '-17px',
                            '42px'
                        ],
                        [
                            "eid10795",
                            "scaleY",
                            1895,
                            0,
                            "easeOutExpo",
                            "${mc_boca_hombre}",
                            '0.85106',
                            '0.85106'
                        ],
                        [
                            "eid10756",
                            "display",
                            2422,
                            0,
                            "linear",
                            "${per_2}",
                            'block',
                            'none'
                        ],
                            [ "eid10790", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${arm}', [] ] ],
                            [ "eid10787", "trigger", 1895, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${arm}', [] ] ],
                            [ "eid10828", "trigger", 1895, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${mc_boca_hombre}', [] ] ]
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
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu_2.png', '0px', '0px']
                        },
                        {
                            id: 'menu_1',
                            rect: ['0px', '0px', '72px', '30px', 'auto', 'auto'],
                            type: 'image',
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
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            id: 'audio',
                            type: 'image',
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
            "f_derecha": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'siguiente',
                            type: 'image',
                            rect: ['0px', '0px', '167px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/siguiente.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '167px', '31px', 'auto', 'auto'],
                            id: 'b_siguiente_2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/siguiente_ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10610",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_siguiente_2}",
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
                            rect: ['0px', '0px', '221px', '86px', 'auto', 'auto'],
                            id: 'resplandor2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/resplandor.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '221px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "ini": 0
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
            "brazoani": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-10px', '-5px', '125px', '243px', 'auto', 'auto'],
                            borderRadius: ['21.333984375px 57.333251953125px', '21.333984375px 57.333251953125px', '21.333984375px 57.333251953125px', '21.333984375px 57.333251953125px'],
                            id: 'brazo2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brazo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '243px']
                        }
                    }
                },
                timeline: {
                    duration: 4180.185121048,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10773",
                            "rotateZ",
                            0,
                            1068,
                            "linear",
                            "${brazo2}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid10778",
                            "rotateZ",
                            1068,
                            1182,
                            "linear",
                            "${brazo2}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid10774",
                            "left",
                            0,
                            1068,
                            "linear",
                            "${brazo2}",
                            '0px',
                            '-3px'
                        ],
                        [
                            "eid10777",
                            "left",
                            1068,
                            1182,
                            "linear",
                            "${brazo2}",
                            '-3px',
                            '0px'
                        ],
                        [
                            "eid10775",
                            "top",
                            0,
                            1068,
                            "linear",
                            "${brazo2}",
                            '0px',
                            '-2px'
                        ],
                        [
                            "eid10776",
                            "top",
                            1068,
                            1182,
                            "linear",
                            "${brazo2}",
                            '-2px',
                            '0px'
                        ]
                    ]
                }
            },
            "arm": {
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
                            id: 'brazo_2',
                            rect: ['-26px', '6px', '134px', '290px', 'auto', 'auto'],
                            transform: [[], ['14'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/brazo_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '290px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid10785",
                            "left",
                            0,
                            6000,
                            "linear",
                            "${brazo_2}",
                            '0px',
                            '-26px'
                        ],
                        [
                            "eid10784",
                            "rotateZ",
                            0,
                            6000,
                            "linear",
                            "${brazo_2}",
                            '0deg',
                            '14deg'
                        ],
                        [
                            "eid10786",
                            "top",
                            0,
                            6000,
                            "linear",
                            "${brazo_2}",
                            '0px',
                            '6px'
                        ]
                    ]
                }
            },
            "mc_boca_hombre_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '46px', '29px', 'auto', 'auto'],
                            id: 'bh1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/bh12.png', '0px', '0px']
                        },
                        {
                            rect: ['8px', '10px', '31px', '22px', 'auto', 'auto'],
                            id: 'bh2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/bh22.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '47px', '29px', 'auto', 'auto'],
                            id: 'bh3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/bh32.png', '0px', '0px']
                        },
                        {
                            rect: ['2px', '2px', '42px', '25px', 'auto', 'auto'],
                            id: 'bh4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/bh42.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '47px', '29px', 'auto', 'auto'],
                            id: 'bh5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/bh52.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    labels: {
                        "cero": 0,
                        "sale": 100
                    },
                    data: [
                        [
                            "eid10816",
                            "top",
                            100,
                            0,
                            "easeOutSine",
                            "${bh2}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid10708",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bh2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10710",
                            "display",
                            100,
                            0,
                            "linear",
                            "${bh2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10711",
                            "display",
                            200,
                            0,
                            "linear",
                            "${bh2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10705",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bh5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10716",
                            "display",
                            400,
                            0,
                            "linear",
                            "${bh5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10717",
                            "display",
                            500,
                            0,
                            "linear",
                            "${bh5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10707",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bh3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10712",
                            "display",
                            200,
                            0,
                            "linear",
                            "${bh3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10713",
                            "display",
                            300,
                            0,
                            "linear",
                            "${bh3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10704",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bh1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10709",
                            "display",
                            100,
                            0,
                            "linear",
                            "${bh1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10718",
                            "display",
                            500,
                            0,
                            "linear",
                            "${bh1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10706",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bh4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10714",
                            "display",
                            300,
                            0,
                            "linear",
                            "${bh4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10715",
                            "display",
                            400,
                            0,
                            "linear",
                            "${bh4}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "ani_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'btn_audio1',
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_audio1.png', '0px', '0px']
                        },
                        {
                            rect: ['40px', '8px', '6px', '14px', 'auto', 'auto'],
                            id: 'o1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/o1.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '3px', '8px', '23px', 'auto', 'auto'],
                            id: 'o2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/o2.png', '0px', '0px']
                        },
                        {
                            id: 'btn_audio2',
                            rect: ['0px', '0px', '73px', '31px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_audio2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '31px']
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
                            "eid10710",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${o2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10709",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${o1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page1_edgeActions.js");
})("EDGE-2530226574");
