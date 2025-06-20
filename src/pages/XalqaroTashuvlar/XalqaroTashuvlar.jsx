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
                toolbar: { show: false },
                background: 'transparent',
                dropShadow: {
                  enabled: true,
                  top: 4,
                  left: 0,
                  blur: 8,
                  opacity: 0.18,
                  color: '#6366f1',
                },
              },
              stroke: {
                curve: 'smooth',
                width: [4, 3],
                colors: ['#34d399', '#6366f1'],
              },
              fill: {
                type: ['gradient', 'solid'],
                gradient: {
                  shade: 'light',
                  type: 'vertical',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#a7f3d0', '#a5b4fc'],
                  inverseColors: false,
                  opacityFrom: 0.7,
                  opacityTo: 0.2,
                  stops: [0, 100],
                },
                opacity: [0.7, 1],
                colors: ['#34d399', '#6366f1'],
              },
              labels: ['01', '02','03','04','05','06','07','08','09 ','10','11','12','13','14',15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
              markers: {
                size: [6, 6],
                colors: ['#fff'],
                strokeColors: ['#34d399', '#6366f1'],
                strokeWidth: 3,
                hover: {
                  size: 10,
                },
              },
              yaxis: [
                {
                  title: {
                    text: 'Xalqaro yuk ortish',
                  },
                  labels: { style: { colors: '#34d399', fontWeight: 600 } },
                },
                {
                  opposite: true,
                  title: {
                    text: "Xalqaro yuk bo'shatish",
                  },
                  labels: { style: { colors: '#6366f1', fontWeight: 600 } },
                },
              ],
              tooltip: {
                shared: true,
                intersect: false,
                style: { fontSize: '15px', fontWeight: 600 },
                y: {
                  formatter: function (y) {
                    if(typeof y !== "undefined") {
                      return  y.toFixed(0) +" "+"dona";
                    }
                    return y;
                  }
                }
              },
              legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '15px',
                fontWeight: 600,
                labels: { colors: ['#34d399', '#6366f1'] },
                markers: {
                  width: 16,
                  height: 16,
                  radius: 8,
                },
              },
              grid: {
                borderColor: '#e0e7ff',
                strokeDashArray: 4,
                padding: { left: 10, right: 10 },
              },
            },
          
          
        });
        return (
          <div className="international_main modern-international-box">
                <ReactApexChart  options={state.options} series={state.series} type="line" height={420}  />

          </div>
        );
      }
export default International