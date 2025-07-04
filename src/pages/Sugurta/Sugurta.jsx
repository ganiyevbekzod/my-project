import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import './Sugurta.css';
import { FaShieldAlt, FaChartPie, FaChartLine, FaArrowUp, FaArrowDown, FaBalanceScale, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

// Mock data for Sug'urta
const insuranceTypes = [
  { name: "Vagon sug'urtasi", value: 120000, growth: 8.5, share: 35, color: "#00D4FF", monthly: [9000, 9500, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000] },
  { name: "Lokomotiv sug'urtasi", value: 95000, growth: 7.2, share: 28, color: "#FF6B35", monthly: [7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500] },
  { name: "Yuk sug'urtasi", value: 80000, growth: 6.1, share: 22, color: "#4ECDC4", monthly: [6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500] },
  { name: "Infratuzilma sug'urtasi", value: 48000, growth: 5.4, share: 15, color: "#F7DC6F", monthly: [4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200] },
];

// Insurance type boxes data
const insuranceTypeBoxes = [
  {
    name: 'Vagon sug\'urtalari soni',
    value: 820,
    icon: <FaShieldAlt size={38} />,
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',
    shadow: '0 6px 24px 0 rgba(0, 212, 255, 0.15)',
  },
  {
    name: 'Lokomotiv sug\'urtalari soni',
    value: 120,
    icon: <FaChartPie size={38} />,
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',


    shadow: '0 6px 24px 0 rgba(255, 107, 53, 0.15)',
  },
  {
    name: 'Yuk sug\'urtalari soni',
    value: 320,
    icon: <FaChartLine size={38} />,
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',

    shadow: '0 6px 24px 0 rgba(78, 205, 196, 0.15)',
  },
  {
    name: 'Infratuzilma sug\'urtalari soni',
    value: 80,
    icon: <FaBalanceScale size={38} />,
    gradient:  'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',

    shadow: '0 6px 24px 0 rgba(247, 220, 111, 0.15)',
  },
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
  const [claimPeriod, setClaimPeriod] = React.useState('12');

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

  // Helper functions for claim data
  const getClaimMonths = () => {
    const periods = { '3': 3, '6': 6, '12': 7 };
    const allMonths = ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"];
    return allMonths.slice(0, periods[claimPeriod]);
  };

  const getClaimData = (type) => {
    const periods = { '3': 3, '6': 6, '12': 7 };
    const data = {
      approved: [8, 12, 10, 9, 13, 15, 18, 20, 22, 25, 28, 30],
      rejected: [1, 0, 2, 1, 1, 2, 1, 3, 2, 1, 2, 1],
      pending: [0, 1, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0]
    };
    return data[type].slice(0, periods[claimPeriod]);
  };

  const filteredMonths = getFilteredMonths();
  const filteredAreaChartSeries = getFilteredSeries();

  return (
    <div className="insurance-container">
      <div className="insurance-content">
        {/* Header */}
        <div className="insurance-header">
          <h1 className="insurance-title">Sug'urta Dashboard</h1>
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

        {/* 1. Da'volar statistikasi (Stacked Bar) */}
        <section className="insurance-section modern-section">
          <div className="insurance-chart-header">
            <div className="insurance-chart-indicator"></div>
            <h3 className="insurance-chart-title">Da'volar statistikasi</h3>
            <div className="insurance-trend-filters">
              <button
                className={`insurance-filter-btn ${claimPeriod === '3' ? 'active' : ''}`}
                onClick={() => setClaimPeriod('3')}
              >
                3 oy
              </button>
              <button
                className={`insurance-filter-btn ${claimPeriod === '6' ? 'active' : ''}`}
                onClick={() => setClaimPeriod('6')}
              >
                6 oy
              </button>
              <button
                className={`insurance-filter-btn ${claimPeriod === '12' ? 'active' : ''}`}
                onClick={() => setClaimPeriod('12')}
              >
                1 yil
              </button>
            </div>
          </div>
          <ReactApexChart
            options={{
              chart: {
                type: 'bar',
                stacked: true,
                animations: { enabled: true },
                background: 'transparent',
                toolbar: { show: false }
              },
              xaxis: {
                categories: getClaimMonths(),
                labels: { style: { colors: '#3730a3', fontWeight: 500 } }
              },
              yaxis: {
                labels: { style: { colors: '#3730a3' } },
                title: { text: "Da'volar soni", style: { color: '#3730a3' } }
              },
              colors: ['#60a5fa', '#ef4444', '#10b981'],
              legend: {
                position: 'top',
                labels: { colors: '#334155', fontWeight: 600 },
                markers: { radius: 6 }
              },
              fill: {
                type: 'solid'
              },
              plotOptions: {
                bar: {
                  borderRadius: 8,
                  columnWidth: '70%',
                  distributed: false
                }
              },
              grid: {
                borderColor: 'rgba(112, 156, 245, 0.1)',
                strokeDashArray: 3,
                xaxis: { lines: { show: false } }
              },
              dataLabels: { enabled: false },
              stroke: { width: 2, colors: ['transparent'] }
            }}
            series={[
              {
                name: "Qanoatlantirilgan",
                data: getClaimData('approved')
              },
              {
                name: "Rad etilgan",
                data: getClaimData('rejected')
              },
              {
                name: "Jarayonda",
                data: getClaimData('pending')
              },
            ]}
            type="bar"
            height={300}
          />
        </section>
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

                {/* Insurance Type Boxes */}
                <div className="insurance-type-boxes-grid">
          {insuranceTypeBoxes.map((type, idx) => (
            <div
              key={type.name}
              className="insurance-type-card"
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
        </div>
        {/* Efficiency and Safety */}
        <div className="insurance-charts-grid">
        <div className="insurance-chart-card">
            <div className="insurance-chart-header">
              <div className="insurance-chart-indicator"></div>
              <h3 className="insurance-chart-title">Da'volar analitikasi bo'limi</h3>
            </div>
            <div className="insurance-claim-boxes">
              <ClaimBox
                title="Qanoatlantirilgan da'volar"
                value={92}
                percentage={92}
                icon={<FaCheckCircle />}
                gradient="linear-gradient(135deg, #10b981, #059669, #047857)"
                color="#10b981"
                animationDelay="0s"
              />
              <ClaimBox
                title="Rad etilgan da'volar"
                value={6}
                percentage={6}
                icon={<FaExclamationTriangle />}
                gradient="linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)"
                color="#ef4444"
                animationDelay="0.2s"
              />
              <ClaimBox
                title="Jarayondagi da'volar"
                value={2}
                percentage={2}
                icon={<FaBalanceScale />}
                gradient="linear-gradient(135deg, #f59e0b, #d97706, #b45309)"
                color="#f59e0b"
                animationDelay="0.4s"
              />
            </div>
          </div>

          {/* Eng yuqori o'sish ko'rsatkichlari */}
          <section className="insurance-chart-card">
            <div className="insurance-chart-header" >
              <div style={{width: 6, height: 32, borderRadius: 4, background: 'linear-gradient(180deg, #38bdf8, #ef4444, #10b981)', marginRight: 14}}></div>
              <h3 className="insurance-chart-title" style={{fontWeight: 700, fontSize: '1.25rem', color: '#22223b', margin: 0}}>Eng yuqori o'sish ko'rsatkichlari</h3>
            </div>
            <div className="insurance-claim-boxes">
              {insuranceTypes
                .sort((a, b) => b.growth - a.growth)
                .slice(0, 3)
                .map((item, idx) => {
                  const gradients = [
                    { main: 'linear-gradient(90deg, #38bdf8, #6366f1)', bg: 'linear-gradient(90deg, #e0f2fe 60%, #f0f9ff 100%)' },
                    { main: 'linear-gradient(90deg, #f87171, #ef4444)', bg: 'linear-gradient(90deg, #fee2e2 60%, #fff 100%)' },
                    { main: 'linear-gradient(90deg, #34d399, #10b981)', bg: 'linear-gradient(90deg, #d1fae5 60%, #fff 100%)' }
                  ];
                  const icons = [
                    <FaChartLine size={28} />, // blue
                    <FaChartPie size={28} />,  // red
                    <FaBalanceScale size={28} /> // green
                  ];
                  return (
                    <div 
                      key={item.name}
                      className="insurance-claim-box"
                    >
                      <div className="insurance-claim-box-icon" style={{ background: gradients[idx].main, }}>
                        {icons[idx]}
                      </div>
                      <div className="insurance-claim-box-content">
                        <h4 className="insurance-claim-box-title" style={{ background: gradients[idx].main, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>{item.name}</h4>
                        <div className="insurance-claim-box-value" style={{ background: gradients[idx].main, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700 }}>{item.growth}%</div>
                        <div className="insurance-claim-box-progress">
                          <div 
                            className="insurance-claim-box-progress-fill"
                            style={{ 
                              width: `${item.growth}%`,
                              background: gradients[idx].main
                            }}
                          />
                        </div>
                      </div>
                      <div className="insurance-claim-box-glow" style={{ background: gradients[idx].main, opacity: 0.13 }}></div>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// ClaimBox component
function ClaimBox({ title, value, percentage, icon, gradient, color, animationDelay }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => setProgress(percentage), 300 + (parseFloat(animationDelay) * 1000));
    return () => clearTimeout(timeout);
  }, [percentage, animationDelay]);

  return (
    <div
      className="insurance-claim-box"
      style={{
        animationDelay: animationDelay,
        '--gradient': gradient,
        '--color': color,
        '--icon-bg': `${color}20`
      }}
    >
      <div className="insurance-claim-box-icon">
        {React.cloneElement(icon, {
          style: {
            color: color,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }
        })}
      </div>
      <div className="insurance-claim-box-content">
        <h4 className="insurance-claim-box-title">{title}</h4>
        <div className="insurance-claim-box-value">{value}%</div>
        <div className="insurance-claim-box-progress">
          <div
            className="insurance-claim-box-progress-fill"
            style={{
              width: `${progress}%`,
              background: gradient
            }}
          />
        </div>
      </div>
      <div className="insurance-claim-box-glow" style={{ background: gradient }}></div>
    </div>
  );
}

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
export default Sugurta;
