//Bundle usage summary
var walletOptions = {
    series: [76, 67, 61, 20],
    chart: { height: 362, type: "radialBar" },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "35%",
                background: "transparent",
                image: void 0
            },
            track: {
                show: !0,
                startAngle: void 0,
                endAngle: void 0,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 12,
                dropShadow: {
                    enabled: !1,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: .5
                }
            },
            dataLabels: {
                name: {
                    show: !0,
                    fontSize: "16px",
                    fontWeight: 600,
                    offsetY: -10
                },
                value: { show: !0, fontSize: "14px", offsetY: 4, formatter: function(e) { return e + "%" } },
                total: {
                    show: !0,
                    label: "Total",
                    color: "#373d3f",
                    fontSize: "16px",
                    fontFamily: void 0,
                    fontWeight: 600,
                    formatter: function(e) {
                        return e.globals.seriesTotals.reduce(function(e, t) {
                            return e + t
                        }, 0) + "%"
                    }
                }
            }
        }
    },
    stroke: { lineCap: "round" },
    colors: ["#556ee6", "#e83e8c", "#00a884", "#424242"],
    labels: ["Bills Receipted", "Bills Created"],
    legend: { show: !1 }
};
(chart = new ApexCharts(document.querySelector("#sent-bundles"), walletOptions)).render();

//Bunndle usage monthly summary
var options = {
        chart: {
            height: 470,
            type: "bar",
            stacked: !1,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            },

        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "70%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: { show: !0, width: 20, colors: ["transparent"] },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "KES " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount Collections in KES",
            }
        },
        series: [{
                name: "Bills Created",
                data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
            }, {
                name: "Receipted Bills",
                data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
            },
           
        ],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#556ee6", "#e83e8c", "#00a884", "#424242"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "KES " + numeral(value).format('0,0')

                }
            }
        },
        tooltip: {
            y: [{ title: { formatter: function(e) { return e + " (mins)" } } },
                { title: { formatter: function(e) { return e + " per session" } } },
                { title: { formatter: function(e) { return e } } }
            ]
        },
        tooltip: {
            followCursor: true,
            shared: false,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                let currentTotal = 0
                series.forEach((s) => {
                    currentTotal += s[dataPointIndex]
                })
                return '<div class="custom-tooltip">' +
                    '<span><b>Total: </b>' + currentTotal + '</span>' +
                    '</div>'
            }
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined
            },
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //     let currentTotal = 0
            //     series.forEach((s) => {
            //         currentTotal += s[dataPointIndex]
            //     })
            //     return '<div class="custom-tooltip">' +
            //         '<span><b>Total: </b>' + currentTotal + '</span>' +
            //         '</div>'
            // },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    let currentTotal = 0
                    series.forEach((s) => {
                        currentTotal += s[dataPointIndex]
                    })
                    return "<span class='text-right' > " + numeral(value).format('0,0') + "Sent</span> "

                }
            }
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined

            },
            fillSeriesColor: false,
            theme: "light",

            marker: {
                show: true,
            },
            onDatasetHover: {
                highlightDataSeries: true,
            },
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //     let currentTotal = 0
            //     series.forEach((s) => {
            //         currentTotal += s[dataPointIndex]
            //     })
            //     return '<div class="custom-tooltip">' +
            //         '<span><b>Total: </b>' + currentTotal + '</span>' +
            //         '</div>'
            // },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    let currentTotal = 0
                    series.forEach((s) => {
                        currentTotal += s[dataPointIndex]
                    })
                    return "<span class='text-right w-100 d-flex' > KES " + numeral(value).format('0,0') + "</span> "

                }
            }
        }



    },
    chart = new ApexCharts(document.querySelector("#member-salary-chart"), options);
chart.render();

options = { chart: { height: 350, type: "bar", toolbar: { show: !1 } }, 
plotOptions: { bar: { horizontal: !0 } }, dataLabels: { enabled: !1 }, 
xaxis: {
    labels: {
        formatter: function(value) {
            // return "KES " + value;
            return numeral(value).format('0,0 a')
        },
        // formatter: function(val, index) {

        //     return numeral(val).format('0,0')
        // },



    },
},
series: [{ 
    name: "Collected Revenue",
    data: [38203560, 43020356, 45203560, 42035675, 52035650, 52035684, 78203560, 112035600, 122035620, 132035665] 
}],
     colors: ["#34c38f"], grid: { borderColor: "#f1f1f1" }, xaxis: { 
        categories: ["Nairobi", "Nakuru", "Uasin Gishu", "Baringo", "Mombasa", "Kisumu", "Meru", "Kirinyaga", "Machakos", "Kiambu"] },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined

            },
            fillSeriesColor: false,
            theme: "light",

            marker: {
                show: true,
            },
            onDatasetHover: {
                highlightDataSeries: true,
            },
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //     let currentTotal = 0
            //     series.forEach((s) => {
            //         currentTotal += s[dataPointIndex]
            //     })
            //     return '<div class="custom-tooltip">' +
            //         '<span><b>Total: </b>' + currentTotal + '</span>' +
            //         '</div>'
            // },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    let currentTotal = 0
                    series.forEach((s) => {
                        currentTotal += s[dataPointIndex]
                    })
                    return "<span class='text-right w-100 d-flex' > KES " + numeral(value).format('0,0') + "</span> "

                }
            },
            
        }
     };
(chart = new ApexCharts(document.querySelector("#bar_chart"), options)).render();