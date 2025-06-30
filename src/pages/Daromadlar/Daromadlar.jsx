import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Daromadlar.css';

const allRegions = [
  "Toshkent", "Qo'ng'irot", "Samarqand", "Jizzax", "Surhandaryo",
  "Qarshi", "Andijon", "Xorazm", "Qo'qon", "Buxoro"
];
const allMonths = [
  'Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'
];

export default function RevenueDashboard() {
  const revenueData = [
    { name: "Toshkent", value: 1380, color: "#00D4FF", region: "Markaziy", growth: 15.2 },
    { name: "Qo'ng'irot", value: 1200, color: "#FF6B35", region: "Shimoliy", growth: 8.7 },
    { name: "Samarqand", value: 1100, color: "#4ECDC4", region: "Markaziy", growth: 12.1 },
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

  // Scatter plot data for efficiency vs revenue
  const scatterData = [
    { x: 1380, y: 92, name: 'Toshkent', color: '#00D4FF' },
    { x: 1200, y: 88, name: 'Qo\'ng\'irot', color: '#FF6B35' },
    { x: 1100, y: 91, name: 'Samarqand', color: '#4ECDC4' },
    { x: 690, y: 86, name: 'Jizzax', color: '#FF8A95' },
    { x: 580, y: 89, name: 'Surhandaryo', color: '#45B7D1' },
    { x: 540, y: 90, name: 'Qarshi', color: '#96CEB4' },
    { x: 470, y: 85, name: 'Andijon', color: '#FFEAA7' },
    { x: 448, y: 89, name: 'Xorazm', color: '#DDA0DD' },
    { x: 430, y: 89, name: 'Qo\'qon', color: '#98D8C8' },
    { x: 400, y: 88, name: 'Buxoro', color: '#F7DC6F' },
  ];

  const scatterOptions = {
    chart: {
      type: 'scatter',
      height: 350,
      toolbar: { show: false },
      background: 'transparent',
    },
    xaxis: {
      title: { text: 'Daromad (TexPD)', style: { color: '#3730a3' } },
      labels: { style: { colors: '#3730a3' } },
    },
    yaxis: {
      title: { text: 'Samaradorlik (%)', style: { color: '#3730a3' } },
      labels: { style: { colors: '#3730a3' } },
    },
    colors: scatterData.map(item => item.color),
    tooltip: {
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const data = scatterData[dataPointIndex];
        return `
          <div class="custom-tooltip">
            <div><strong>${data.name}</strong></div>
            <div>Daromad: ${data.x} TexPD</div>
            <div>Samaradorlik: ${data.y}%</div>
          </div>
        `;
      }
    },
    grid: {
      borderColor: 'rgba(112, 156, 245, 0.1)',
      strokeDashArray: 3
    }
  };
  const scatterSeries = [{
    name: 'Hududlar',
    data: scatterData.map(item => ({ x: item.x, y: item.y }))
  }];

  // Heatmap data and options
  const [selectedHeatmapPeriod, setSelectedHeatmapPeriod] = useState('3mo'); // '3mo', '6mo', '1y'
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [compareRegions, setCompareRegions] = useState(['Toshkent', 'Samarqand']);

  // Maqsadlar (target) har bir hudud uchun
  const targets = {
    "Toshkent": 1500, "Qo'ng'irot": 1300, "Samarqand": 1200, "Jizzax": 800,
    "Surhandaryo": 650, "Qarshi": 600, "Andijon": 550, "Xorazm": 500, "Qo'qon": 480, "Buxoro": 450
  };

  // Filtered data
  const filteredData = revenueData.filter(item =>
    (selectedRegion === 'all' || item.name === selectedRegion)
  );

  // Progress bar component
  const ProgressBar = ({ value, target, color }) => (
    <div className="progress-bar-outer">
      <div
        className="progress-bar-inner"
        style={{
          width: `${Math.min((value / target) * 100, 100)}%`,
          background: color
        }}
      />
      <span className="progress-label">{value} / {target} TexPD</span>
    </div>
  );

  // All months for 1 year (August to July)
  const allMonths = [
    'Avg', 'Sen', 'Okt', 'Noy', 'Dek', 'Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul'
  ];
  // For demo, fill with sample data for 12 months
  const fullHeatmapData = [
    // Toshkent
    ...allMonths.map((m, i) => ({ x: m, y: 'Toshkent', value: 200 + 10 * ((i + 3) % 12) })),
    // Qo'ng'irot
    ...allMonths.map((m, i) => ({ x: m, y: "Qo'ng'irot", value: 180 + 8 * ((i + 5) % 12) })),
    // Samarqand
    ...allMonths.map((m, i) => ({ x: m, y: 'Samarqand', value: 160 + 7 * ((i + 7) % 12) })),
  ];

  // Determine which months to show
  let monthsToShow = [];
  if (selectedHeatmapPeriod === '3mo') monthsToShow = allMonths.slice(-3);
  else if (selectedHeatmapPeriod === '6mo') monthsToShow = allMonths.slice(-6);
  else monthsToShow = allMonths;

  // Filter data for selected period
  const filteredHeatmapData = fullHeatmapData.filter(item => monthsToShow.includes(item.x));
  const heatmapSeries = [
    {
      name: 'Toshkent',
      data: monthsToShow.map(m => {
        const found = filteredHeatmapData.find(item => item.y === 'Toshkent' && item.x === m);
        return { x: m, y: found ? found.value : 0 };
      })
    },
    {
      name: "Qo'ng'irot",
      data: monthsToShow.map(m => {
        const found = filteredHeatmapData.find(item => item.y === "Qo'ng'irot" && item.x === m);
        return { x: m, y: found ? found.value : 0 };
      })
    },
    {
      name: 'Samarqand',
      data: monthsToShow.map(m => {
        const found = filteredHeatmapData.find(item => item.y === 'Samarqand' && item.x === m);
        return { x: m, y: found ? found.value : 0 };
      })
    }
  ];

  const heatmapOptions = {
    chart: {
      type: 'heatmap',
      height: 350,
      toolbar: { show: false },
      background: 'transparent',
    },
    dataLabels: {
      enabled: true,
      style: { colors: ['#fff'] },
    },
    colors: ['#6366f1'],
    xaxis: {
      type: 'category',
      labels: { style: { colors: '#3730a3' } },
    },
    yaxis: {
      labels: { style: { colors: '#3730a3' } },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        enableShades: true,
        colorScale: {
          ranges: [
            { from: 0, to: 200, color: '#e0e7ff', name: 'Past' },
            { from: 201, to: 250, color: '#6366f1', name: 'O\'rta' },
            { from: 251, to: 300, color: '#3730a3', name: 'Yuqori' },
          ]
        }
      }
    }
  };

  // Comparison select handlers to prevent duplicate selection
  const handleCompareRegionChange = (idx, value) => {
    // If the other select already has this value, swap them
    if (compareRegions[1 - idx] === value) {
      setCompareRegions([compareRegions[1], compareRegions[0]]);
    } else {
      const newRegions = [...compareRegions];
      newRegions[idx] = value;
      setCompareRegions(newRegions);
    }
  };

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
            {/* Filter/Search Bar */}
            <div className="filter-bar">
          <select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
            <option value="all">Barcha hududlar</option>
            {allRegions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
            <option value="all">Barcha oylar</option>
            {allMonths.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="Hudud nomi bo'yicha qidiruv..."
            onChange={e => setSelectedRegion(
              allRegions.find(r => r.toLowerCase().includes(e.target.value.toLowerCase())) || 'all'
            )}
          />
        </div>
        {/* Oylik Trend va Progress Bar */}
        <div className="trend-progress-section">
          <h3>Oylik Daromadlar va Maqsadlar</h3>
          <ReactApexChart
            options={{
              chart: { type: 'line', toolbar: { show: false } },
              xaxis: { categories: monthlyTrend.map(m => m.month) },
              colors: ['#6366f1', '#10b981'],
              stroke: { width: 3 }
            }}
            series={[
              { name: 'Daromad', data: monthlyTrend.map(m => m.value) },
              { name: 'Maqsad', data: monthlyTrend.map(m => m.value * 1.05) }
            ]}
            type="line"
            height={250}
          />
          <div className="progress-bars-list">
            {filteredData.map(item => (
              <div key={item.name} className="progress-bar-row">
                <span>{item.name}</span>
                <ProgressBar value={item.value} target={targets[item.name]} color={item.color} />
              </div>
            ))}
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
              <h3 className="chart-title">Oylik Daromadlar</h3>
              <span className="chart-badge">Dollar</span>
            </div>
            <ReactApexChart 
              options={areaChartOptions} 
              series={areaChartSeries} 
              type="area" 
              height={300} 
            />
          </div>
          {/* Scatter Plot */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Samaradorlik vs Daromad</h3>
              <span className="chart-badge">Foiz</span>
            </div>
            <ReactApexChart 
              options={scatterOptions} 
              series={scatterSeries} 
              type="scatter" 
              height={350} 
            />
          </div>
        </div>
        {/* Dinamik Taqqoslash */}
        <div className="compare-section">
          <h3>Hududlarni Taqqoslash</h3>
          <div className="compare-selectors">
            <select value={compareRegions[0]} onChange={e => handleCompareRegionChange(0, e.target.value)}>
              {allRegions.filter(r => r !== compareRegions[1]).map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <span>vs</span>
            <select value={compareRegions[1]} onChange={e => handleCompareRegionChange(1, e.target.value)}>
              {allRegions.filter(r => r !== compareRegions[0]).map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="compare-cards">
            {compareRegions.map(region => {
              const d = revenueData.find(r => r.name === region);
              if (!d) return null;
              return (
                <div key={region} className="compare-card">
                  <h4>{region}</h4>
                  <div>Daromad: <b>{d.value}</b> TexPD</div>
                  <div>Maqsad: <b>{targets[region]}</b> TexPD</div>
                  <div>O'sish: <b>{d.growth || 0}%</b></div>
                  <ProgressBar value={d.value} target={targets[region]} color={d.color} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Analytics Grid: Eng Yaxshi Hududlar, O'sish Sur'ati, Samaradorlik */}
        <div className="analytics-grid">
          {/* Eng Yaxshi Hududlar */}
          <div className="analytics-card">
            <div className="analytics-header">
              <h4>Eng Yaxshi Hududlar</h4>
              <span className="analytics-badge">TOP 3</span>
            </div>
            <div className="analytics-content">
              {revenueData
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={item.name} className="analytics-item">
                    <div className="analytics-rank">#{idx + 1}</div>
                    <div className="analytics-info">
                      <div className="analytics-name">{item.name}</div>
                      <div className="analytics-value">{item.value.toLocaleString()} TexPD</div>
                    </div>
                    <div className="analytics-growth positive">+{item.growth}%</div>
                  </div>
                ))}
            </div>
          </div>
          {/* O'sish Sur'ati */}
          <div className="analytics-card">
            <div className="analytics-header">
              <h4>O'sish Sur'ati</h4>
              <span className="analytics-badge">ENG YUQORI</span>
            </div>
            <div className="analytics-content">
              {[...revenueData]
                .filter(i => i.growth > 0)
                .sort((a, b) => b.growth - a.growth)
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={item.name} className="analytics-item">
                    <div className="analytics-rank">#{idx + 1}</div>
                    <div className="analytics-info">
                      <div className="analytics-name">{item.name}</div>
                      <div className="analytics-value">{item.growth}%</div>
                    </div>
                    <div className="analytics-growth positive">+{item.growth}%</div>
                  </div>
                ))}
            </div>
          </div>
          {/* Samaradorlik */}
          <div className="analytics-card">
            <div className="analytics-header">
              <h4>Samaradorlik</h4>
              <span className="analytics-badge">ENG YUQORI</span>
            </div>
            <div className="analytics-content">
              {[...revenueData]
                .sort((a, b) => b.efficiency - a.efficiency)
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={item.name} className="analytics-item">
                    <div className="analytics-rank">#{idx + 1}</div>
                    <div className="analytics-info">
                      <div className="analytics-name">{item.name}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div className="analytics-efficiency" style={{ backgroundColor: item.color }}></div>
                      <span className="analytics-value">{item.efficiency}%</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="chart-card full-width">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Hududlar bo'yicha Oylik Tushumlar</h3>
            <span className="chart-badge">Soni</span>
          </div>
          {/* Period buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <button className={selectedHeatmapPeriod === '3mo' ? 'period-btn active' : 'period-btn'} onClick={() => setSelectedHeatmapPeriod('3mo')}>3 oylik</button>
            <button className={selectedHeatmapPeriod === '6mo' ? 'period-btn active' : 'period-btn'} onClick={() => setSelectedHeatmapPeriod('6mo')}>6 oylik</button>
            <button className={selectedHeatmapPeriod === '1y' ? 'period-btn active' : 'period-btn'} onClick={() => setSelectedHeatmapPeriod('1y')}>1 yillik</button>
          </div>
          <ReactApexChart 
            options={{ ...heatmapOptions, xaxis: { ...heatmapOptions.xaxis, categories: monthsToShow } }} 
            series={heatmapSeries} 
            type="heatmap" 
            height={350} 
          />
        </div>
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
