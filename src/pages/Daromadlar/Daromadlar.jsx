import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Daromadlar.css';

export default function RevenueDashboard() {
  const revenueData = [
    { name: "Toshkent", value: 1380, color: "#00D4FF", region: "Markaziy" },
    { name: "Qo'ng'irot", value: 1200, color: "#FF6B35", region: "Shimoliy" },
    { name: "Samarqand", value: 1100, color: "#4ECDC4", region: "Markaziy" },
    { name: "Jizzax", value: 690, color: "#FF8A95", region: "Markaziy" },
    { name: "Surhandaryo", value: 580, color: "#45B7D1", region: "Janubiy" },
    { name: "Qarshi", value: 540, color: "#96CEB4", region: "Janubiy" },
    { name: "Andijon", value: 470, color: "#FFEAA7", region: "Sharqiy" },
    { name: "Xorazm", value: 448, color: "#DDA0DD", region: "Shimoliy" },
    { name: "Qo'qon", value: 430, color: "#98D8C8", region: "Sharqiy" },
    { name: "Buxoro", value: 400, color: "#F7DC6F", region: "Markaziy" },
  ]

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.value, 0)
  const averageRevenue = Math.round(totalRevenue / revenueData.length)
  const topPerformer = revenueData[0]
  const growthRate = 12.5

  const regionData = revenueData.reduce(
    (acc, item) => {
      const existing = acc.find((r) => r.region === item.region)
      if (existing) {
        existing.value += item.value
        existing.count += 1
      } else {
        acc.push({ region: item.region, value: item.value, count: 1 })
      }
      return acc
    },
    []
  )

  const monthlyTrend = [
    { month: "Yan", value: 7200 },
    { month: "Fev", value: 7800 },
    { month: "Mar", value: 8100 },
    { month: "Apr", value: 7900 },
    { month: "May", value: 8400 },
    { month: "Iyun", value: 8237 },
  ]

  // Bar chart options
  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '55%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: revenueData.map(item => item.name),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Daromad (TexPD)',
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
    fill: {
      opacity: 1,
      colors: revenueData.map(item => item.color)
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " TexPD"
        }
      }
    },
    grid: {
      borderColor: 'rgba(112, 156, 245, 0.1)',
      strokeDashArray: 3
    }
  };

  const barChartSeries = [{
    name: 'Daromad',
    data: revenueData.map(item => item.value)
  }];

  // Pie chart options
  const pieChartOptions = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: regionData.map(item => item.region),
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'],
    legend: {
      position: 'bottom',
      labels: {
        colors: '#3730a3'
      }
    }
  };

  const pieChartSeries = regionData.map(item => item.value);

  // Area chart options
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
      categories: monthlyTrend.map(item => item.month),
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
    grid: {
      borderColor: 'rgba(112, 156, 245, 0.1)',
      strokeDashArray: 3
    }
  };

  const areaChartSeries = [{
    name: 'Oylik Daromad',
    data: monthlyTrend.map(item => item.value)
  }];

  return (
    <div className="daromadlar-container">
      <div className="daromadlar-content">
        {/* Header */}
        <div className="daromadlar-header">
          <h1 className="daromadlar-title">
            Daromadlar Dashboard
          </h1>
          <p className="daromadlar-subtitle">Hududlar bo'yicha daromadlar tahlili</p>
          <div className="daromadlar-divider"></div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Jami Daromad</h4>
                <div className="stat-value">{totalRevenue.toLocaleString()}</div>
                <div className="stat-unit">TexPD</div>
              </div>
              <div className="stat-icon">💰</div>
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>O'rtacha Daromad</h4>
                <div className="stat-value">{averageRevenue.toLocaleString()}</div>
                <div className="stat-unit">TexPD</div>
              </div>
              <div className="stat-icon">📊</div>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Eng Yuqori</h4>
                <div className="stat-value">{topPerformer.name}</div>
                <div className="stat-unit">{topPerformer.value} TexPD</div>
              </div>
              <div className="stat-icon">🏆</div>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>O'sish Sur'ati</h4>
                <div className="stat-value">+{growthRate}%</div>
                <div className="stat-unit">Oylik</div>
              </div>
              <div className="stat-icon">📈</div>
            </div>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="charts-grid">
          {/* Main Bar Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududlar bo'yicha Daromadlar</h3>
              <span className="chart-badge">TexPD</span>
            </div>
            <ReactApexChart 
              options={barChartOptions} 
              series={barChartSeries} 
              type="bar" 
              height={350} 
            />
          </div>

          {/* Pie Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududlar bo'yicha Taqsimot</h3>
            </div>
            <ReactApexChart 
              options={pieChartOptions} 
              series={pieChartSeries} 
              type="pie" 
              height={350} 
            />
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="charts-grid">
          {/* Monthly Trend */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Oylik Trend</h3>
            </div>
            <ReactApexChart 
              options={areaChartOptions} 
              series={areaChartSeries} 
              type="area" 
              height={300} 
            />
          </div>
          
          {/* Top 5 Regions Card */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Top 5 Hududlar</h3>
            </div>
            <div className="top-regions-list">
              {revenueData.slice(0, 5).map((item, index) => (
                <div key={index} className="region-item">
                  <div className="region-rank">{index + 1}</div>
                  <div className="region-info">
                    <div className="region-name">{item.name}</div>
                    <div className="region-value">{item.value.toLocaleString()} TexPD</div>
                  </div>
                  <div className="region-color-indicator" style={{ backgroundColor: item.color }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Batafsil Ma'lumotlar</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Hudud</th>
                  <th>Daromad (TexPD)</th>
                  <th>Joylashuv</th>
                  <th>Ulush (%)</th>
                </tr>
              </thead>
              <tbody>
                {revenueData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="region-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.value.toLocaleString()}</td>
                    <td>{item.region}</td>
                    <td>
                      <span className="percentage-badge">
                        {((item.value / totalRevenue) * 100).toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
