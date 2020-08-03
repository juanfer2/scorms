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
                            id: 'board',
                            type: 'image',
                            rect: ['69px', '109px', '656px', '445px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"board.png",'0px','0px']
                        },
                        {
                            id: 'circle',
                            type: 'image',
                            rect: ['730px', '226px', '239px', '239px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle.png",'0px','0px']
                        },
                        {
                            id: 'circleCopy',
                            type: 'image',
                            rect: ['730px', '226px', '239px', '239px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle.png",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            type: 'image',
                            rect: ['681px', '168px', '280px', '305px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"personaje.png",'0px','0px']
                        },
                        {
                            id: 'boca',
                            symbolName: 'boca',
                            display: 'none',
                            type: 'rect',
                            rect: ['829px', '251px', '34', '21', 'auto', 'auto'],
                            transform: [[],[],[],['0.82353','0.82353']]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['-52', '417', '696', '92', 'auto', 'auto'],
                            c: [
                            {
                                id: 'c3',
                                type: 'image',
                                rect: ['126px', '0px', '570px', '92px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"c3.png",'0px','0px']
                            },
                            {
                                id: 'Rectangle2Copy2',
                                type: 'rect',
                                rect: ['0px', '40px', '127px', '16px', 'auto', 'auto'],
                                fill: ["rgba(226,226,226,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['-52px', '315', '696', '92', 'auto', 'auto'],
                            c: [
                            {
                                id: 'c2',
                                type: 'image',
                                rect: ['126px', '0px', '570px', '92px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"c2.png",'0px','0px']
                            },
                            {
                                id: 'Rectangle2Copy',
                                type: 'rect',
                                rect: ['0px', '38px', '127px', '16px', 'auto', 'auto'],
                                fill: ["rgba(226,226,226,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['0px', '210', '586', '96', 'auto', 'auto'],
                            clip: 'rect(0px 893px 96px 74px)',
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '37px', '127px', '16px', 'auto', 'auto'],
                                fill: ["rgba(226,226,226,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'c1',
                                type: 'image',
                                rect: ['121px', '0px', '465px', '96px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"c1.png",'0px','0px']
                            }]
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
                    duration: 17250,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10938",
                            "top",
                            1628,
                            329,
                            "linear",
                            "${circleCopy}",
                            '271px',
                            '228px'
                        ],
                        [
                            "eid10939",
                            "top",
                            1957,
                            192,
                            "linear",
                            "${circleCopy}",
                            '228px',
                            '241px'
                        ],
                        [
                            "eid11002",
                            "left",
                            8594,
                            437,
                            "easeOutExpo",
                            "${Group2}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid11003",
                            "left",
                            9031,
                            219,
                            "easeOutExpo",
                            "${Group2}",
                            '0px',
                            '-52px'
                        ],
                        [
                            "eid11005",
                            "clip",
                            10000,
                            437,
                            "easeOutExpo",
                            "${Group3}",
                            [0,893,96,223],
                            [0,893,96,74],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid11006",
                            "clip",
                            10437,
                            219,
                            "easeOutExpo",
                            "${Group3}",
                            [0,893,96,74],
                            [0,893,96,127],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10925",
                            "height",
                            1421,
                            329,
                            "linear",
                            "${circle}",
                            '154px',
                            '239px'
                        ],
                        [
                            "eid10934",
                            "height",
                            1750,
                            192,
                            "linear",
                            "${circle}",
                            '239px',
                            '213px'
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
                            "eid10986",
                            "clip",
                            7078,
                            437,
                            "easeOutExpo",
                            "${Group}",
                            [0,893,96,223],
                            [0,893,96,74],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10996",
                            "clip",
                            7515,
                            219,
                            "easeOutExpo",
                            "${Group}",
                            [0,893,96,74],
                            [0,893,96,127],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
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
                            "eid10945",
                            "width",
                            1628,
                            329,
                            "linear",
                            "${circleCopy}",
                            '154px',
                            '239px'
                        ],
                        [
                            "eid10946",
                            "width",
                            1957,
                            192,
                            "linear",
                            "${circleCopy}",
                            '239px',
                            '213px'
                        ],
                        [
                            "eid10964",
                            "opacity",
                            1957,
                            435,
                            "linear",
                            "${personaje}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10927",
                            "width",
                            1421,
                            329,
                            "linear",
                            "${circle}",
                            '154px',
                            '239px'
                        ],
                        [
                            "eid10935",
                            "width",
                            1750,
                            192,
                            "linear",
                            "${circle}",
                            '239px',
                            '213px'
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
                            "eid10976",
                            "opacity",
                            2694,
                            306,
                            "linear",
                            "${board}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10933",
                            "opacity",
                            1421,
                            329,
                            "linear",
                            "${circle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11010",
                            "top",
                            4079,
                            0,
                            "linear",
                            "${boca}",
                            '251px',
                            '251px'
                        ],
                        [
                            "eid11000",
                            "clip",
                            8594,
                            437,
                            "easeOutExpo",
                            "${Group2}",
                            [0,893,96,223],
                            [0,893,96,74],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid11001",
                            "clip",
                            9031,
                            219,
                            "easeOutExpo",
                            "${Group2}",
                            [0,893,96,74],
                            [0,893,96,127],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10940",
                            "height",
                            1628,
                            329,
                            "linear",
                            "${circleCopy}",
                            '154px',
                            '239px'
                        ],
                        [
                            "eid10941",
                            "height",
                            1957,
                            192,
                            "linear",
                            "${circleCopy}",
                            '239px',
                            '213px'
                        ],
                        [
                            "eid10942",
                            "opacity",
                            1628,
                            329,
                            "linear",
                            "${circleCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10931",
                            "top",
                            1421,
                            329,
                            "linear",
                            "${circle}",
                            '271px',
                            '228px'
                        ],
                        [
                            "eid10937",
                            "top",
                            1750,
                            192,
                            "linear",
                            "${circle}",
                            '228px',
                            '241px'
                        ],
                        [
                            "eid10962",
                            "top",
                            1957,
                            435,
                            "linear",
                            "${personaje}",
                            '168px',
                            '153px'
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
                            "eid10998",
                            "opacity",
                            7078,
                            437,
                            "easeOutExpo",
                            "${Group}",
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
                            "eid10943",
                            "left",
                            1628,
                            329,
                            "linear",
                            "${circleCopy}",
                            '773px',
                            '731px'
                        ],
                        [
                            "eid10944",
                            "left",
                            1957,
                            192,
                            "linear",
                            "${circleCopy}",
                            '731px',
                            '744px'
                        ],
                        [
                            "eid10929",
                            "left",
                            1421,
                            329,
                            "linear",
                            "${circle}",
                            '773px',
                            '731px'
                        ],
                        [
                            "eid10936",
                            "left",
                            1750,
                            192,
                            "linear",
                            "${circle}",
                            '731px',
                            '744px'
                        ],
                        [
                            "eid10978",
                            "left",
                            7078,
                            437,
                            "easeOutExpo",
                            "${Group}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid10979",
                            "left",
                            7515,
                            219,
                            "easeOutExpo",
                            "${Group}",
                            '0px',
                            '-52px'
                        ],
                        [
                            "eid11007",
                            "left",
                            10000,
                            437,
                            "easeOutExpo",
                            "${Group3}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid11008",
                            "left",
                            10437,
                            219,
                            "easeOutExpo",
                            "${Group3}",
                            '0px',
                            '-52px'
                        ],
                        [
                            "eid11014",
                            "display",
                            0,
                            0,
                            "easeOutSine",
                            "${mc_brillo}",
                            'none',
                            'none'
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
                            "eid11004",
                            "opacity",
                            10000,
                            437,
                            "easeOutExpo",
                            "${Group3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10999",
                            "opacity",
                            8594,
                            437,
                            "easeOutExpo",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11011",
                            "display",
                            2812,
                            0,
                            "linear",
                            "${boca}",
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
                            rect: ['-9px', '-2px', '39px', '15px', 'auto', 'auto'],
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
                            rect: ['-7px', '0px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_42.png', '0px', '0px']
                        },
                        {
                            rect: ['-11px', '0px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_32.png', '0px', '0px']
                        },
                        {
                            rect: ['-8px', '-1px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_22.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-1px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_52.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '-1px', '34px', '21px', 'auto', 'auto'],
                            id: 'boca_f_1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/boca_f_12.png', '0px', '0px']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page6_edgeActions.js");
})("EDGE-2530226574");
