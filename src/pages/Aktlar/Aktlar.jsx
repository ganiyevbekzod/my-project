import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaArrowUp, FaArrowDown, FaFileAlt, FaFileSignature, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Aktlar.css';

const Aktlar = () => {
  const { t, i18n } = useTranslation();
  const [period, setPeriod] = React.useState('6');

  // Mock KPI stats for Aktlar
  const aktStats = [
    { metric: t('aktlar.stats.total'), value: 860, change: 7.5, trend: "up" },
    { metric: t('aktlar.stats.accepted'), value: 690, change: 5.2, trend: "up" },
    { metric: t('aktlar.stats.rejected'), value: 70, change: -1.8, trend: "down" },
    { metric: t('aktlar.stats.inProgress'), value: 100, change: 2.3, trend: "up" },
  ];

  // KPI for each akt type
  const aktTypeKPI = [
    {
      metric: t('aktlar.types.technical'),
      value: 312,
      change: 9.1,
      trend: "up",
      stats: [
        { label: t('aktlar.status.waiting'), value: 32 },
        { label: t('aktlar.status.inProgress'), value: 54 },
        { label: t('aktlar.status.completed'), value: 210 },
        { label: t('aktlar.status.rejected'), value: 16 },
      ],
      percent: 87.3,
      icon: <FaFileAlt className="ariza-icon blue" />,
    },
    {
      metric: t('aktlar.types.financial'),
      value: 245,
      change: 6.7,
      trend: "up",
      stats: [
        { label: t('aktlar.status.waiting'), value: 21 },
        { label: t('aktlar.status.inProgress'), value: 38 },
        { label: t('aktlar.status.completed'), value: 170 },
        { label: t('aktlar.status.rejected'), value: 16 },
      ],
      percent: 79.4,
      icon: <FaBalanceScale className="ariza-icon green" />,
    },
    {
      metric: t('aktlar.types.security'),
      value: 198,
      change: 8.3,
      trend: "up",
      stats: [
        { label: t('aktlar.status.waiting'), value: 18 },
        { label: t('aktlar.status.inProgress'), value: 29 },
        { label: t('aktlar.status.completed'), value: 140 },
        { label: t('aktlar.status.rejected'), value: 11 },
      ],
      percent: 70.7,
      icon: <FaShieldAlt className="ariza-icon orange" />,
    },
    {
      metric: t('aktlar.types.mesplan'),
      value: 105,
      change: -4.2,
      trend: "down",
      stats: [
        { label: t('aktlar.status.waiting'), value: 9 },
        { label: t('aktlar.status.inProgress'), value: 17 },
        { label: t('aktlar.status.completed'), value: 70 },
        { label: t('aktlar.status.rejected'), value: 9 },
      ],
      percent: 93.5,
      icon: <FaFileSignature className="ariza-icon purple" />,
    },
  ];

  // Monthly data for 12 months
  const allMonthlyAktlar = [
    { month: t('aktlar.months.jul'), texnik: 28, moliyaviy: 22, xavfsizlik: 18, boshqa: 9 },
    { month: t('aktlar.months.jun'), texnik: 26, moliyaviy: 20, xavfsizlik: 16, boshqa: 8 },
    { month: t('aktlar.months.may'), texnik: 24, moliyaviy: 19, xavfsizlik: 15, boshqa: 7 },
    { month: t('aktlar.months.apr'), texnik: 23, moliyaviy: 18, xavfsizlik: 14, boshqa: 7 },
    { month: t('aktlar.months.mar'), texnik: 22, moliyaviy: 17, xavfsizlik: 13, boshqa: 6 },
    { month: t('aktlar.months.feb'), texnik: 20, moliyaviy: 16, xavfsizlik: 12, boshqa: 6 },
    { month: t('aktlar.months.jan'), texnik: 18, moliyaviy: 15, xavfsizlik: 11, boshqa: 5 },
    { month: t('aktlar.months.dec'), texnik: 17, moliyaviy: 14, xavfsizlik: 10, boshqa: 5 },
    { month: t('aktlar.months.nov'), texnik: 16, moliyaviy: 13, xavfsizlik: 9, boshqa: 4 },
    { month: t('aktlar.months.oct'), texnik: 15, moliyaviy: 12, xavfsizlik: 8, boshqa: 4 },
    { month: t('aktlar.months.sep'), texnik: 14, moliyaviy: 11, xavfsizlik: 7, boshqa: 3 },
    { month: t('aktlar.months.aug'), texnik: 13, moliyaviy: 10, xavfsizlik: 6, boshqa: 3 },
  ];

  const aktTypeDistribution = React.useMemo(() => [
    { name: t('aktlar.charts.technicalAct'), value: 312, color: "#3b82f6" },
    { name: t('aktlar.charts.financialAct'), value: 245, color: "#10b981" },
    { name: t('aktlar.charts.securityAct'), value: 198, color: "#f59e42" },
    { name: t('aktlar.types.mesplan'), value: 305, color: "#a21caf" },
  ], [t, i18n.language]);

  const regionStats = [
    { region: t('aktlar.regions.Toshkent'), count: 90 },
    { region: t('aktlar.regions.Samarqand'), count: 70 },
    { region: t('aktlar.regions.Buxoro'), count: 60 },
    { region: t('aktlar.regions.Andijon'), count: 55 },
    { region: t("aktlar.regions.Farg'ona"), count: 50 },
    { region: t('aktlar.regions.Namangan'), count: 48 },
    { region: t('aktlar.regions.Qashqadaryo'), count: 45 },
    { region: t('aktlar.regions.Surxondaryo'), count: 42 },
    { region: t('aktlar.regions.Jizzax'), count: 40 },
    { region: t('aktlar.regions.Sirdaryo'), count: 38 },
    { region: t('aktlar.regions.Navoiy'), count: 36 },
    { region: t('aktlar.regions.Xorazm'), count: 35 },
  ];

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
const areaChartSeries =React.useMemo(()=> [
    { name: t('aktlar.charts.technicalAct'), data: filteredMonthlyAktlar.map(item => item.texnik) },
    { name: t('aktlar.charts.financialAct'), data: filteredMonthlyAktlar.map(item => item.moliyaviy) },
    { name: t('aktlar.charts.securityAct'), data: filteredMonthlyAktlar.map(item => item.xavfsizlik) },
    { name: t('aktlar.charts.other'), data: filteredMonthlyAktlar.map(item => item.boshqa) },
  ], [t, i18n.language]);

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
    yaxis: { title: { text: t('aktlar.labels.actsCount'), style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
    fill: { opacity: 1, colors: ['#3b82f6', '#10b981', '#f59e42', '#a21caf', '#ef4444', '#fbbf24'] },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };
  const barChartSeries = [{ name: t('aktlar.labels.actsCount'), data: regionStats.map(item => item.count) }];
////////////////////////////////////////
  return (
    <div className="aktlar-dashboard">
      <div className="aktlar-content">
        {/* Header */}
        <div className="aktlar-header">
          <h1 className="aktlar-title">{t('aktlar.title')}</h1>
          <p className="aktlar-subtitle">{t('aktlar.subtitle')}</p>
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
                    <span className="aktlar-trend-label">{t('aktlar.labels.comparedToLastMonth')}</span>
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
                  <div className="aktlar-type-progress-label">{item.percent}% {t('aktlar.labels.completed')}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Area chart for monthly aktlar trend */}
        <div className="aktlar-chart-card">
          <div className="aktlar-chart-header">
            <div className="aktlar-chart-indicator"></div>
            <h3 className="aktlar-chart-title">{t('aktlar.charts.monthlyTrend')}</h3>
            <span className="aktlar-chart-badge">Aktlar</span>
            <div className="aktlar-retention-filters">
              <button className={`aktlar-filter-btn ${period === '3' ? 'active' : ''}`} onClick={() => setPeriod('3')}>{t('aktlar.filters.3months')}</button>
              <button className={`aktlar-filter-btn ${period === '6' ? 'active' : ''}`} onClick={() => setPeriod('6')}>{t('aktlar.filters.6months')}</button>
              <button className={`aktlar-filter-btn ${period === '12' ? 'active' : ''}`} onClick={() => setPeriod('12')}>{t('aktlar.filters.1year')}</button>
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
                    <span className="aktlar-trend-label">{t('aktlar.labels.comparedToLastMonth')}</span>
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
            <h3 className="aktlar-chart-title">{t('aktlar.charts.regionBreakdown')}</h3>
            <span className="chart-badge">Soni</span>

          </div>
          <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
        </div>

        {/* Pie/Donut chart for akt type distribution */}
        <div className="aktlar-charts-row">
          <div className="aktlar-chart-card" style={{ flex: 1, minWidth: 0 }}>
            <div className="aktlar-chart-header">
              <div className="aktlar-chart-indicator"></div>
              <h3 className="aktlar-chart-title">{t('aktlar.charts.typeDistribution')}</h3>
            <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="donut" height={320} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aktlar;

