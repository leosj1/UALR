console.log("topics", topics);
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    innerText = document.getElementById("word").innerText = "Topic 1";
    innerText = document.getElementById("chord").innerText = "Topic 1";
    innerText = document.getElementById("scatter").innerText = "Topic 1";

    $("li").on("click", function c(j) {
        document.getElementById("word").innerText = document.getElementById("chord").innerText = document.getElementById("scatter").innerText = document.getElementById(this.id).innerText;
        // document.getElementById("distribution").innerText = document.getElementById(this.id).innerText;
        // document.getElementById("scatter").innerText = document.getElementById(this.id).innerText;
    });
    // function findata(topic_name) {
    $("li").on("click", function c() {
        Object.keys(topics).map(topic => {
            if (topic === document.getElementById(this.id).innerText) {

                myConfig["series"] = topics[topic][0]["data"]["chord"]
                myConfig3.options.text = topics[topic][0]["data"]["word"]
                myConfig4["series"] = topics[topic][0]["data"]["scatter"]

                document.getElementById("distribution").innerText = topics[topic][0]["properties"]["Blog distribution"]
                document.getElementById("b_mentioned").innerText = topics[topic][0]["properties"]["Bloggers mentioned"]
                document.getElementById("p_mentioned").innerText = topics[topic][0]["properties"]["Posts mentioned"]
                document.getElementById("posting_loc").innerText = topics[topic][0]["properties"]["Posting Location"]

                rerender(myConfig)
                rerender3(myConfig3)
                rerender4(myConfig4)
                console.log(myConfig3["text"])

            }
        })
    });
});




var myConfig2 = {
    "globals": {
        "font-family": "Roboto"
    },
    "graphset": [
        {
            "type": "area",
            "background-color": "#fff",
            "utc": true,
            "title": {
                "y": "15px",
                "text": "Topic Trends of Past Week",
                "background-color": "none",
                "font-color": "#05636c",
                "font-size": "15px",
                "height": "25px",
                "adjust-layout": true,
                "textAlign": "left"
            },
            "plotarea": {
                "margin-top": "10%",
                "margin-right": "dynamic",
                "margin-bottom": "dynamic",
                "margin-left": "dynamic",
                "adjust-layout": false
            },
            "scale-y": {
                "values": "-40000:80000:40000",
                "item": {
                    "font-color": "#05636c",
                    "font-weight": "normal"
                },
                // "label": {
                //     "text": "Metrics",
                //     "font-size": "14px"
                // },
                "guide": {
                    "line-width": "2px",
                    "alpha": 0.2,
                }
            },
            "plot": {
                "line-width": 2,
                "marker": {
                    "size": 1,
                    "visible": false
                },
                "tooltip": {
                    "font-family": "Roboto",
                    "font-size": "15px",
                    "text": "There were %v %t on %data-days",
                    "text-align": "left",
                    "border-radius": 5,
                    "padding": 10
                }
            },
            "series": [
                {
                    "values": getrand(-40000, 80000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        "Sept 30"
                    ],
                    "line-color": "#ffffff",
                    "aspect": "spline",
                    "background-color": "blue",
                    "alpha-area": ".3",
                    "font-family": "Roboto",
                    "font-size": "14px",
                    "text": "on Topic 3"
                },
                {
                    "values": getrand(-40000, 80000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        "Sept 30"
                    ],
                    "line-color": "#ffffff",
                    "background-color": "grey",
                    "alpha-area": ".3",
                    "text": "on Topic 2",
                    "aspect": "spline",
                    "font-family": "Roboto",
                    "font-size": "14px"
                },
                {
                    "values": getrand(-40000, 80000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        "Sept 30"
                    ],
                    "line-color": "#ffffff",
                    "background-color": "blue",
                    "aspect": "spline",
                    "alpha-area": "0.2",
                    "text": "on Topic 1",
                    "font-family": "Roboto",
                    "font-size": "14px"
                }
            ]
        }
    ]
};

zingchart.render({
    id: 'myChart_line',
    data: myConfig2,
    height: '100%',
    width: '100%',
    hideprogresslogo: true,
});




var myConfig3 = {
    type: 'wordcloud',
    options: {
        text: "Word1 Word2 Word3 Word4 Word5",
        // minLength: 5,
        // ignore: ["America", "American", "Applause", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would"],
        maxItems: 40,
        aspect: 'flow-center',
        rotate: true,
        colorType: 'palette',
        palette: ['blue'],

        style: {
            fontFamily: 'Crete Round',

            hoverState: {
                backgroundColor: '#D32F2F',
                borderRadius: 2,
                fontColor: 'white'
            },
            tooltip: {
                text: '%text: %hits',
                visible: true,

                alpha: 0.9,
                backgroundColor: '#1976D2',
                borderRadius: 2,
                borderColor: 'none',
                fontColor: 'white',
                fontFamily: 'Georgia',
                textAlpha: 1
            }
        }
    },

    source: {
        // text: '--President Barack Obama<br> Selma 50th anniversary speech<br>March 7, 2015',
        //Source: https://obamawhitehouse.archives.gov/the-press-office/2015/03/07/remarks-president-50th-anniversary-selma-montgomery-marches
        fontColor: '#64B5F6',
        fontSize: 10,
        fontFamily: 'Georgia',
        fontWeight: 'normal',
        marginBottom: '10%'
    }
};

function rerender3(data) {
    zingchart.render({
        id: 'myChart_word',
        data: data,
        height: 400,
        width: '100%',
        hideprogresslogo: true
    });

}
rerender3(myConfig3);


var myConfig4 = {
    "type": "scatter",
    "series": [
        {
            "values": [
                [1, 9],
                [2, 15],
                [3, 21],
                [4, 30],
                [5, 40],
                [6, 59],
                [7, 60],
                [8, 75],
                [9, 81],
                [10, 99]
            ]
        },
        {
            "values": [
                [0.9, 3],
                [2.1, 13],
                [3.5, 25],
                [4.9, 35],
                [5.3, 41],
                [6.5, 57],
                [7.1, 61],
                [8.7, 70],
                [9.2, 82],
                [9.9, 95]
            ]
        },
        {
            "values": [
                [0.1, 9],
                [1.8, 21],
                [1.9, 29],
                [4.1, 33],
                [4.5, 39],
                [6.9, 51],
                [7.4, 64],
                [8.9, 70],
                [9, 75],
                [9.3, 93]
            ]
        },
        {
            "values": [
                [0.3, 11],
                [0.9, 15],
                [1.1, 24],
                [2.3, 29],
                [2.9, 30],
                [3.3, 35],
                [5.6, 67],
                [6.9, 70],
                [7.3, 71],
                [8.9, 90]
            ]
        },
        {
            "values": [
                [0.5, 5],
                [1.9, 5],
                [2.5, 10],
                [3.1, 30],
                [6.5, 45],
                [6.9, 74],
                [7.2, 50],
                [7.8, 56],
                [8, 61],
                [8.5, 71]
            ]
        }
    ],
    scaleY: {
        lineColor: 'none',
        tick: {
            visible: false
        },
        guide: {
            visible: false
        },
        item: {
            visible: false
        }
    },
    scaleX: {
        visible: false
    }
};

function rerender4(data) {
    zingchart.render({
        id: 'myChart_scatter',
        data: data,
        height: 400,
        width: "100%",
        hideprogresslogo: true,
    });

}
rerender4(myConfig4);


var myConfig = {
    "type": "chord",
    "options": {
        "radius": "80%",
        "color-type": "palette",
        "palette": ["#bdbdbd", "#db0000", "#0e441a", "#008fdb","#0e1644"]
    },
    "plotarea": {
        "margin": "dynamic"
    },

    "series": [
        {
            "values": [6637, 5700, 4789, 2771],
            "text": "NIGERIA"
        },
        {
            "values": [7737, 2691, 2202, 7006],
            "text": "GHANA"
        },
        {
            "values": [8574, 9898, 4084, 1765],
            "text": "IVORY COAST"
        },
        {
            "values": [857, 9876, 408, 1789],
            "text": "UGANDA"
        },
        {
            "values": [5309, 1602, 8395, 2908],
            "text": "LIBERIA"
        }
    ]
};
function rerender(data) {
    zingchart.render({
        id: 'myChart_chord',
        data: data,
        height: "100%",
        width: "100%",
        hideprogresslogo: true
    });

}
rerender(myConfig);


function getrand(min, max, leng) {
    var arr = []
    while (arr.length < leng) {
        var rand = Math.floor(Math.random() * (max - min)) + min
        if (arr.indexOf(rand) === -1) arr.push(rand);
    }
    return arr;
}