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
              labels: ['Jismoniy shaxslar', 'Yuridik shaxslar'],
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
          <div className="diagramm_box" >
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={300} height={500} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }