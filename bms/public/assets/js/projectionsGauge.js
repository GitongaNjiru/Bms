Highcharts.chart('projections', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 270,
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    subtitle:{
        text:'Ethanol Sales Perfomance This Month'
    },
    title: {
        text: null
    },
    
    
    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 40,
        tickWidth: 0.7,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#df0012', // Red
            thickness: 40
        }, {
            from: 120,
            to: 160,
            color: '#f7b900', // Amber
            thickness: 40
        }, {
            from: 160,
            to: 200,
            color: '#3ea05e', // Green
            thickness: 40
        }]
    },

    series: [{
        name: 'Ethanol Sales this Month',
        data: [80],
        tooltip: {
            valueSuffix: ' Liters'
        },
        dataLabels: {
            format: '{y} Liters',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || 'black',
            style: {
                fontSize: '14px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'black',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'black',
            radius: 6
        }

    }]

});

