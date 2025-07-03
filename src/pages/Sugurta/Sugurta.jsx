import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import './Sugurta.css';
import { FaShieldAlt, FaChartPie, FaChartLine, FaArrowUp, FaArrowDown, FaBalanceScale, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

// Mock data for Sug'urta
const insuranceTypes = [
  { name: "Hayot sug'urtasi", value: 120000, growth: 8.5, share: 35, color: "#00D4FF", monthly: [9000, 9500, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000] },
  { name: "Avto sug'urta", value: 95000, growth: 7.2, share: 28, color: "#FF6B35", monthly: [7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500] },
  { name: "Mol-mulk sug'urtasi", value: 80000, growth: 6.1, share: 22, color: "#4ECDC4", monthly: [6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500] },
  { name: "Sog'liqni sug'urta", value: 48000, growth: 5.4, share: 15, color: "#F7DC6F", monthly: [4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200] },
];
const months = ["Avg", "Sen", "Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul"];
const totalPremium = insuranceTypes.reduce((sum, t) => sum + t.value, 0);
const avgGrowth = (insuranceTypes.reduce((sum, t) => sum + t.growth, 0) / insuranceTypes.length).toFixed(1);
const topInsurance = insuranceTypes[0];

// Area chart for monthly trend (all types)
const areaChartOptions = {
  chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  xaxis: { categories: months, labels: { style: { colors: '#1900fe' } } },
  yaxis: { labels: { style: { colors: '#3730a3' } } },
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.4, stops: [0, 90, 100] } },
  colors: insuranceTypes.map(t => t.color),
  legend: { position: 'top', labels: { colors: '#3730a3' } },
  grid: { borderColor: 'rgba(42, 42, 42, 0.1)', strokeDashArray: 3 }
};
const areaChartSeries = insuranceTypes.map(t => ({ name: t.name, data: t.monthly }));

// Pie chart for share
const pieChartOptions = {
  chart: { type: 'pie', height: 350 },
  labels: insuranceTypes.map(t => t.name),
  colors: insuranceTypes.map(t => t.color),
  legend: { position: 'bottom', labels: { colors: '#3730a3' } }
};
const pieChartSeries = insuranceTypes.map(t => t.share);

// Bar chart for premium by type
const barChartOptions = {
  chart: { type: 'bar', height: 350, toolbar: { show: false }, background: 'transparent' },
  plotOptions: { bar: { borderRadius: 4, horizontal: false, columnWidth: '55%', distributed: true } },
  dataLabels: { enabled: false },
  stroke: { show: true, width: 2, colors: ['transparent'] },
  xaxis: { categories: insuranceTypes.map(t => t.name), labels: { style: { colors: '#3730a3' } } },
  yaxis: { title: { text: "Sug'urta mukofoti (ming so'm)", style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
  fill: { opacity: 1, colors: insuranceTypes.map(t => t.color) },
  tooltip: { y: { formatter: val => val + " ming so'm" } },
  grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
};
const barChartSeries = [{ name: "Mukofot", data: insuranceTypes.map(t => t.value) }];

// Mock for additional analytics
const claimStats = [
  { label: "Qanoatlantirilgan da'volar", value: 92, color: '#10b981' },
  { label: "Rad etilgan da'volar", value: 6, color: '#ef4444' },
  { label: "Jarayonda", value: 2, color: '#f59e0b' },
];
const efficiency = 98.2;
const safety = 99.1;
const audit = 1;

export const Sugurta = () => {
  // State for period filtering
  const [trendPeriod, setTrendPeriod] = React.useState('12');
  // Helper to get filtered months and data
  const getFilteredMonths = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return months.slice(-periods[trendPeriod]);
  };
  const getFilteredSeries = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return insuranceTypes.map(t => ({
      name: t.name,
      data: t.monthly.slice(-periods[trendPeriod])
    }));
  };
  const filteredMonths = getFilteredMonths();
  const filteredAreaChartSeries = getFilteredSeries();

  return (
    <div className="insurance-container">
      <div className="insurance-content">
        {/* Header */}
        <div className="insurance-header">
          <h1 className="insurance-title">Sug'urta Analitika</h1>
          <p className="insurance-subtitle">Sug'urta turlari va da'volar bo'yicha analitik ma'lumotlar</p>
          <div className="insurance-divider"></div>
        </div>

        {/* Stat Cards */}
        <div className="insurance-stats-grid">
          <div className="insurance-stat-card blue">
            <div className="insurance-stat-card-content">
              <div className="insurance-stat-info">
                <h4>JAMI SUG'URTA SUMMASI</h4>
                <div className="insurance-stat-value">{totalPremium.toLocaleString()}</div>
                <div className="insurance-stat-unit">so'm</div>
              </div>
              <div className="insurance-stat-icon"><FaShieldAlt color="#3b82f6" /></div>
            </div>
          </div>
          <div className="insurance-stat-card orange">
            <div className="insurance-stat-card-content">
              <div className="insurance-stat-info">
                <h4>O'RTACHA O'SISH</h4>
                <div className="insurance-stat-value">{avgGrowth}%</div>
              </div>
              <div className="insurance-stat-icon"><FaArrowUp color="#f59e0b" /></div>

            </div>
              <div className="insurance-stat-unit">Foiz</div>
          </div>
          <div className="insurance-stat-card green">
            <div className="insurance-stat-card-content">
              <div className="insurance-stat-info">
                <h4>JAMI SUG'URTALAR SONI</h4>
                <div className="insurance-stat-value">1 562</div>
                <div className="insurance-stat-unit">Dona</div>
              </div>
              <div className="insurance-stat-icon"><FaChartPie color="#10b981" /></div>
            </div>
          </div>
          <div className="insurance-stat-card purple">
            <div className="insurance-stat-card-content">
              <div className="insurance-stat-info">
                <h4>VAGON SUG'URTASI SUMMASI</h4>
                <div className="insurance-stat-value">{(totalPremium / insuranceTypes.length).toLocaleString()}</div>
                <div className="insurance-stat-unit">so'm</div>
              </div>
              <div className="insurance-stat-icon"><FaChartLine color="#8b5cf6" /></div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="insurance-charts-grid">
          <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Oylik mukofotlar dinamikasi</h3>
              <div className="insurance-trend-filters">
                <button className={`insurance-filter-btn ${trendPeriod === '3' ? 'active' : ''}`} onClick={() => setTrendPeriod('3')}>3 oy</button>
                <button className={`insurance-filter-btn ${trendPeriod === '6' ? 'active' : ''}`} onClick={() => setTrendPeriod('6')}>6 oy</button>
                <button className={`insurance-filter-btn ${trendPeriod === '12' ? 'active' : ''}`} onClick={() => setTrendPeriod('12')}>1 yil</button>
              </div>
            </div>
            <ReactApexChart options={areaChartOptions} series={filteredAreaChartSeries} type="area" height={300} />
          </div>
          <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Sug'urta turlari ulushi</h3>
            </div>
            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" height={350} />
          </div>
        </div>
        <div className="insurance-charts-grid">
          <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Mukofotlar bo'yicha taqsimot</h3>
            </div>
            <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
          </div>
          <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Da'volar statistikasi</h3>
            </div>
            <ul className="insurance-claim-list">
              {claimStats.map((s, i) => (
                <li key={i} className="insurance-claim-item" style={{ borderLeft: `6px solid ${s.color}` }}>
                  <span className="insurance-claim-label">{s.label}</span>
                  <span className="insurance-claim-value">{s.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Efficiency and Safety */}
        <div className="insurance-charts-grid">
          <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Samaradorlik va Xavfsizlik</h3>
            </div>
            <div className="insurance-efficiency-card">
              <div className="insurance-efficiency-header">
                <span className="insurance-efficiency-title">Samaradorlik</span>
                <span className="insurance-efficiency-trend">↗</span>
              </div>
              <EfficiencyBar label="To'lovlarni o'z vaqtida bajarish" percent={efficiency} color="linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)" percentColor="#16a34a" />
              <EfficiencyBar label="Hisobotlar aniqligi" percent={99.0} color="linear-gradient(90deg, #6366f1, #a21caf, #6366f1)" percentColor="#0ea5e9" />
              <EfficiencyBar label="Byudjet bajarilishi" percent={97.5} color="linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9)" percentColor="#6366f1" />
            </div>
            <SafetyCard />
          </div>
          <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Eng yuqori o'sish ko'rsatkichlari</h3>
            </div>
            <div className="insurance-top-list">
              {insuranceTypes
                .sort((a, b) => b.growth - a.growth)
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} className="insurance-top-item">
                    <div className="insurance-top-rank">{index + 1}</div>
                    <div className="insurance-top-info">
                      <div className="insurance-top-name">{item.name}</div>
                      <div className="insurance-top-details">
                        <span className="insurance-top-value">{item.growth}% o'sish</span>
                        <span className="insurance-top-premium">{item.value.toLocaleString()} so'm</span>
                      </div>
                    </div>
                    <div className="insurance-top-color-indicator" style={{ backgroundColor: item.color }}></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Detailed Table */}
        <div className="insurance-data-table-container">
          <div className="insurance-chart-header">
            <div className="insurance-chart-indicator"></div>
            <h3 className="insurance-chart-title">Sug'urta turlari bo'yicha batafsil ma'lumot</h3>
          </div>
          <div className="insurance-overflow-x-auto">
            <table className="insurance-data-table">
              <thead>
                <tr>
                  <th>Turi</th>
                  <th>Yillik mukofot (so'm)</th>
                  <th>O'sish (%)</th>
                  <th>Ulush (%)</th>
                  <th>Oylik mukofot (iyul)</th>
                </tr>
              </thead>
              <tbody>
                {insuranceTypes.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="insurance-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.value.toLocaleString()}</td>
                    <td>
                      <span className="insurance-percentage-badge" style={{ backgroundColor: item.growth > 7 ? '#10b981' : item.growth > 5 ? '#f59e0b' : '#ef4444' }}>
                        {item.growth}%
                      </span>
                    </td>
                    <td>
                      <span className="insurance-percentage-badge">
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
      {/* Zamonaviy qo'shimcha bo'limlar */}
      <ModernInsuranceSections />
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
    <div className="insurance-eff-bar-row">
      <div className="insurance-eff-bar-label">{label}</div>
      <div className="insurance-eff-bar-percent" style={{ color: percentColor }}>{percent}%</div>
      <div className="insurance-eff-bar-bg">
        <div
          className="insurance-eff-bar-fg"
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
    const timeout = setTimeout(() => setProgress(99.1), 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="insurance-efficiency-card">
      <div className="insurance-efficiency-header">
        <span className="insurance-efficiency-title">Xavfsizlik</span>
        <span className="insurance-efficiency-trend" style={{ color: '#16a34a' }}>✔️</span>
      </div>
      <div className="insurance-eff-bar-row">
        <div className="insurance-eff-bar-label">Xavfsiz operatsiyalar</div>
        <div className="insurance-eff-bar-percent" style={{ color: '#16a34a' }}>99.1%</div>
        <div className="insurance-eff-bar-bg">
          <div
            className="insurance-eff-bar-fg"
            style={{
              width: progress + '%',
              background: 'linear-gradient(90deg, #16a34a, #22d3ee, #16a34a)'
            }}
          />
        </div>
      </div>
      <div className="insurance-safety-badges">
        <div className="insurance-safety-badge badge-red">Hodisa <span>0</span></div>
        <div className="insurance-safety-badge badge-orange">Hisobot muammolari <span>1</span></div>
        <div className="insurance-safety-badge badge-blue">Audit standartlari <span>8</span></div>
      </div>
    </div>
  );
}

// Zamonaviy qo'shimcha bo'limlar
const ModernInsuranceSections = () => {
  return (
    <div className="insurance-sections">
      {/* 1. Sug'urta turlari bo'yicha tahlil (Pie Chart) */}
      <div className="insurance-charts-grid">
        <section className="insurance-section modern-section">
          <h2 className="insurance-section-title gradient-text">1. Sug'urta turlari bo'yicha tahlil</h2>
          <ReactApexChart
            options={{
              chart: { type: 'pie', animations: { enabled: true } },
              labels: ["Vagon", "Lokomotiv", "Yo'lovchi", "Yuk", "Infratuzilma"],
              colors: ["#0ea5e9", "#6366f1", "#10b981", "#f59e0b", "#8b5cf6"],
              legend: { position: 'bottom', labels: { colors: '#334155' } },
              fill: { type: 'gradient' },
            }}
            series={[820, 120, 320, 220, 80]}
            type="pie"
            height={260}
          />
        </section>
        {/* 2. Da'volar statistikasi (Stacked Bar) */}
        <section className="insurance-section modern-section">
          <h2 className="insurance-section-title gradient-text">2. Da'volar statistikasi</h2>
          <ReactApexChart
            options={{
              chart: { type: 'bar', stacked: true, animations: { enabled: true } },
              xaxis: { categories: ["Yan", "Fev", "Mar", "Apr", "May"] },
              colors: ["#10b981", "#ef4444", "#f59e0b"],
              legend: { position: 'top', labels: { colors: '#334155' } },
              fill: { type: 'gradient' },
            }}
            series={[
              { name: "Qanoatlantirilgan", data: [8, 12, 10, 9, 13] },
              { name: "Rad etilgan", data: [1, 0, 2, 1, 1] },
              { name: "Jarayonda", data: [0, 1, 1, 0, 1] },
            ]}
            type="bar"
            height={260}
          />
        </section>
      </div>
      {/* 8. Sug'urta shartnomalari monitoringi (Donut Chart) */}
      <section className="insurance-section modern-section">
        <h2 className="insurance-section-title gradient-text">8. Sug'urta shartnomalari monitoringi</h2>
        <ReactApexChart
          options={{
            chart: { type: 'donut', animations: { enabled: true } },
            labels: ["Amaldagi", "Muddati tugagan"],
            colors: ["#10b981", "#f59e0b"],
            legend: { position: 'bottom', labels: { colors: '#334155' } },
            fill: { type: 'gradient' },
          }}
          series={[1200, 80]}
          type="donut"
          height={220}
        />
      </section>
      {/* 10. FAQ yoki yordam bo'limi (Accordion) */}
      <section className="insurance-section modern-section">
        <h2 className="insurance-section-title gradient-text">10. FAQ va yordam</h2>
        <FAQAccordion />
      </section>
    </div>
  );
};

// FAQAccordion component
function FAQAccordion() {
  const [open, setOpen] = useState(null);
  const data = [
    {
      q: "Vagon sug'urtasi uchun qanday hujjatlar kerak?",
      a: "Texnik pasport, shartnoma va to'lov kvitansiyasi."
    },
    {
      q: "Da'vo berish uchun qayerga murojaat qilinadi?",
      a: "'O'ztemiryo'lsug'urta' kompaniyasining rasmiy ofisiga yoki onlayn platformaga."
    },
    {
      q: "Sug'urta to'lovlari qancha muddatda amalga oshiriladi?",
      a: "O'rtacha 7 ish kuni ichida." 
    }
  ];
  return (
    <div className="insurance-faq-accordion">
      {data.map((item, idx) => (
        <div key={idx} className={`faq-item${open === idx ? ' open' : ''}`}>
          <div className="faq-question gradient-border" onClick={() => setOpen(open === idx ? null : idx)}>
            {item.q}
            <span className="faq-arrow">{open === idx ? '▲' : '▼'}</span>
          </div>
          <div className="faq-answer" style={{ maxHeight: open === idx ? 200 : 0 }}>
            {open === idx && <div>{item.a}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sugurta;
