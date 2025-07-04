import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaStar, FaSmileBeam, FaUser, FaBuilding, FaBriefcase, FaUsers } from 'react-icons/fa';
import './Customer.css';
import { useTranslation } from 'react-i18next';
const CustomerDashboard = () => {
  const { t, i18n } = useTranslation();

// Sample data
const monthlyData = [
  { month: t('customer.month.avg'), yuridik: 69, jismoniy: 162, yakka: 55, revenue: 88 },
  { month: t('customer.month.sen'), yuridik: 78, jismoniy: 175, yakka: 62, revenue: 85 },
  { month: t("customer.month.okt"), yuridik: 82, jismoniy: 180, yakka: 65, revenue: 98 },
  { month: t("customer.month.noy"), yuridik: 75, jismoniy: 172, yakka: 60, revenue: 128 },
  { month: t("customer.month.dek"), yuridik: 88, jismoniy: 190, yakka: 70, revenue: 114 },
  { month: t("customer.month.yan"), yuridik: 45, jismoniy: 120, yakka: 35, revenue: 135 },
  { month: t("customer.month.fev"), yuridik: 52, jismoniy: 135, yakka: 42, revenue: 142 },
  { month: t("customer.month.mar"), yuridik: 48, jismoniy: 128, yakka: 38, revenue: 118 },
  { month: t("customer.month.apr"), yuridik: 61, jismoniy: 145, yakka: 45, revenue: 105 },
  { month: t("customer.month.may"), yuridik: 55, jismoniy: 142, yakka: 48, revenue: 132 },
  { month: t("customer.month.iyun"), yuridik: 67, jismoniy: 158, yakka: 52, revenue: 115 },
  { month: t("customer.month.iyul"), yuridik: 73, jismoniy: 165, yakka: 58, revenue: 145 },
];

const customerTypeData = React.useMemo(() => [
  { name: t('customer.types.allUsers'),UzRailway: t('customer.types.UzRailway'), value: 16556, color: "#3b82f6"   },
  { name: t('customer.types.individual'),UzRailway: t('customer.types.UzRailway'), value: 5657, color: "#3b82f6"   },
  { name: t('customer.types.legal'),UzRailway: t('customer.types.UzRailway'), value: 10899, color: "#ef4444" },
  { name: t('customer.types.sole'),UzRailway: t('customer.types.UzRailway'), value: 4367, color: "#10b981" },
], [t, i18n.language]);

const regionData = [
  { region: 'toshkent', count: 245, percentage: 35 },
  { region: 'samarkand', count: 156, percentage: 22 },
  { region: 'bukhara', count: 98, percentage: 14 },
  { region: 'andijon', count: 87, percentage: 12 },
  { region: 'fargona', count: 76, percentage: 11 },
  { region: 'boshqalar', count: 42, percentage: 6 },
];

// New data for additional charts
const customerSatisfactionData = [
  { rating: 5, count: 45, percentage: 30 },
  { rating: 4, count: 67, percentage: 45 },
  { rating: 3, count: 23, percentage: 15 },
  { rating: 2, count: 10, percentage: 7 },
  { rating: 1, count: 5, percentage: 3 },
];

const ageDistributionData = [
  { age: "18-25", count: 89, percentage: 12 },
  { age: "26-35", count: 234, percentage: 32 },
  { age: "36-45", count: 198, percentage: 27 },
  { age: "46-55", count: 156, percentage: 21 },
  { age: "56+", count: 53, percentage: 8 },
];

const customerRetentionData = [
  { month: t('customer.month.avg'), new: 58, retained: 49, churned: 0 },
  { month: t('customer.month.sen'), new: 64, retained: 55, churned: 1 },
  { month: t("customer.month.okt"), new: 71, retained: 61, churned: 0 },
  { month: t("customer.month.noy"), new: 69, retained: 59, churned: 0 },
  { month: t("customer.month.dek"), new: 76, retained: 65, churned: 1 },
  { month: t("customer.month.yan"), new: 45, retained: 38, churned: 0 },
  { month: t("customer.month.fev"), new: 52, retained: 44, churned: 1 },
  { month: t("customer.month.mar"), new: 48, retained: 41, churned: 0 },
  { month: t("customer.month.apr"), new: 61, retained: 52, churned: 0 },
  { month: t("customer.month.may"), new: 55, retained: 47, churned: 1 },
  { month: t("customer.month.iyun"), new: 67, retained: 58, churned: 0 },
  { month: t("customer.month.iyul"), new: 73, retained: 62, churned: 1 },
];

const recentCustomers = [
  { id: 1, name: "Alisher Karimov", type: "Jismoniy", status: "Faol", date: "2024-01-15", revenue: "2,500,000" },
  { id: 2, name: "Toshkent Biznes LLC", type: "Yuridik", status: "Faol", date: "2024-01-14", revenue: "5,800,000" },
  { id: 3, name: "Dilshod Rahimov", type: "Yakka", status: "Kutilmoqda", date: "2024-01-13", revenue: "850,000" },
  { id: 4, name: "Gulnora Abdullayeva", type: "Jismoniy", status: "Faol", date: "2024-01-12", revenue: "1,200,000" },
  { id: 5, name: "Samarqand Trade", type: "Yuridik", status: "Faol", date: "2024-01-11", revenue: "8,900,000" },
  { id: 6, name: "Aziza Nurmatova", type: "Jismoniy", status: "Faol", date: "2024-01-10", revenue: "3,200,000" },
  { id: 7, name: "Buxoro Logistics", type: "Yuridik", status: "Faol", date: "2024-01-09", revenue: "12,500,000" },
  { id: 8, name: "Jamshid Toshmatov", type: "Yakka", status: "Faol", date: "2024-01-08", revenue: "1,800,000" },
  { id: 9, name: "Farg'ona Textile", type: "Yuridik", status: "Kutilmoqda", date: "2024-01-07", revenue: "22,300,000" },
  { id: 10, name: "Malika Karimova", type: "Jismoniy", status: "Faol", date: "2024-01-06", revenue: "950,000" },
  { id: 11, name: "Andijon Agro", type: "Yuridik", status: "Faol", date: "2024-01-05", revenue: "18,700,000" },
  { id: 12, name: "Rustam Usmonov", type: "Yakka", status: "Faol", date: "2024-01-04", revenue: "2,100,000" },
  { id: 13, name: "Navoiy Mining", type: "Yuridik", status: "Faol", date: "2024-01-03", revenue: "45,200,000" },
  { id: 14, name: "Zarina Islomova", type: "Jismoniy", status: "Kutilmoqda", date: "2024-01-02", revenue: "1,500,000" },
  { id: 15, name: "Qashqadaryo Energy", type: "Yuridik", status: "Faol", date: "2024-01-01", revenue: "33,800,000" },
  { id: 16, name: "Surxondaryo Transport", type: "Yuridik", status: "Faol", date: "2023-12-31", revenue: "28,900,000" },
];

const performanceData = [
  { metric: t('customer.metrics.newCustomers'), value: 156, change: 12.5, trend: "up" },
  { metric: t('customer.metrics.activeCustomers'), value: 1247, change: 8.3, trend: "up" },
  { metric: t('customer.metrics.churnRate'), value: 2.1, change: -0.8, trend: "down" },
  { metric: t('customer.metrics.averageRevenue'), value: 4250000, change: 15.2, trend: "up" },
];

const goodReviews = [
  { name: t("customer.labels.satisfactionLabel2"), text: "Xizmatdan juda mamnunman! 👏", rating: 5 },
  { name: t("customer.labels.satisfactionLabel3"), text: "Tez va qulay xizmat uchun rahmat!", rating: 5 },
];

  // State for retention data filtering
  const [retentionPeriod, setRetentionPeriod] = React.useState('6'); // Default to 6 months
  // State for revenue data filtering
  const [revenuePeriod, setRevenuePeriod] = React.useState('12'); // Default to 12 months

  // Calculate satisfaction summary
  const totalSatisfactionResponses = customerSatisfactionData.reduce((acc, item) => acc + item.count, 0);
  const averageSatisfactionRating = '4.2';

  // Function to get filtered revenue data based on selected period
  const getFilteredRevenueData = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return monthlyData.slice(-periods[revenuePeriod]);
  };

  const filteredRevenueData = getFilteredRevenueData();

  // Function to get beautiful gradients for regions
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

  // Area chart options for monthly registration trend
  const areaChartOptions = {
    chart: { type: 'area', height: 300, toolbar: { show: false }, background: 'transparent' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: monthlyData.map(item => item.month), labels: { style: { colors: '#3730a3' } } },
    yaxis: { labels: { style: { colors: '#3730a3' } } },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.9, stops: [0, 90, 100] } },
    colors: ['#3b82f6', '#ef4444', '#10b981'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const areaChartSeries = React.useMemo(() => [
    { name: t('customer.types.individual'), data: monthlyData.map(item => item.jismoniy) },
    { name: t('customer.types.legal'), data: monthlyData.map(item => item.yuridik) },
    { name: t('customer.types.sole'), data: monthlyData.map(item => item.yakka) }
  ], [t, i18n.language, monthlyData]);

  // Pie chart options for customer type distribution
  const pieChartOptions = {
    chart: { type: 'pie', height: 300 },
    labels: customerTypeData.map(item => item.name),
    colors: customerTypeData.map(item => item.color),
    legend: { position: 'bottom', labels: { colors: '#3730a3' } }
  };

  const pieChartSeries = customerTypeData.map(item => item.value);

  // Line chart options for revenue
  const lineChartOptions = {
    chart: { type: 'line', height: 350, toolbar: { show: false }, background: 'transparent' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: filteredRevenueData.map(item => item.month), labels: { style: { colors: '#3730a3' } } },
    yaxis: { title: { text:` ${t("customer.table.revenue")}`, style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
    colors: ['#8b5cf6'],
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const lineChartSeries = [{ name: 'Oylik daromad', data: filteredRevenueData.map(item => item.revenue) }];

  // Bar chart options for customer satisfaction (vertical, bright colors)
  const satisfactionBarOptions = {
    chart: {
      type: 'bar',
      height: 280,
      toolbar: { show: false },
      background: 'transparent',
      animations: { enabled: true, easing: 'easeinout', speed: 800 }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 8,
        distributed: true,
      }
    },
    dataLabels: {
      enabled: true,
      style: { colors: ['#fff'], fontSize: '16px', fontWeight: 700 },
      formatter: (val) => `${val}%`,
      offsetY: -10,
      dropShadow: { enabled: true, top: 2, left: 2, blur: 3, opacity: 0.3 }
    },
    xaxis: {
      categories: customerSatisfactionData.map(item => `${item.rating} ★`),
      labels: { style: { colors: '#2563eb', fontWeight: 700, fontSize: '1.1rem' } }
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.8,
        gradientToColors: [
          '#f43f5e', // pink
          '#f59e42', // orange
          '#fbbf24', // yellow
          '#38bdf8', // blue
          '#a21caf', // purple
        ],
        inverseColors: false,
        opacityFrom: 0.95,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    colors: [
      '#f43f5e', // pink
      '#f59e42', // orange
      '#fbbf24', // yellow
      '#38bdf8', // blue
      '#a21caf', // purple
    ],
    legend: { show: false },
  };

  const satisfactionBarSeries = [{ name: 'Mamnuniyat', data: customerSatisfactionData.map(item => item.percentage) }];

  // Horizontal bar chart for age distribution
  const ageBarOptions = {
    chart: { type: 'bar', height: 300, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { horizontal: true, barHeight: '70%', distributed: true, borderRadius: 4 } },
    dataLabels: { enabled: true, textAnchor: 'start', style: { colors: ['#fff'] }, formatter: (val, opt) => `${opt.w.globals.labels[opt.dataPointIndex]}: ${val}%`, offsetX: 0 },
    xaxis: { categories: ageDistributionData.map(item => item.age), labels: { style: { colors: '#3730a3' } } },
    yaxis: { labels: { show: false } },
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const ageBarSeries = [{ name: t("customer.labels.ageDistributionLabel"), data: ageDistributionData.map(item => item.percentage) }];

  // Filter retention data based on selected period
  const getFilteredRetentionData = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return customerRetentionData.slice(-periods[retentionPeriod]);
  };

  const filteredRetentionData = getFilteredRetentionData();

  // Updated retention chart options with filtered data
  const retentionBarOptions = {
    chart: { type: 'bar', height: 300, stacked: true, toolbar: { show: false }, background: 'transparent' },
    plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
    dataLabels: { enabled: true, formatter: (val) => val, style: { fontSize: '12px', colors: ["#fff"] } },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: { categories: filteredRetentionData.map(item => item.month), labels: { style: { colors: '#3730a3' } } },
    yaxis: { title: { text: t("customer.labels.customersLabel"), style: { color: '#3730a3' } }, labels: { style: { colors: '#3730a3' } } },
    fill: { opacity: 1, colors: ['#10b981', '#3b82f6', '#ef4444'] },
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const retentionBarSeries = [
    { name: t('customer.metrics.newCustomers'), data: filteredRetentionData.map(item => item.new) },
    { name: t('customer.metrics.activeCustomers'), data: filteredRetentionData.map(item => item.retained) },
    { name: t('customer.metrics.churnRate'), data: filteredRetentionData.map(item => item.churned) }
  ];

  return (
    <div className="customer-dashboard">
      <div className="customer-content">
        {/* Header */}
        <div className="customer-header">
          <h1 className="customer-title">{t('customer.title')}</h1>
          <p className="customer-subtitle">{t('customer.subtitle')}</p>
          <div className="customer-divider"></div>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          {performanceData.map((item, index) => (
            <div key={index} className="kpi-card">
              <div className="kpi-content">
                <div className="kpi-info">
                  <h4>{item.metric}</h4>
                  <div className="kpi-value">
                    {typeof item.value === "number" && item.value > 1000000
                      ? `${(item.value / 1000000).toFixed(1)}M`
                      : item.value.toLocaleString()}
                  </div>
                  <div className="kpi-change">
                    <span className={`trend ${item.trend}`}>{item.change > 0 ? "+" : ""}{item.change}%</span>
                    <span className="trend-label">{t("customer.labels.comparedToLastMonth")}</span>
                  </div>
                </div>
                <div className="kpi-icon">{item.trend === "up" ? "📈" : "📉"}</div>
              </div>
            </div>
          ))}
        </div>


        {/* Charts Section */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">{t("customer.charts.revenueTrend")}</h3>
              <span className="chart-badge">{t("customer.labels.customersLabel")}</span>
            </div>
            <ReactApexChart options={areaChartOptions} series={areaChartSeries} type="area" height={300} />
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">{t("customer.charts.typeDistribution")}</h3>
              <span className="chart-badge">{t("customer.labels.customersLabel2")}</span>
            </div>
            <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" height={300} />
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">{t("customer.charts.monthlyTrend")}</h3>
            <div className="revenue-filters">
              <button className={`filter-btn ${revenuePeriod === '3' ? 'active' : ''}`} onClick={() => setRevenuePeriod('3')}>{t("customer.filters.3months")}</button>
              <button className={`filter-btn ${revenuePeriod === '6' ? 'active' : ''}`} onClick={() => setRevenuePeriod('6')}>{t("customer.filters.6months")}</button>
              <button className={`filter-btn ${revenuePeriod === '12' ? 'active' : ''}`} onClick={() => setRevenuePeriod('12')}>{t("customer.filters.12months")}</button>
            </div>
            <span className="chart-badge">{t("customer.filters.million")}</span>
          </div>
          <ReactApexChart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
        </div>
        {/* Customer Type Boxes */}
        <div className="customer-type-boxes-grid">
          {customerTypeData.map((type, idx) => {
            const gradients = [
              'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)',
              'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)', // blue
              'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)', // red
              'linear-gradient(120deg, #74ebd5 20%, #9face6 100%)', // green
            ];
            const icons = [
              <FaUsers size={38} />,     
              <FaUser size={38} />,  // user
              <FaBuilding size={38} />, // building
              <FaBriefcase size={38} /> // briefcase
            ];
            return (
              <div
                key={type.name}
                className="customer-type-card"
                style={{
                  background: gradients[idx],
                  boxShadow: '0 6px 24px 0 rgba(80, 80, 180, 0.10)',
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
                  e.currentTarget.style.boxShadow = '0 6px 24px 0 rgba(80, 80, 180, 0.10)';
                }}
              >
                <div style={{ marginBottom: 18, animation: 'iconPop 0.7s' }}>{icons[idx]}</div>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#fff', textShadow: '0 2px 8px rgba(80,80,180,0.13)' }}>{type.value.toLocaleString()}</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: '#fff', opacity: 0.92, marginTop: 8, textAlign: 'center' }}>{type.name}</div>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#080808', opacity: 0.92, marginTop: 8, textAlign: 'center' }}>{type.UzRailway}</div>
              </div>
            );
          })}
        </div>

        <div className="charts-grid">
          <div className="chart-card satisfaction-widget">
            <div className="satisfaction-header">
              <h3 className="chart-title">{t("customer.charts.satisfaction")}</h3>
              <div className="satisfaction-summary">
                <div className="summary-avg-rating">
                  <span className="rating-value animated">{averageSatisfactionRating}</span>
                  <FaSmileBeam className="animated-icon" />
                  <div className="rating-stars" style={{"--rating": averageSatisfactionRating}}></div>
                </div>
                <div className="summary-total-responses">
                  <span className="total-value">{totalSatisfactionResponses.toLocaleString()}</span>
                  <span className="total-label">{t("customer.labels.satisfactionLabel")}</span>
                </div>
              </div>
            </div>
            <div className="satisfaction-chart-container">
          <ReactApexChart 
                options={satisfactionBarOptions}
                series={satisfactionBarSeries}
                type="bar"
                height={280}
              />
            </div>
            <div className="good-reviews-list">
              {goodReviews.slice(0, 2).map((review, idx) => (
                <div className="good-review" key={idx}>
                  <FaStar className="good-review-star" />
                  <span className="good-review-name">{review.name}:</span>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">{t("customer.charts.ageDistribution")}</h3>
            </div>
            <ReactApexChart options={ageBarOptions} series={ageBarSeries} type="bar" height={300} />
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">{t("customer.charts.retention")}</h3>
            <div className="retention-filters">
              <button className={`filter-btn ${retentionPeriod === '3' ? 'active' : ''}`} onClick={() => setRetentionPeriod('3')}>{t("customer.filters.3months")}</button>
              <button className={`filter-btn ${retentionPeriod === '6' ? 'active' : ''}`} onClick={() => setRetentionPeriod('6')}>{t("customer.filters.6months")}</button>
              <button className={`filter-btn ${retentionPeriod === '12' ? 'active' : ''}`} onClick={() => setRetentionPeriod('12')}>{t("customer.filters.1years")}</button>
            </div>
          </div>
          <ReactApexChart options={retentionBarOptions} series={retentionBarSeries} type="bar" height={300} />
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">{t("customer.charts.regionDistribution")}</h3>
              <span className="chart-badge">{t("customer.labels.regionDistributionLabel")}</span>
            </div>
            <div className="region-distribution">
              <div className="region-stats">
                <div className="total-regions">
                  <div className="total-icon">🌍</div>
                  <div className="total-number">{regionData.reduce((sum, region) => sum + region.count, 0).toLocaleString()}</div>
                  <div className="total-label">{t("customer.labels.regionDistributionLabel2")}</div>
                </div>
                <div className="region-count-info">
                  <div className="region-count-item">
                    <div className="count-icon">📍</div>
                    <span className="count-number">{regionData.length}</span>
                    <span className="count-label">{t("customer.labels.regionDistributionLabel3")}</span>
                  </div>
                  <div className="region-count-item">
                    <div className="count-icon">📈</div>
                    <span className="count-number">{Math.round(regionData.reduce((sum, region) => sum + region.count, 0) / regionData.length).toLocaleString()}</span>
                    <span className="count-label">{t("customer.labels.regionDistributionLabel4")}</span>
                  </div>
                </div>
              </div>
              
              <div className="region-list">
                {regionData.map((item, index) => (
                  <div key={index} className="region-item">
                    <div className="region-header">
                      <div className="region-info">
                        <span className="region-name">{t(`customer.regions.${item.region}`)}</span>
                        <span className="region-count">{item.count.toLocaleString()} {t("customer.labels.customersLabel")}</span>
                      </div>
                    </div>
                      <div className="region-percentage-display">
                        <div className="percentage-circle">
                          <svg className="percentage-svg" viewBox="0 0 36 36">
                          <path className="percentage-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          <path className="percentage-fill" strokeDasharray={`${item.percentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                          </svg>
                          <div className="percentage-text">{item.percentage}%</div>
                        </div>
                      </div>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${item.percentage}%`, background: getRegionGradient(index) }}>
                          <div className="progress-shine"></div>
                        </div>
                      </div>
                      <div className="progress-stats">
                        <span className="percentage-text">{item.percentage}%</span>
                        <span className="count-text">{item.count.toLocaleString()}  {t("customer.labels.customersLabel")}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="region-summary">
                <div className="summary-item">
                  <div className="summary-icon">🏆</div>
                  <div className="summary-content">
                    <div className="summary-title">Eng ko'p mijozlar</div>
                    <div className="summary-value">{t(`customer.regions.${regionData[0].region}`)}</div>
                    <div className="summary-subtitle">{regionData[0].count.toLocaleString()} mijoz</div>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-icon">📊</div>
                  <div className="summary-content">
                    <div className="summary-title">O'rtacha</div>
                    <div className="summary-value">{Math.round(regionData.reduce((sum, region) => sum + region.count, 0) / regionData.length).toLocaleString()}</div>
                    <div className="summary-subtitle">mijoz/hudud</div>
                  </div>
                </div>
                <div className="summary-item">
                  <div className="summary-icon">🚀</div>
                  <div className="summary-content">
                    <div className="summary-title">O'sish</div>
                    <div className="summary-value">+{Math.round((regionData[0].count / regionData[regionData.length - 1].count - 1) * 100)}%</div>
                    <div className="summary-subtitle">eng yuqori vs eng past</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">So'nggi mijozlar</h3>
            </div>
            <div className="customers-table">
              <table>
                <thead>
                  <tr>
                    <th>Mijoz</th>
                    <th>Turi</th>
                    <th>Holati</th>
                    <th>Daromad</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td>
                        <div className="customer-info">
                          <div className="customer-name">{customer.name}</div>
                          <div className="customer-date">{customer.date}</div>
                        </div>
                      </td>
                      <td>
                        <span className={`badge badge-${customer.type === 'Jismoniy' ? 'blue' : customer.type === 'Yuridik' ? 'red' : 'green'}`}>{customer.type}</span>
                      </td>
                      <td>
                        <span className={`badge badge-${customer.status === 'Faol' ? 'success' : 'warning'}`}>{customer.status}</span>
                      </td>
                      <td className="customer-revenue">{customer.revenue} so'm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard; 