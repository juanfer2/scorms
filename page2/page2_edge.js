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
                            id: 'mask',
                            type: 'image',
                            rect: ['122px', '184px', '323px', '323px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mask.png",'0px','0px']
                        },
                        {
                            id: 'maskCopy',
                            type: 'image',
                            rect: ['122px', '184px', '323px', '323px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"mask.png",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            type: 'image',
                            rect: ['154px', '177px', '341px', '323px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"personaje.png",'0px','0px']
                        },
                        {
                            id: 'star3',
                            type: 'image',
                            rect: ['79px', '312px', '63px', '58px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"star3.png",'0px','0px']
                        },
                        {
                            id: 'text_2',
                            type: 'image',
                            rect: ['667px', '476px', '207px', '55px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text_2.png",'0px','0px']
                        },
                        {
                            id: 'text_1',
                            type: 'image',
                            rect: ['260px', '225px', '522px', '232px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text_1.png",'0px','0px']
                        },
                        {
                            id: 'star2',
                            type: 'image',
                            rect: ['93px', '235px', '63px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star2.png",'0px','0px']
                        },
                        {
                            id: 'star1',
                            type: 'image',
                            rect: ['143px', '179px', '63px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"star1.png",'0px','0px']
                        },
                        {
                            id: 'boca',
                            symbolName: 'boca',
                            display: 'none',
                            type: 'rect',
                            rect: ['277px', '273px', '34', '21', 'auto', 'auto'],
                            transform: [[],[],[],['0.94118','0.94118']]
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
                            symbolName: 'mc_brillo_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['783', '581', '221', '86', 'auto', 'auto']
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
                    duration: 15340,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10736",
                            "top",
                            14165,
                            326,
                            "linear",
                            "${text_2}",
                            '445px',
                            '476px'
                        ],
                        [
                            "eid10746",
                            "top",
                            14491,
                            160,
                            "linear",
                            "${text_2}",
                            '476px',
                            '466px'
                        ],
                        [
                            "eid10692",
                            "height",
                            357,
                            335,
                            "linear",
                            "${mask}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10699",
                            "height",
                            692,
                            165,
                            "linear",
                            "${mask}",
                            '323px',
                            '287px'
                        ],
                        [
                            "eid10856",
                            "left",
                            4750,
                            366,
                            "easeInOutCirc",
                            "${text_1}",
                            '260px',
                            '484px'
                        ],
                        [
                            "eid10859",
                            "left",
                            5116,
                            266,
                            "easeInOutCirc",
                            "${text_1}",
                            '484px',
                            '426px'
                        ],
                        [
                            "eid10742",
                            "opacity",
                            2322,
                            161,
                            "linear",
                            "${star1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10704",
                            "opacity",
                            357,
                            335,
                            "linear",
                            "${mask}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10716",
                            "height",
                            607,
                            335,
                            "linear",
                            "${maskCopy}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10717",
                            "height",
                            942,
                            165,
                            "linear",
                            "${maskCopy}",
                            '323px',
                            '287px'
                        ],
                        [
                            "eid10718",
                            "opacity",
                            607,
                            335,
                            "linear",
                            "${maskCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10738",
                            "opacity",
                            14165,
                            326,
                            "linear",
                            "${text_2}",
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
                        ],
                        [
                            "eid10696",
                            "left",
                            357,
                            335,
                            "linear",
                            "${mask}",
                            '187px',
                            '122px'
                        ],
                        [
                            "eid10701",
                            "left",
                            692,
                            165,
                            "linear",
                            "${mask}",
                            '122px',
                            '139px'
                        ],
                        [
                            "eid10721",
                            "width",
                            607,
                            335,
                            "linear",
                            "${maskCopy}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10722",
                            "width",
                            942,
                            165,
                            "linear",
                            "${maskCopy}",
                            '323px',
                            '287px'
                        ],
                        [
                            "eid10826",
                            "display",
                            1682,
                            0,
                            "linear",
                            "${boca}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10741",
                            "opacity",
                            2161,
                            161,
                            "linear",
                            "${star2}",
                            '0',
                            '1'
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
                            "eid10858",
                            "opacity",
                            4750,
                            366,
                            "easeInOutCirc",
                            "${text_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10719",
                            "left",
                            607,
                            335,
                            "linear",
                            "${maskCopy}",
                            '187px',
                            '122px'
                        ],
                        [
                            "eid10720",
                            "left",
                            942,
                            165,
                            "linear",
                            "${maskCopy}",
                            '122px',
                            '139px'
                        ],
                        [
                            "eid10713",
                            "top",
                            1182,
                            318,
                            "easeInOutExpo",
                            "${personaje}",
                            '177px',
                            '162px'
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
                            "eid10740",
                            "opacity",
                            2000,
                            161,
                            "linear",
                            "${star3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10714",
                            "top",
                            607,
                            335,
                            "linear",
                            "${maskCopy}",
                            '247px',
                            '182px'
                        ],
                        [
                            "eid10715",
                            "top",
                            942,
                            165,
                            "linear",
                            "${maskCopy}",
                            '182px',
                            '201px'
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
                            "eid10726",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${personaje}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10724",
                            "opacity",
                            1182,
                            318,
                            "easeInOutExpo",
                            "${personaje}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10865",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${mc_brillo}",
                            'none',
                            'none'
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
                            "eid10854",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${text_1}",
                            '225px',
                            '225px'
                        ],
                        [
                            "eid10698",
                            "top",
                            357,
                            335,
                            "linear",
                            "${mask}",
                            '247px',
                            '182px'
                        ],
                        [
                            "eid10702",
                            "top",
                            692,
                            165,
                            "linear",
                            "${mask}",
                            '182px',
                            '201px'
                        ],
                        [
                            "eid10694",
                            "width",
                            357,
                            335,
                            "linear",
                            "${mask}",
                            '193px',
                            '323px'
                        ],
                        [
                            "eid10700",
                            "width",
                            692,
                            165,
                            "linear",
                            "${mask}",
                            '323px',
                            '287px'
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
                            rect: ['-9px', '-1px', '39px', '15px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(244,197,154,1.00)']
                        },
                        {
                            rect: ['0px', '6px', '27px', '15px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(244,197,154,1.00)']
                        },
                        {
                            rect: ['-5px', '0px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_4.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '0px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_3.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-1px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_2.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-1px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_5.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-1px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '34px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 3904,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10779",
                            "display",
                            166,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10780",
                            "display",
                            332,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10787",
                            "display",
                            500,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10788",
                            "display",
                            666,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10795",
                            "display",
                            1181,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10796",
                            "display",
                            1347,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10797",
                            "display",
                            1515,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10798",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10805",
                            "display",
                            2196,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10806",
                            "display",
                            2362,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10807",
                            "display",
                            2530,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10808",
                            "display",
                            2696,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10814",
                            "display",
                            2864,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10815",
                            "display",
                            3030,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10816",
                            "display",
                            3198,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10817",
                            "display",
                            3364,
                            0,
                            "linear",
                            "${boca_f_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10827",
                            "display",
                            834,
                            0,
                            "linear",
                            "${boca_f_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10828",
                            "display",
                            988,
                            0,
                            "linear",
                            "${boca_f_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10785",
                            "display",
                            2042,
                            0,
                            "linear",
                            "${boca_f_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10786",
                            "display",
                            2196,
                            0,
                            "linear",
                            "${boca_f_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10824",
                            "display",
                            3725,
                            0,
                            "linear",
                            "${boca_f_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10825",
                            "display",
                            3904,
                            0,
                            "linear",
                            "${boca_f_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10783",
                            "display",
                            988,
                            0,
                            "linear",
                            "${boca_f_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10784",
                            "display",
                            1181,
                            0,
                            "linear",
                            "${boca_f_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10803",
                            "display",
                            1849,
                            0,
                            "linear",
                            "${boca_f_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10804",
                            "display",
                            2042,
                            0,
                            "linear",
                            "${boca_f_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10822",
                            "display",
                            3532,
                            0,
                            "linear",
                            "${boca_f_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10823",
                            "display",
                            3725,
                            0,
                            "linear",
                            "${boca_f_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10777",
                            "display",
                            0,
                            0,
                            "linear",
                            "${boca_f_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10778",
                            "display",
                            166,
                            0,
                            "linear",
                            "${boca_f_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10781",
                            "display",
                            332,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10782",
                            "display",
                            500,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10793",
                            "display",
                            666,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10794",
                            "display",
                            834,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10799",
                            "display",
                            1347,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10800",
                            "display",
                            1515,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10801",
                            "display",
                            1681,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10802",
                            "display",
                            1849,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10809",
                            "display",
                            2362,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10810",
                            "display",
                            2530,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10811",
                            "display",
                            2696,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10812",
                            "display",
                            2864,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10818",
                            "display",
                            3030,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10819",
                            "display",
                            3198,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10820",
                            "display",
                            3364,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10821",
                            "display",
                            3532,
                            0,
                            "linear",
                            "${boca_f_2}",
                            'block',
                            'none'
                        ]
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
                            display: 'none',
                            rect: ['0px', '0px', '62px', '29px', 'auto', 'auto'],
                            id: 'ojos_f_1',
                            fill: ['rgba(0,0,0,0)', 'images/ojos_f_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '62px', '29px', 'auto', 'auto'],
                            id: 'ojos_f_3',
                            fill: ['rgba(0,0,0,0)', 'images/ojos_f_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '62px', '29px', 'auto', 'auto'],
                            id: 'ojos_f_2',
                            fill: ['rgba(0,0,0,0)', 'images/ojos_f_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '62px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 3250,
                    autoPlay: true,
                    data: [
                        [
                            "eid10831",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${ojos_f_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10832",
                            "display",
                            2806,
                            0,
                            "linear",
                            "${ojos_f_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10833",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${ojos_f_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10829",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ojos_f_2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10830",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${ojos_f_2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "mc_Brillo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '272px', '123px', 'auto', 'auto'],
                            id: 'brillo',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brillo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '272px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    labels: {
                        "ini": 129
                    },
                    data: [
                        [
                            "eid10515",
                            "opacity",
                            250,
                            500,
                            "linear",
                            "${brillo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10516",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${brillo}",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page2_edgeActions.js");
})("EDGE-2530226574");
