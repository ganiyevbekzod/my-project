import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24 };
const pData = [3000, 2680, 3150, 2780, 1890, 2390, 3490, 2400, 1398, 3800, 3908, 4800,2890];
const uData = [2400, 1398, 9800, 3908, 4800, 3800, 4000, 3000, 2000, 2780, 1890, 4300,3685];
const xLabels = [
    "Toshkent",
    "Qoraqalpog'iston",
    "Andijon",
    "Farg'ona",
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
export default function SimpleLineChart() {
  return (
    <LineChart
      height={350}
      series={[
        { data: pData, label: 'Jismoniy shaxslar' },
        { data: uData, label: 'Yuridik shaxslar shaxslar' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ width: 50 }]}
      margin={margin}
    />
  );
}