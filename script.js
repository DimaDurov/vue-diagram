      new Vue({
        el: '#app',
        components: {
          apexchart: VueApexCharts,
        },
        data: {
          
          series: [{
            name: 'Женская',
            data: [3, 44]
          }, {
            name: 'Мужская',
            data: [13, 21]
          },],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              stackType: '100%'
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            xaxis: {
              categories: ['VK', 'Telegram'],
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return val
                }
              }
            },
            fill: {
              opacity: 1
            
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left',
              offsetX: 40
            }
          },
          
          
        },
        
      })