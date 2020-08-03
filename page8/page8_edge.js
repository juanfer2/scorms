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
                            id: 'fondo2',
                            type: 'image',
                            rect: ['86px', '110px', '853px', '461px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.png",'0px','0px']
                        },
                        {
                            id: 'way',
                            type: 'image',
                            rect: ['118px', '156px', '788px', '393px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"way.png",'0px','0px']
                        },
                        {
                            id: 'sombra1',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['615', '207', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra2',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['784px', '301px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra3',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['615px', '418px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra4',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['428px', '424px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra5',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['124px', '413px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra6',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['266px', '314px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra7',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['149px', '163px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'sombra8',
                            symbolName: 'sombras',
                            type: 'rect',
                            rect: ['449px', '254px', '117', '117', 'auto', 'auto']
                        },
                        {
                            id: 'b2',
                            symbolName: 'b2',
                            type: 'rect',
                            rect: ['789px', '309px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b3',
                            symbolName: 'b3',
                            type: 'rect',
                            rect: ['622px', '425px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b4',
                            symbolName: 'b4',
                            type: 'rect',
                            rect: ['432px', '431px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b5',
                            symbolName: 'b5',
                            type: 'rect',
                            rect: ['128px', '421px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b7',
                            symbolName: 'b7',
                            type: 'rect',
                            rect: ['154px', '167px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b1',
                            symbolName: 'b1',
                            display: 'none',
                            type: 'rect',
                            rect: ['631px', '226px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.20192','1.20192']]
                        },
                        {
                            id: 'b6',
                            symbolName: 'b6',
                            type: 'rect',
                            rect: ['271px', '320px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'b8',
                            symbolName: 'b8',
                            type: 'rect',
                            rect: ['454px', '261px', '104', '104', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'visto',
                            type: 'image',
                            rect: ['621px', '214px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto2',
                            type: 'image',
                            rect: ['789px', '310px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto3',
                            type: 'image',
                            rect: ['622px', '425px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto4',
                            type: 'image',
                            rect: ['432px', '431px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto5',
                            type: 'image',
                            rect: ['128px', '421px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto6',
                            type: 'image',
                            rect: ['272px', '319px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto7',
                            type: 'image',
                            rect: ['154px', '167px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'visto8',
                            type: 'image',
                            rect: ['454px', '261px', '104px', '104px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"visto.png",'0px','0px']
                        },
                        {
                            id: 'l_6',
                            symbolName: 'l_6',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_1',
                            symbolName: 'l_1',
                            type: 'rect',
                            rect: ['234', '253', '559', '179', 'auto', 'auto']
                        },
                        {
                            id: 'l_2',
                            symbolName: 'l_2',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_3',
                            symbolName: 'l_3',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_4',
                            symbolName: 'l_4',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_5',
                            symbolName: 'l_5',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_7',
                            symbolName: 'l_7',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'l_8',
                            symbolName: 'l_8',
                            type: 'rect',
                            rect: ['234px', '253px', 'undefined', 'undefined', 'auto', 'auto']
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
                            id: 'mc_brillo2',
                            symbolName: 'mc_brillo',
                            display: 'none',
                            type: 'rect',
                            rect: ['783', '581', '221', '86', 'auto', 'auto']
                        },
                        {
                            id: 'cont',
                            symbolName: 'cont',
                            type: 'rect',
                            rect: ['1052px', '214px', '50', '34', 'auto', 'auto']
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
                            id: 'Rectangle2',
                            display: 'block',
                            type: 'rect',
                            rect: ['108px', '142px', '802px', '393px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 11567,
                    autoPlay: true,
                    labels: {
                        "arranca": 0
                    },
                    data: [
                        [
                            "eid11159",
                            "top",
                            4398,
                            0,
                            "linear",
                            "${cont}",
                            '214px',
                            '214px'
                        ],
                        [
                            "eid10896",
                            "scaleY",
                            3688,
                            192,
                            "linear",
                            "${b7}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10897",
                            "scaleY",
                            3880,
                            163,
                            "linear",
                            "${b7}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10875",
                            "display",
                            2623,
                            0,
                            "linear",
                            "${b4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10876",
                            "top",
                            2978,
                            192,
                            "linear",
                            "${b5}",
                            '421px',
                            '417px'
                        ],
                        [
                            "eid10877",
                            "top",
                            3170,
                            163,
                            "linear",
                            "${b5}",
                            '417px',
                            '421px'
                        ],
                        [
                            "eid10835",
                            "scaleX",
                            1558,
                            192,
                            "linear",
                            "${b1}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10842",
                            "scaleX",
                            1750,
                            163,
                            "linear",
                            "${b1}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10902",
                            "display",
                            3688,
                            0,
                            "linear",
                            "${b7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10884",
                            "display",
                            2978,
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
                            "eid10866",
                            "display",
                            2268,
                            0,
                            "linear",
                            "${b3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10764",
                            "opacity",
                            1107,
                            298,
                            "linear",
                            "${way}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10855",
                            "left",
                            1913,
                            192,
                            "linear",
                            "${b2}",
                            '789px',
                            '789px'
                        ],
                        [
                            "eid10856",
                            "left",
                            2105,
                            163,
                            "linear",
                            "${b2}",
                            '789px',
                            '789px'
                        ],
                        [
                            "eid10898",
                            "scaleX",
                            3688,
                            192,
                            "linear",
                            "${b7}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10899",
                            "scaleX",
                            3880,
                            163,
                            "linear",
                            "${b7}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10887",
                            "scaleY",
                            3333,
                            192,
                            "linear",
                            "${b6}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10888",
                            "scaleY",
                            3525,
                            163,
                            "linear",
                            "${b6}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10867",
                            "top",
                            2623,
                            192,
                            "linear",
                            "${b4}",
                            '431px',
                            '427px'
                        ],
                        [
                            "eid10868",
                            "top",
                            2815,
                            163,
                            "linear",
                            "${b4}",
                            '427px',
                            '431px'
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
                            "eid10885",
                            "top",
                            3333,
                            192,
                            "linear",
                            "${b6}",
                            '320px',
                            '316px'
                        ],
                        [
                            "eid10886",
                            "top",
                            3525,
                            163,
                            "linear",
                            "${b6}",
                            '316px',
                            '319px'
                        ],
                        [
                            "eid10889",
                            "scaleX",
                            3333,
                            192,
                            "linear",
                            "${b6}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10890",
                            "scaleX",
                            3525,
                            163,
                            "linear",
                            "${b6}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10851",
                            "scaleY",
                            1913,
                            192,
                            "linear",
                            "${b2}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10852",
                            "scaleY",
                            2105,
                            163,
                            "linear",
                            "${b2}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10858",
                            "top",
                            2268,
                            192,
                            "linear",
                            "${b3}",
                            '425px',
                            '421px'
                        ],
                        [
                            "eid10859",
                            "top",
                            2460,
                            163,
                            "linear",
                            "${b3}",
                            '421px',
                            '425px'
                        ],
                        [
                            "eid10882",
                            "left",
                            2978,
                            192,
                            "linear",
                            "${b5}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid10883",
                            "left",
                            3170,
                            163,
                            "linear",
                            "${b5}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid10909",
                            "left",
                            4043,
                            192,
                            "linear",
                            "${b8}",
                            '454px',
                            '454px'
                        ],
                        [
                            "eid10910",
                            "left",
                            4235,
                            163,
                            "linear",
                            "${b8}",
                            '454px',
                            '454px'
                        ],
                        [
                            "eid10857",
                            "display",
                            1913,
                            0,
                            "linear",
                            "${b2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10873",
                            "left",
                            2623,
                            192,
                            "linear",
                            "${b4}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid10874",
                            "left",
                            2815,
                            163,
                            "linear",
                            "${b4}",
                            '432px',
                            '432px'
                        ],
                        [
                            "eid10911",
                            "display",
                            4043,
                            0,
                            "linear",
                            "${b8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10839",
                            "left",
                            1558,
                            192,
                            "linear",
                            "${b1}",
                            '621px',
                            '621px'
                        ],
                        [
                            "eid10844",
                            "left",
                            1750,
                            163,
                            "linear",
                            "${b1}",
                            '621px',
                            '621px'
                        ],
                        [
                            "eid11161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mc_brillo2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10871",
                            "scaleX",
                            2623,
                            192,
                            "linear",
                            "${b4}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10872",
                            "scaleX",
                            2815,
                            163,
                            "linear",
                            "${b4}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10880",
                            "scaleX",
                            2978,
                            192,
                            "linear",
                            "${b5}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10881",
                            "scaleX",
                            3170,
                            163,
                            "linear",
                            "${b5}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10864",
                            "left",
                            2268,
                            192,
                            "linear",
                            "${b3}",
                            '622px',
                            '622px'
                        ],
                        [
                            "eid10865",
                            "left",
                            2460,
                            163,
                            "linear",
                            "${b3}",
                            '622px',
                            '622px'
                        ],
                        [
                            "eid10894",
                            "top",
                            3688,
                            192,
                            "linear",
                            "${b7}",
                            '167px',
                            '163px'
                        ],
                        [
                            "eid10895",
                            "top",
                            3880,
                            163,
                            "linear",
                            "${b7}",
                            '163px',
                            '167px'
                        ],
                        [
                            "eid10900",
                            "left",
                            3688,
                            192,
                            "linear",
                            "${b7}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid10901",
                            "left",
                            3880,
                            163,
                            "linear",
                            "${b7}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid10849",
                            "top",
                            1913,
                            192,
                            "linear",
                            "${b2}",
                            '309px',
                            '305px'
                        ],
                        [
                            "eid10850",
                            "top",
                            2105,
                            163,
                            "linear",
                            "${b2}",
                            '305px',
                            '309px'
                        ],
                        [
                            "eid10891",
                            "left",
                            3333,
                            192,
                            "linear",
                            "${b6}",
                            '271px',
                            '271px'
                        ],
                        [
                            "eid10892",
                            "left",
                            3525,
                            163,
                            "linear",
                            "${b6}",
                            '271px',
                            '271px'
                        ],
                        [
                            "eid10905",
                            "scaleY",
                            4043,
                            192,
                            "linear",
                            "${b8}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10906",
                            "scaleY",
                            4235,
                            163,
                            "linear",
                            "${b8}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10837",
                            "scaleY",
                            1558,
                            192,
                            "linear",
                            "${b1}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10843",
                            "scaleY",
                            1750,
                            163,
                            "linear",
                            "${b1}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10903",
                            "top",
                            4043,
                            192,
                            "linear",
                            "${b8}",
                            '262px',
                            '258px'
                        ],
                        [
                            "eid10904",
                            "top",
                            4235,
                            163,
                            "linear",
                            "${b8}",
                            '258px',
                            '261px'
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
                            "eid10848",
                            "display",
                            1558,
                            0,
                            "linear",
                            "${b1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10878",
                            "scaleY",
                            2978,
                            192,
                            "linear",
                            "${b5}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10879",
                            "scaleY",
                            3170,
                            163,
                            "linear",
                            "${b5}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10763",
                            "opacity",
                            750,
                            298,
                            "linear",
                            "${fondo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10869",
                            "scaleY",
                            2623,
                            192,
                            "linear",
                            "${b4}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10870",
                            "scaleY",
                            2815,
                            163,
                            "linear",
                            "${b4}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10893",
                            "display",
                            3333,
                            0,
                            "linear",
                            "${b6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10860",
                            "scaleY",
                            2268,
                            192,
                            "linear",
                            "${b3}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10861",
                            "scaleY",
                            2460,
                            163,
                            "linear",
                            "${b3}",
                            '1.20192',
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
                            "eid10853",
                            "scaleX",
                            1913,
                            192,
                            "linear",
                            "${b2}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10854",
                            "scaleX",
                            2105,
                            163,
                            "linear",
                            "${b2}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10841",
                            "top",
                            1558,
                            192,
                            "linear",
                            "${b1}",
                            '215px',
                            '211px'
                        ],
                        [
                            "eid10845",
                            "top",
                            1750,
                            163,
                            "linear",
                            "${b1}",
                            '211px',
                            '214px'
                        ],
                        [
                            "eid11162",
                            "display",
                            11311,
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
                            "eid10907",
                            "scaleX",
                            4043,
                            192,
                            "linear",
                            "${b8}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10908",
                            "scaleX",
                            4235,
                            163,
                            "linear",
                            "${b8}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid10862",
                            "scaleX",
                            2268,
                            192,
                            "linear",
                            "${b3}",
                            '0.69231',
                            '1.20192'
                        ],
                        [
                            "eid10863",
                            "scaleX",
                            2460,
                            163,
                            "linear",
                            "${b3}",
                            '1.20192',
                            '1'
                        ],
                        [
                            "eid11158",
                            "left",
                            4398,
                            0,
                            "linear",
                            "${cont}",
                            '1052px',
                            '1052px'
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
            "b1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_1ov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/1ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11223",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1ov}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_2pv',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/2pv.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11224",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2pv}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_3ov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/3ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11225",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3ov}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/4.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_4ov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/4ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11226",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4ov}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_5',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/5.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_5ov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/5ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11227",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_5ov}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/6.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_6ov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/6ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11228",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_6ov}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/7.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_7ov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/7ov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11229",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_7ov}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "b8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fin',
                            type: 'image',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fin.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: 'finov',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/finov.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid11230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${finov}",
                            'none',
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
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            rect: ['-38px', '-12px', '636px', '204px', 'auto', 'auto'],
                            id: 'l14',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/l1.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['509px', '23px', '27px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10957",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l14}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid10963",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l14}",
                            '636px',
                            '559px'
                        ],
                        [
                            "eid10961",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l14}",
                            '21px',
                            '-14px'
                        ],
                        [
                            "eid10965",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l14}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10955",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l14}",
                            '135px',
                            '204px'
                        ],
                        [
                            "eid10962",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l14}",
                            '204px',
                            '179px'
                        ],
                        [
                            "eid10966",
                            "display",
                            155,
                            0,
                            "linear",
                            "${l14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10959",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l14}",
                            '69px',
                            '-39px'
                        ],
                        [
                            "eid10964",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l14}",
                            '-39px',
                            '-1px'
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
                            isStage: 'true',
                            rect: [undefined, undefined, '50px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 905,
                    autoPlay: true,
                    data: [
                        [
                            "eid10861",
                            "background-color",
                            0,
                            905,
                            "linear",
                            "${Rectangle2}",
                            'rgba(192,192,192,1)',
                            'rgba(225,76,76,1.00)'
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
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            rect: ['0px', '0px', '559px', '179px', 'auto', 'auto'],
                            id: 'l2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/l2.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['509px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid11062",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l2}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid11063",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l2}",
                            '636px',
                            '559px'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11057",
                            "display",
                            155,
                            0,
                            "linear",
                            "${l2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11060",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l2}",
                            '70px',
                            '-38px'
                        ],
                        [
                            "eid11061",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l2}",
                            '-38px',
                            '0px'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11055",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l2}",
                            '21px',
                            '-14px'
                        ],
                        [
                            "eid11056",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l2}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid11058",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l2}",
                            '135px',
                            '204px'
                        ],
                        [
                            "eid11059",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l2}",
                            '204px',
                            '179px'
                        ],
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
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
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            rect: ['-49px', '-124px', '618px', '404px', 'auto', 'auto'],
                            id: 'l32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/l3.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['507px', '-67px', '27px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid11078",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l32}",
                            '62px',
                            '-51px'
                        ],
                        [
                            "eid11086",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l32}",
                            '-51px',
                            '-10px'
                        ],
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11088",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11087",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '-67px',
                            '-67px'
                        ],
                        [
                            "eid11080",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l32}",
                            '-53px',
                            '-125px'
                        ],
                        [
                            "eid11085",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l32}",
                            '-125px',
                            '-99px'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11076",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l32}",
                            '431px',
                            '657px'
                        ],
                        [
                            "eid11084",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l32}",
                            '657px',
                            '575px'
                        ],
                        [
                            "eid11074",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l32}",
                            '282px',
                            '429px'
                        ],
                        [
                            "eid11083",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l32}",
                            '429px',
                            '376px'
                        ],
                        [
                            "eid11082",
                            "opacity",
                            155,
                            200,
                            "linear",
                            "${l32}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "l_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            type: 'image',
                            id: 'l4',
                            opacity: '0',
                            rect: ['-68px', '-42px', '684px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/l4.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['507px', '-1px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11140",
                            "left",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11094",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l4}",
                            '3px',
                            '-42px'
                        ],
                        [
                            "eid11102",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l4}",
                            '-42px',
                            '-28px'
                        ],
                        [
                            "eid11139",
                            "top",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid11092",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l4}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid11100",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l4}",
                            '636px',
                            '564px'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11096",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l4}",
                            '69px',
                            '-39px'
                        ],
                        [
                            "eid11101",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l4}",
                            '-39px',
                            '-4px'
                        ],
                        [
                            "eid11090",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l4}",
                            '172px',
                            '261px'
                        ],
                        [
                            "eid11099",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l4}",
                            '261px',
                            '232px'
                        ],
                        [
                            "eid11098",
                            "opacity",
                            155,
                            200,
                            "linear",
                            "${l4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "l_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            rect: ['0px', '0px', '559px', '179px', 'auto', 'auto'],
                            id: 'l5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/l5.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['509px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid11108",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l5}",
                            '70px',
                            '-38px'
                        ],
                        [
                            "eid11109",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l5}",
                            '-38px',
                            '0px'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11106",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l5}",
                            '135px',
                            '204px'
                        ],
                        [
                            "eid11107",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l5}",
                            '204px',
                            '179px'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11105",
                            "display",
                            155,
                            0,
                            "linear",
                            "${l5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11103",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l5}",
                            '21px',
                            '-14px'
                        ],
                        [
                            "eid11104",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l5}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11110",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l5}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid11111",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l5}",
                            '636px',
                            '559px'
                        ]
                    ]
                }
            },
            "l_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle2',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            id: 'l6',
                            type: 'image',
                            rect: ['0px', '0px', '559px', '179px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/l6.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['509px', '23px', '27px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11117",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l6}",
                            '70px',
                            '-38px'
                        ],
                        [
                            "eid11118",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l6}",
                            '-38px',
                            '0px'
                        ],
                        [
                            "eid11119",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l6}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid11120",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l6}",
                            '636px',
                            '559px'
                        ],
                        [
                            "eid11112",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l6}",
                            '21px',
                            '-14px'
                        ],
                        [
                            "eid11113",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l6}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11115",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l6}",
                            '135px',
                            '204px'
                        ],
                        [
                            "eid11116",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l6}",
                            '204px',
                            '179px'
                        ],
                        [
                            "eid11114",
                            "display",
                            155,
                            0,
                            "linear",
                            "${l6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "l_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            rect: ['0px', '0px', '559px', '179px', 'auto', 'auto'],
                            id: 'l7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/l7.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['509px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11124",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l7}",
                            '135px',
                            '204px'
                        ],
                        [
                            "eid11125",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l7}",
                            '204px',
                            '179px'
                        ],
                        [
                            "eid11126",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l7}",
                            '70px',
                            '-38px'
                        ],
                        [
                            "eid11127",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l7}",
                            '-38px',
                            '0px'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11128",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l7}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid11129",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l7}",
                            '636px',
                            '559px'
                        ],
                        [
                            "eid11123",
                            "display",
                            155,
                            0,
                            "linear",
                            "${l7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11121",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l7}",
                            '21px',
                            '-14px'
                        ],
                        [
                            "eid11122",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l7}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "l_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-234px', '-253px', '1024px', '650px', 'auto', 'auto'],
                            opacity: '1',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.59)']
                        },
                        {
                            rect: ['0px', '0px', '559px', '179px', 'auto', 'auto'],
                            id: 'l8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/l8.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['509px', '23px', '27px', '25px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '0',
                            fill: ['rgba(0,0,0,0.5922)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '559px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid11132",
                            "display",
                            155,
                            0,
                            "linear",
                            "${l8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10925",
                            "display",
                            442,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10921",
                            "opacity",
                            48,
                            452,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11135",
                            "left",
                            155,
                            200,
                            "linear",
                            "${l8}",
                            '70px',
                            '-38px'
                        ],
                        [
                            "eid11136",
                            "left",
                            355,
                            145,
                            "linear",
                            "${l8}",
                            '-38px',
                            '0px'
                        ],
                        [
                            "eid10920",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10919",
                            "display",
                            48,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11130",
                            "top",
                            155,
                            200,
                            "linear",
                            "${l8}",
                            '21px',
                            '-14px'
                        ],
                        [
                            "eid11131",
                            "top",
                            355,
                            145,
                            "linear",
                            "${l8}",
                            '-14px',
                            '0px'
                        ],
                        [
                            "eid11137",
                            "width",
                            155,
                            200,
                            "linear",
                            "${l8}",
                            '420px',
                            '636px'
                        ],
                        [
                            "eid11138",
                            "width",
                            355,
                            145,
                            "linear",
                            "${l8}",
                            '636px',
                            '559px'
                        ],
                        [
                            "eid10940",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid11133",
                            "height",
                            155,
                            200,
                            "linear",
                            "${l8}",
                            '135px',
                            '204px'
                        ],
                        [
                            "eid11134",
                            "height",
                            355,
                            145,
                            "linear",
                            "${l8}",
                            '204px',
                            '179px'
                        ]
                    ]
                }
            },
            "b2_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_2',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            id: '_2pv',
                            fill: ['rgba(0,0,0,0)', 'images/2pv.png', '0px', '0px']
                        },
                        {
                            id: 'visto',
                            rect: ['0px', '0px', '104px', '104px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/visto.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '104px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 123,
                    autoPlay: true,
                    labels: {
                        "ini": 0,
                        "ho": 90
                    },
                    data: [
                        [
                            "eid10827",
                            "display",
                            53,
                            0,
                            "linear",
                            "${_2pv}",
                            'none',
                            'block'
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
                            rect: [null, null, '221px', '86px']
                        }
                    }
                },
                timeline: {
                    duration: 2416,
                    autoPlay: true,
                    labels: {
                        "ini": 921
                    },
                    data: [
                        [
                            "eid10753",
                            "opacity",
                            921,
                            426,
                            "linear",
                            "${resplandor2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10754",
                            "opacity",
                            1347,
                            403,
                            "linear",
                            "${resplandor2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "cont_1": {
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
                            fill: ['rgba(10,207,71,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 555.02138972514,
                    autoPlay: true,
                    data: [
                        [
                            "eid10861",
                            "background-color",
                            0,
                            555,
                            "linear",
                            "${Rectangle2}",
                            'rgba(192,192,192,1)',
                            'rgba(10,207,71,1.00)'
                        ]
                    ]
                }
            },
            "sombras": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1', '1.12999']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 's1',
                            opacity: '0',
                            rect: ['0px', '0px', '117px', '117px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 11.538461538462, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 11.538461538462, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(0,180,233,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '117px']
                        }
                    }
                },
                timeline: {
                    duration: 1631,
                    autoPlay: true,
                    labels: {
                        "ini": 75
                    },
                    data: [
                        [
                            "eid11168",
                            "opacity",
                            144,
                            481,
                            "linear",
                            "${s1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11176",
                            "opacity",
                            844,
                            481,
                            "linear",
                            "${s1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11165",
                            "scaleX",
                            144,
                            481,
                            "linear",
                            "${s1}",
                            '1',
                            '1.12999'
                        ],
                        [
                            "eid11175",
                            "scaleX",
                            844,
                            481,
                            "linear",
                            "${s1}",
                            '1.12999',
                            '1'
                        ],
                        [
                            "eid11166",
                            "scaleY",
                            625,
                            0,
                            "linear",
                            "${s1}",
                            '1.12999',
                            '1.12999'
                        ],
                        [
                            "eid11174",
                            "scaleY",
                            1325,
                            0,
                            "linear",
                            "${s1}",
                            '1.12999',
                            '1.12999'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("page8_edgeActions.js");
})("EDGE-2530226574");
