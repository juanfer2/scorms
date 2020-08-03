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
                            id: 'fondo_1',
                            type: 'image',
                            rect: ['4px', '12px', '1020px', '632px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo_1.png",'0px','0px']
                        },
                        {
                            id: 'silla_1',
                            type: 'image',
                            rect: ['8px', '302px', '309px', '240px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"silla_1.png",'0px','0px']
                        },
                        {
                            id: 'silla_2',
                            type: 'image',
                            rect: ['712px', '337px', '309px', '240px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"silla_2.png",'0px','0px']
                        },
                        {
                            id: 'text_1',
                            type: 'image',
                            rect: ['260px', '97px', '503px', '326px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text_1.png",'0px','0px']
                        },
                        {
                            id: 'per_2',
                            type: 'image',
                            rect: ['660px', '155px', '228px', '457px', 'auto', 'auto'],
                            clip: 'rect(-6px 228px 457px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"per_2.png",'0px','0px']
                        },
                        {
                            id: 'per_1',
                            type: 'image',
                            rect: ['183px', '168px', '180px', '444px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"per_1.png",'0px','0px']
                        },
                        {
                            id: 'boca',
                            symbolName: 'boca',
                            display: 'none',
                            type: 'rect',
                            rect: ['200px', '236px', '34', '21', 'auto', 'auto'],
                            transform: [[],[],[],['0.58824','0.58824']]
                        },
                        {
                            id: 'cabezam',
                            display: 'none',
                            type: 'image',
                            rect: ['805px', '161px', '62px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cabezam.png",'0px','0px']
                        },
                        {
                            id: 'bocamale',
                            symbolName: 'bocamale',
                            display: 'none',
                            type: 'rect',
                            rect: ['787px', '203px', '87', '36', 'auto', 'auto'],
                            transform: [[],[],[],['0.57471','0.57471']]
                        },
                        {
                            id: 'boca_m_2',
                            display: 'none',
                            type: 'image',
                            rect: ['816px', '215px', '35px', '16px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"boca_m_2.png",'0px','0px']
                        },
                        {
                            id: 'bt_1',
                            symbolName: 'bt_1',
                            type: 'rect',
                            rect: ['326px', '297px', '83', '112', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'cont',
                            symbolName: 'cont',
                            display: 'none',
                            type: 'rect',
                            rect: ['1051px', '291px', '50', '34', 'auto', 'auto']
                        },
                        {
                            id: 'bt_2',
                            symbolName: 'bt_2',
                            type: 'rect',
                            rect: ['470px', '296px', '84', '112', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'bt_3',
                            symbolName: 'bt_3',
                            type: 'rect',
                            rect: ['610px', '296px', '84', '112', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'l_1',
                            symbolName: 'l_1',
                            type: 'rect',
                            rect: ['285', '256', '457', '179', 'auto', 'auto']
                        },
                        {
                            id: 'l_2',
                            symbolName: 'l_2',
                            type: 'rect',
                            rect: ['285px', '256px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_3',
                            symbolName: 'l_3',
                            type: 'rect',
                            rect: ['285px', '256px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle3',
                            display: 'block',
                            type: 'rect',
                            rect: ['271px', '272px', '471px', '149px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.5922)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle2',
                                display: 'none',
                                type: 'rect',
                                rect: ['294px', '-343px', '434px', '144px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(192,192,192,1)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
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
                            id: 'mc_brillo',
                            symbolName: 'mc_brillo_1',
                            type: 'rect',
                            rect: ['783', '581', '221', '86', 'auto', 'auto']
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
                    duration: 34675,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10910",
                            "clip",
                            3854,
                            50,
                            "linear",
                            "${per_2}",
                            [-6,228,457,0],
                            [73,228,457,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10823",
                            "opacity",
                            835,
                            272,
                            "linear",
                            "${silla_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10854",
                            "opacity",
                            27293,
                            250,
                            "linear",
                            "${bt_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10903",
                            "display",
                            3904,
                            0,
                            "linear",
                            "${cabezam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10852",
                            "top",
                            27293,
                            250,
                            "linear",
                            "${bt_2}",
                            '280px',
                            '304px'
                        ],
                        [
                            "eid10853",
                            "top",
                            27543,
                            156,
                            "linear",
                            "${bt_2}",
                            '304px',
                            '296px'
                        ],
                        [
                            "eid10902",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${boca}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10983",
                            "display",
                            19332,
                            0,
                            "linear",
                            "${boca}",
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
                            "eid10819",
                            "left",
                            835,
                            272,
                            "linear",
                            "${silla_1}",
                            '8px',
                            '9px'
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
                            "eid10836",
                            "opacity",
                            1640,
                            360,
                            "linear",
                            "${per_2}",
                            '0',
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
                            "eid10825",
                            "opacity",
                            1048,
                            272,
                            "linear",
                            "${silla_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10951",
                            "display",
                            19451,
                            0,
                            "linear",
                            "${bocamale}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10821",
                            "top",
                            835,
                            272,
                            "linear",
                            "${silla_1}",
                            '302px',
                            '329px'
                        ],
                        [
                            "eid10909",
                            "top",
                            3904,
                            0,
                            "linear",
                            "${cabezam}",
                            '161px',
                            '161px'
                        ],
                        [
                            "eid10844",
                            "top",
                            26153,
                            250,
                            "linear",
                            "${bt_1}",
                            '280px',
                            '304px'
                        ],
                        [
                            "eid10845",
                            "top",
                            26403,
                            156,
                            "linear",
                            "${bt_1}",
                            '304px',
                            '296px'
                        ],
                        [
                            "eid10857",
                            "opacity",
                            28500,
                            250,
                            "linear",
                            "${bt_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10828",
                            "left",
                            1320,
                            362,
                            "linear",
                            "${per_1}",
                            '183px',
                            '133px'
                        ],
                        [
                            "eid10830",
                            "opacity",
                            1320,
                            362,
                            "linear",
                            "${per_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10988",
                            "display",
                            3904,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10987",
                            "display",
                            19451,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10817",
                            "opacity",
                            385,
                            320,
                            "linear",
                            "${fondo_1}",
                            '0',
                            '1'
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
                            "eid10851",
                            "opacity",
                            26153,
                            250,
                            "linear",
                            "${bt_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10834",
                            "left",
                            1640,
                            360,
                            "linear",
                            "${per_2}",
                            '660px',
                            '692px'
                        ],
                        [
                            "eid11029",
                            "display",
                            34348,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10901",
                            "display",
                            26450,
                            0,
                            "linear",
                            "${cont}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10824",
                            "top",
                            1048,
                            272,
                            "linear",
                            "${silla_2}",
                            '310px',
                            '337px'
                        ],
                        [
                            "eid10826",
                            "left",
                            1048,
                            272,
                            "linear",
                            "${silla_2}",
                            '711px',
                            '712px'
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
                            "eid11022",
                            "display",
                            26153,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11023",
                            "display",
                            28906,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
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
                            "eid10838",
                            "top",
                            7500,
                            357,
                            "linear",
                            "${text_1}",
                            '155px',
                            '97px'
                        ],
                        [
                            "eid10841",
                            "top",
                            7857,
                            123,
                            "linear",
                            "${text_1}",
                            '97px',
                            '109px'
                        ],
                        [
                            "eid10855",
                            "top",
                            28500,
                            250,
                            "linear",
                            "${bt_3}",
                            '280px',
                            '304px'
                        ],
                        [
                            "eid10856",
                            "top",
                            28750,
                            156,
                            "linear",
                            "${bt_3}",
                            '304px',
                            '296px'
                        ],
                        [
                            "eid10840",
                            "opacity",
                            7500,
                            357,
                            "linear",
                            "${text_1}",
                            '0',
                            '1'
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
            "bt_1": {
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
                            rect: ['0px', '0px', '83px', '112px', 'auto', 'auto'],
                            id: 'bt_1',
                            fill: ['rgba(0,0,0,0)', 'images/bt_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '83px', '112px', 'auto', 'auto'],
                            id: 'bt_1_ov',
                            fill: ['rgba(0,0,0,0)', 'images/bt_1_ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 148,
                    autoPlay: true,
                    data: [
                        [
                            "eid10755",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bt_1_ov}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10756",
                            "display",
                            71,
                            0,
                            "linear",
                            "${bt_1_ov}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10757",
                            "display",
                            71,
                            0,
                            "linear",
                            "${bt_1}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "bt_2": {
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
                            rect: ['0px', '0px', '84px', '112px', 'auto', 'auto'],
                            id: 'bt_2',
                            fill: ['rgba(0,0,0,0)', 'images/bt_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '84px', '112px', 'auto', 'auto'],
                            id: 'bt_2_ov',
                            fill: ['rgba(0,0,0,0)', 'images/bt_2_ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '84px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 166,
                    autoPlay: true,
                    data: [
                        [
                            "eid10760",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bt_2_ov}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10761",
                            "display",
                            83,
                            0,
                            "linear",
                            "${bt_2_ov}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10762",
                            "display",
                            83,
                            0,
                            "linear",
                            "${bt_2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "bt_3": {
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
                            rect: ['0px', '0px', '84px', '112px', 'auto', 'auto'],
                            id: 'bt_3',
                            fill: ['rgba(0,0,0,0)', 'images/bt_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '84px', '112px', 'auto', 'auto'],
                            id: 'bt_3_ov',
                            fill: ['rgba(0,0,0,0)', 'images/bt_3_ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '84px', '112px']
                        }
                    }
                },
                timeline: {
                    duration: 136,
                    autoPlay: true,
                    data: [
                        [
                            "eid10763",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bt_3_ov}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10764",
                            "display",
                            71,
                            0,
                            "linear",
                            "${bt_3_ov}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10765",
                            "display",
                            71,
                            0,
                            "linear",
                            "${bt_3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "l_1": {
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
                            rect: ['-285px', '-256px', '1024px', '650px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            type: 'image',
                            rect: ['-20px', '-14px', '493px', '193px', 'auto', 'auto'],
                            id: 'ov_1',
                            opacity: '0',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/ov_1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['415px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '457px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 634,
                    autoPlay: true,
                    data: [
                        [
                            "eid10785",
                            "opacity",
                            634,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10810",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ov_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10811",
                            "display",
                            250,
                            0,
                            "linear",
                            "${ov_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10784",
                            "display",
                            574,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10767",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10775",
                            "left",
                            250,
                            250,
                            "linear",
                            "${ov_1}",
                            '94px',
                            '-20px'
                        ],
                        [
                            "eid10783",
                            "left",
                            500,
                            134,
                            "linear",
                            "${ov_1}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid10777",
                            "top",
                            250,
                            250,
                            "linear",
                            "${ov_1}",
                            '38px',
                            '-7px'
                        ],
                        [
                            "eid10781",
                            "top",
                            500,
                            134,
                            "linear",
                            "${ov_1}",
                            '-7px',
                            '0px'
                        ],
                        [
                            "eid10768",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10769",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10771",
                            "height",
                            250,
                            250,
                            "linear",
                            "${ov_1}",
                            '104px',
                            '193px'
                        ],
                        [
                            "eid10780",
                            "height",
                            500,
                            134,
                            "linear",
                            "${ov_1}",
                            '193px',
                            '179px'
                        ],
                        [
                            "eid10773",
                            "width",
                            250,
                            250,
                            "linear",
                            "${ov_1}",
                            '265px',
                            '493px'
                        ],
                        [
                            "eid10782",
                            "width",
                            500,
                            134,
                            "linear",
                            "${ov_1}",
                            '493px',
                            '457px'
                        ],
                        [
                            "eid10779",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${ov_1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "l_2": {
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
                            rect: ['-285px', '-256px', '1024px', '650px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-2px', '0px', '457px', '179px', 'auto', 'auto'],
                            id: 'ov_2',
                            fill: ['rgba(0,0,0,0)', 'images/ov_2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['415px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '457px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 634,
                    autoPlay: true,
                    data: [
                        [
                            "eid10812",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ov_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10813",
                            "display",
                            250,
                            0,
                            "linear",
                            "${ov_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10785",
                            "opacity",
                            634,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10791",
                            "top",
                            250,
                            250,
                            "linear",
                            "${ov_2}",
                            '38px',
                            '-7px'
                        ],
                        [
                            "eid10792",
                            "top",
                            500,
                            134,
                            "linear",
                            "${ov_2}",
                            '-7px',
                            '0px'
                        ],
                        [
                            "eid10784",
                            "display",
                            574,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10767",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10795",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${ov_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10768",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10769",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10798",
                            "width",
                            250,
                            250,
                            "linear",
                            "${ov_2}",
                            '265px',
                            '493px'
                        ],
                        [
                            "eid10799",
                            "width",
                            500,
                            134,
                            "linear",
                            "${ov_2}",
                            '493px',
                            '457px'
                        ],
                        [
                            "eid10796",
                            "left",
                            250,
                            250,
                            "linear",
                            "${ov_2}",
                            '92px',
                            '-22px'
                        ],
                        [
                            "eid10797",
                            "left",
                            500,
                            134,
                            "linear",
                            "${ov_2}",
                            '-22px',
                            '-2px'
                        ],
                        [
                            "eid10793",
                            "height",
                            250,
                            250,
                            "linear",
                            "${ov_2}",
                            '104px',
                            '193px'
                        ],
                        [
                            "eid10794",
                            "height",
                            500,
                            134,
                            "linear",
                            "${ov_2}",
                            '193px',
                            '179px'
                        ]
                    ]
                }
            },
            "l_3": {
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
                            rect: ['-285px', '-256px', '1024px', '650px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '457px', '179px', 'auto', 'auto'],
                            id: 'ov_3',
                            fill: ['rgba(0,0,0,0)', 'images/ov_3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['415px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '457px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 634,
                    autoPlay: true,
                    data: [
                        [
                            "eid10785",
                            "opacity",
                            634,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10814",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ov_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10815",
                            "display",
                            250,
                            0,
                            "linear",
                            "${ov_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10784",
                            "display",
                            574,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10767",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10805",
                            "left",
                            250,
                            250,
                            "linear",
                            "${ov_3}",
                            '94px',
                            '-20px'
                        ],
                        [
                            "eid10806",
                            "left",
                            500,
                            134,
                            "linear",
                            "${ov_3}",
                            '-20px',
                            '0px'
                        ],
                        [
                            "eid10768",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10769",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10802",
                            "height",
                            250,
                            250,
                            "linear",
                            "${ov_3}",
                            '104px',
                            '193px'
                        ],
                        [
                            "eid10803",
                            "height",
                            500,
                            134,
                            "linear",
                            "${ov_3}",
                            '193px',
                            '179px'
                        ],
                        [
                            "eid10800",
                            "top",
                            250,
                            250,
                            "linear",
                            "${ov_3}",
                            '38px',
                            '-7px'
                        ],
                        [
                            "eid10801",
                            "top",
                            500,
                            134,
                            "linear",
                            "${ov_3}",
                            '-7px',
                            '0px'
                        ],
                        [
                            "eid10804",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${ov_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10807",
                            "width",
                            250,
                            250,
                            "linear",
                            "${ov_3}",
                            '265px',
                            '493px'
                        ],
                        [
                            "eid10808",
                            "width",
                            500,
                            134,
                            "linear",
                            "${ov_3}",
                            '493px',
                            '457px'
                        ]
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
                            rect: ['0px', '0px', '50px', '34px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
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
                            rect: ['6px', '0px', '69px', '34px', 'auto', 'auto'],
                            id: 'boca_m_5',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '1px', '69px', '32px', 'auto', 'auto'],
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
                            rect: ['18px', '2px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_2',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['18px', '4px', '69px', '32px', 'auto', 'auto'],
                            id: 'boca_m_1',
                            fill: ['rgba(0,0,0,0)', 'images/boca_m_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '87px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 2806,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10999",
                            "display",
                            0,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10990",
                            "display",
                            177,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11000",
                            "display",
                            900,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11001",
                            "display",
                            1077,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11018",
                            "display",
                            2599,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11019",
                            "display",
                            2806,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10993",
                            "display",
                            367,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10994",
                            "display",
                            545,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11004",
                            "display",
                            1267,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11005",
                            "display",
                            1445,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11010",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11011",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10997",
                            "display",
                            728,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10998",
                            "display",
                            900,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11008",
                            "display",
                            1628,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11009",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11016",
                            "display",
                            2404,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11017",
                            "display",
                            2599,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10991",
                            "display",
                            177,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10992",
                            "display",
                            367,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11002",
                            "display",
                            1077,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11003",
                            "display",
                            1267,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11014",
                            "display",
                            2208,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11015",
                            "display",
                            2404,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10995",
                            "display",
                            545,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10996",
                            "display",
                            728,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11006",
                            "display",
                            1445,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11007",
                            "display",
                            1628,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11012",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11013",
                            "display",
                            2208,
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
                            isStage: 'true',
                            rect: [undefined, undefined, '221px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 1404,
                    autoPlay: true,
                    labels: {
                        "ini": 83
                    },
                    data: [
                        [
                            "eid10753",
                            "opacity",
                            294,
                            426,
                            "linear",
                            "${resplandor2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10754",
                            "opacity",
                            720,
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page3_edgeActions.js");
})("EDGE-2530226574");
