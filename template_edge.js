/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'cabin, sans-serif': '<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.1.1.min.js",
            js+"EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '650px', 'auto', 'auto'],
                            opacity: '0.79310344827586',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'content',
                            symbolName: 'content',
                            type: 'rect',
                            rect: ['0%', '0%', '1280', '720', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle02',
                            display: 'none',
                            type: 'rect',
                            rect: ['25.5%', '85.8%', '354px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,45,84,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],['-42']]
                        },
                        {
                            id: 'cabe_2',
                            display: 'none',
                            type: 'image',
                            rect: ['284px', '0px', '242px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cabe_22.png",'0px','0px']
                        },
                        {
                            id: 'mask',
                            display: 'block',
                            type: 'rect',
                            rect: ['39.1%', '96.9%', '351px', '17px', 'auto', 'auto'],
                            fill: ["rgba(203,98,34,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'precargaInterna',
                            symbolName: 'precargaInterna',
                            display: 'none',
                            type: 'rect',
                            rect: ['39.2%', '40.9%', '220', '119', 'auto', 'auto']
                        },
                        {
                            id: 'f_izquierda',
                            symbolName: 'f_izquierda',
                            display: 'none',
                            type: 'rect',
                            rect: ['62.6%', '93.9%', '43', '43', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'f_derecha',
                            symbolName: 'f_derecha',
                            display: 'none',
                            type: 'rect',
                            rect: ['auto', '93.9%', '43', '43', '16.4%', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Rectangle0',
                            type: 'rect',
                            rect: ['-4px', '2px', '75px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'cabe_1',
                            type: 'image',
                            rect: ['0px', '0px', '317px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cabe_12.png",'0px','0px']
                        },
                        {
                            id: 'btn_home',
                            symbolName: 'btn_home',
                            type: 'rect',
                            rect: ['932px', '7px', '73', '32', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b1',
                            display: 'none',
                            type: 'image',
                            rect: ['463px', '164px', '286px', '85px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b1.png",'0px','0px']
                        },
                        {
                            id: 'b2',
                            display: 'none',
                            type: 'image',
                            rect: ['335px', '276px', '182px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b2.png",'0px','0px']
                        },
                        {
                            id: 'b3',
                            display: 'none',
                            type: 'image',
                            rect: ['520px', '275px', '181px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b3.png",'0px','0px']
                        },
                        {
                            id: 'b4',
                            display: 'none',
                            type: 'image',
                            rect: ['704px', '270px', '184px', '86px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b4.png",'0px','0px']
                        },
                        {
                            id: 'b5',
                            display: 'none',
                            type: 'image',
                            rect: ['464px', '382px', '288px', '82px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"b5.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0px', '0px', '8px', '2px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '650px', 'auto', 'auto'],
                            sizeRange: ['','1024px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(245,240,240,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10639",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${b2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10615",
                            "top",
                            0,
                            0,
                            "linear",
                            "${f_derecha}",
                            '93.85%',
                            '93.85%'
                        ],
                        [
                            "eid10538",
                            "top",
                            0,
                            0,
                            "linear",
                            "${mask}",
                            '96.94%',
                            '96.94%'
                        ],
                        [
                            "eid10404",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${Rectangle02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10637",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${b4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10407",
                            "display",
                            0,
                            0,
                            "easeOutQuad",
                            "${mask}",
                            'block',
                            'block'
                        ],
                        [
                            "eid10579",
                            "left",
                            0,
                            0,
                            "linear",
                            "${mask}",
                            '39.14%',
                            '39.14%'
                        ],
                        [
                            "eid10618",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_home}",
                            '932px',
                            '932px'
                        ],
                        [
                            "eid10624",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10208",
                            "display",
                            0,
                            0,
                            "linear",
                            "${f_izquierda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10621",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cabe_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10612",
                            "left",
                            0,
                            0,
                            "linear",
                            "${f_izquierda}",
                            '62.6%',
                            '62.6%'
                        ],
                        [
                            "eid10549",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle02}",
                            '85.83%',
                            '85.83%'
                        ],
                        [
                            "eid10640",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${b1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10638",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${b3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10614",
                            "top",
                            0,
                            0,
                            "linear",
                            "${f_izquierda}",
                            '93.85%',
                            '93.85%'
                        ],
                        [
                            "eid10607",
                            "top",
                            0,
                            0,
                            "linear",
                            "${precargaInterna}",
                            '40.92%',
                            '40.92%'
                        ],
                        [
                            "eid10617",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btn_home}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid10605",
                            "left",
                            0,
                            0,
                            "linear",
                            "${precargaInterna}",
                            '39.16%',
                            '39.16%'
                        ],
                        [
                            "eid10205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${precargaInterna}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${f_derecha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10609",
                            "right",
                            0,
                            0,
                            "linear",
                            "${f_derecha}",
                            '16.41%',
                            '16.41%'
                        ]
                    ]
                }
            },
            "precargaInterna": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '50px', '220px', '19px', 'auto', 'auto'],
                            id: 'loader-bar',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/loader-bar.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '220px', '119px']
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
            "f_izquierda": {
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
                            id: 'b_atras_1',
                            rect: ['0px', '0px', '167px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/atras.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '167px', '31px', 'auto', 'auto'],
                            id: 'b_atras_2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/atras_ov.png', '0px', '0px']
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
                            "eid10611",
                            "display",
                            0,
                            0,
                            "linear",
                            "${b_atras_2}",
                            'none',
                            'none'
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
                            type: 'image',
                            id: 'siguiente',
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
            "content": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '1280px', '720px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '720px']
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
            "btn_home": {
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
                            id: 'h1',
                            rect: ['0px', '0px', '73px', '32px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/h1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '73px', '32px', 'auto', 'auto'],
                            id: 'h2',
                            fill: ['rgba(0,0,0,0)', 'images/h2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10599",
                            "display",
                            0,
                            0,
                            "linear",
                            "${h2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("template_edgeActions.js");
})("EDGE-2530226574");
