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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '27px', 'auto', 'auto'],
                            fill: ["rgba(226,226,226,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'ffinal',
                            type: 'image',
                            rect: ['1px', '145px', '1022px', '296px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ffinal.png",'0px','0px']
                        },
                        {
                            id: 'text',
                            type: 'image',
                            rect: ['-15px', '199px', '732px', '202px', 'auto', 'auto'],
                            clip: 'rect(0px 420px 202px 0px)',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"text.png",'0px','0px']
                        },
                        {
                            id: 'per_1',
                            display: 'block',
                            type: 'image',
                            rect: ['490px', '114px', '340px', '521px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"per_1.png",'0px','0px']
                        },
                        {
                            id: 'per_3',
                            display: 'none',
                            type: 'image',
                            rect: ['487px', '114px', '334px', '521px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"per_3.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['643px', '214px', '35px', '21px', 'auto', 'auto'],
                            fill: ["rgba(210,150,111,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['3']]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['669px', '203px', '26px', '21px', 'auto', 'auto'],
                            fill: ["rgba(210,150,111,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['3']]
                        },
                        {
                            id: 'per_2',
                            type: 'image',
                            rect: ['716px', '114px', '248px', '510px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"per_2.png",'0px','0px']
                        },
                        {
                            id: 'boca',
                            symbolName: 'boca',
                            display: 'none',
                            type: 'rect',
                            rect: ['845px', '237px', '34', '21', 'auto', 'auto']
                        },
                        {
                            id: 'bocamale',
                            symbolName: 'bocamale',
                            display: 'none',
                            type: 'rect',
                            rect: ['625px', '201px', '87', '36', 'auto', 'auto'],
                            transform: [[],[],[],['1.01676','1.01676']]
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
                            id: 't2',
                            type: 'image',
                            rect: ['71px', '442px', '466px', '76px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"t2.png",'0px','0px']
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
                    duration: 17000,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid10717",
                            "top",
                            9610,
                            350,
                            "easeInOutSine",
                            "${t2}",
                            '381px',
                            '438px'
                        ],
                        [
                            "eid10720",
                            "top",
                            9960,
                            142,
                            "easeInOutSine",
                            "${t2}",
                            '438px',
                            '442px'
                        ],
                        [
                            "eid10770",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10771",
                            "display",
                            4680,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10813",
                            "display",
                            9493,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10766",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${bocamale}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10790",
                            "display",
                            9493,
                            0,
                            "linear",
                            "${bocamale}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10767",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${per_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10715",
                            "clip",
                            2416,
                            584,
                            "linear",
                            "${text}",
                            [0,420,202,0],
                            [0,732,202,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10719",
                            "opacity",
                            9610,
                            350,
                            "easeInOutSine",
                            "${t2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10775",
                            "display",
                            2866,
                            0,
                            "linear",
                            "${boca}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10789",
                            "display",
                            4514,
                            0,
                            "linear",
                            "${boca}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10792",
                            "display",
                            9493,
                            0,
                            "linear",
                            "${boca}",
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
                            "eid10697",
                            "opacity",
                            1682,
                            534,
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
                            "eid10695",
                            "opacity",
                            1397,
                            534,
                            "linear",
                            "${per_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10693",
                            "left",
                            1397,
                            534,
                            "linear",
                            "${per_2}",
                            '716px',
                            '724px'
                        ],
                        [
                            "eid10769",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10768",
                            "display",
                            4680,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10826",
                            "display",
                            9493,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
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
                            "eid10713",
                            "opacity",
                            2416,
                            584,
                            "linear",
                            "${text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10691",
                            "opacity",
                            500,
                            415,
                            "linear",
                            "${ffinal}",
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
                            "eid10765",
                            "display",
                            2500,
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
                            "eid10696",
                            "left",
                            1682,
                            534,
                            "linear",
                            "${per_1}",
                            '482px',
                            '490px'
                        ],
                        [
                            "eid10709",
                            "left",
                            2416,
                            584,
                            "linear",
                            "${text}",
                            '270px',
                            '-6px'
                        ],
                        [
                            "eid10721",
                            "left",
                            3000,
                            154,
                            "linear",
                            "${text}",
                            '-6px',
                            '0px'
                        ],
                        [
                            "eid10772",
                            "top",
                            2416,
                            0,
                            "linear",
                            "${text}",
                            '199px',
                            '199px'
                        ],
                        [
                            "eid10773",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${text}",
                            '199px',
                            '199px'
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
                    duration: 3305,
                    autoPlay: true,
                    labels: {
                        "ini": 0
                    },
                    data: [
                        [
                            "eid10954",
                            "display",
                            250,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10955",
                            "display",
                            456,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10964",
                            "display",
                            907,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10965",
                            "display",
                            1113,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10968",
                            "display",
                            1746,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10969",
                            "display",
                            1947,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10978",
                            "display",
                            2898,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10979",
                            "display",
                            3104,
                            0,
                            "linear",
                            "${boca_m_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10956",
                            "display",
                            456,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10957",
                            "display",
                            657,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10966",
                            "display",
                            1113,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10967",
                            "display",
                            1314,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10970",
                            "display",
                            1947,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10971",
                            "display",
                            2148,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10980",
                            "display",
                            3104,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10981",
                            "display",
                            3305,
                            0,
                            "linear",
                            "${boca_m_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10960",
                            "display",
                            1527,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10961",
                            "display",
                            1746,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10974",
                            "display",
                            2648,
                            0,
                            "linear",
                            "${boca_m_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10975",
                            "display",
                            2898,
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
                            250,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10962",
                            "display",
                            657,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10963",
                            "display",
                            907,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10972",
                            "display",
                            2148,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10973",
                            "display",
                            2398,
                            0,
                            "linear",
                            "${boca_m_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10958",
                            "display",
                            1314,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10959",
                            "display",
                            1527,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10976",
                            "display",
                            2398,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10977",
                            "display",
                            2648,
                            0,
                            "linear",
                            "${boca_m_4}",
                            'block',
                            'none'
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
                            rect: ['-2px', '6px', '27px', '15px', 'auto', 'auto'],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page20_edgeActions.js");
})("EDGE-2530226574");
