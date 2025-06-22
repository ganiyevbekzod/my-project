import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';

const barColors = [
  '#6366f1', // Indigo
  '#34d399', // Green
  '#f59e42', // Orange
  '#f43f5e', // Red
  '#06b6d4', // Cyan
  '#a21caf', // Purple
  '#fbbf24', // Yellow
  '#10b981', // Emerald
  '#3b82f6', // Blue
  '#eab308', // Amber
];

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      background: 'linear-gradient(120deg, #f8fafc 80%, #e0e7ff 100%)',
      borderRadius: 4,
      boxShadow: '0 2px 8px 0 rgba(80, 80, 180, 0.10)',
      p: 2,
      mb: 2,
    }}>
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s, idx) => ({
            ...s,
            color: barColors[idx % barColors.length],
            highlightScope: { faded: 'global', highlighted: 'series' },
            faded: {
              additionalRadius: -8,
              color: 'rgba(200,200,200,0.2)',
            },
            // highlighted: {
            //   additionalRadius: 4,
            //   color: undefined,
            //   style: {
            //     filter: 'drop-shadow(0 0 8px #6366f1)',
            //   },
            // },
          }))}
        skipAnimation={skipAnimation}
        sx={{
          borderRadius: 3,
          boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)',
          background: 'transparent',
        }}
      />
      {/* <Typography id="input-item-number" gutterBottom sx={{ mt: 2, color: '#6366f1', fontWeight: 600 }}>
        Kerakli ma'lumotlar hajmini belgilang !
      </Typography> */}
      {/* <Slider
        value={itemNb}
        // onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={0}
        max={30}
        aria-labelledby="input-item-number"
        sx={{ color: '#6366f1' }}
      /> */}
    </Box>
  );
}

const highlightScope = {
  highlight: 'series',
  fade: 'global',
};

const series = [
  {
    label: 'Mahalliy yuk ortish',
    data: [
      2912, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936,2547]
  },
  {
    label: "Mahalliy yuk bo'shatish",
    data: [
      2362, 2254, 1962, 1336, 586, 1069, 2194, 1629,1410, 1058, 676, 1280, 1936, 2173, 2031, 1757, 862, 2446,
      910, 2430, 2300, 805, 1835, 1684, 2197,1433, 1161, 1107, 1517,1856
    ],
  },
  {
    label: 'series 3',
    data: [
      2145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720, 1057,
      2000, 1716,1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 2253, 619, 1626, 1209, 1786,1433,2410 
    ],
  },
  {
    label: 'series 4',
    data: [
      2361, 979, 2430, 1768, 1913, 2342, 1868, 1319, 1038, 2139, 1691, 935, 2262,
      1580, 692, 1559, 1344, 1442, 1593, 1889,1433, 1161, 1107, 1517, 1410, 1058, 1676, 1280,1433,2095]
  },
  {
    label: 'series 5',
    data: [
       2371, 1381, 1060, 1327, 934, 1779, 1361, 878, 1055, 1737, 2380,  2408,
      1066, 1802, 1442, 1567, 1552, 1742,1433, 1161, 1107, 1517, 1410, 1058, 1280, 1936, 1774, 698, 1721, 1421,
       1752,  1809, 1985, 
    ],
  },
  {
    label: 'series 6',
    data: [
      2316, 1845, 2057, 1479, 1859, 1015, 1569, 1448, 1354, 1007, 799, 1748, 1454,
      1968, 1129, 1196, 2158, 540, 1482, 880,1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665
    ],
  },
  {
    label: 'series 7',
    data: [
      2140, 2082, 708, 2032, 554, 1365, 2121, 1639, 2430, 2440, 814, 1328, 883, 1811,
      2322, 1743, 700, 2131, 1473, 957,1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665
    ],
  },
  {
    label: 'series 8',
    data: [
      2875, 1744, 2487, 823, 2252, 2317, 2139, 1818, 2256, 1769, 1123, 1461, 672,
      1335, 960, 1871, 2305, 1231, 2005, 908,1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665
    ],
  },
  {
    label: 'series 9',
    data: [
      1792, 1886, 2472, 1546, 2164, 2323, 2435, 1268, 2368, 2158, 2200, 1316, 552,
      1874, 1771, 1038, 1838, 2029, 1793, 1117,1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665
    ],
  },
  {
    label: 'series 10',
    data: [
      1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665,1433, 1161, 1107, 1517, 1410, 1058, 676, 1280, 1936, 1774, 698, 1721, 1421,
      785, 1752, 800, 990, 1809, 1985, 665
    ],
  },
  
].map((s) => ({ ...s, highlightScope }));
