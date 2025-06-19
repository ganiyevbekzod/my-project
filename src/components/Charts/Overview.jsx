import React from "react";
import ReactApexChart from "react-apexcharts";
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
    return (
        <BarChart
            series={[

                { data: [51, 16, 49, 30, 35, 44, 24, 34, 54, 45,] },
                { data: [60, 50, 15, 25, 49, 30, 29, 44, 24,38] },
                { data: [35, 44, 24, 34, 54, 45, 31, 26, 40, 55] },
                { data: [51, 16, 49, 30, 35, 44, 24, 34, 54, 45,] },
                { data: [60, 50, 15, 25, 49, 30, 29, 44, 24,38] },
                { data: [35, 44, 24, 34, 54, 45, 31, 26, 40, 55] },
            ]}
            height={350}
            xAxis={[{ data: ['TEXPD1', 'TEXPD2', 'TEXPD3', 'TEXPD4', 'TEXPD5', 'TEXPD6', 'TEXPD7', 'TEXPD8', 'TEXPD9', 'TEXPD10',] }]}
        />
    );
}

export const Overview = () => {
        const [state] = React.useState({
          
            series: [44, 55, 67, 83],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Umumiy cheklovlar soni',
                      formatter: function (w) {
                        return 249
                      }
                    }
                  }
                }
              },
              labels: ['Davlat', 'Stansiya', 'Vagon turi', 'Qabul qiluvchi'],
            },
        });
        return (
          <div>
            <div id="chart">
                <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type="radialBar" 
                height={350} />
              </div>
            <div id="html-dist">
            </div>
          </div>
        );
      }