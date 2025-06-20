import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

// Soxta data (mock data)
const mockData = {
  '1Y': [
    120, 135, 140, 150, 160, 170, 180, 175, 165, 155, 145, 130
  ],
  '6M': [
    170, 180, 175, 165, 155, 145
  ],
  '3M': [
    175, 165, 155
  ]
};

const months = [
  'Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'
];

function getLabels(monthCount) {
  const now = new Date();
  let labels = [];
  for (let i = monthCount - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    labels.push(months[d.getMonth()] + " '" + String(d.getFullYear()).slice(-2));
  }
  return labels;
}

const FILTERS = [
  { label: '1Y', months: 12 },
  { label: '6M', months: 6 },
  { label: '3M', months: 3 },
];

export const Requestcharts = () => {
  const [filter, setFilter] = React.useState(FILTERS[0]);
  const data = mockData[filter.label];
  const labels = getLabels(filter.months);

        return (
    <Box sx={{ width: '100%', background: 'linear-gradient(120deg, #f8fafc 80%, #e0e7ff 100%)', borderRadius: 4, p: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <span style={{ fontWeight: 700, fontSize: 22, color: '#6366f1', marginRight: 24 }}>Arizalar</span>
        <ButtonGroup variant="contained" sx={{ boxShadow: 'none' }}>
          {FILTERS.map(f => (
            <Button
              key={f.label}
              onClick={() => setFilter(f)}
              sx={{
                background: filter.label === f.label ? 'linear-gradient(90deg, #6366f1 60%, #34d399 100%)' : '#e0e7ff',
                color: filter.label === f.label ? '#fff' : '#6366f1',
                fontWeight: 600,
                mx: 0.5,
                boxShadow: 'none',
                borderRadius: 2,
                '&:hover': {
                  background: 'linear-gradient(90deg, #6366f1 60%, #34d399 100%)',
                  color: '#fff',
                },
              }}
            >
              {f.label}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <LineChart
        height={350}
        series={[{ data, label: 'Arizalar soni', color: '#6366f1', area: true }]}
        xAxis={[{ scaleType: 'point', data: labels }]}
        yAxis={[{ width: 50 }]}
        sx={{
          background: 'transparent',
          borderRadius: 3,
          boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)',
        }}
        margin={{ right: 24 }}
      />
    </Box>
  );
};
