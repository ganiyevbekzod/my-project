import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS, valueFormatter } from './Barchart';

const pieColors = [
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

export default function PieAnimation() {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  };
  const handleRadius = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setRadius(newValue);
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
      <PieChart
        height={230}
        width={300}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb).map((item, idx) => ({
              ...item,
              color: pieColors[idx % pieColors.length],
            })),
            innerRadius: radius,
            arcLabel: (params) => params.value + "%" ?? '',
            arcLabelMinAngle: 20,
            valueFormatter,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: {
              additionalRadius: -10,
              color: 'rgba(200,200,200,0.2)',
            },
            highlighted: {
              additionalRadius: 8,
              color: undefined,
              style: {
                filter: 'drop-shadow(0 0 8px #6366f1)',
              },
            },
          },
        ]}
        skipAnimation={skipAnimation}
        sx={{
          borderRadius: 3,
          boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)',
          background: 'transparent',
        }}
      />
      <Typography id="input-radius" gutterBottom sx={{ mt: 2, color: '#6366f1', fontWeight: 600 }}>
        Radius
      </Typography>
      <Slider
        value={radius}
        onChange={handleRadius}
        valueLabelDisplay="auto"
        min={15}
        max={100}
        aria-labelledby="input-radius"
        sx={{ color: '#6366f1' }}
      />
    </Box>
  );
}
