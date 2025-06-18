import ReactApexChart from 'react-apexcharts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
 const desktopOS = [
  {
    label: 'Toshkent',
    value: 42.72,
  },
  {
    label: 'Qoraqalpogʻiston',
    value: 6.38,
  },
  {
    label: 'Andijon',
    value: 3.83,
  },
  {
    label: 'Fargʻona',
    value: 2.42,
  },
  
  {
    label: 'Buxoro',
    value: 16.38,
  },
  {
    label: 'Namangan',
    value: 4.65,
  },

  {
    label: 'Xorazm',
    value: 3.83,
  },
  {
    label: 'Surxondaryo',
    value: 2.42,
  },

  {
    label: 'Qashqadaryo',
    value: 4.65,
  },
    {
    label: 'Jizzax',
    value: 2.42,
  },
        {
    label: 'Samarqand',
    value: 17.72,
  },
  {
    label: 'Sirdaryo',
    value: 4.65,
  },
    {
    label: 'Navoiy',
    value: 4.65,
  },
];

 const platforms = [
  {
    label: 'Mobile',
    value: 59.12,
  },
  {
    label: 'Desktop',
    value: 40.88,
  },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

  const mobileAndDesktopOS = [
  ...desktopOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
    value: normalize(v.value, platforms[1].value),
  })),
];

 const valueFormatter = (item) => `${item.value}%`;

export default function Mijozlarcharts2() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%,`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}

const size = {
  width: 500,
  height: 300,
};

const data = {
  data: desktopOS,
  valueFormatter,
};