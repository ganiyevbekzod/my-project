import React from "react";
import ReactApexChart from 'react-apexcharts';
import './TelegrammalarChegirmalar.css';
import { FaEnvelope, FaPercent, FaChartPie, FaArrowUp, FaArrowDown, FaBalanceScale, FaGlobe, FaLayerGroup } from 'react-icons/fa';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LinearProgress, Box, Typography } from '@mui/material';

// Mock data for Telegrammalar va Chegirmalar
const telegramData = [
  { name: "Ichki telegrammalar", value: 1200, growth: 8.5, share: 40, color: "#00D4FF", monthly: [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200] },
  { name: "Xalqaro telegrammalar", value: 800, growth: 6.2, share: 27, color: "#FF6B35", monthly: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115] },
  { name: "Chegirmali telegrammalar", value: 600, growth: 10.1, share: 20, color: "#4ECDC4", monthly: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] },
  { name: "Boshqa", value: 400, growth: 4.3, share: 13, color: "#F7DC6F", monthly: [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52] },
];

// Mock data for Chegirmali telegrammalar by season
const chegirmaliBySeason = [
  { season: 'Qish', value: 120, color: '#00D4FF' },
  { season: 'Bahor', value: 210, color: '#4ECDC4' },
  { season: 'Yoz', value: 340, color: '#FF6B35' },
  { season: 'Kuz', value: 180, color: '#F7DC6F' },
];

const months = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];
const totalTelegrams = telegramData.reduce((sum, t) => sum + t.value, 0);
const avgGrowth = (telegramData.reduce((sum, t) => sum + t.growth, 0) / telegramData.length).toFixed(1);
const topTelegram = telegramData.reduce((a, b) => a.value > b.value ? a : b);

// Area chart for monthly trend
const areaChartOptions = {
  chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#1900fe' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.4, stops: [0, 90, 100] } },
  colors: telegramData.map(t => t.color),
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const areaChartSeries = telegramData.map(t => ({ name: t.name, data: t.monthly }));

// Pie chart for share
const pieChartOptions = {
  chart: { type: 'pie', height: 350 },
  labels: telegramData.map(t => t.name),
  colors: telegramData.map(t => t.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const pieChartSeries = telegramData.map(t => t.share);

// Table mock data
const tableData = telegramData;

// Mock data for additional analytics
const monthlyChegirmali = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
const monthlyGrowth = [5, 7, 8, 10, 12, 13, 15, 16, 18, 20, 22, 25];
const monthsFull = ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"];
const chegirmaTypes = [
  { type: "Talaba", value: 120 },
  { type: "Nogiron", value: 80 },
  { type: "Keksalar", value: 60 },
  { type: "Oilaviy", value: 40 },
];
const pieData = [
  { id: "Chegirmali", value: 600, label: "Chegirmali" },
  { id: "Chegirmasiz", value: 1800, label: "Chegirmasiz" },
];

// Mock data for financial analytics
const monthlyRevenue = [120000, 135000, 140000, 150000, 160000, 170000, 180000, 175000, 165000, 155000, 145000, 130000];
const discountTypeRevenue = [
  { type: "Talaba", value: 42000, color: "#6366f1" },
  { type: "Nogiron", value: 32000, color: "#10b981" },
  { type: "Keksalar", value: 21000, color: "#f59e0b" },
  { type: "Oilaviy", value: 18000, color: "#ef4444" },
];
const totalDiscountRevenue = discountTypeRevenue.reduce((sum, t) => sum + t.value, 0);
const totalRevenue = 250000;
const discountShare = ((totalDiscountRevenue / totalRevenue) * 100).toFixed(1);
const efficiencyData = [
  { label: "To'g'ri ajratilgan chegirmalar", percent: 96, color: "linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)", percentColor: "#16a34a" },
  { label: "Chegirmalardan foydalanganlar", percent: 89, color: "linear-gradient(90deg, #6366f1, #a21caf, #f59e0b, #6366f1)", percentColor: "#a21caf" },
  { label: "Chegirmalar samaradorligi", percent: 92, color: "linear-gradient(90deg, #0ea5e9, #6366f1, #f43f5e, #0ea5e9)", percentColor: "#f43f5e" },
  { label: "Yangi foydalanuvchilar ulushi", percent: 78, color: "linear-gradient(90deg, #f59e0b, #10b981, #6366f1, #f59e0b)", percentColor: "#f59e0b" },
  { label: "Qayta foydalanish darajasi", percent: 85, color: "linear-gradient(90deg, #ef4444, #6366f1, #10b981, #ef4444)", percentColor: "#ef4444" },
];

// Mock data for regions with most discount usage
const regionDiscountUsage = [
  { region: "Toshkent", value: 320 },
  { region: "Samarqand", value: 270 },
  { region: "Andijon", value: 210 },
  { region: "Buxoro", value: 180 },
  { region: "Farg'ona", value: 160 },
  { region: "Namangan", value: 140 },
];

// Mock data for telegramma va chegirmalar ko'rsatkichlari
const telegramDiscountMetrics = [
  { metric: "Jami chegirmali telegrammalar", value: 600, target: 500, trend: "up" },
  { metric: "O'rtacha chegirma foizi", value: 45, target: 40, trend: "up" },
  { metric: "Eng ko'p foydalangan hudud", value: 320, target: 250, trend: "up" },
  { metric: "Samaradorlik", value: 92, target: 90, trend: "up" },
  { metric: "Moliyaviy tushum (ming)", value: 125, target: 100, trend: "up" },
  { metric: "Foydalanuvchi qoniqishi", value: 97, target: 95, trend: "up" },
];

// Mock data for new analytics
const annualEfficiency = 93;
const userSegments = [
  { segment: "Yoshlar", value: 350 },
  { segment: "Keksalar", value: 180 },
  { segment: "Oilalar", value: 220 },
  { segment: "Nogironlar", value: 150 },
];
const topMonths = [
  { month: "Iyun", value: 140 },
  { month: "Iyul", value: 130 },
  { month: "May", value: 120 },
];

// Mock data for telegramma turlari cards
const telegramTypes = [
  {
    name: 'Ichki telegrammalar',
    value: 1200,
    icon: <FaEnvelope size={38} />, 
    gradient: 'linear-gradient(135deg, #00D4FF 60%, #4ECDC4 100%)',
    shadow: '0 6px 24px 0 rgba(0, 212, 255, 0.15)',
  },
  {
    name: 'Xalqaro telegrammalar',
    value: 800,
    icon: <FaGlobe size={38} />, 
    gradient: 'linear-gradient(135deg, #FF6B35 60%, #F7DC6F 100%)',
    shadow: '0 6px 24px 0 rgba(255, 107, 53, 0.15)',
  },
  {
    name: 'Chegirmali telegrammalar',
    value: 600,
    icon: <FaPercent size={38} />, 
    gradient: 'linear-gradient(135deg, #4ECDC4 60%, #6366f1 100%)',
    shadow: '0 6px 24px 0 rgba(78, 205, 196, 0.15)',
  },
  {
    name: 'Boshqa',
    value: 400,
    icon: <FaLayerGroup size={38} />, 
    gradient: 'linear-gradient(135deg, #F7DC6F 60%, #FF6B35 100%)',
    shadow: '0 6px 24px 0 rgba(247, 220, 111, 0.15)',
  },
];

// Color palette for Telegramma va Chegirmalar Ko'rsatkichlari
const metricColors = [
  '#6366f1', // blue
  '#10b981', // green
  '#f59e0b', // orange
  '#8b5cf6', // purple
  '#f43f5e', // pink
  '#06b6d4', // teal
];

// Use a green-blue gradient for all bars and badges in the metrics section
const metricGreenBlueGradient = 'linear-gradient(90deg, #34d399 0%, #38bdf8 100%)';

// Add an animated progress bar component for efficiency
function AnimatedEfficiencyBar({ label, percent, color, percentColor }) {
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
            background: color,
            transition: 'width 1s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>
    </div>
  );
}

export const TelegrammalarChegirmalar = () => {
  return (
    <div className="telegramma-container">
      <div className="telegramma-content">
        {/* Header */}
        <div className="telegramma-header">
          <h1 className="telegramma-title">Telegrammalar va Chegirmalar</h1>
          <p className="telegramma-subtitle">Telegrammalar va chegirmalar statistikasi va analitikasi</p>
          <div className="telegramma-divider"></div>
        </div>
        {/* Stat Cards */}
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>JAMI TELEGRAMMALAR</h4>
                <div className="stat-value">{totalTelegrams.toLocaleString()}</div>
                <div className="stat-unit">dona</div>
              </div>
              <div className="stat-icon"><FaEnvelope color="#3b82f6" /></div>
            </div>
          </div>
          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>TELEGRAMMALARning O'RTACHA O'SISH SUR'ATI</h4>
                <div className="stat-value">{avgGrowth}%</div>
                <div className="stat-unit">foiz</div>
              </div>
              <div className="stat-icon"><FaArrowUp color="#f59e0b" /></div>
            </div>
          </div>
          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Ayni vaqtdagi mavjud telegrammalar soni</h4>
                <div className="stat-value">{totalTelegrams-2506}</div>
                <div className="stat-unit">dona</div>
              </div>
              <div className="stat-icon"><FaChartPie color="#10b981" /></div>
            </div>
          </div>
          <div className="stat-card purple">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>ENG KATTA CHEGIRMA</h4>
                <div className="stat-value">45%</div>
                <div className="stat-unit">foiz</div>
              </div>
              <div className="stat-icon"><FaPercent color="#8b5cf6" /></div>
            </div>
          </div>
        </div>
        {/* Charts */}
        <div className="charts-grid">
          {/* Area Chart: Oylik telegramma trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik telegrammalar dinamikasi</h3>
            </div>
            <ReactApexChart 
              options={areaChartOptions} 
              series={areaChartSeries} 
              type="area" 
              height={300} 
            />
          </div>
          {/* Pie Chart: Telegramma turlari ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Telegramma turlari ulushi</h3>
            </div>
            <ReactApexChart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={350} 
            />
          </div>
          {/* Bar Chart: Chegirmali telegrammalar by season */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Fasllar bo'yicha eng ko'p chegirmali telegrammalar</h3>
            </div>
            <BarChart
              height={300}
              series={[{
                data: chegirmaliBySeason.map(item => item.value),
                label: 'Chegirmali telegrammalar',
                color: '#4ECDC4',
              }]}
              xAxis={[{ scaleType: 'band', data: chegirmaliBySeason.map(item => item.season) }]}
              yAxis={[{ label: 'Telegrammalar soni', width: 60 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
          {/* Chegirmali va chegirmasiz telegrammalar ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Chegirmali va chegirmasiz telegrammalar ulushi</h3>
            </div>
            <PieChart
              height={260}
              series={[{
                data: pieData,
                innerRadius: 60,
                outerRadius: 100,
                arcLabel: (params) => params.value + ' ta',
                arcLabelMinAngle: 18,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { additionalRadius: -8, color: 'rgba(200,200,200,0.2)' },
                highlighted: { additionalRadius: 8 },
              }]}
              sx={{ background: 'linear-gradient(120deg, #f8fafc 80%, #e0e7ff 100%)', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)', p: 1 }}
              margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
          </div>
          {/* Chegirma turlari bo'yicha telegrammalar */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Chegirma turlari bo'yicha telegrammalar</h3>
            </div>
            <BarChart
              height={300}
              series={[{
                data: chegirmaTypes.map(item => item.value),
                label: 'Telegrammalar',
                color: '#6366f1',
              }]}
              xAxis={[{ scaleType: 'band', data: chegirmaTypes.map(item => item.type) }]}
              yAxis={[{ label: 'Telegrammalar soni', width: 60 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
          {/* Oylik o'sish sur'ati */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik o'sish sur'ati (%)</h3>
            </div>
            <LineChart
              height={300}
              series={[{ data: monthlyGrowth, label: "O'sish (%)", color: "#f59e0b" }]}
              xAxis={[{ scaleType: 'point', data: monthsFull }]}
              yAxis={[{ width: 50 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
        </div>
        {/* Chegirmalarning moliyaviy hisobotlari va samaradorligi */}
        <div className="charts-grid">
          {/* Oylik chegirmalardan tushgan mablag' trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik chegirmalardan tushgan mablag' trendi</h3>
            </div>
            <LineChart
              height={300}
              series={[{ data: monthlyRevenue, label: "Chegirmalardan tushgan mablag' (so'm)", color: "#6366f1" }]}
              xAxis={[{ scaleType: 'point', data: monthsFull }]}
              yAxis={[{ width: 60 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
          {/* Chegirma turlari bo'yicha tushum */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Chegirma turlari bo'yicha tushum</h3>
            </div>
            <BarChart
              height={300}
              series={[{
                data: discountTypeRevenue.map(item => item.value),
                label: 'Tushum (so\'m)',
                color: '#10b981',
              }]}
              xAxis={[{ scaleType: 'band', data: discountTypeRevenue.map(item => item.type) }]}
              yAxis={[{ label: 'Tushum (so\'m)', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>


          {/* Eng ko'p chegirmalardan foydalanadigan hududlar */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng ko'p chegirmalardan foydalanadigan hududlar</h3>
            </div>
            <BarChart
              height={300}
              series={[{
                data: regionDiscountUsage.map(item => item.value),
                label: 'Foydalanish soni',
                color: '#f59e0b',
              }]}
              xAxis={[{ scaleType: 'band', data: regionDiscountUsage.map(item => item.region) }]}
              yAxis={[{ label: 'Foydalanish soni', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
          {/* Chegirmalarning umumiy ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Chegirmalarning umumiy ulushi</h3>
            </div>
            <PieChart
              height={260}
              series={[{
                data: [
                  { id: "Chegirmali tushum", value: totalDiscountRevenue, label: "Chegirmali tushum" },
                  { id: "Boshqa tushum", value: totalRevenue - totalDiscountRevenue, label: "Boshqa tushum" },
                ],
                innerRadius: 60,
                outerRadius: 100,
                arcLabel: (params) => params.value.toLocaleString() + ' so\'m',
                arcLabelMinAngle: 18,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { additionalRadius: -8, color: 'rgba(200,200,200,0.2)' },
                highlighted: { additionalRadius: 8 },
              }]}
              sx={{ background: 'linear-gradient(120deg, #f8fafc 80%, #e0e7ff 100%)', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)', p: 1 }}
              margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <Typography variant="h6" sx={{ color: '#6366f1', fontWeight: 700 }}>
                Chegirmalarning ulushi: {discountShare}%
              </Typography>
            </div>
          </div>

        </div>
          <div className="charts-grid">
        {/* Telegramma turlari zamonaviy boxlar */}
        <div className="telegram-types-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {telegramTypes.map((type, idx) => (
            <div
              key={type.name}
              className="telegram-type-card"
              style={{
                background: type.gradient,
                boxShadow: type.shadow,
                borderRadius: 18,
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s',
                animation: `fadeInBox 0.7s ${0.1 * idx}s both`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.boxShadow = '0 12px 32px 0 rgba(80, 80, 180, 0.18), 0 3px 12px 0 rgba(0,0,0,0.13)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = type.shadow;
              }}
            >
              <div style={{ marginBottom: 18, animation: 'iconPop 0.7s' }}>{type.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', textShadow: '0 2px 8px rgba(80,80,180,0.13)' }}>{type.value.toLocaleString()}</div>
              <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', opacity: 0.92, marginTop: 8, textAlign: 'center' }}>{type.name}</div>
            </div>
          ))}
        </div>

          </div>
        {/* Chegirmalarning umumiy samaradorlik indeksi, Foydalanuvchi segmentatsiyasi, Eng yuqori 3 oy */}
        <div className="charts-grid">
          {/* Chegirmalarning umumiy samaradorlik indeksi */}
          <div className="chart-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="chart-header" style={{ width: '100%' }}>
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Chegirmalarning umumiy samaradorlik indeksi</h3>
            </div>
            <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto' }}>
              <svg width={180} height={180}>
                <circle
                  cx={90}
                  cy={90}
                  r={80}
                  stroke="#e0e7ff"
                  strokeWidth={16}
                  fill="none"
                />
                <circle
                  cx={90}
                  cy={90}
                  r={80}
                  stroke="#6366f1"
                  strokeWidth={16}
                  fill="none"
                  strokeDasharray={2 * Math.PI * 80}
                  strokeDashoffset={2 * Math.PI * 80 * (1 - annualEfficiency / 100)}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 1s' }}
                />
              </svg>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: 180, height: 180,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
              }}>
                <span style={{ fontSize: 38, fontWeight: 700, color: '#6366f1' }}>{annualEfficiency}%</span>
                <span style={{ color: '#64748b', fontWeight: 500 }}>Yillik samaradorlik</span>
              </div>
            </div>
            {/* Eng samarador chegirma */}
            {(() => {
              const best = efficiencyData.reduce((a, b) => (a.percent > b.percent ? a : b));
              return (
                <div style={{ width: '100%', marginTop: 32, padding: '0 1.5rem' }}>
                  <div style={{ textAlign: 'center', fontWeight: 600, color: '#10b981', marginBottom: 8, fontSize: 18 }}>
                    Eng samarador chegirma: {best.label}
                  </div>
                  <AnimatedEfficiencyBar
                    label={best.label}
                    percent={best.percent}
                    color={best.color}
                    percentColor={best.percentColor}
                  />
                </div>
              );
            })()}
          </div>
          {/* Foydalanuvchi segmentatsiyasi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Foydalanuvchi segmentatsiyasi</h3>
            </div>
            <BarChart
              height={300}
              series={[{
                data: userSegments.map(item => item.value),
                label: 'Foydalanish soni',
                color: '#f59e0b',
              }]}
              xAxis={[{ scaleType: 'band', data: userSegments.map(item => item.segment) }]}
              yAxis={[{ label: 'Foydalanish soni', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
          {/* Eng ko'p chegirmalardan foydalanilgan 3 oy */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng ko'p chegirmalardan foydalanilgan 3 oy</h3>
            </div>
            <BarChart
              height={300}
              series={[{
                data: topMonths.map(item => item.value),
                label: 'Chegirmali telegrammalar',
                color: '#8b5cf6',
              }]}
              xAxis={[{ scaleType: 'band', data: topMonths.map(item => item.month) }]}
              yAxis={[{ label: 'Telegrammalar soni', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
                    {/* Chegirmalarning samaradorligi */}
                    <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Chegirmalarning samaradorligi</h3>
            </div>
            <div style={{ padding: '1rem 0' }}>
              {efficiencyData.map((item, idx) => (
                <AnimatedEfficiencyBar
                  key={idx}
                  label={item.label}
                  percent={item.percent}
                  color={item.color}
                  percentColor={item.percentColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Telegramma va Chegirmalar Ko'rsatkichlari */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Telegramma va Chegirmalar Ko'rsatkichlari</h3>
            </div>
            <BarChart
              height={350}
              series={[{
                data: telegramDiscountMetrics.map(item => item.value),
                label: 'Joriy qiymat',
                color: metricGreenBlueGradient,
                getBarColor: () => metricGreenBlueGradient,
              }]}
              xAxis={[{ scaleType: 'band', data: telegramDiscountMetrics.map(item => item.metric) }]}
              yAxis={[{ label: 'Qiymat', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
              groupPadding={0.3}
              barPadding={0.2}
            />
            <div style={{ marginTop: 24 }}>
              <table className="data-table" style={{ width: '100%', marginTop: 8 }}>
                <thead>
                  <tr>
                    <th>Ko'rsatkich</th>
                    <th>Joriy qiymat</th>
                    <th>Maqsad</th>
                    <th>Trend</th>
                    <th>Farq</th>
                  </tr>
                </thead>
                <tbody>
                  {telegramDiscountMetrics.map((item, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold">{item.metric}</td>
                      <td>
                        <span className="percentage-badge" style={{ background: metricGreenBlueGradient }}>
                          {item.value}
                        </span>
                      </td>
                      <td>{item.target}</td>
                      <td>
                        <span className="trend-indicator" style={{ color: '#34d399', fontWeight: 700 }}>
                          {item.trend === 'up' ? '↗' : '↘'}
                        </span>
                      </td>
                      <td>
                        <span style={{ color: '#34d399', fontWeight: 700 }}>
                          {(item.value - item.target).toFixed(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Telegrammalar va chegirmalar bo'yicha batafsil ma'lumot</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tur</th>
                  <th>Yillik soni</th>
                  <th>O'sish (%)</th>
                  <th>Ulush (%)</th>
                  <th>Oylik (iyul)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="region-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.value.toLocaleString()}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.growth > 8 ? '#10b981' : item.growth > 5 ? '#f59e0b' : '#ef4444' }}>
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
      </div>
    </div>
  );
};
