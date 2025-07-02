import React from "react";
import ReactApexChart from 'react-apexcharts';
import './Vagon.css';
import { PieChart, BarChart } from '@mui/x-charts';
import { FaTrain, FaBalanceScale, FaCogs, FaUsers, FaRegThumbsUp, FaRegThumbsDown, FaSmile } from 'react-icons/fa';
import { TextField, Box } from '@mui/material';

export default function VagonDashboard() {
  // State for trend period filtering
  const [trendPeriod, setTrendPeriod] = React.useState('6'); // Default to 6 months

  // Mock data for vagon analytics
  const vagonTypes = [
    { name: "Yopiq vagon", value: 320, color: "#3b82f6" },
    { name: "Platforma", value: 210, color: "#10b981" },
    { name: "Sisterna", value: 180, color: "#f59e42" },
    { name: "Yarim ochiq", value: 140, color: "#a21caf" },
  ];

  const vagonUsageData = [
    { month: "Avg", used: 120, idle: 30, repair: 10, efficiency: 95.2 },
    { month: "Sen", used: 130, idle: 28, repair: 12, efficiency: 96.1 },
    { month: "Okt", used: 140, idle: 25, repair: 13, efficiency: 97.0 },
    { month: "Noy", used: 150, idle: 22, repair: 14, efficiency: 97.5 },
    { month: "Dek", used: 160, idle: 20, repair: 15, efficiency: 98.1 },
    { month: "Yan", used: 170, idle: 18, repair: 16, efficiency: 98.3 },
    { month: "Fev", used: 180, idle: 16, repair: 17, efficiency: 98.7 },
    { month: "Mar", used: 190, idle: 15, repair: 18, efficiency: 98.9 },
    { month: "Apr", used: 200, idle: 14, repair: 19, efficiency: 99.1 },
    { month: "May", used: 210, idle: 13, repair: 20, efficiency: 99.2 },
    { month: "Iyun", used: 220, idle: 12, repair: 21, efficiency: 99.3 },
    { month: "Iyul", used: 230, idle: 11, repair: 22, efficiency: 99.4 },
  ];

  const customerSatisfaction = {
    satisfied: 92.5,
    neutral: 5.1,
    dissatisfied: 2.4,
  };

  const efficiencyStats = {
    efficiency: 98.1,
    avgRepairTime: 3.2,
    onTimeRate: 97.8,
  };

  // Filtered data for trend period
  const getFilteredUsage = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return vagonUsageData.slice(-periods[trendPeriod]);
  };
  const filteredUsage = getFilteredUsage();

  // KPI calculations
  const totalVagons = vagonTypes.reduce((sum, v) => sum + v.value, 0);
  const avgEfficiency = (
vagonUsageData.reduce((sum, v) => sum + v.efficiency, 0) / vagonUsageData.length
  ).toFixed(1);

  // Chart options
  const usageBarOptions = {
    chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { borderRadius: 4, horizontal: false, columnWidth: '55%', distributed: false } },
    dataLabels: { enabled: false },
    xaxis: { categories: filteredUsage.map(u => u.month), labels: { style: { colors: '#3730a3' } } },
    yaxis: { title: { text: 'Vagonlar soni', style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
    fill: { opacity: 1, colors: ['#3b82f6', '#10b981', '#fbbf24'] },
    colors: ['#3b82f6', '#10b981', '#fbbf24'],
    tooltip: { y: { formatter: val => val + " ta" } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const usageBarSeries = [
    { name: "Foydalanilgan", data: filteredUsage.map(u => u.used) },
    { name: "Bekor turgan", data: filteredUsage.map(u => u.idle) },
    { name: "Ta'mirda", data: filteredUsage.map(u => u.repair) },
  ];

  const typePieOptions = {
    chart: { type: 'pie', height: 350 },
    labels: vagonTypes.map(v => v.name),
    colors: vagonTypes.map(v => v.color),
    legend: { position: 'bottom', labels: { colors: '#3730a3' } }
  };
  const typePieSeries = vagonTypes.map(v => v.value);

  const efficiencyLineOptions = {
    chart: { type: 'line', height: 300, toolbar: { show: false }, background: 'transparent' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: filteredUsage.map(u => u.month), labels: { style: { colors: '#1900fe' } } },
    yaxis: { labels: { style: { colors: '#3730a3' } } },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.4, stops: [0, 90, 100] } },
    colors: ['#3b82f6'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
  };
  const efficiencyLineSeries = [
    { name: "Samaradorlik (%)", data: filteredUsage.map(u => u.efficiency) }
  ];

  // Satisfaction Pie
  const satisfactionPieOptions = {
    chart: { type: 'pie', height: 250 },
    labels: ['Mamnun', 'Betaraf', 'Norozi'],
    colors: ['#10b981', '#fbbf24', '#ef4444'],
    legend: { position: 'bottom', labels: { colors: '#3730a3' } }
  };
  const satisfactionPieSeries = [customerSatisfaction.satisfied, customerSatisfaction.neutral, customerSatisfaction.dissatisfied];

  // Table data
  const vagonTableData = vagonTypes.map((v, idx) => ({
    ...v,
    used: v.value * 0.85 | 0,
    idle: v.value * 0.10 | 0,
    repair: v.value * 0.05 | 0,
    efficiency: (95 + idx).toFixed(1),
  }));

  // Generate large mock data for idle vagons by temir yo'l uzeli and date (2024-01-01 to 2025-07-01)
  const uzelNames = [
    "Toshkent temir yo'l uzeli",
    "Qarshi temir yo'l uzeli",
    "Termiz temir yo'l uzeli",
    "Qo'qon temir yo'l uzeli",
    "Buxoro temir yo'l uzeli",
    "Qo'ng'irot temir yo'l uzeli"
  ];
  function getDateArray(start, end) {
    const arr = [];
    let dt = new Date(start);
    const endDt = new Date(end);
    while (dt <= endDt) {
      arr.push(dt.toISOString().slice(0, 10));
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }
  const allDates = getDateArray('2024-01-01', '2025-07-01');
  const uzelIdleData = [];
  for (const date of allDates) {
    for (const uzel of uzelNames) {
      uzelIdleData.push({
        uzel,
        idle: Math.floor(Math.random() * 11), // 0-10 ta vagon
        idleDays: +(Math.random() * 7 + 1).toFixed(1), // 1-8 kun, o'rtacha
        date
      });
    }
  }
  const [idleStart, setIdleStart] = React.useState('2024-06-01');
  const [idleEnd, setIdleEnd] = React.useState('2024-06-02');
  const filteredIdle = uzelIdleData.filter(item => item.date >= idleStart && item.date <= idleEnd);
  const idleByUzel = {};
  filteredIdle.forEach(item => {
    if (!idleByUzel[item.uzel]) {
      idleByUzel[item.uzel] = { idle: 0, idleDaysSum: 0, count: 0 };
    }
    idleByUzel[item.uzel].idle += item.idle;
    idleByUzel[item.uzel].idleDaysSum += item.idleDays;
    idleByUzel[item.uzel].count++;
  });
  const uzelNamesForChart = Object.keys(idleByUzel);
  const idleCounts = uzelNamesForChart.map(uzel => idleByUzel[uzel].idle);
  const avgIdleDays = uzelNamesForChart.map(uzel => idleByUzel[uzel].count ? +(idleByUzel[uzel].idleDaysSum / idleByUzel[uzel].count).toFixed(1) : 0);
  const idleBarOptions = {
    chart: { type: 'bar', height: 300, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { borderRadius: 4, horizontal: false, columnWidth: '55%' } },
    dataLabels: { enabled: false },
    xaxis: { categories: uzelNamesForChart, labels: { style: { colors: '#3730a3' } } },
    yaxis: [
      { title: { text: 'Turib qolgan vagonlar', style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
      { opposite: true, title: { text: "O'rtacha turib qolish vaqti (kun)", style: { color: '#f59e0b' } }, labels: { style: { colors: '#f59e0b' } } }
    ],
    fill: { opacity: 1 },
    colors: ['#ef4444', '#f59e0b'],
    tooltip: { shared: true, intersect: false, y: [
      { formatter: val => val + ' ta' },
      { formatter: val => val + ' kun' }
    ] },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const idleBarSeries = [
    { name: 'Turib qolgan vagonlar soni', data: idleCounts, type: 'column' },
    { name: 'O\'rtacha turib qolish vaqti (kun)', data: avgIdleDays, type: 'column', yAxisIndex: 1 }
  ];

  return (
    <div className="vagon-container">
      <div className="vagon-content">
        {/* Header */}
        <div className="vagon-header">
          <h1 className="vagon-title">Vagonlar Dashboard</h1>
          <p className="vagon-subtitle">Vagonlar bo'yicha zamonaviy analitika va samaradorlik tahlillari</p>
          <div className="vagon-divider"></div>
        </div>

        {/* Stats Cards */}
        <div className="vagon-stats-grid">
          <div className="vagon-stat-card vagon-cyan">
            <div className="vagon-stat-card-content">
              <div className="vagon-stat-info">
                <h4>Jami vagonlar</h4>
                <div className="vagon-stat-value">{totalVagons}</div>
                <div className="vagon-stat-unit">ta</div>
              </div>
              <div className="vagon-stat-icon"><FaTrain color="#3b82f6" /></div>
            </div>
          </div>
          <div className="vagon-stat-card vagon-green">
            <div className="vagon-stat-card-content">
              <div className="vagon-stat-info">
                <h4>O'rtacha samaradorlik</h4>
                <div className="vagon-stat-value">{avgEfficiency}%</div>
                <div className="vagon-stat-unit">%</div>
              </div>
              <div className="vagon-stat-icon"><FaCogs color="#10b981" /></div>
            </div>
          </div>
          <div className="vagon-stat-card vagon-orange">
            <div className="vagon-stat-card-content">
              <div className="vagon-stat-info">
                <h4>O'rtacha ta'mir vaqti</h4>
                <div className="vagon-stat-value">{efficiencyStats.avgRepairTime}</div>
                <div className="vagon-stat-unit">kun</div>
              </div>
              <div className="vagon-stat-icon"><FaBalanceScale color="#f59e42" /></div>
            </div>
          </div>
          <div className="vagon-stat-card vagon-purple">
            <div className="vagon-stat-card-content">
              <div className="vagon-stat-info">
                <h4>Mijozlar mamnunligi</h4>
                <div className="vagon-stat-value">{customerSatisfaction.satisfied}%</div>
                <div className="vagon-stat-unit">%</div>
              </div>
              <div className="vagon-stat-icon"><FaSmile color="#a21caf" /></div>
            </div>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="vagon-charts-grid">
          {/* Bar Chart: Vagon usage */}
          <div className="vagon-chart-card">
            <div className="vagon-chart-header">
              <div className="vagon-chart-indicator"></div>
              <h3 className="vagon-chart-title">Oylik vagonlar ishlatilishi</h3>
              <div className="vagon-trend-filters">
                <button className={`vagon-filter-btn ${trendPeriod === '3' ? 'active' : ''}`} onClick={() => setTrendPeriod('3')}>3 oy</button>
                <button className={`vagon-filter-btn ${trendPeriod === '6' ? 'active' : ''}`} onClick={() => setTrendPeriod('6')}>6 oy</button>
                <button className={`vagon-filter-btn ${trendPeriod === '12' ? 'active' : ''}`} onClick={() => setTrendPeriod('12')}>1 yil</button>
              </div>
            </div>
            <ReactApexChart options={usageBarOptions} series={usageBarSeries} type="bar" height={350} />
          </div>

          {/* Pie Chart: Vagon types */}
          <div className="vagon-chart-card">
            <div className="vagon-chart-header">
              <div className="vagon-chart-indicator"></div>
              <h3 className="vagon-chart-title">Vagon turlari taqsimoti</h3>
            </div>
            <ReactApexChart options={typePieOptions} series={typePieSeries} type="pie" height={350} />
          </div>
        </div>

        {/* Idle Vagon by Region Chart */}
        <div className="vagon-charts-grid">
          <div className="vagon-chart-card">
            <div className="vagon-chart-header">
              <div className="vagon-chart-indicator"></div>
              <h3 className="vagon-chart-title">Temir yo'l uzellari bo'yicha turib qolgan vagonlar soni va vaqti</h3>
              <Box sx={{ display: 'flex', gap: 2, mt: 1, mb: 2 }}>
                <TextField
                  label="Boshlanish sanasi"
                  type="date"
                  size="small"
                  value={idleStart}
                  onChange={e => setIdleStart(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: '2024-01-01', max: '2025-07-01' }}
                />
                <TextField
                  label="Tugash sanasi"
                  type="date"
                  size="small"
                  value={idleEnd}
                  onChange={e => setIdleEnd(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: '2024-01-01', max: '2025-07-01' }}
                />
              </Box>
            </div>
            <ReactApexChart options={idleBarOptions} series={idleBarSeries} type="bar" height={300} />
          </div>
        </div>

        {/* Efficiency and Satisfaction */}
        <div className="vagon-charts-grid">
          {/* Line Chart: Efficiency trend */}
          <div className="vagon-chart-card">
            <div className="vagon-chart-header">
              <div className="vagon-chart-indicator"></div>
              <h3 className="vagon-chart-title">Oylik samaradorlik trendi</h3>
            </div>
            <ReactApexChart options={efficiencyLineOptions} series={efficiencyLineSeries} type="line" height={300} />
          </div>

          {/* Pie Chart: Customer satisfaction */}
          <div className="vagon-chart-card">
            <div className="vagon-chart-header">
              <div className="vagon-chart-indicator"></div>
              <h3 className="vagon-chart-title">Mijozlar mamnunligi</h3>
            </div>
            <ReactApexChart options={satisfactionPieOptions} series={satisfactionPieSeries} type="pie" height={250} />
            <div className="vagon-satisfaction-legend">
              <span><FaSmile color="#10b981" /> Mamnun</span>
              <span><FaRegThumbsUp color="#fbbf24" /> Betaraf</span>
              <span><FaRegThumbsDown color="#ef4444" /> Norozi</span>
            </div>
          </div>
        </div>
        <div className="vagon-charts-grid">
          <div className="vagon-chart-card">
          <div className="vagon-chart-header">
              <div className="vagon-chart-indicator"></div>
              <h3 className="vagon-chart-title">Samaradorlik</h3>
            </div>
{/* Efficiency Section */}
<div className="vagon-efficiency-section">
          <VagonEfficiencyBar label="Samaradorlik" percent={efficiencyStats.efficiency} color="linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)" percentColor="#16a34a" />
          <VagonEfficiencyBar label="O'z vaqtida yetkazib berish" percent={efficiencyStats.onTimeRate} color="linear-gradient(90deg, #6366f1, #a21caf, #6366f1)" percentColor="#0ea5e9" />
          <VagonEfficiencyBar label="Ta'mir samaradorligi" percent={avgEfficiency} color="linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9)" percentColor="#6366f1" />
        </div>
          </div>
        </div>
        

        {/* Vagon Types Table */}
        <div className="vagon-data-table-container">
          <div className="vagon-chart-header">
            <div className="vagon-chart-indicator"></div>
            <h3 className="vagon-chart-title">Vagon turlari va ishlatilishi</h3>
          </div>
          <div className="vagon-overflow-x-auto">
            <table className="vagon-data-table">
              <thead>
                <tr>
                  <th>Vagon turi</th>
                  <th>Jami</th>
                  <th>Foydalanilgan</th>
                  <th>Bekor turgan</th>
                  <th>Ta'mirda</th>
                  <th>Samaradorlik (%)</th>
                </tr>
              </thead>
              <tbody>
                {vagonTableData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="vagon-font-semibold">{item.name}</td>
                    <td>{item.value}</td>
                    <td>{item.used}</td>
                    <td>{item.idle}</td>
                    <td>{item.repair}</td>
                    <td>
                      <span className="vagon-percentage-badge" style={{ backgroundColor: item.efficiency > 97 ? '#10b981' : item.efficiency > 95 ? '#f59e0b' : '#ef4444' }}>
                        {item.efficiency}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// EfficiencyBar component
function VagonEfficiencyBar({ label, percent, color, percentColor }) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timeout = setTimeout(() => setProgress(percent), 300);
    return () => clearTimeout(timeout);
  }, [percent]);
  return (
    <div className="vagon-eff-bar-row">
      <div className="vagon-eff-bar-label">{label}</div>
      <div className="vagon-eff-bar-percent" style={{ color: percentColor }}>{percent}%</div>
      <div className="vagon-eff-bar-bg">
        <div
          className="vagon-eff-bar-fg"
          style={{
            width: progress + '%',
            background: color
          }}
        />
      </div>
    </div>
  );
}
