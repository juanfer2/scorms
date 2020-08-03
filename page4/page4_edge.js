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
                            rect: ['88px', '122px', '654px', '448px', 'auto', 'auto'],
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
                            rect: ['773px', '226px', '239px', '239px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"circle.png",'0px','0px']
                        },
                        {
                            id: 'personaje2',
                            type: 'image',
                            rect: ['650px', '168px', '314px', '305px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"personaje.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['823px', '245px', '39px', '18px', 'auto', 'auto'],
                            fill: ["rgba(210,150,111,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['845px', '236px', '24px', '18px', 'auto', 'auto'],
                            fill: ["rgba(210,150,111,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'bocamale',
                            symbolName: 'bocamale',
                            display: 'none',
                            type: 'rect',
                            rect: ['799px', '231px', '87', '36', 'auto', 'auto'],
                            transform: [[],[],[],['0.8046','0.8046']]
                        },
                        {
                            id: 'pi_3',
                            type: 'image',
                            rect: ['128px', '390px', '519px', '115px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pi_3.png",'0px','0px']
                        },
                        {
                            id: 'mc_brillo',
                            symbolName: 'mc_brillo_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['783', '581', '221', '86', 'auto', 'auto']
                        },
                        {
                            id: 'pi_2',
                            type: 'image',
                            rect: ['195px', '319px', '451px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pi_2.png",'0px','0px']
                        },
                        {
                            id: 'pi_1',
                            type: 'image',
                            rect: ['258px', '216px', '390px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pi_1.png",'0px','0px']
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
                    duration: 18503.5,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10950",
                            "opacity",
                            536,
                            293,
                            "linear",
                            "${personaje2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10948",
                            "top",
                            536,
                            293,
                            "linear",
                            "${personaje2}",
                            '168px',
                            '153px'
                        ],
                        [
                            "eid10956",
                            "opacity",
                            15000,
                            750,
                            "easeOutBack",
                            "${pi_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10986",
                            "display",
                            829,
                            0,
                            "linear",
                            "${bocamale}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10954",
                            "top",
                            15000,
                            750,
                            "easeOutBack",
                            "${pi_3}",
                            '390px',
                            '424px'
                        ],
                        [
                            "eid10960",
                            "opacity",
                            9145,
                            605,
                            "easeOutBack",
                            "${pi_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10958",
                            "opacity",
                            12058,
                            633,
                            "easeOutBack",
                            "${pi_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10996",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mc_brillo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10925",
                            "height",
                            0,
                            329,
                            "linear",
                            "${circle}",
                            '154px',
                            '239px'
                        ],
                        [
                            "eid10934",
                            "height",
                            329,
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
                            "eid10957",
                            "top",
                            12058,
                            633,
                            "easeOutBack",
                            "${pi_2}",
                            '285px',
                            '319px'
                        ],
                        [
                            "eid10959",
                            "top",
                            9145,
                            605,
                            "easeOutBack",
                            "${pi_1}",
                            '182px',
                            '216px'
                        ],
                        [
                            "eid10931",
                            "top",
                            0,
                            329,
                            "linear",
                            "${circle}",
                            '271px',
                            '228px'
                        ],
                        [
                            "eid10937",
                            "top",
                            329,
                            192,
                            "linear",
                            "${circle}",
                            '228px',
                            '241px'
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
                            "eid10929",
                            "left",
                            0,
                            329,
                            "linear",
                            "${circle}",
                            '773px',
                            '731px'
                        ],
                        [
                            "eid10936",
                            "left",
                            329,
                            192,
                            "linear",
                            "${circle}",
                            '731px',
                            '744px'
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
                            "eid10989",
                            "display",
                            829,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10927",
                            "width",
                            0,
                            329,
                            "linear",
                            "${circle}",
                            '154px',
                            '239px'
                        ],
                        [
                            "eid10935",
                            "width",
                            329,
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
                            "eid10952",
                            "opacity",
                            6044,
                            278,
                            "linear",
                            "${board}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10988",
                            "display",
                            829,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10933",
                            "opacity",
                            0,
                            329,
                            "linear",
                            "${circle}",
                            '0',
                            '1'
                        ],
                            [ "eid10987", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bocamale}', [] ] ]
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
            "cont": {
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '50px', '34px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 337,
                    autoPlay: true,
                    data: [
                        [
                            "eid10861",
                            "background-color",
                            0,
                            337,
                            "linear",
                            "${Rectangle2}",
                            'rgba(192,192,192,1)',
                            'rgba(225,76,76,1.00)'
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
                            rect: ['6px', '0px', '69px', '34px', 'auto', 'auto'],
                            id: 'boca_m_5',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_4.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '1px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_3.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '4px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_1',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_1.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '2px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_2',
                            type: 'image',
                            display: 'block',
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
                    duration: 2250,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10954",
                            "display",
                            114,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10955",
                            "display",
                            249,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10964",
                            "display",
                            596,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10965",
                            "display",
                            750,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10968",
                            "display",
                            1205,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10969",
                            "display",
                            1341,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10978",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10979",
                            "display",
                            2135,
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
                            447,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10966",
                            "display",
                            750,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10967",
                            "display",
                            910,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10970",
                            "display",
                            1341,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10971",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10985",
                            "display",
                            2135,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10960",
                            "display",
                            1063,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10961",
                            "display",
                            1205,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10974",
                            "display",
                            1852,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10975",
                            "display",
                            2000,
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
                            114,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10962",
                            "display",
                            447,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10963",
                            "display",
                            596,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10972",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10973",
                            "display",
                            1673,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10958",
                            "display",
                            910,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10959",
                            "display",
                            1063,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10976",
                            "display",
                            1673,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10977",
                            "display",
                            1852,
                            0,
                            "linear",
                            "${boca_m_4}",
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
                    duration: 1361,
                    autoPlay: true,
                    labels: {
                        "sale": 82
                    },
                    data: [
                        [
                            "eid10515",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${brillo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid10516",
                            "opacity",
                            500,
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page4_edgeActions.js");
})("EDGE-2530226574");
