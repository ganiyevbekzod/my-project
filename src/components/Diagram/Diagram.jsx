 import React from "react";
 import ReactApexChart from "react-apexcharts";
 export  const ApexChart = () => {
  const [state, setState] = React.useState({
          
            series: [1871,1365],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Jismoniy shaxslar', 'Yuridik shaxslar', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 800
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
        });
        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }