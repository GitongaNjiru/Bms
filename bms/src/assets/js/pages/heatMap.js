function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('heatMap', {

    chart: {
        type: 'heatmap',
        marginTop: 70,
        marginBottom: 70,
        plotBorderWidth: 0,
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },


    title: {
        text: "Weekly Perfomance",
        style: {
            fontSize: '14px' 
         }
    },

    xAxis: {
        categories: ['01 Apr', '02 Apr', '03 Apr', '04 Apr', '05 Apr', '06 Apr', '07 Apr'],
        lineColor: 'white',
        opposite:true
    },

    yAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat', 'Sun'],
        title: null,
        reversed: true,
        gridLineColor: '#c2c2c2',
        gridLineWidth: 0
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
            }
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0],
        visible:true,
        stops: [
            [0, '#ebedf0'],
            [0.2, '#c6e6d0'],
            [0.4, '#7dc794'],
            [0.6, '#46af68'],
            [0.7, '#358e52'],
            [1, '#215d34']
        ] ,

        // stops: [
        //     [0, '#ebedf0'],
        //     [0.2, '#aae5d3'],
        //     [0.4, '#00c399'],
        //     [0.6, '#00a571'],
        //     [0.7, '#008755'],
        //     [1, '#00592c']
        // ] 
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 20,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 10,
        verticalAlign: 'bottom',
        symbolHeight: 280,
        y: 10,
    },

    legend: {
        verticalAlign: 'bottom',
        y: 10,
        // align: 'middle',
        symbolWidth: 280,
    },


    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 4,
        borderColor:'white',
        data: [[0, 0, 10], [0, 1, 0], [0, 2, 8], [0, 3, 24], [0, 4, 67],[0, 5, 7],[0, 6, 0], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48],[1, 5, 8],[1, 6, 0], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52],[2, 5, 48],[2, 6, 0], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16],[3, 5, 116],[3, 6, 0], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115],[4, 5, 105],[4, 6, 0], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120],[5, 5, 130],[5, 6, 0], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96],[6, 5, 120],[6, 6,0],],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                }
            }
        }]
    },
     plotOptions: {
        series: {
            borderRadius: 20
        }
    },

});