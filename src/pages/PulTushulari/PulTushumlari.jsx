import React from "react";
import ReactApexChart from 'react-apexcharts';
import './PulTushumlari.css';
import { PieChart, BarChart, LineChart } from '@mui/x-charts';
import { FaMoneyBillWave, FaChartLine, FaChartPie, FaArrowUp, FaArrowDown, FaTrain, FaRoute, FaGlobe, FaExchangeAlt, FaBalanceScale, FaShieldAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const TEXPD_NAMES = [
  "Toshkent TexPD",
  "Samarqand TexPD",
  "Buxoro TexPD",
  "Andijon TexPD",
  "Qo'qon TexPD",
  "Surxondaryo TexPD",
  "Qo'ng'irot TexPD",
  "Xorazm TexPD"
];

// Mock data for TexPD pul tushumlari
const texpdData = [
  { name: "Toshkent TexPD", value: 185000, growth: 12.5, share: 24, color: "#00D4FF", monthly: [15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000] },
  { name: "Samarqand TexPD", value: 142000, growth: 10.2, share: 18, color: "#FF6B35", monthly: [11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500] },
  { name: "Buxoro TexPD", value: 128000, growth: 9.8, share: 16, color: "#4ECDC4", monthly: [10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500] },
  { name: "Andijon TexPD", value: 115000, growth: 8.7, share: 14, color: "#FF8A95", monthly: [9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500] },
  { name: "Qo'qon TexPD", value: 98000, growth: 7.1, share: 10, color: "#45B7D1", monthly: [8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500] },
  { name: "Surxondaryo TexPD", value: 72000, growth: 5.4, share: 7, color: "#DDA0DD", monthly: [6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500] },
  { name: "Qo'ng'irot TexPD", value: 68000, growth: 4.9, share: 6, color: "#98D8C8", monthly: [5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000] },
  { name: "Xorazm TexPD", value: 58000, growth: 3.8, share: 5, color: "#F7DC6F", monthly: [4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000] },
];

const months = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];

const totalRevenue = texpdData.reduce((sum, t) => sum + t.value, 0);
const avgGrowth = (texpdData.reduce((sum, t) => sum + t.growth, 0) / texpdData.length).toFixed(1);
const topTexpd = texpdData[0];

// Area chart for monthly trend (all TexPDs)
const areaChartOptions = {
  chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#1900fe' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.4, stops: [0, 90, 100] } },
  colors: texpdData.map(t => t.color),
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const areaChartSeries = texpdData.map(t => ({ name: t.name, data: t.monthly }));

// Pie chart for share
const pieChartOptions = {
  chart: { type: 'pie', height: 350 },
  labels: texpdData.map(t => t.name),
  colors: texpdData.map(t => t.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const pieChartSeries = texpdData.map(t => t.share);

// Bar chart for revenue by TexPD
const barChartOptions = {
  chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
  plotOptions: { bar: { borderRadius: 4, horizontal: false, columnWidth: '55%', distributed: true } },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  xaxis: { categories: texpdData.map(t => t.name), labels: { style: { colors: '#3730a3' } } },
  yaxis: { title: { text: 'Tushum (ming so\'m)', style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
  fill: { opacity: 1, colors: texpdData.map(t => t.color) },
  tooltip: { y: { formatter: val => val + " ming so'm" } },
  grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
};
const barChartSeries = [{ name: "Tushum", data: texpdData.map(t => t.value) }];

// Mock data for additional analytics
const revenueGrowthMonthly = months.map((m, i) => ({ month: m, growth: Math.round(Math.random() * 10 + 2) }));
const revenueSegments = [
  { label: "Xizmatlar", value: 420000, color: "#6366f1" },
  { label: "Qo'shimcha xizmatlar", value: 220000, color: "#10b981" },
  { label: "Jarimalar", value: 120000, color: "#f59e0b" },
  { label: "Boshqa", value: 104000, color: "#ef4444" },
];
const yearlyTrend = [
  { year: "2021", value: 650000 },
  { year: "2022", value: 740000 },
  { year: "2023", value: 810000 },
  { year: "2024", value: totalRevenue },
];
const topMonths = [
  { month: "Iyun", value: 105000 },
  { month: "Iyul", value: 99000 },
  { month: "May", value: 97000 },
  { month: "Apr", value: 95000 },
  { month: "Mar", value: 90000 },
];
const forecast = [
  { month: "Avg", value: 87000 },
  { month: "Sen", value: 90000 },
  { month: "Okt", value: 95000 },
  { month: "Noy", value: 98000 },
  { month: "Dek", value: 102000 },
  { month: "Yan", value: 108000 },
];
const expenses = [
  60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000
];

// Chart options/series for new analytics
const growthLineOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#f59e0b'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const growthLineSeries = [{ name: "O'sish sur'ati (%)", data: revenueGrowthMonthly.map(d => d.growth) }];

const segmentPieOptions = {
  chart: { type: 'pie', height: 300 },
  labels: revenueSegments.map(s => s.label),
  colors: revenueSegments.map(s => s.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const segmentPieSeries = revenueSegments.map(s => s.value);

const yearlyTrendOptions = {
  chart: { type: 'area', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: yearlyTrend.map(y => y.year), labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#10b981'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const yearlyTrendSeries = [{ name: "Yillik tushum", data: yearlyTrend.map(y => y.value) }];

const topMonthsBarOptions = {
  chart: { type: 'bar', height: 250, toolbar: { show: false }, background: 'transparent' },
  plotOptions: { bar: { horizontal: true, borderRadius: 6 } },
  dataLabels: { enabled: false },
  xaxis: { categories: topMonths.map(m => m.month), labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#6366f1'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const topMonthsBarSeries = [{ name: "Tushum (ming)", data: topMonths.map(m => m.value) }];

const forecastLineOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3, dashArray: [0, 5] },
  xaxis: { categories: forecast.map(f => f.month), labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#3b82f6'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const forecastLineSeries = [{ name: "Prognoz tushum", data: forecast.map(f => f.value) }];

// For Tushum va xarajatlar filter
const allMonths = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];
const allRevenue = [102000, 108000, 112000, 115000, 120000, 70000, 75000, 80000, 85000, 90000, 95000, 98000];
const allExpenses = [64000, 66000, 68000, 70000, 72000, 50000, 52000, 54000, 56000, 58000, 60000, 62000];

// 1. Yo'nalishlar bo'yicha tushumlar
const routeRevenues = [
  { route: "Toshkent-Samarqand", value: 120000, icon: <FaTrain color="#3b82f6" /> },
  { route: "Toshkent-Buxoro", value: 95000, icon: <FaTrain color="#10b981" /> },
  { route: "Toshkent-Andijon", value: 87000, icon: <FaTrain color="#f59e0b" /> },
  { route: "Toshkent-Qo'qon", value: 65000, icon: <FaTrain color="#ef4444" /> },
];

// 2. Tushumlar manbalari
const revenueSources = [
  { label: "Ichki tashuv", value: 320000, icon: <FaRoute color="#6366f1" /> },
  { label: "Tashqi tashuv", value: 210000, icon: <FaGlobe color="#10b981" /> },
  { label: "Tranzit", value: 120000, icon: <FaExchangeAlt color="#f59e0b" /> },
  { label: "Xizmatlar", value: 90000, icon: <FaMoneyBillWave color="#ef4444" /> },
];

// 3. Oylik tushumlar va o'sish
const monthlyGrowth = [
  { month: "Yan", value: 70000, growth: 5.2 },
  { month: "Fev", value: 75000, growth: 7.1 },
  { month: "Mar", value: 80000, growth: 6.7 },
  { month: "Apr", value: 85000, growth: 8.3 },
  { month: "May", value: 90000, growth: 9.2 },
  { month: "Iyun", value: 95000, growth: 10.1 },
];

// 4. Top yo'nalishlar
// Foydalanilgan routeRevenues array

// 5. Tushum va xarajatlar
const expensesRail = [50000, 52000, 54000, 56000, 58000, 60000, 62000, 64000, 66000, 68000, 70000, 72000];

// 6. Prognoz
const forecastRailData = [125000, 128000, 130000, 133000, 135000, 138000];
const forecastMonths = ["Yan", "Fev", "Mar", "Apr", "May", "Iyun"];
const forecastRailOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3, dashArray: [0, 5] },
  xaxis: { categories: forecastMonths, labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#3b82f6'],
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const forecastRailSeries = [{ name: "Prognoz tushum", data: forecastRailData }];

// 7. Xavfsizlik va samaradorlik
const safePayments = 99.2;
const auditFindings = 2;
const efficiency = 97.5;

// 1. Oylik tushum va o'sish (Line/Area chart)
const monthsShort = ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"];
const monthlyRevenue = [70000, 75000, 80000, 85000, 90000, 95000, 98000, 102000, 108000, 112000, 115000, 120000];
const monthlyGrowthPercent = [5.2, 7.1, 6.7, 8.3, 9.2, 10.1, 10.5, 11.2, 12.0, 12.5, 13.1, 13.8];

const monthlyLineOptions = {
  chart: { type: 'line', height: 250, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: monthsShort, labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#3b82f6', '#f59e0b'],
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const monthlyLineSeries = [
  { name: "Tushum (so'm)", data: monthlyRevenue },
  { name: "O'sish (%)", data: monthlyGrowthPercent }
];

// 2. Tushum va xarajatlar (stacked bar)
const revenueExpenseOptions = {
  chart: { type: 'bar', height: 250, toolbar: { show: false }, background: 'transparent', stacked: true },
  plotOptions: { bar: { horizontal: false, borderRadius: 6 } },
  dataLabels: { enabled: false },
  xaxis: { categories: monthsShort, labels: { style: { colors: '#6366f1' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  colors: ['#10b981', '#ef4444'],
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const revenueExpenseSeries = [
  { name: "Tushum", data: monthlyRevenue },
  { name: "Xarajat", data: expensesRail }
];

// 4. Xavfsizlik va samaradorlik (progress bar)
const railEfficiency = 97.5;
const railSafety = 99.2;
const railAudit = 2;

export const PulTushumlari = () => {
  // Add state for trend period filtering
  const [trendPeriod, setTrendPeriod] = React.useState('12'); // Default to 1 year
  // State for Tushum va xarajatlar filter
  const [txFilter, setTxFilter] = React.useState('12'); // Default 1 yil

  // Helper to get filtered months and data
  const getFilteredMonths = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return months.slice(-periods[trendPeriod]);
  };
  const getFilteredSeries = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return texpdData.map(t => ({
      name: t.name,
      data: t.monthly.slice(-periods[trendPeriod])
    }));
  };
  const filteredMonths = getFilteredMonths();
  const filteredAreaChartSeries = getFilteredSeries();

  // Helper for Tushum va xarajatlar filter
  const getTxFiltered = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return {
      months: allMonths.slice(-periods[txFilter]),
      revenue: allRevenue.slice(-periods[txFilter]),
      expenses: allExpenses.slice(-periods[txFilter])
    };
  };
  const txFiltered = getTxFiltered();
  const revenueExpenseOptionsFiltered = {
    ...revenueExpenseOptions,
    xaxis: { ...revenueExpenseOptions.xaxis, categories: txFiltered.months }
  };
  const revenueExpenseSeriesFiltered = [
    { name: "Tushum", data: txFiltered.revenue },
    { name: "Xarajat", data: txFiltered.expenses }
  ];

  return (
    <div className="pul-container">
      <div className="pul-content">
        {/* Header */}
        <div className="pul-header">
          <h1 className="pul-title">Pul Tushumlari Dashboard</h1>
          <p className="pul-subtitle">Hududiy TexPDlardan tushgan pul mablag'lari va analitikasi</p>
          <div className="pul-divider"></div>
        </div>

        {/* Stat Cards */}
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>JAMI TUSHUM</h4>
                <div className="stat-value">{totalRevenue.toLocaleString()}</div>
                <div className="stat-unit">dollar</div>
              </div>
              <div className="stat-icon"><FaMoneyBillWave color="#3b82f6" /></div>
            </div>
          </div>
          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>PUL TUSHUMLARINING YILLIK O'SISH SUR'ATI</h4>
                <div className="stat-value">{topTexpd.growth}%</div>
              </div>
              <div className="stat-icon"><FaArrowUp color="#f59e0b" /></div>
            </div>
          </div>



          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>ENG YUQORI PUL TUSHUMI</h4>
                <div className="stat-value">{topTexpd.name}</div>
              </div>
              <div className="stat-icon"><FaChartPie color="#10b981" /></div>
            </div>
          </div>
          <div className="stat-card purple">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>O'RTACHA PUL TUSHUMLARI</h4>
                <div className="stat-value">{(totalRevenue / texpdData.length).toLocaleString()}</div>
                <div className="stat-unit">dollar</div>
              </div>
              <div className="stat-icon"><FaChartLine color="#8b5cf6" /></div>
            </div>
          </div>

        </div>

        {/* Qo'shimcha analitika va diagrammalar */}
        <div className="charts-grid">
          {/* Oylik tushumlar o'sish sur'ati */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik tushumlar o'sish sur'ati (%)</h3>
            </div>
            <ReactApexChart 
              options={growthLineOptions} 
              series={growthLineSeries} 
              type="line" 
              height={250} 
            />
          </div>
          {/* Tushum segmentatsiyasi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Tushum segmentatsiyasi</h3>
            </div>
            <ReactApexChart 
              options={segmentPieOptions} 
              series={segmentPieSeries} 
              type="pie" 
              height={300} 
            />
          </div>
        </div>
        <div className="charts-grid">
          {/* Yillik tushumlar trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Yillik tushumlar trendi</h3>
            </div>
            <ReactApexChart 
              options={yearlyTrendOptions} 
              series={yearlyTrendSeries} 
              type="area" 
              height={250} 
            />
          </div>
          {/* Top oylar bo'yicha tushum */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng yuqori tushum bo'lgan oylar</h3>
            </div>
            <ReactApexChart 
              options={topMonthsBarOptions} 
              series={topMonthsBarSeries} 
              type="bar" 
              height={250} 
            />
          </div>
        </div>
        <div className="charts-grid">
          {/* Tushum prognozi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Tushum prognozi (keyingi 6 oy)</h3>
            </div>
            <ReactApexChart 
              options={forecastLineOptions} 
              series={forecastLineSeries} 
              type="line" 
              height={250} 
            />
          </div>
          {/* Tushum va xarajatlar */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Tushum va xarajatlar</h3>
              <span className="chart-badge"><FaBalanceScale color="#ef4444" /></span>
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
              options={revenueExpenseOptionsFiltered} 
              series={revenueExpenseSeriesFiltered} 
              type="bar" 
              height={250} 
            />
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          {/* Area Chart: Oylik tushum trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik tushumlar dinamikasi</h3>
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

          {/* Pie Chart: TexPDlar ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">TexPDlar bo'yicha tushum ulushi</h3>
            </div>
            <ReactApexChart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={350} 
            />
          </div>
        </div>

        {/* Bar Chart: TexPDlar bo'yicha tushum */}
        <div className="charts-grid">


        {/* Tushum va xarajatlar */}
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Tushum va xarajatlar</h3>
            <span className="chart-badge"><FaBalanceScale color="#ef4444" /></span>
          </div>
          <ReactApexChart 
            options={revenueExpenseOptions} 
            series={revenueExpenseSeries} 
            type="bar" 
            height={250} 
          />
        </div>




        </div>
        {/* Efficiency and Safety */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Pul tushumlarida Samaradorlik va Xavfsizlik</h3>
            </div>            
            <div className="efficiency-card">
              <div className="efficiency-header">
                <span className="efficiency-title">Pul tushumlarida Samaradorlik</span>
                <span className="efficiency-trend">↗</span>
              </div>
              <EfficiencyBar 
                label="To'lovlarni o'z vaqtida bajarish" 
                percent={97.2} 
                color="linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)" 
                percentColor="#16a34a" 
              />
              <EfficiencyBar 
                label="Moliya hisobotlari" 
                percent={98.5} 
                color="linear-gradient(90deg, #6366f1, #a21caf, #6366f1)" 
                percentColor="#0ea5e9" 
              />
              <EfficiencyBar 
                label="Byudjet bajarilishi" 
                percent={95.8} 
                color="linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9)" 
                percentColor="#6366f1" 
              />
            </div>
            <SafetyCard />
          </div>

          {/* Top 5 TexPDs by Growth */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng yuqori o'sish ko'rsatkichlari</h3>
            </div>
            <div className="top-regions-list">
              {texpdData
                .sort((a, b) => b.growth - a.growth)
                .slice(0, 5)
                .map((item, index) => (
                <div key={index} className="region-item">
                  <div className="region-rank">{index + 1}</div>
                  <div className="region-info">
                    <div className="region-name">{item.name}</div>
                    <div className="region-details">
                      <span className="region-value">{item.growth}% o'sish</span>
                      <span className="region-trips">{item.value.toLocaleString()} ming so'm</span>
                    </div>
                  </div>
                  <div className="region-color-indicator" style={{ backgroundColor: item.color }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
<div className="charts-grid">
<div className="chart-card">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Tushumlar manbalari</h3>
          </div>
          <ul className="source-list">
            {revenueSources.map((s, i) => (
              <li key={i} className="source-item">
                {s.icon}
                <span className="source-label">{s.label}</span>
                <span className="source-value">{s.value.toLocaleString()} so'm</span>
              </li>
            ))}
          </ul>
        </div>
</div>
        {/* Detailed Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">TexPDlar bo'yicha batafsil tushumlar</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>TexPD</th>
                  <th>Yillik tushum (ming so'm)</th>
                  <th>O'sish (%)</th>
                  <th>Ulush (%)</th>
                  <th>Oylik tushum (iyul)</th>
                </tr>
              </thead>
              <tbody>
                {texpdData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="region-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.value.toLocaleString()}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.growth > 10 ? '#10b981' : item.growth > 5 ? '#f59e0b' : '#ef4444' }}>
                        {item.growth}%
                      </span>
                    </td>
                    <td>
                      <span className="percentage-badge">
                        {item.share}%
                      </span>
                    </td>
                    <td>{item.monthly[11].toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tushumlar manbalari */}

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
    const timeout = setTimeout(() => setProgress(99.5), 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="efficiency-card">
      <div className="efficiency-header">
        <span className="efficiency-title">Pul tushumlarida Xavfsizlik</span>
        <span className="efficiency-trend" style={{ color: '#16a34a' }}>✔️</span>
      </div>
      <div className="eff-bar-row">
        <div className="eff-bar-label">Xavfsiz moliya operatsiyalari</div>
        <div className="eff-bar-percent" style={{ color: '#16a34a' }}>99.5%</div>
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
        <div className="safety-badge badge-red">Moliya hodisalari <span>0</span></div>
        <div className="safety-badge badge-orange">Hisobot muammolari <span>2</span></div>
        <div className="safety-badge badge-blue">Audit standartlari <span>12</span></div>
      </div>
    </div>
  );
}
