import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Customer.css';

// Sample data
const monthlyData = [
  { month: "Yan", yuridik: 45, jismoniy: 120, yakka: 35, revenue: 85000 },
  { month: "Fev", yuridik: 52, jismoniy: 135, yakka: 42, revenue: 92000 },
  { month: "Mar", yuridik: 48, jismoniy: 128, yakka: 38, revenue: 88000 },
  { month: "Apr", yuridik: 61, jismoniy: 145, yakka: 45, revenue: 105000 },
  { month: "May", yuridik: 55, jismoniy: 142, yakka: 48, revenue: 98000 },
  { month: "Iyun", yuridik: 67, jismoniy: 158, yakka: 52, revenue: 115000 },
];

const customerTypeData = [
  { name: "Jismoniy shaxslar", value: 65, color: "#3b82f6" },
  { name: "Yuridik shaxslar", value: 25, color: "#ef4444" },
  { name: "Yakka tartibdagilar", value: 10, color: "#10b981" },
];

const regionData = [
  { region: "Toshkent", count: 245, percentage: 35 },
  { region: "Samarqand", count: 156, percentage: 22 },
  { region: "Buxoro", count: 98, percentage: 14 },
  { region: "Andijon", count: 87, percentage: 12 },
  { region: "Farg'ona", count: 76, percentage: 11 },
  { region: "Boshqalar", count: 42, percentage: 6 },
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
  { metric: "Yangi mijozlar", value: 156, change: 12.5, trend: "up" },
  { metric: "Faol mijozlar", value: 1247, change: 8.3, trend: "up" },
  { metric: "Churn rate", value: 2.1, change: -0.8, trend: "down" },
  { metric: "O'rtacha daromad", value: 4250000, change: 15.2, trend: "up" },
];

const CustomerDashboard = () => {
  // Function to get different colors for regions
  const getRegionColor = (index) => {
    const colors = [
      '#3b82f6', // Blue
      '#ef4444', // Red
      '#10b981', // Green
      '#f59e0b', // Yellow
      '#8b5cf6', // Purple
      '#06b6d4', // Cyan
      '#84cc16', // Lime
      '#f97316', // Orange
    ];
    return colors[index % colors.length];
  };

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
    chart: {
      type: 'area',
      height: 300,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: monthlyData.map(item => item.month),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    colors: ['#3b82f6', '#ef4444', '#10b981'],
    legend: {
      position: 'top',
      labels: {
        colors: '#3730a3'
      }
    },
    grid: {
      borderColor: 'rgba(112, 156, 245, 0.1)',
      strokeDashArray: 3
    }
  };

  const areaChartSeries = [
    {
      name: 'Jismoniy shaxslar',
      data: monthlyData.map(item => item.jismoniy)
    },
    {
      name: 'Yuridik shaxslar',
      data: monthlyData.map(item => item.yuridik)
    },
    {
      name: 'Yakka tartibdagilar',
      data: monthlyData.map(item => item.yakka)
    }
  ];

  // Pie chart options for customer type distribution
  const pieChartOptions = {
    chart: {
      type: 'pie',
      height: 300
    },
    labels: customerTypeData.map(item => item.name),
    colors: customerTypeData.map(item => item.color),
    legend: {
      position: 'bottom',
      labels: {
        colors: '#3730a3'
      }
    }
  };

  const pieChartSeries = customerTypeData.map(item => item.value);

  // Line chart options for revenue
  const lineChartOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      categories: monthlyData.map(item => item.month),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Daromad (so\'m)',
        style: {
          color: '#3730a3'
        }
      },
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    colors: ['#8b5cf6'],
    grid: {
      borderColor: 'rgba(112, 156, 245, 0.1)',
      strokeDashArray: 3
    }
  };

  const lineChartSeries = [{
    name: 'Oylik daromad',
    data: monthlyData.map(item => item.revenue)
  }];

  return (
    <div className="customer-dashboard">
      <div className="customer-content">
        {/* Header */}
        <div className="customer-header">
          <h1 className="customer-title">Mijozlar Dashboard</h1>
          <p className="customer-subtitle">Mijozlar bo'yicha to'liq analitika va hisobotlar</p>
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
                    <span className={`trend ${item.trend}`}>
                      {item.change > 0 ? "+" : ""}{item.change}%
                    </span>
                    <span className="trend-label">o'tgan oyga nisbatan</span>
                  </div>
                </div>
                <div className="kpi-icon">
                  {item.trend === "up" ? "📈" : "📉"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-grid">
          {/* Monthly Registration Trend */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik ro'yxatdan o'tish dinamikasi</h3>
              <span className="chart-badge">Mijozlar</span>
            </div>
            <ReactApexChart 
              options={areaChartOptions} 
              series={areaChartSeries} 
              type="area" 
              height={300} 
            />
          </div>

          {/* Customer Type Distribution */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Mijozlar taqsimoti</h3>
            </div>
            <ReactApexChart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={300} 
            />
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Oylik daromad dinamikasi</h3>
            <span className="chart-badge">So'm</span>
          </div>
          <ReactApexChart 
            options={lineChartOptions} 
            series={lineChartSeries} 
            type="line" 
            height={350} 
          />
        </div>

        {/* Regional Distribution and Recent Customers */}
        <div className="charts-grid">
          {/* Regional Distribution */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududiy taqsimot</h3>
              <span className="chart-badge">Mijozlar</span>
            </div>
            <div className="region-distribution">
              <div className="region-stats">
                <div className="total-regions">
                  <div className="total-icon">🌍</div>
                  <div className="total-number">{regionData.reduce((sum, region) => sum + region.count, 0).toLocaleString()}</div>
                  <div className="total-label">Jami mijozlar</div>
                </div>
                <div className="region-count-info">
                  <div className="region-count-item">
                    <div className="count-icon">📍</div>
                    <span className="count-number">{regionData.length}</span>
                    <span className="count-label">Hudud</span>
                  </div>
                  <div className="region-count-item">
                    <div className="count-icon">📈</div>
                    <span className="count-number">{Math.round(regionData.reduce((sum, region) => sum + region.count, 0) / regionData.length).toLocaleString()}</span>
                    <span className="count-label">O'rtacha</span>
                  </div>
                </div>
              </div>
              
              <div className="region-list">
                {regionData.map((region, index) => (
                  <div key={index} className="region-item">
                    <div className="region-header">
                      <div className="region-info">
                        <span className="region-name">{region.region}</span>
                        <span className="region-count">{region.count.toLocaleString()} mijoz</span>
                      </div>
                    </div>
                      <div className="region-percentage-display">
                        <div className="percentage-circle">
                          <svg className="percentage-svg" viewBox="0 0 36 36">
                            <path
                              className="percentage-bg"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="percentage-fill"
                              strokeDasharray={`${region.percentage}, 100`}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="percentage-text">{region.percentage}%</div>
                        </div>
                      </div>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${region.percentage}%`,
                            background: getRegionGradient(index)
                          }}
                        >
                          <div className="progress-shine"></div>
                        </div>
                      </div>
                      <div className="progress-stats">
                        <span className="percentage-text">{region.percentage}%</span>
                        <span className="count-text">{region.count.toLocaleString()} mijoz</span>
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
                    <div className="summary-value">{regionData[0].region}</div>
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

          {/* Recent Customers Table */}
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
                        <span className={`badge badge-${customer.type === 'Jismoniy' ? 'blue' : customer.type === 'Yuridik' ? 'red' : 'green'}`}>
                          {customer.type}
                        </span>
                      </td>
                      <td>
                        <span className={`badge badge-${customer.status === 'Faol' ? 'success' : 'warning'}`}>
                          {customer.status}
                        </span>
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