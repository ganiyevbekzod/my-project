// import "../Mijozlar/Mijozlar.css"
// import React from "react";
// import ReactApexChart from "react-apexcharts";
// export const UserCharts_one = () => {
//         const [state, setState] = React.useState({

//             series: [{
//               name: 'Servings',
//               data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
//             }],
//             options: {
//               annotations: {
//                 points: [{
//                   x: 'Bananas',
//                   seriesIndex: 0,
//                   label: {
//                     borderColor: '#775DD0',
//                     offsetY: 0,
//                     style: {
//                       color: '#fff',
//                       background: '#775DD0',
//                     },
//                     text: 'Bananas are good',
//                   }
//                 }]
//               },
//               chart: {
//                 height: 350,
//                 type: 'bar',
//               },
//               plotOptions: {
//                 bar: {
//                   borderRadius: 10,
//                   columnWidth: '50%',
//                 }
//               },
//               dataLabels: {
//                 enabled: false
//               },
//               stroke: {
//                 width: 0
//               },
//               grid: {
//                 row: {
//                   colors: ['#fff', '#f2f2f2']
//                 }
//               },
//               xaxis: {
//                 labels: {
//                   rotate: -55
//                 },
//                 categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
//                   'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
//                 ],
//                 tickPlacement: 'on'
//               },
//               yaxis: {
//                 title: {
//                   text: 'Servings',
//                 },
//               },
//               fill: {
//                 type: 'gradient',
//                 gradient: {
//                   shade: 'light',
//                   type: "horizontal",
//                   shadeIntensity: 0.25,
//                   gradientToColors: undefined,
//                   inverseColors: true,
//                   opacityFrom: 0.85,
//                   opacityTo: 0.85,
//                   stops: [50, 0, 100]
//                 },
//               }
//             },


//         });



//         return (
//           <div>
//             <div id="chart">
//                 <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
//               </div>
//             <div id="html-dist"></div>
//           </div>
//         );
//       }
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    "Toshkent",
    "Qoraqalpogʻiston",
    "Andijon",
    "Fargʻona",
    "Namangan",
    "Samarqand",
    "Buxoro",
    "Xorazm",
    "Surxondaryo",
    "Qashqadaryo",
    "Jizzax",
    "Sirdaryo",
    "Navoiy"
];

export default function Mijozlarcharts() {
    return (
        <BarChart
            height={400}
            series={[
                { data: pData, label: 'Jismoniy shaxslar', id: 'pvId', stack: 'total' },
                { data: uData, label: 'Yuridik shaxslar', id: 'uvId', stack: 'total' },
            ]}
            xAxis={[{ data: xLabels }]}
            yAxis={[{ width: 50 }]}
        />
    );
}
