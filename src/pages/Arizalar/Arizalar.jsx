import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaArrowUp, FaArrowDown, FaTrain, FaBoxOpen, FaCubes, FaSyncAlt } from 'react-icons/fa';
import './Arizalar.css';

// Fake data for dashboard
const applicationStats = [
  { metric: "Jami arizalar", value: 1240, change: 8.2, trend: "up" },
  { metric: "Qabul qilingan", value: 980, change: 6.5, trend: "up" },
  { metric: "Rad etilgan", value: 120, change: -2.1, trend: "down" },
  { metric: "Ko'rib chiqilmoqda", value: 140, change: 1.7, trend: "up" },
];

// New: KPI for each application type
const typeKPI = [
  {
    metric: "Bo'sh vagon arizalari",
    value: 2847,
    change: 12.5,
    trend: "up",
    stats: [
      { label: 'Kutilmoqda', value: 342 },
      { label: 'Jarayonda', value: 567 },
      { label: 'Tugallangan', value: 1756 },
      { label: 'Rad etilgan', value: 182 },
    ],
    percent: 61.7,
    icon: <FaTrain className="ariza-icon blue" />,
  },
  {
    metric: "Yukli vagon arizalari",
    value: 1923,
    change: 8.7,
    trend: "up",
    stats: [
      { label: 'Kutilmoqda', value: 234 },
      { label: 'Jarayonda', value: 445 },
      { label: 'Tugallangan', value: 1156 },
      { label: 'Rad etilgan', value: 88 },
    ],
    percent: 60.1,
    icon: <FaBoxOpen className="ariza-icon green" />,
  },
  {
    metric: "Konteyner arizalari",
    value: 3156,
    change: 15.3,
    trend: "up",
    stats: [
      { label: 'Kutilmoqda', value: 456 },
      { label: 'Jarayonda', value: 678 },
      { label: 'Tugallangan', value: 1834 },
      { label: 'Rad etilgan', value: 188 },
    ],
    percent: 58.1,
    icon: <FaCubes className="ariza-icon orange" />,
  },
  {
    metric: "Qayta manzillashtirish arizalari",
    value: 1567,
    change: -6.9,
    trend: "down",
    stats: [
      { label: 'Kutilmoqda', value: 189 },
      { label: 'Jarayonda', value: 298 },
      { label: 'Tugallangan', value: 967 },
      { label: 'Rad etilgan', value: 113 },
    ],
    percent: 61.7,
    icon: <FaSyncAlt className="ariza-icon purple" />,
  },
];

const monthlyApplications = [
  { month: "Yan", total: 90, accepted: 70, rejected: 10, pending: 10, empty: 22, loaded: 30, container: 15, reroute: 6 },
  { month: "Fev", total: 110, accepted: 85, rejected: 12, pending: 13, empty: 28, loaded: 36, container: 18, reroute: 8 },
  { month: "Mar", total: 120, accepted: 95, rejected: 15, pending: 10, empty: 30, loaded: 40, container: 20, reroute: 9 },
  { month: "Apr", total: 130, accepted: 100, rejected: 18, pending: 12, empty: 35, loaded: 44, container: 22, reroute: 10 },
  { month: "May", total: 150, accepted: 120, rejected: 15, pending: 15, empty: 40, loaded: 50, container: 25, reroute: 12 },
  { month: "Iyun", total: 160, accepted: 130, rejected: 18, pending: 12, empty: 45, loaded: 55, container: 28, reroute: 14 },
];

const typeDistribution = [
  { name: "Bo'sh vagon", value: 320, color: "#3b82f6" },
  { name: "Yukli vagon", value: 410, color: "#10b981" },
  { name: "Konteyner", value: 210, color: "#f59e42" },
  { name: "Qayta manzillashtirish", value: 85, color: "#a21caf" },
];

// Replace regionStats with 12 regions
const regionStats = [
  { region: "Toshkent", count: 120 },
  { region: "Samarqand", count: 90 },
  { region: "Buxoro", count: 80 },
  { region: "Andijon", count: 70 },
  { region: "Farg'ona", count: 60 },
  { region: "Namangan", count: 75 },
  { region: "Qashqadaryo", count: 65 },
  { region: "Surxondaryo", count: 55 },
  { region: "Jizzax", count: 50 },
  { region: "Sirdaryo", count: 45 },
  { region: "Navoiy", count: 58 },
  { region: "Xorazm", count: 62 },
];

// Add 12 months of fake data for filtering
const allMonthlyApplications = [
  { month: "Iyul", empty: 48, loaded: 58, container: 30, reroute: 15 },
  { month: "Iyun", empty: 45, loaded: 55, container: 28, reroute: 14 },
  { month: "May", empty: 40, loaded: 50, container: 25, reroute: 12 },
  { month: "Apr", empty: 35, loaded: 44, container: 22, reroute: 10 },
  { month: "Mar", empty: 30, loaded: 40, container: 20, reroute: 9 },
  { month: "Fev", empty: 28, loaded: 36, container: 18, reroute: 8 },
  { month: "Yan", empty: 22, loaded: 30, container: 15, reroute: 6 },
  { month: "Dek", empty: 20, loaded: 28, container: 13, reroute: 5 },
  { month: "Noy", empty: 18, loaded: 25, container: 12, reroute: 5 },
  { month: "Okt", empty: 16, loaded: 22, container: 10, reroute: 4 },
  { month: "Sen", empty: 15, loaded: 20, container: 9, reroute: 3 },
  { month: "Avg", empty: 13, loaded: 18, container: 8, reroute: 3 },
];

// Function to get beautiful gradients for regions (copied from Customer.jsx)
const getRegionGradient = (index) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  ];
  return gradients[index % gradients.length];
};

// Calculate total and average for regionStats
const totalRegionApplications = regionStats.reduce((sum, region) => sum + region.count, 0);
const avgRegionApplications = Math.round(totalRegionApplications / regionStats.length);
const regionPercentages = regionStats.map(r => ({ ...r, percentage: Math.round((r.count / totalRegionApplications) * 100) }));

const Arizalar = () => {
  // Filtering state and logic must be inside the component
  const [period, setPeriod] = React.useState('6'); // default 6 months
  const getFilteredMonthlyApplications = () => {
    const count = period === '3' ? 3 : period === '6' ? 6 : 12;
    return allMonthlyApplications.slice(0, count).reverse();
  };
  const filteredMonthlyApplications = getFilteredMonthlyApplications();

  // Area chart options (filtered)
  const areaChartOptions = {
    chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: filteredMonthlyApplications.map(item => item.month), labels: { style: { colors: '#3730a3' } } },
    yaxis: { labels: { style: { colors: '#3730a3' } } },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.9, stops: [0, 90, 100] } },
    colors: ['#3b82f6', '#10b981', '#f59e42', '#a21caf'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const areaChartSeries = [
    { name: "Bo'sh vagon", data: filteredMonthlyApplications.map(item => item.empty) },
    { name: "Yukli vagon", data: filteredMonthlyApplications.map(item => item.loaded) },
    { name: "Konteyner", data: filteredMonthlyApplications.map(item => item.container) },
    { name: "Qayta manzillashtirish", data: filteredMonthlyApplications.map(item => item.reroute) },
  ];

  // Pie/Donut chart for type distribution
  const pieChartOptions = {
    chart: { type: 'donut', height: 320 },
    labels: typeDistribution.map(item => item.name),
    colors: typeDistribution.map(item => item.color),
    legend: { position: 'bottom', labels: { colors: '#3730a3' } }
  };
  const pieChartSeries = typeDistribution.map(item => item.value);

  // Bar chart for region breakdown
  const barChartOptions = {
    chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 6, distributed: true } },
    dataLabels: { enabled: true, style: { colors: ['#fff'], fontWeight: 700 }, offsetY: -10 },
    xaxis: { categories: regionStats.map(item => item.region), labels: { style: { colors: '#3730a3' } } },
    yaxis: { title: { text: 'Arizalar soni', style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
    fill: { opacity: 1, colors: ['#3b82f6', '#10b981', '#f59e42', '#a21caf', '#ef4444', '#fbbf24'] },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const barChartSeries = [{ name: 'Arizalar', data: regionStats.map(item => item.count) }];

  return (
    <div className="arizalar-dashboard">
      <div className="arizalar-content">
        {/* Header */}
        <div className="arizalar-header">
          <h1 className="arizalar-title">Arizalar Dashboard</h1>
          <p className="arizalar-subtitle">Arizalar va vagon/konteynerlar bo'yicha to'liq analitika va hisobotlar</p>
          <div className="arizalar-divider"></div>
        </div>

        {/* KPI Cards */}

        {/* New: KPI Cards for each application type */}
        <div className="ariza-grid">
          {typeKPI.map((item, idx) => (
            <div key={idx} className="ariza-card">
              <div className="ariza-content">
                <div className="ariza-info">
                  <h4>{item.metric}</h4>
                  <div className="ariza-value">{item.value.toLocaleString()}</div>
                  <div className="ariza-change">
                    <span className={`trend ${item.trend}`}>{item.trend === 'up' ? <FaArrowUp style={{color:'#10b981',marginRight:4}}/> : <FaArrowDown style={{color:'#ef4444',marginRight:4}}/>}{item.change > 0 ? '+' : ''}{item.change}%</span>
                    <span className="trend-label">o'tgan oyga nisbatan</span>
                  </div>
                </div>
                <div className="ariza-icon-wrapper">{item.icon}</div>
              </div>
              <div className="ariza-details-row">
                <div className="ariza-stats-list">
                  {item.stats.map((stat, i) => (
                    <div className="ariza-stat" key={i}>
                      <div className="ariza-stat-value">{stat.value}</div>
                      <div className="ariza-stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="ariza-progress-row">
                  <div className="ariza-progress-bar">
                    <div className="ariza-progress-fill" style={{ width: `${item.percent}%` }}></div>
                  </div>
                  <div className="ariza-progress-label">{item.percent}% tugallangan</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section: Oylik trend for all types */}
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Oylik arizalar dinamikasi (turlari bo'yicha)</h3>
            <span className="chart-badge">Soni</span>
            <div className="retention-filters">
              <button className={`filter-btn ${period === '3' ? 'active' : ''}`} onClick={() => setPeriod('3')}>3 oy</button>
              <button className={`filter-btn ${period === '6' ? 'active' : ''}`} onClick={() => setPeriod('6')}>6 oy</button>
              <button className={`filter-btn ${period === '12' ? 'active' : ''}`} onClick={() => setPeriod('12')}>1 yil</button>
            </div>
          </div>
          <ReactApexChart options={areaChartOptions} series={areaChartSeries} type="area" height={300} />
        </div>
        <div className="kpi-grid">
          {applicationStats.map((item, idx) => (
            <div key={idx} className="kpi-card">
              <div className="kpi-content">
                <div className="kpi-info">
                  <h4>{item.metric}</h4>
                  <div className="kpi-value">{item.value.toLocaleString()}</div>
                  <div className="kpi-change">
                    <span className={`trend ${item.trend}`}>{item.change > 0 ? "+" : ""}{item.change}%</span>
                    <span className="trend-label">o'tgan oyga nisbatan</span>
                  </div>
                </div>
                <div className="kpi-icon">{item.trend === "up" ? "📈" : "📉"}</div>
              </div>
            </div>
          ))}
        </div>


        <div className="chart-card" style={{ flex: 1, minWidth: 0 }}>
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududlar bo'yicha arizalar</h3>
            <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
          </div>

        <div className="charts-row">
          <div className="chart-card" style={{ flex: 1, minWidth: 0 }}>
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Turlari bo'yicha taqsimot</h3>
            <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="donut" height={320} />
          </div>
        </div>
    </div>
      </div>
  );
};

export default Arizalar;