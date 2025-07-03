import React from "react";
import ReactApexChart from 'react-apexcharts';
import './KonvensionTaqiqlar.css';
import { FaBan, FaExclamationTriangle, FaShieldAlt, FaTrain, FaRoute, FaGlobe, FaChartLine, FaChartPie, FaArrowUp, FaArrowDown, FaCheckCircle, FaTimesCircle, FaClock, FaCalendarAlt, FaMapMarkerAlt, FaIndustry, FaWarehouse, FaTruck, FaUserTie, FaBuilding } from 'react-icons/fa';

// Konvension taqiqlar turlari
const RESTRICTION_TYPES = [
  "Davlat cheklovlari",
  "Stansiya cheklovlari", 
  "Vagon cheklovlari",
  "Vagon turi cheklovlari",
  "Qabul qiluvchi cheklovlari"
];

// Mock data for konvension taqiqlar
const restrictionData = [
  { 
    name: "Davlat cheklovlari", 
    value: 245, 
    growth: -15.2, 
    share: 35, 
    color: "#ef4444", 
    monthly: [45, 42, 38, 35, 32, 30, 28, 25, 22, 20, 18, 15],
    icon: <FaGlobe color="#ef4444" />,
    description: "Davlatlararo kelishuvlar va siyosiy cheklovlar"
  },
  { 
    name: "Stansiya cheklovlari", 
    value: 180, 
    growth: -8.7, 
    share: 26, 
    color: "#f59e0b", 
    monthly: [35, 33, 30, 28, 25, 23, 20, 18, 16, 14, 12, 10],
    icon: <FaBuilding color="#f59e0b" />,
    description: "Stansiya infratuzilmasi va texnik cheklovlar"
  },
  { 
    name: "Vagon cheklovlari", 
    value: 156, 
    growth: -12.3, 
    share: 22, 
    color: "#3b82f6", 
    monthly: [30, 28, 25, 22, 20, 18, 16, 14, 12, 10, 8, 6],
    icon: <FaTrain color="#3b82f6" />,
    description: "Vagon texnik holati va xavfsizlik cheklovlari"
  },
  { 
    name: "Vagon turi cheklovlari", 
    value: 89, 
    growth: -5.4, 
    share: 13, 
    color: "#10b981", 
    monthly: [18, 16, 14, 12, 10, 8, 6, 5, 4, 3, 2, 1],
    icon: <FaWarehouse color="#10b981" />,
    description: "Vagon turlari va yuklash cheklovlari"
  },
  { 
    name: "Qabul qiluvchi cheklovlari", 
    value: 67, 
    growth: -3.1, 
    share: 4, 
    color: "#8b5cf6", 
    monthly: [12, 10, 8, 6, 4, 3, 2, 1, 1, 0, 0, 0],
    icon: <FaUserTie color="#8b5cf6" />,
    description: "Qabul qiluvchi tashkilotlar cheklovlari"
  },
];

const months = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];

const totalRestrictions = restrictionData.reduce((sum, r) => sum + r.value, 0);
const avgGrowth = (restrictionData.reduce((sum, r) => sum + r.growth, 0) / restrictionData.length).toFixed(1);
const topRestriction = restrictionData[0];

// Area chart for monthly trend (all restrictions)
const areaChartOptions = {
  chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#1900fe' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.4, stops: [0, 90, 100] } },
  colors: restrictionData.map(r => r.color),
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const areaChartSeries = restrictionData.map(r => ({ name: r.name, data: r.monthly }));

// Pie chart for share
const pieChartOptions = {
  chart: { type: 'pie', height: 350 },
  labels: restrictionData.map(r => r.name),
  colors: restrictionData.map(r => r.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const pieChartSeries = restrictionData.map(r => r.share);

// Bar chart for restrictions by type
const barChartOptions = {
  chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
  plotOptions: { bar: { borderRadius: 4, horizontal: false, columnWidth: '55%', distributed: true } },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  xaxis: { categories: restrictionData.map(r => r.name), labels: { style: { colors: '#3730a3' } } },
  yaxis: { title: { text: 'Taqiqlar soni', style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
  fill: { opacity: 1, colors: restrictionData.map(r => r.color) },
  tooltip: { y: { formatter: val => val + " ta" } },
  grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
};
const barChartSeries = [{ name: "Taqiqlar", data: restrictionData.map(r => r.value) }];

// Mock data for additional analytics
const restrictionTrendMonthly = months.map((m, i) => ({ month: m, trend: Math.round(Math.random() * -20 - 5) }));
const restrictionSeverity = [
  { label: "Yuqori darajali", value: 120, color: "#ef4444" },
  { label: "O'rta darajali", value: 180, color: "#f59e0b" },
  { label: "Past darajali", value: 200, color: "#10b981" },
  { label: "Yengil", value: 150, color: "#3b82f6" },
];
const yearlyTrend = [
  { year: "2021", value: 850 },
  { year: "2022", value: 720 },
  { year: "2023", value: 580 },
  { year: "2024", value: totalRestrictions },
];
const topRegions = [
  { region: "Toshkent viloyati", value: 85 },
  { region: "Samarqand viloyati", value: 72 },
  { region: "Buxoro viloyati", value: 65 },
  { region: "Andijon viloyati", value: 58 },
  { region: "Farg'ona viloyati", value: 52 },
];
const forecast = [
  { month: "Avg", value: 65 },
  { month: "Sen", value: 58 },
  { month: "Okt", value: 52 },
  { month: "Noy", value: 48 },
  { month: "Dek", value: 45 },
  { month: "Yan", value: 42 },
];

// Chart options/series for new analytics
const trendLineOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#ef4444' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#ef4444'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const trendLineSeries = [{ name: "Taqiqlar o'sish sur'ati (%)", data: restrictionTrendMonthly.map(d => d.trend) }];

const severityPieOptions = {
  chart: { type: 'pie', height: 300 },
  labels: restrictionSeverity.map(s => s.label),
  colors: restrictionSeverity.map(s => s.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const severityPieSeries = restrictionSeverity.map(s => s.value);

const yearlyTrendOptions = {
  chart: { type: 'area', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: yearlyTrend.map(y => y.year), labels: { style: { colors: '#ef4444' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#10b981'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const yearlyTrendSeries = [{ name: "Yillik taqiqlar", data: yearlyTrend.map(y => y.value) }];

const regionsBarOptions = {
  chart: { type: 'bar', height: 250, toolbar: { show: false }, background: 'transparent' },
  plotOptions: { bar: { horizontal: true, borderRadius: 6 } },
  dataLabels: { enabled: false },
  xaxis: { categories: topRegions.map(r => r.region), labels: { style: { colors: '#ef4444' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#ef4444'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const regionsBarSeries = [{ name: "Taqiqlar soni", data: topRegions.map(r => r.value) }];

const forecastLineOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3, dashArray: [0, 5] },
  xaxis: { categories: forecast.map(f => f.month), labels: { style: { colors: '#ef4444' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#3b82f6'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const forecastLineSeries = [{ name: "Prognoz taqiqlar", data: forecast.map(f => f.value) }];

// For trend period filtering
const allMonths = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];
const allRestrictions = [120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65];
const allResolved = [85, 82, 78, 75, 72, 68, 65, 62, 58, 55, 52, 48];

// Trend comparison options
const trendComparisonOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: allMonths, labels: { style: { colors: '#ef4444' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#ef4444', '#10b981'],
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const trendComparisonSeries = [
  { name: "Yangi taqiqlar", data: allRestrictions },
  { name: "Hal qilingan", data: allResolved }
];

// Efficiency metrics
const efficiencyMetrics = {
  resolutionRate: 78.5,
  avgResolutionTime: 12.3,
  complianceRate: 92.1,
  auditScore: 88.7
};

export const KonvensionTaqiqlar = () => {
  // Add state for trend period filtering
  const [trendPeriod, setTrendPeriod] = React.useState('12'); // Default to 1 year
  const [txFilter, setTxFilter] = React.useState('12'); // Default 1 yil

  // Helper to get filtered months and data
  const getFilteredMonths = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return months.slice(-periods[trendPeriod]);
  };
  const getFilteredSeries = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return restrictionData.map(r => ({
      name: r.name,
      data: r.monthly.slice(-periods[trendPeriod])
    }));
  };
  const filteredMonths = getFilteredMonths();
  const filteredAreaChartSeries = getFilteredSeries();

  // Helper for trend comparison filter
  const getTxFiltered = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return {
      months: allMonths.slice(-periods[txFilter]),
      restrictions: allRestrictions.slice(-periods[txFilter]),
      resolved: allResolved.slice(-periods[txFilter])
    };
  };
  const txFiltered = getTxFiltered();
  const trendComparisonOptionsFiltered = {
    ...trendComparisonOptions,
    xaxis: { ...trendComparisonOptions.xaxis, categories: txFiltered.months }
  };
  const trendComparisonSeriesFiltered = [
    { name: "Yangi taqiqlar", data: txFiltered.restrictions },
    { name: "Hal qilingan", data: txFiltered.resolved }
  ];

  return (
    <div className="konvension-container">
      <div className="konvension-content">
        {/* Header */}
        <div className="konvension-header">
          <h1 className="konvension-title">Konvension Taqiqlar Dashboard</h1>
          <p className="konvension-subtitle">Temir yo'l transportida konvension taqiqlar va cheklovlar analitikasi</p>
          <div className="konvension-divider"></div>
        </div>

        {/* Stat Cards */}
        <div className="stats-grid">
          <div className="stat-card red">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>JAMI TAQIQLAR</h4>
                <div className="stat-value">{totalRestrictions}</div>
                <div className="stat-unit">dona</div>
              </div>
              <div className="stat-icon"><FaBan color="#ef4444" /></div>
            </div>
          </div>
          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>TAQIQLARNING O'RTACHA KAMAYISH</h4>
                <div className="stat-value">{Math.abs(avgGrowth)}%</div>
                <div className="stat-trend negative">↘</div>
              </div>
              <div className="stat-icon"><FaArrowDown color="#f59e0b" /></div>
            </div>
          </div>
          <div className="stat-card blue">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>ENG KO'P TAQIQLAR</h4>
                <div className="stat-value"> { topRestriction.name }</div>
              </div>
              <div className="stat-icon"><FaExclamationTriangle color="#3b82f6" /></div>
            </div>
          </div>
          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>TAQIQLARNINGHAL QILINISH DARAJASI</h4>
                <div className="stat-value">{efficiencyMetrics.resolutionRate}%</div>
              </div>
              <div className="stat-icon"><FaCheckCircle color="#10b981" /></div>
            </div>
              <div className="stat-unit">foiz</div>
          </div>
        </div>

        {/* Qo'shimcha analitika va diagrammalar */}
        <div className="charts-grid">
          {/* Oylik taqiqlar trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylar bo'yicha taqiqlarning kamayish sur'ati</h3>
              <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart 
              options={trendLineOptions} 
              series={trendLineSeries} 
              type="line" 
              height={250} 
            />
          </div>
          {/* Taqiqlar darajasi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Taqiqlar darajasi bo'yicha</h3>
              <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart 
              options={severityPieOptions} 
              series={severityPieSeries} 
              type="pie" 
              height={300} 
            />
          </div>
        </div>
        <div className="charts-grid">
          {/* Yillik taqiqlar trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Yillik taqiqlar kamayish trendi</h3>
              <span className="chart-badge">Soni</span>
            </div>
            <ReactApexChart 
              options={yearlyTrendOptions} 
              series={yearlyTrendSeries} 
              type="area" 
              height={250} 
            />
          </div>
          {/* Top viloyatlar */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng ko'p taqiqlar bo'lgan viloyatlar</h3>
              <span className="chart-badge">Soni</span>

            </div>
            <ReactApexChart 
              options={regionsBarOptions} 
              series={regionsBarSeries} 
              type="bar" 
              height={250} 
            />
          </div>
        </div>
        <div className="charts-grid">
          {/* Taqiqlar prognozi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Taqiqlar prognozi (keyingi 6 oy)</h3>
              <span className="chart-badge">Soni</span>

            </div>
            <ReactApexChart 
              options={forecastLineOptions} 
              series={forecastLineSeries} 
              type="line" 
              height={250} 
            />
          </div>
          {/* Taqiqlar va hal qilish */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Yangi taqiqlar va hal qilish</h3>
              <span className="chart-badge"> Soni</span>
              <div className="trend-filters">
                <button 
                  className={`filter-btn ${txFilter === '3' ? 'active' : ''}`} 
                  onClick={() => setTxFilter('3')}
                >
                  3 oy
                </button>
                <button 
                  className={`filter-btn ${txFilter === '6' ? 'active' : ''}`} 
                  onClick={() => setTxFilter('6')}
                >
                  6 oy
                </button>
                <button 
                  className={`filter-btn ${txFilter === '12' ? 'active' : ''}`} 
                  onClick={() => setTxFilter('12')}
                >
                  1 yil
                </button>
              </div>
            </div>
            <ReactApexChart 
              options={trendComparisonOptionsFiltered} 
              series={trendComparisonSeriesFiltered} 
              type="line" 
              height={250} 
            />
          </div>
        </div>
                    {/* Taqiqlar turlari ma'lumotlari */}
                    <div className="restriction-types-grid">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Taqiqlar turlari ma'lumotlari</h3>
          </div>
          <div className="restriction-types-container">
            {restrictionData.map((r, i) => (
              <div key={i} className="restriction-type-box" style={{ borderTopColor: r.color }}>
                <div className="restriction-type-header">
                  <div className="restriction-type-icon">{r.icon}</div>
                  <div className="restriction-type-title">{r.name}</div>
                </div>
                <div className="restriction-type-content">
                  <p className="restriction-type-description">{r.description}</p>
                  <div className="restriction-type-stats">
                    <div className="restriction-stat">
                      <span className="stat-label">Taqiqlar soni:</span>
                      <span className="stat-value" style={{ color: r.color }}>{r.value} ta</span>
                    </div>
                    <div className="restriction-stat">
                      <span className="stat-label">Kamayish:</span>
                      <span className="stat-value negative">{r.growth}%</span>
                    </div>
                    <div className="restriction-stat">
                      <span className="stat-label">Ulush:</span>
                      <span className="stat-value">{r.share}%</span>
                    </div>
                  </div>
                  <div className="restriction-type-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${r.share}%`, 
                          backgroundColor: r.color 
                        }}
                      ></div>
                    </div>
                    <span className="progress-text">{r.share}% ulush</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Area Chart: Oylik taqiqlar dinamikasi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik cheklovlar dinamikasi</h3>
              <span className="chart-badge"> Soni</span>

              <div className="trend-filters">
                <button 
                  className={`filter-btn ${trendPeriod === '3' ? 'active' : ''}`} 
                  onClick={() => setTrendPeriod('3')}
                >
                  3 oy
                </button>
                <button 
                  className={`filter-btn ${trendPeriod === '6' ? 'active' : ''}`} 
                  onClick={() => setTrendPeriod('6')}
                >
                  6 oy
                </button>
                <button 
                  className={`filter-btn ${trendPeriod === '12' ? 'active' : ''}`} 
                  onClick={() => setTrendPeriod('12')}
                >
                  1 yil
                </button>
              </div>
            </div>
            <ReactApexChart 
              options={areaChartOptions} 
              series={filteredAreaChartSeries} 
              type="area" 
              height={300} 
            />
          </div>

          {/* Pie Chart: Taqiqlar turlari ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Taqiqlar turlari bo'yicha ulushi</h3>
              <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={350} 
            />
          </div>
        </div>

        {/* Bar Chart: Taqiqlar turlari bo'yicha */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Taqiqlar turlari bo'yicha taqqoslash</h3>
              <span className="chart-badge"> Soni</span>

            </div>
            <ReactApexChart 
              options={barChartOptions} 
              series={barChartSeries} 
              type="bar" 
              height={350} 
            />
          </div>
        </div>

        {/* Efficiency and Safety */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Taqiqlar boshqaruvi samaradorligi</h3>
            </div>            
            <div className="efficiency-card">
              <div className="efficiency-header">
                <span className="efficiency-title">Taqiqlar hal qilish samaradorligi</span>
                <span className="efficiency-trend">↗</span>
              </div>
              <EfficiencyBar 
                label="Hal qilish darajasi" 
                percent={efficiencyMetrics.resolutionRate} 
                color="linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)" 
                percentColor="#16a34a" 
              />
              <EfficiencyBar 
                label="O'rtacha hal qilish vaqti (kun)" 
                percent={efficiencyMetrics.avgResolutionTime} 
                color="linear-gradient(90deg, #6366f1, #a21caf, #6366f1)" 
                percentColor="#0ea5e9" 
              />
              <EfficiencyBar 
                label="Rizoq bo'lish darajasi" 
                percent={efficiencyMetrics.complianceRate} 
                color="linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9)" 
                percentColor="#6366f1" 
              />
            </div>
            <SafetyCard />
          </div>

          {/* Top 5 taqiqlar by severity */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng ko'p taqiqlar bo'lgan turlar</h3>
            </div>
            <div className="top-restrictions-list">
              {restrictionData
                .sort((a, b) => b.value - a.value)
                .slice(0, 5)
                .map((item, index) => (
                <div key={index} className="restriction-item">
                  <div className="restriction-rank">{index + 1}</div>
                  <div className="restriction-info">
                    <div className="restriction-name">{item.name}</div>
                    <div className="restriction-details">
                      <span className="restriction-value">{item.value} ta</span>
                      <span className="restriction-trend">{item.growth}% kamayish</span>
                    </div>
                  </div>
                  <div className="restriction-icon">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Detailed Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Taqiqlar turlari bo'yicha batafsil ma'lumotlar</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Taqiqlar turi</th>
                  <th>Yillik taqiqlar soni</th>
                  <th>Kamayish (%)</th>
                  <th>Ulush (%)</th>
                  <th>Oylik taqiqlar (iyul)</th>
                </tr>
              </thead>
              <tbody>
                {restrictionData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="restriction-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.value}</td>
                    <td>
                      <span className="percentage-badge negative" style={{ backgroundColor: '#10b981' }}>
                        {item.growth}%
                      </span>
                    </td>
                    <td>
                      <span className="percentage-badge">
                        {item.share}%
                      </span>
                    </td>
                    <td>{item.monthly[11]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

// EfficiencyBar component
function EfficiencyBar({ label, percent, color, percentColor }) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timeout = setTimeout(() => setProgress(percent), 300);
    return () => clearTimeout(timeout);
  }, [percent]);
  return (
    <div className="eff-bar-row">
      <div className="eff-bar-label">{label}</div>
      <div className="eff-bar-percent" style={{ color: percentColor }}>{percent}%</div>
      <div className="eff-bar-bg">
        <div
          className="eff-bar-fg"
          style={{
            width: progress + '%',
            background: color
          }}
        />
      </div>
    </div>
  );
}

// SafetyCard component
function SafetyCard() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timeout = setTimeout(() => setProgress(88.7), 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="efficiency-card">
      <div className="efficiency-header">
        <span className="efficiency-title">Taqiqlar xavfsizligi va nazorat</span>
        <span className="efficiency-trend" style={{ color: '#16a34a' }}>✔️</span>
      </div>
      <div className="eff-bar-row">
        <div className="eff-bar-label">Audit natijalari</div>
        <div className="eff-bar-percent" style={{ color: '#16a34a' }}>88.7%</div>
        <div className="eff-bar-bg">
          <div
            className="eff-bar-fg"
            style={{
              width: progress + '%',
              background: 'linear-gradient(90deg, #16a34a, #22d3ee, #16a34a)'
            }}
          />
        </div>
      </div>
      <div className="safety-badges">
        <div className="safety-badge badge-red">Jiddiy taqiqlar <span>12</span></div>
        <div className="safety-badge badge-orange">O'rta darajali <span>45</span></div>
        <div className="safety-badge badge-blue">Yengil taqiqlar <span>78</span></div>
      </div>
    </div>
  );
}
