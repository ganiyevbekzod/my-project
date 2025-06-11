import React from "react";
import ReactApexChart from "react-apexcharts";
export const MoneyCharts = () => {
        const [state, setState] = React.useState({
          
            series: [{
              data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 380
              },
              plotOptions: {
                bar: {
                  barHeight: '100%',
                  distributed: true,
                  horizontal: true,
                  dataLabels: {
                    position: 'bottom'
                  },
                }
              },
              colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
                '#f48024', '#69d2e7'
              ],
              dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                  colors: ['#000000']
                },
                formatter: function (val, opt) {
                  return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: true
                }
              },
              stroke: {
                width: 0.5,
                colors: ['#fff']
              },
              xaxis: {
                categories: ['TEXPD1', 'TEXPD2', 'TEXPD3', 'TEXPD4', 'TEXPD5', 'TEXPD6', 'TEXPD7', 'TEXPD8', 'TEXPD9', 'TEXPD10'
                ],
              },
              yaxis: {
                labels: {
                  show: false
                }
              },
              tooltip: {
                theme: 'dark',
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function () {
                      return ''
                    }
                  }
                }
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="bar" height={500} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }
