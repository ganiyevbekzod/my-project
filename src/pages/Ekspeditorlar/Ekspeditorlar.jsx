import React from "react";
import ReactApexChart from 'react-apexcharts';
import './Ekspeditorlar.css';
import { FaUserTie, FaChartBar, FaArrowUp, FaArrowDown, FaUsers, FaGlobe, FaLayerGroup } from 'react-icons/fa';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Typography } from '@mui/material';


// Mock data for Ekspeditorlar
const ekspeditorData = [
  { name: "Ichki ekspeditorlar", value: 320, growth: 7.2, share: 44, color: "#38bdf8", monthly: [20, 22, 25, 28, 30, 32, 34, 36, 38, 40, 42, 44] },
  { name: "Xalqaro ekspeditorlar", value: 180, growth: 5.8, share: 25, color: "#6366f1", monthly: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32] },
  { name: "Yangi ekspeditorlar", value: 140, growth: 9.5, share: 19, color: "#10b981", monthly: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30] },
  { name: "Boshqa", value: 90, growth: 3.1, share: 12, color: "#f59e0b", monthly: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
];

const months = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];
const totalEkspeditor = ekspeditorData.reduce((sum, t) => sum + t.value, 0);
const avgGrowth = (ekspeditorData.reduce((sum, t) => sum + t.growth, 0) / ekspeditorData.length).toFixed(1);
const topEkspeditor = ekspeditorData.reduce((a, b) => a.value > b.value ? a : b);

// Area chart for monthly trend
const areaChartOptions = {
  chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#1900fe' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.4, stops: [0, 90, 100] } },
  colors: ekspeditorData.map(t => t.color),
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const areaChartSeries = ekspeditorData.map(t => ({ name: t.name, data: t.monthly }));

// Pie chart for share
const pieChartOptions = {
  chart: { type: 'pie', height: 350 },
  labels: ekspeditorData.map(t => t.name),
  colors: ekspeditorData.map(t => t.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const pieChartSeries = ekspeditorData.map(t => t.share);

// Table mock data
const tableData = ekspeditorData;

// Mock data for additional analytics
const monthlyNewEkspeditor = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const monthlyGrowth = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const monthsFull = ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"];
const ekspeditorTypes = [
  { type: "Yirik", value: 120 },
  { type: "O'rta", value: 180 },
  { type: "Kichik", value: 210 },
  { type: "Yangi", value: 140 },
];
const pieData = [
  { id: "Yangi", value: 140, label: "Yangi" },
  { id: "Boshqa", value: 450, label: "Boshqa" },
];

// Mock data for regions with most ekspeditor usage
const regionEkspeditorUsage = [
  { region: "Toshkent", value: 120 },
  { region: "Samarqand", value: 90 },
  { region: "Andijon", value: 80 },
  { region: "Buxoro", value: 70 },
  { region: "Farg'ona", value: 60 },
  { region: "Namangan", value: 50 },
];

// Mock data for ekspeditor metrics
const ekspeditorMetrics = [
  { metric: "Jami ekspeditorlar", value: 730, target: 700, trend: "up" },
  { metric: "O'rtacha o'sish foizi", value: 7, target: 6, trend: "up" },
  { metric: "Eng ko'p faol hudud", value: 120, target: 100, trend: "up" },
  { metric: "Yangi ekspeditorlar", value: 140, target: 120, trend: "up" },
  { metric: "Faoliyat samaradorligi", value: 92, target: 90, trend: "up" },
  { metric: "Foydalanuvchi qoniqishi", value: 95, target: 93, trend: "up" },
];

// Mock data for new analytics
const annualEfficiency = 91;
const userSegments = [
  { segment: "Yirik", value: 120 },
  { segment: "O'rta", value: 180 },
  { segment: "Kichik", value: 210 },
  { segment: "Yangi", value: 140 },
];
const topMonths = [
  { month: "Iyun", value: 44 },
  { month: "Iyul", value: 42 },
  { month: "May", value: 40 },
];

// Mock data for ekspeditor turlari cards
const ekspeditorTypesCards = [
  {
    name: 'Ichki ekspeditorlar',
    value: 320,
    icon: <FaUserTie size={38} />, 
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',
    shadow: '0 6px 24px 0 rgba(0, 212, 255, 0.15)',
  },
  {
    name: 'Xalqaro ekspeditorlar',
    value: 180,
    icon: <FaGlobe size={38} />, 
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',
    shadow: '0 6px 24px 0 rgba(255, 107, 53, 0.15)',
  },
  {
    name: 'Yangi ekspeditorlar',
    value: 140,
    icon: <FaUsers size={38} />, 
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',
    shadow: '0 6px 24px 0 rgba(78, 205, 196, 0.15)',
  },
  {
    name: 'Boshqa',
    value: 90,
    icon: <FaLayerGroup size={38} />, 
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',
    shadow: '0 6px 24px 0 rgba(247, 220, 111, 0.15)',
  },
];

const metricGreenBlueGradient = '#38bdf8';

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

// Mock data for protocols
const protocolStats = [
  {
    key: 'umumiy',
    label: 'Umumiy protokollar',
    value: 1200,
    icon: <FaLayerGroup size={38} />, 
    gradient: 'linear-gradient(120deg, #6366f1 0%, #38bdf8 100%)',
    shadow: '0 6px 24px 0 rgba(99,102,241,0.15)',
  },
  {
    key: 'eksport',
    label: 'Eksport protokollar',
    value: 350,
    icon: <FaArrowUp size={38} />, 
    gradient: 'linear-gradient(120deg, #f59e0b 0%, #fbbf24 100%)',
    shadow: '0 6px 24px 0 rgba(245,158,11,0.15)',
  },
  {
    key: 'import',
    label: 'Import protokollar',
    value: 420,
    icon: <FaArrowDown size={38} />, 
    gradient: 'linear-gradient(120deg, #10b981 0%, #34d399 100%)',
    shadow: '0 6px 24px 0 rgba(16,185,129,0.15)',
  },
  {
    key: 'tranzit',
    label: 'Tranzit protokollar',
    value: 180,
    icon: <FaGlobe size={38} />, 
    gradient: 'linear-gradient(120deg, #8b5cf6 0%, #6366f1 100%)',
    shadow: '0 6px 24px 0 rgba(139,92,246,0.15)',
  },
];

// Mock data for ekspeditor padkod breakdown
const ekspeditorPadkods = [
  {
    name: 'Ekspeditor 1', eksport: 12, import: 8, tranzit: 5, color: '#38bdf8', icon: <FaUserTie color="#38bdf8" />,
  },
  {
    name: 'Ekspeditor 2', eksport: 7, import: 15, tranzit: 3, color: '#10b981', icon: <FaUserTie color="#10b981" />,
  },
  {
    name: 'Ekspeditor 3', eksport: 5, import: 4, tranzit: 10, color: '#f59e0b', icon: <FaUserTie color="#f59e0b" />,
  },
  {
    name: 'Ekspeditor 4', eksport: 9, import: 6, tranzit: 7, color: '#8b5cf6', icon: <FaUserTie color="#8b5cf6" />,
  },
  {
    name: 'Ekspeditor 5', eksport: 14, import: 9, tranzit: 2, color: '#ef4444', icon: <FaUserTie color="#ef4444" />,
  },
  {
    name: 'Ekspeditor 6', eksport: 8, import: 12, tranzit: 6, color: '#06b6d4', icon: <FaUserTie color="#06b6d4" />,
  },
  {
    name: 'Ekspeditor 7', eksport: 11, import: 7, tranzit: 8, color: '#f43f5e', icon: <FaUserTie color="#f43f5e" />,
  },
  {
    name: 'Ekspeditor 8', eksport: 6, import: 10, tranzit: 9, color: '#a21caf', icon: <FaUserTie color="#a21caf" />,
  },
  {
    name: 'Ekspeditor 9', eksport: 13, import: 5, tranzit: 4, color: '#fbbf24', icon: <FaUserTie color="#fbbf24" />,
  },
  {
    name: 'Ekspeditor 10', eksport: 10, import: 11, tranzit: 3, color: '#0ea5e9', icon: <FaUserTie color="#0ea5e9" />,
  },
  {
    name: 'Ekspeditor 11', eksport: 4, import: 13, tranzit: 7, color: '#6366f1', icon: <FaUserTie color="#6366f1" />,
  },
  {
    name: 'Ekspeditor 12', eksport: 8, import: 9, tranzit: 12, color: '#22d3ee', icon: <FaUserTie color="#22d3ee" />,
  },
  {
    name: 'Ekspeditor 13', eksport: 15, import: 6, tranzit: 5, color: '#eab308', icon: <FaUserTie color="#eab308" />,
  },
  {
    name: 'Ekspeditor 14', eksport: 7, import: 8, tranzit: 14, color: '#14b8a6', icon: <FaUserTie color="#14b8a6" />,
  },
  {
    name: 'Ekspeditor 15', eksport: 9, import: 12, tranzit: 6, color: '#f472b6', icon: <FaUserTie color="#f472b6" />,
  },
  {
    name: 'Ekspeditor 16', eksport: 11, import: 10, tranzit: 8, color: '#7c3aed', icon: <FaUserTie color="#7c3aed" />,
  },
];

// Add this component above Ekspeditorlar
function EkspeditorPadkodBox({ ekspeditor, delay }) {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => setProgress(ekspeditor.eksport + ekspeditor.import + ekspeditor.tranzit), 100 + delay);
  }, [ekspeditor.eksport, ekspeditor.import, ekspeditor.tranzit, delay]);
  const percent = Math.min(100, (progress * 4));
  return (
    <div className="ekspeditor-padkod-box">
      <div className="ekspeditor-padkod-header">
        <div className="ekspeditor-padkod-icon">{ekspeditor.icon}</div>
        <div className="ekspeditor-padkod-title">{ekspeditor.name}</div>
      </div>
      <div className="ekspeditor-padkod-content">
        <div className="ekspeditor-padkod-stats">
          <div className="padkod-stat"><span className="stat-label">Eksport padkodlar soni:</span> <span className="stat-value" style={{ color: '#38bdf8' }}>{ekspeditor.eksport}</span></div>
          <div className="padkod-stat"><span className="stat-label">Import padkodlar soni:</span> <span className="stat-value" style={{ color: '#10b981' }}>{ekspeditor.import}</span></div>
          <div className="padkod-stat"><span className="stat-label">Tranzit padkodlar soni:</span> <span className="stat-value" style={{ color: '#8b5cf6' }}>{ekspeditor.tranzit}</span></div>
        </div>
        <div className="ekspeditor-padkod-progress">
          <div className="ekspeditors-progress-bar">
            <div className="progress-fill" style={{ width: percent + '%', backgroundColor: ekspeditor.color }}></div>
          </div>
          <span className="progress-text">Jami: {ekspeditor.eksport + ekspeditor.import + ekspeditor.tranzit} ta padkod</span>
        </div>
      </div>
    </div>
  );
}

export const Ekspeditorlar = () => {
  return (
    <div className="ekspeditor-container">
      <div className="ekspeditor-content">
        {/* Header */}
        <div className="ekspeditor-header">
          <h1 className="ekspeditor-title">Ekspeditorlar</h1>
          <p className="ekspeditor-subtitle">Ekspeditorlar statistikasi va analitikasi</p>
          <div className="ekspeditor-divider"></div>
        </div>
        {/* Protocols Stat Boxes */}
        <div className="protocols-stat-grid">
          {protocolStats.map((item, idx) => (
            <div
              key={item.key}
              className="protocols-stat-box protocols-anim"
              style={{
                background: item.gradient,
                boxShadow: item.shadow,
                animationDelay: `${0.1 * idx}s`,
              }}
            >
              <div className="protocols-icon-anim">{item.icon}</div>
              <div className="protocols-info">
                <div className="protocols-title">{item.label}</div>
                <div className="protocols-total">{item.value.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stat Cards */}
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>JAMI EKSPEDITORLAR</h4>
                <div className="stat-value">{totalEkspeditor.toLocaleString()}</div>
                <div className="stat-unit">ta</div>
              </div>
              <div className="stat-icon"><FaUserTie color="#3b82f6" /></div>
            </div>
          </div>
          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>EKSPEDITORLAR O'RTACHA O'SISH SUR'ATI</h4>
                <div className="stat-value">{avgGrowth}%</div>
                <div className="stat-unit">foiz</div>
              </div>
              <div className="stat-icon"><FaArrowUp color="#f59e0b" /></div>
            </div>
          </div>
          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Ayni vaqtdagi faol ekspeditorlar soni</h4>
                <div className="stat-value">{totalEkspeditor-100}</div>
                <div className="stat-unit">ta</div>
              </div>
              <div className="stat-icon"><FaChartBar color="#10b981" /></div>
            </div>
          </div>
          <div className="stat-card purple">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>ENG KATTA O'SISH</h4>
                <div className="stat-value">9.5%</div>
                <div className="stat-unit">foiz</div>
              </div>
              <div className="stat-icon"><FaArrowUp color="#8b5cf6" /></div>
            </div>
          </div>
        </div>
        {/* Charts */}
        <div className="charts-grid">
          {/* Area Chart: Oylik ekspeditor trendi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik ekspeditorlar dinamikasi</h3>
              <span className="chart-badge">Ta</span>
            </div>
            <ReactApexChart 
              options={areaChartOptions} 
              series={areaChartSeries} 
              type="area" 
              height={300} 
            />
          </div>
          {/* Pie Chart: Ekspeditor turlari ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Ekspeditor turlari ulushi</h3>
              <span className="chart-badge">Foiz</span>
            </div>
            <ReactApexChart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={350} 
            />
          </div>
          {/* Bar Chart: Ekspeditor turlari */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Ekspeditor turlari bo'yicha soni</h3>
              <span className="chart-badge">Soni</span>
            </div>
            <BarChart
              height={300}
              series={[{
                data: ekspeditorTypes.map(item => item.value),
                label: 'Ekspeditorlar',
                color: '#38bdf8',
              }]}
              xAxis={[{ scaleType: 'band', data: ekspeditorTypes.map(item => item.type) }]}
              yAxis={[{ label: 'Ekspeditorlar soni', width: 60 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
          {/* Yangi va boshqa ekspeditorlar ulushi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Yangi va boshqa ekspeditorlar ulushi</h3>
              <span className="chart-badge">Soni</span>
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
          {/* Ekspeditorlar oylik o'sish sur'ati */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik o'sish sur'ati</h3>
              <span className="chart-badge">Foiz</span>
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
        {/* Eng ko'p ekspeditorlar faoliyat yuritadigan hududlar */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng ko'p ekspeditorlar faoliyat yuritadigan hududlar</h3>
              <span className="chart-badge">Soni</span>
            </div>
            <BarChart
              height={300}
              series={[{
                data: regionEkspeditorUsage.map(item => item.value),
                label: 'Faoliyat soni',
                color: '#f59e0b',
              }]}
              xAxis={[{ scaleType: 'band', data: regionEkspeditorUsage.map(item => item.region) }]}
              yAxis={[{ label: 'Faoliyat soni', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
        </div>
        {/* Ekspeditorlar samaradorlik indeksi, Foydalanuvchi segmentatsiyasi, Eng yuqori 3 oy */}
        <div className="charts-grid">
          {/* Ekspeditorlar samaradorlik indeksi */}
          <div className="chart-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="chart-header" style={{ width: '100%' }}>
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Ekspeditorlar samaradorlik indeksi</h3>
              <span className="chart-badge">Foiz</span>
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
            {/* Eng samarador ekspeditor turi */}
            {(() => {
              const best = userSegments.reduce((a, b) => (a.value > b.value ? a : b));
              return (
                <div style={{ width: '100%', marginTop: 32, padding: '0 1.5rem' }}>
                  <div style={{ textAlign: 'center', fontWeight: 600, color: '#10b981', marginBottom: 8, fontSize: 18 }}>
                    Eng samarador ekspeditor turi: {best.segment}
                  </div>
                  <AnimatedEfficiencyBar
                    label={best.segment}
                    percent={Math.round((best.value / totalEkspeditor) * 100)}
                    color={'linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)'}
                    percentColor={'#16a34a'}
                  />
                </div>
              );
            })()}
          </div>
          {/* Foydalanuvchi segmentatsiyasi */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Ekspeditor segmentatsiyasi</h3>
              <span className="chart-badge">Soni</span>
            </div>
            <BarChart
              height={300}
              series={[{
                data: userSegments.map(item => item.value),
                label: 'Faoliyat soni',
                color: '#f59e0b',
              }]}
              xAxis={[{ scaleType: 'band', data: userSegments.map(item => item.segment) }]}
              yAxis={[{ label: 'Faoliyat soni', width: 80 }]}
              sx={{ background: 'transparent', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)' }}
              margin={{ right: 24 }}
            />
          </div>
        </div>
                      {/* Ekspeditorlar padkodlari bo'limi */}
        <div className="ekspeditor-padkodlar-grid">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Ekspeditorlar kiritgan padkodlar statistikasi</h3>
          </div>
          <div className="ekspeditor-padkodlar-container">
            {ekspeditorPadkods.map((e, i) => (
              <EkspeditorPadkodBox key={i} ekspeditor={e} delay={i * 80} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
