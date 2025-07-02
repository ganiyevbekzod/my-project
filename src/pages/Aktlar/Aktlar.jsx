import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaArrowUp, FaArrowDown, FaFileAlt, FaFileSignature, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import './Aktlar.css';

// Mock KPI stats for Aktlar
const aktStats = [
  { metric: "Jami aktlar", value: 860, change: 7.5, trend: "up" },
  { metric: "Qabul qilingan", value: 690, change: 5.2, trend: "up" },
  { metric: "Rad etilgan", value: 70, change: -1.8, trend: "down" },
  { metric: "Jarayonda", value: 100, change: 2.3, trend: "up" },
];

// KPI for each akt type
const aktTypeKPI = [
  {
    metric: "Texnik aktlar",
    value: 312,
    change: 9.1,
    trend: "up",
    stats: [
      { label: 'Kutilmoqda', value: 32 },
      { label: 'Jarayonda', value: 54 },
      { label: 'Tugallangan', value: 210 },
      { label: 'Rad etilgan', value: 16 },
    ],
    percent: 87.3,
    icon: <FaFileAlt className="ariza-icon blue" />,
  },
  {
    metric: "Moliyaviy aktlar",
    value: 245,
    change: 6.7,
    trend: "up",
    stats: [
      { label: 'Kutilmoqda', value: 21 },
      { label: 'Jarayonda', value: 38 },
      { label: 'Tugallangan', value: 170 },
      { label: 'Rad etilgan', value: 16 },
    ],
    percent: 79.4,
    icon: <FaBalanceScale className="ariza-icon green" />,
  },
  {
    metric: "Xavfsizlik aktlari",
    value: 198,
    change: 8.3,
    trend: "up",
    stats: [
      { label: 'Kutilmoqda', value: 18 },
      { label: 'Jarayonda', value: 29 },
      { label: 'Tugallangan', value: 140 },
      { label: 'Rad etilgan', value: 11 },
    ],
    percent: 70.7,
    icon: <FaShieldAlt className="ariza-icon orange" />,
  },
  {
    metric: "Mesplan aktlar",
    value: 105,
    change: -4.2,
    trend: "down",
    stats: [
      { label: 'Kutilmoqda', value: 9 },
      { label: 'Jarayonda', value: 17 },
      { label: 'Tugallangan', value: 70 },
      { label: 'Rad etilgan', value: 9 },
    ],
    percent: 93.5,
    icon: <FaFileSignature className="ariza-icon purple" />,
  },
];

// Monthly data for 12 months
const allMonthlyAktlar = [
  { month: "Iyul", texnik: 28, moliyaviy: 22, xavfsizlik: 18, boshqa: 9 },
  { month: "Iyun", texnik: 26, moliyaviy: 20, xavfsizlik: 16, boshqa: 8 },
  { month: "May", texnik: 24, moliyaviy: 19, xavfsizlik: 15, boshqa: 7 },
  { month: "Apr", texnik: 23, moliyaviy: 18, xavfsizlik: 14, boshqa: 7 },
  { month: "Mar", texnik: 22, moliyaviy: 17, xavfsizlik: 13, boshqa: 6 },
  { month: "Fev", texnik: 20, moliyaviy: 16, xavfsizlik: 12, boshqa: 6 },
  { month: "Yan", texnik: 18, moliyaviy: 15, xavfsizlik: 11, boshqa: 5 },
  { month: "Dek", texnik: 17, moliyaviy: 14, xavfsizlik: 10, boshqa: 5 },
  { month: "Noy", texnik: 16, moliyaviy: 13, xavfsizlik: 9, boshqa: 4 },
  { month: "Okt", texnik: 15, moliyaviy: 12, xavfsizlik: 8, boshqa: 4 },
  { month: "Sen", texnik: 14, moliyaviy: 11, xavfsizlik: 7, boshqa: 3 },
  { month: "Avg", texnik: 13, moliyaviy: 10, xavfsizlik: 6, boshqa: 3 },
];

const aktTypeDistribution = [
  { name: "Texnik akt", value: 312, color: "#3b82f6" },
  { name: "Moliyaviy akt", value: 245, color: "#10b981" },
  { name: "Xavfsizlik akt", value: 198, color: "#f59e42" },
  { name: "Mesplan akt", value: 305, color: "#a21caf" },
];

const regionStats = [
  { region: "Toshkent", count: 90 },
  { region: "Samarqand", count: 70 },
  { region: "Buxoro", count: 60 },
  { region: "Andijon", count: 55 },
  { region: "Farg'ona", count: 50 },
  { region: "Namangan", count: 48 },
  { region: "Qashqadaryo", count: 45 },
  { region: "Surxondaryo", count: 42 },
  { region: "Jizzax", count: 40 },
  { region: "Sirdaryo", count: 38 },
  { region: "Navoiy", count: 36 },
  { region: "Xorazm", count: 35 },
];

const Aktlar = () => {
  const [period, setPeriod] = React.useState('6');
  const getFilteredMonthlyAktlar = () => {
    const count = period === '3' ? 3 : period === '6' ? 6 : 12;
    return allMonthlyAktlar.slice(0, count).reverse();
  };
  const filteredMonthlyAktlar = getFilteredMonthlyAktlar();
///////////////////////////////
  // Area chart options
  const areaChartOptions = {
    chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: filteredMonthlyAktlar.map(item => item.month), labels: { style: { colors: '#3730a3' } } },
    yaxis: { labels: { style: { colors: '#3730a3' } } },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.9, stops: [0, 90, 100] } },
    colors: ['#3b82f6', '#10b981', '#f59e42', '#a21caf'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const areaChartSeries = [
    { name: "Texnik akt", data: filteredMonthlyAktlar.map(item => item.texnik) },
    { name: "Moliyaviy akt", data: filteredMonthlyAktlar.map(item => item.moliyaviy) },
    { name: "Xavfsizlik akti", data: filteredMonthlyAktlar.map(item => item.xavfsizlik) },
    { name: "Boshqa", data: filteredMonthlyAktlar.map(item => item.boshqa) },
  ];

  // Pie/Donut chart for type distribution
  const pieChartOptions = {
    chart: { type: 'donut', height: 320 },
    labels: aktTypeDistribution.map(item => item.name),
    colors: aktTypeDistribution.map(item => item.color),
    legend: { position: 'bottom', labels: { colors: '#3730a3' } }
  };
  const pieChartSeries = aktTypeDistribution.map(item => item.value);

  // Bar chart for region breakdown
  const barChartOptions = {
    chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 6, distributed: true } },
    dataLabels: { enabled: true, style: { colors: ['#fff'], fontWeight: 700 }, offsetY: -10 },
    xaxis: { categories: regionStats.map(item => item.region), labels: { style: { colors: '#3730a3' } } },
    yaxis: { title: { text: 'Aktlar soni', style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
    fill: { opacity: 1, colors: ['#3b82f6', '#10b981', '#f59e42', '#a21caf', '#ef4444', '#fbbf24'] },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const barChartSeries = [{ name: 'Aktlar', data: regionStats.map(item => item.count) }];
////////////////////////////////////////
  return (
    <div className="aktlar-dashboard">
      <div className="aktlar-content">
        {/* Header */}
        <div className="aktlar-header">
          <h1 className="aktlar-title">Aktlar Dashboard</h1>
          <p className="aktlar-subtitle">Aktlar bo'yicha to'liq analitika va hisobotlar</p>
          <div className="aktlar-divider"></div>
        </div>

        {/* KPI Cards for each akt type */}
        <div className="aktlar-type-grid">
          {aktTypeKPI.map((item, idx) => (
            <div key={idx} className="aktlar-type-card">
              <div className="aktlar-type-content">
                <div className="aktlar-type-info">
                  <h4>{item.metric}</h4>
                  <div className="aktlar-type-value">{item.value.toLocaleString()}</div>
                  <div className="aktlar-type-change">
                    <span className={`aktlar-trend ${item.trend}`}>{item.trend === 'up' ? <FaArrowUp style={{color:'#10b981',marginRight:4}}/> : <FaArrowDown style={{color:'#ef4444',marginRight:4}}/>}{item.change > 0 ? '+' : ''}{item.change}%</span>
                    <span className="aktlar-trend-label">o'tgan oyga nisbatan</span>
                  </div>
                </div>
                <div className="aktlar-type-icon-wrapper">{item.icon}</div>
              </div>
              <div className="aktlar-type-details-row">
                <div className="aktlar-type-stats-list">
                  {item.stats.map((stat, i) => (
                    <div className="aktlar-type-stat" key={i}>
                      <div className="aktlar-type-stat-value">{stat.value}</div>
                      <div className="aktlar-type-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="aktlar-type-progress-row">
                  <div className="aktlar-type-progress-bar">
                    <div className="aktlar-type-progress-fill" style={{ width: `${item.percent}%` }}></div>
                  </div>
                  <div className="aktlar-type-progress-label">{item.percent}% tugallangan</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Area chart for monthly aktlar trend */}
        <div className="aktlar-chart-card">
          <div className="aktlar-chart-header">
            <div className="aktlar-chart-indicator"></div>
            <h3 className="aktlar-chart-title">Oylik aktlar dinamikasi (turlari bo'yicha)</h3>
            <span className="aktlar-chart-badge">Aktlar</span>
            <div className="aktlar-retention-filters">
              <button className={`aktlar-filter-btn ${period === '3' ? 'active' : ''}`} onClick={() => setPeriod('3')}>3 oy</button>
              <button className={`aktlar-filter-btn ${period === '6' ? 'active' : ''}`} onClick={() => setPeriod('6')}>6 oy</button>
              <button className={`aktlar-filter-btn ${period === '12' ? 'active' : ''}`} onClick={() => setPeriod('12')}>1 yil</button>
            </div>
          </div>
          <ReactApexChart options={areaChartOptions} series={areaChartSeries} type="area" height={300} />
        </div>

        {/* KPI Cards (summary) */}
        <div className="aktlar-kpi-grid">
          {aktStats.map((item, idx) => (
            <div key={idx} className="aktlar-kpi-card">
              <div className="aktlar-kpi-content">
                <div className="aktlar-kpi-info">
                  <h4>{item.metric}</h4>
                  <div className="aktlar-kpi-value">{item.value.toLocaleString()}</div>
                  <div className="aktlar-kpi-change">
                    <span className={`aktlar-trend ${item.trend}`}>{item.change > 0 ? "+" : ""}{item.change}%</span>
                    <span className="aktlar-trend-label">o'tgan oyga nisbatan</span>
                  </div>
                </div>
                <div className="aktlar-kpi-icon">{item.trend === "up" ? "📈" : "📉"}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bar chart for region breakdown */}
        <div className="aktlar-chart-card" style={{ flex: 1, minWidth: 0 }}>
          <div className="aktlar-chart-header">
            <div className="aktlar-chart-indicator"></div>
            <h3 className="aktlar-chart-title">Hududlar bo'yicha aktlar</h3>
          </div>
          <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
        </div>

        {/* Pie/Donut chart for akt type distribution */}
        <div className="aktlar-charts-row">
          <div className="aktlar-chart-card" style={{ flex: 1, minWidth: 0 }}>
            <div className="aktlar-chart-header">
              <div className="aktlar-chart-indicator"></div>
              <h3 className="aktlar-chart-title">Turlari bo'yicha taqsimot</h3>
            </div>
            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="donut" height={320} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktlar;

