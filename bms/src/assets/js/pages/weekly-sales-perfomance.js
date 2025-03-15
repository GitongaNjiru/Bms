Highcharts.chart('weekly-sales', {
    chart: {
        type: 'column',
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    title: {
        text: "Sales Value",
        style: {
            fontSize: '14px' 
         }
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
            
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Amount (KES)',
            text:null
        },
        gridLineColor: '#c2c2c2',
        gridLineWidth: 0.2
    },
    tooltip: {
        headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
        pointFormat: '<tr><td style="black;padding:0;padding-right:5px">{series.name}:  </td> ' +
            '<td style="padding:0"><b class="fw-semibold"> KES {point.y:.,2f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Double Burner',
        color:'#00c399',
        data: [291760, 178356, 148985, 216784,
            197841, 95676, 0]

    },  {
        color:'#aae5d3',
        name: 'Single Burner',
        data: [ 123414, 456770, 487893, 123590, 124596, 534524, 0]

    }, {
        name: 'Ethanol',
       
        color:'black',
        data: [343455, 345697, 534526, 745655, 571234, 604564, 124]

    }]
});