import React from "react";
import ReactApexChart from "react-apexcharts";
import "./XalqaroTashuvlar.css"
const International = () => {

        const [state, setState] = React.useState({
          
            series: [{
              name: 'Xalqaro yuk ortish',
              type: 'area',
              data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33,44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33,44, 55, 31, 47, 31, 43, 26, 41,]
            }, {
              name: "Xalqaro yuk bo'shatish",
              type: 'line',
              data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43,55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43,55, 69, 45, 61, 43, 54, 37, 52,]
            }],
            options: {
              chart: {
                height: 420,
                type: 'line',
              },
              stroke: {
                curve: 'smooth'
              },
              fill: {
                type:'solid',
                opacity: [0.35, 1],
              },
              labels: ['01', '02','03','04','05','06','07','08','09 ','10','11','12','13','14',15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
              markers: {
                size: 0
              },
              yaxis: [
                {
                  title: {
                    text: 'Xalqaro yuk ortish',
                  },
                },
                {
                  opposite: true,
                  title: {
                    text: "Xalqaro yuk bo'shatish",
                  },
                },
              ],
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if(typeof y !== "undefined") {
                      return  y.toFixed(0) +" "+"dona";
                    }
                    return y;
                  }
                }
              }
            },
          
          
        });
        return (
          <div className="international_main">
                <ReactApexChart  options={state.options} series={state.series} type="line" height={420}  />

          </div>
        );
      }
export default International