import React from "react";
import ReactApexChart from 'react-apexcharts';
import './MahalliyTashuvlar.css';
import { PieChart, BarChart } from '@mui/x-charts';
import { FaTrain } from 'react-icons/fa';

export default function LocalTransportDashboard() {
  // State for trend period filtering
  const [trendPeriod, setTrendPeriod] = React.useState('6'); // Default to 6 months

  const transportData = [
    { name: "Toshkent TexPD", value: 1250, color: "#00D4FF", region: "Markaziy", trips: 890, vehicles: 45 },
    { name: "Samarqand TexPD", value: 980, color: "#FF6B35", region: "Markaziy", trips: 720, vehicles: 32 },
    { name: "Buxoro TexPD", value: 850, color: "#4ECDC4", region: "Markaziy", trips: 650, vehicles: 28 },
    { name: "Andijon TexPD", value: 720, color: "#FF8A95", region: "Sharqiy", trips: 580, vehicles: 25 },
    { name: "Qo'qon TexPD", value: 680, color: "#45B7D1", region: "Sharqiy", trips: 520, vehicles: 22 },
    { name: "Surxondaryo TexPD", value: 480, color: "#DDA0DD", region: "Janubiy", trips: 380, vehicles: 16 },
    { name: "Qo'ng'irot TexPD", value: 420, color: "#98D8C8", region: "Markaziy", trips: 350, vehicles: 15 },
    { name: "Xorazm TexPD", value: 380, color: "#F7DC6F", region: "Shimoliy", trips: 320, vehicles: 14 },
  ];

  // New data for cargo loading and unloading
  const cargoOperationsData = [
    { 
      name: "Toshkent TexPD", 
      loading: 850, 
      unloading: 720, 
      loadingEfficiency: 92, 
      unloadingEfficiency: 88,
      loadingTime: 2.3,
      unloadingTime: 1.8,
      color: "#00D4FF" 
    },
    { 
      name: "Samarqand TexPD", 
      loading: 680, 
      unloading: 590, 
      loadingEfficiency: 89, 
      unloadingEfficiency: 85,
      loadingTime: 2.5,
      unloadingTime: 2.1,
      color: "#FF6B35" 
    },
    { 
      name: "Buxoro TexPD", 
      loading: 620, 
      unloading: 540, 
      loadingEfficiency: 87, 
      unloadingEfficiency: 82,
      loadingTime: 2.7,
      unloadingTime: 2.3,
      color: "#4ECDC4" 
    },
    { 
      name: "Andijon TexPD", 
      loading: 520, 
      unloading: 480, 
      loadingEfficiency: 85, 
      unloadingEfficiency: 80,
      loadingTime: 2.8,
      unloadingTime: 2.5,
      color: "#FF8A95" 
    },
    { 
      name: "Qo'qon TexPD", 
      loading: 480, 
      unloading: 420, 
      loadingEfficiency: 83, 
      unloadingEfficiency: 78,
      loadingTime: 3.0,
      unloadingTime: 2.7,
      color: "#45B7D1" 
    },
    { 
      name: "Surxondaryo TexPD", 
      loading: 340, 
      unloading: 300, 
      loadingEfficiency: 77, 
      unloadingEfficiency: 72,
      loadingTime: 3.6,
      unloadingTime: 3.3,
      color: "#DDA0DD" 
    },
    { 
      name: "Qo'ng'irot TexPD", 
      loading: 300, 
      unloading: 280, 
      loadingEfficiency: 75, 
      unloadingEfficiency: 70,
      loadingTime: 3.8,
      unloadingTime: 3.5,
      color: "#98D8C8" 
    },
    { 
      name: "Xorazm TexPD", 
      loading: 280, 
      unloading: 260, 
      loadingEfficiency: 73, 
      unloadingEfficiency: 68,
      loadingTime: 4.0,
      unloadingTime: 3.7,
      color: "#F7DC6F" 
    },
  ];

  const totalTrips = transportData.reduce((sum, item) => sum + item.trips, 0);
  const totalVehicles = transportData.reduce((sum, item) => sum + item.vehicles, 0);
  const averageTrips = Math.round(totalTrips / transportData.length);
  const topPerformer = transportData[0];
  const growthRate = 8.7;

  // Cargo operations calculations
  const totalLoading = cargoOperationsData.reduce((sum, item) => sum + item.loading, 0);
  const totalUnloading = cargoOperationsData.reduce((sum, item) => sum + item.unloading, 0);
  const avgLoadingEfficiency = Math.round(cargoOperationsData.reduce((sum, item) => sum + item.loadingEfficiency, 0) / cargoOperationsData.length);
  const avgUnloadingEfficiency = Math.round(cargoOperationsData.reduce((sum, item) => sum + item.unloadingEfficiency, 0) / cargoOperationsData.length);

  const regionData = transportData.reduce(
    (acc, item) => {
      const existing = acc.find((r) => r.region === item.region);
      if (existing) {
        existing.value += item.value;
        existing.trips += item.trips;
        existing.vehicles += item.vehicles;
        existing.count += 1;
      } else {
        acc.push({ 
          region: item.region, 
          value: item.value, 
          trips: item.trips,
          vehicles: item.vehicles,
          count: 1 
        });
      }
      return acc;
    },
    []
  );

  // Extended monthly trend data for 12 months (from August to July)
  const monthlyTrend = [
    { month: "Avg", trips: 850, loading: 12500, unloading: 8000 },
    { month: "Sen", trips: 920, loading: 13800, unloading: 10100 },
    { month: "Okt", trips: 980, loading: 14700, unloading: 11000 },
    { month: "Noy", trips: 1050, loading: 15700, unloading: 10400 },
    { month: "Dek", trips: 1120, loading: 16800, unloading: 11100 },
    { month: "Yan", trips: 1080, loading: 16200, unloading: 11500 },
    { month: "Fev", trips: 1150, loading: 17200, unloading: 10500 },
    { month: "Mar", trips: 1220, loading: 18300, unloading: 12600 },
    { month: "Apr", trips: 1180, loading: 17700, unloading: 14000 },
    { month: "May", trips: 1250, loading: 18700, unloading: 15000 },
    { month: "Iyun", trips: 1320, loading: 19800, unloading: 17100 },
    { month: "Iyul", trips: 1280, loading: 19200, unloading: 16500 },
  ];

  // Filter trend data based on selected period
  const getFilteredTrendData = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    // For current month (July), show data from the end
    return monthlyTrend.slice(-periods[trendPeriod]);
  };

  const filteredTrendData = getFilteredTrendData();

  const vehicleTypes = [
    { type: "Avtobuslar", count: 45, percentage: 35, color: "#3b82f6" },
    { type: "Mikroavtobuslar", count: 38, percentage: 30, color: "#ef4444" },
    { type: "Taksi", count: 28, percentage: 22, color: "#10b981" },
    { type: "Yuk mashinalari", count: 17, percentage: 13, color: "#f59e0b" },
  ];

  // Cargo type distribution
  const cargoTypes = [
    { type: "Qurilish materiallari", loading: 35, unloading: 30, color: "#3b82f6" },
    { type: "Oziq-ovqat mahsulotlari", loading: 25, unloading: 28, color: "#ef4444" },
    { type: "Sanoat tovarlari", loading: 20, unloading: 22, color: "#10b981" },
    { type: "Kimyoviy moddalar", loading: 12, unloading: 13, color: "#f59e0b" },
    { type: "Boshqa", loading: 8, unloading: 7, color: "#8b5cf6" },
  ];

  // Bar chart options for transport volume
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
      categories: transportData.map(item => item.name),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Tashuv hajmi (tonna)',
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
      colors: transportData.map(item => item.color)
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " tonna"
        }
      }
    },
    grid: {
      borderColor: 'rgba(112, 156, 245, 0.1)',
      strokeDashArray: 3
    }
  };

  const barChartSeries = [{
    name: 'Tashuv hajmi',
    data: transportData.map(item => item.value)
  }];

  // Loading vs Unloading comparison chart
  const loadingUnloadingOptions = {
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
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
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
      categories: cargoOperationsData.map(item => item.name),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Hajm (tonna)',
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
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " tonna"
        }
      }
    },
    colors: ['#3b82f6', '#ef4444'],
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

  const loadingUnloadingSeries = [
    {
      name: 'Yuk ortish',
      data: cargoOperationsData.map(item => item.loading)
    },
    {
      name: 'Yuk tushirish',
      data: cargoOperationsData.map(item => item.unloading)
    }
  ];

  // Efficiency radar chart
  const efficiencyOptions = {
    chart: {
      type: 'radar',
      height: 350,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    xaxis: {
      categories: cargoOperationsData.slice(0, 6).map(item => item.name),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    colors: ['#3b82f6', '#ef4444'],
    legend: {
      position: 'top',
      labels: {
        colors: '#3730a3'
      }
    },
    fill: {
      opacity: [0.2, 0.2]
    },
    stroke: {
      width: 2
    },
    markers: {
      size: 4
    }
  };

  const efficiencySeries = [
    {
      name: 'Ortish samaradorligi',
      data: cargoOperationsData.slice(0, 6).map(item => item.loadingEfficiency)
    },
    {
      name: 'Tushirish samaradorligi',
      data: cargoOperationsData.slice(0, 6).map(item => item.unloadingEfficiency)
    }
  ];

  // Pie chart options for regional distribution
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

  // Area chart options for monthly trends with filtered data
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
      categories: filteredTrendData.map(item => item.month),
      labels: {
        style: {
          colors: '#1900fe'
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
      type: ['solid', 'gradient', 'gradient'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    colors: ['#f5130b', '#10b981', '#3b82f6'],
    legend: {
      position: 'top',
      labels: {
        colors: '#3730a3'
      }
    },
    grid: {
      borderColor: 'rgba(42, 42, 42, 0.1)',
      strokeDashArray: 3
    }
  };

  const areaChartSeries = [
    {
      name: 'Reyslar soni',
      data: filteredTrendData.map(item => item.trips)
    },
    {
      name: 'Yuk ortish',
      data: filteredTrendData.map(item => item.loading)
    },
    {
      name: 'Yuk tushirish',
      data: filteredTrendData.map(item => item.unloading)
    }
  ];

  // Vehicle types pie chart
  const vehiclePieOptions = {
    chart: {
      type: 'pie',
      height: 300
    },
    labels: vehicleTypes.map(item => item.type),
    colors: vehicleTypes.map(item => item.color),
    legend: {
      position: 'bottom',
      labels: {
        colors: '#3730a3'
      }
    }
  };

  const vehiclePieSeries = vehicleTypes.map(item => item.count);

  // Cargo types chart
  const cargoTypesOptions = {
    chart: {
      type: 'bar',
      height: 300,
      stacked: true,
      toolbar: {
        show: false
      },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: cargoTypes.map(item => item.type),
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
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    colors: ['#3b82f6', '#ef4444'],
    legend: {
      position: 'top',
      labels: {
        colors: '#3730a3'
      }
    }
  };

  const cargoTypesSeries = [
    {
      name: 'Ortish',
      data: cargoTypes.map(item => item.loading)
    },
    {
      name: 'Tushirish',
      data: cargoTypes.map(item => item.unloading)
    }
  ];

  // Joriy holat statistikasi
  const currentStatusStats = [
    {
      label: "Faol reyslar",
      value: 127,
      color: "#3b82f6",
      icon: "🚚"
    },
    {
      label: "Kutilayotgan reyslar",
      value: 23,
      color: "#f59e0b",
      icon: "⏳"
    },
    {
      label: "Yakunlangan reyslar",
      value: 89,
      color: "#10b981",
      icon: "✅"
    },
    {
      label: "Bekor qilingan reyslar",
      value: 7,
      color: "#ef4444",
      icon: "❌"
    }
  ];

  return (
    <div className="mahalliy-container">
      <div className="mahalliy-content">
        {/* Header */}
        <div className="mahalliy-header">
          <h1 className="mahalliy-title">
            Mahalliy Tashuvlar Dashboard
          </h1>
          <p className="mahalliy-subtitle">Hududlar bo'yicha mahalliy tashuvlar va yuk operatsiyalari tahlili</p>
          <div className="mahalliy-divider"></div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>JAMI REYSLAR</h4>
                <div className="stat-value">{totalTrips.toLocaleString()}</div>
                <div className="stat-unit">reyxat</div>
              </div>
              <div className="stat-icon"><FaTrain color="#3b82f6" /></div>
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Jami Yuk Ortish</h4>
                <div className="stat-value">{totalLoading.toLocaleString()}</div>
                <div className="stat-unit">tonna</div>
              </div>
              <div className="stat-icon">📦</div>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Jami Yuk Tushirish</h4>
                <div className="stat-value">{totalUnloading.toLocaleString()}</div>
                <div className="stat-unit">tonna</div>
              </div>
              <div className="stat-icon">🏗️</div>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>O'rtacha Samaradorlik</h4>
                <div className="stat-value">{avgLoadingEfficiency}%</div>
                <div className="stat-unit">Ortish/Tushirish</div>
              </div>
              <div className="stat-icon">📈</div>
            </div>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="charts-grid">
          {/* Loading vs Unloading Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududlar bo'yicha yuk ortish va tushirish</h3>
              <span className="chart-badge">Tonna</span>
            </div>
            <ReactApexChart 
              options={loadingUnloadingOptions} 
              series={loadingUnloadingSeries} 
              type="bar" 
              height={350} 
            />
          </div>

          {/* Main Bar Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududlar bo'yicha Tashuv Hajmi</h3>
              <span className="chart-badge">Tonna</span>
            </div>
            <ReactApexChart 
              options={barChartOptions} 
              series={barChartSeries} 
              type="bar" 
              height={350} 
            />
          </div>
        </div>

        {/* Transport Volume and Regional Distribution */}
        <div className="charts-grid">
          {/* Monthly Trend */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Mahalliy Tashuvlarning Oylik Analitikasi</h3>
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
              series={areaChartSeries} 
              type="area" 
              height={350} 
            />
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="current-status-grid">
          {currentStatusStats.map((stat, idx) => (
            <div key={idx} className="current-status-card">
              <div className="current-status-icon">{stat.icon}</div>
              <div className="current-status-info">
                <div className="current-status-value">{stat.value}</div>
                <div className="current-status-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="charts-grid">
          <div className="chart-card">
          <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Samaradorlik va Xavfsizlik</h3>
            </div>            
            <div className="efficiency-card">
              <div className="efficiency-header">
                <span className="efficiency-title">Samaradorlik</span>
                <span className="efficiency-trend">↗</span>
              </div>
              <EfficiencyBar 
                label="Vaqtida yetkazish" 
                percent={94.2} 
                color="linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)" 
                percentColor="#16a34a" 
              />
              <EfficiencyBar 
                label="Mijoz mamnuniyati" 
                percent={96.8} 
                color="linear-gradient(90deg, #6366f1, #a21caf, #6366f1)" 
                percentColor="#0ea5e9" 
              />
              <EfficiencyBar 
                label="Yoqlg'i samaradorligi" 
                percent={87.5} 
                color="linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9)" 
                percentColor="#6366f1" 
              />
            </div>
          <SafetyCard />
          </div>
          {/* Top 5 Regions Card */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Top 5 Hududlar</h3>
            </div>
            <div className="top-regions-list">
              {transportData.slice(0, 5).map((item, index) => (
                <div key={index} className="region-item">
                  <div className="region-rank">{index + 1}</div>
                  <div className="region-info">
                    <div className="region-name">{item.name}</div>
                    <div className="region-details">
                      <span className="region-value">{item.value.toLocaleString()} tonna</span>
                      <span className="region-trips">{item.trips} reys</span>
                    </div>
                  </div>
                  <div className="region-color-indicator" style={{ backgroundColor: item.color }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Samarador yuk turlari va TexPDlar */}
        <div className="charts-grid">
          {/* Eng samarador yuk turlari */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng samarador yuk turlari</h3>
            </div>
            <PieChart
              height={260}
              series={[{
                data: cargoOperationsData.map(item => ({
                  id: item.name,
                  value: item.loadingEfficiency,
                  label: item.name,
                  color: item.color
                })),
                innerRadius: 60,
                outerRadius: 100,
                arcLabel: (params) => params.value + '%',
                arcLabelMinAngle: 18,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { additionalRadius: -8, color: 'rgba(200,200,200,0.2)' },
                highlighted: { additionalRadius: 8 },
              }]}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  labelStyle: { fontWeight: 600, fontSize: 14 },
                  itemMarkWidth: 18,
                  itemMarkHeight: 18,
                  itemGap: 18,
                },
              }}
              sx={{ background: 'linear-gradient(120deg, #f8fafc 80%, #e0e7ff 100%)', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)', p: 1 }}
              margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
            />
          
          </div>
          {/* Eng samarador TexPDlar */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Eng samarador TexPDlar</h3>
            </div>
            <BarChart
              height={260}
              series={[{
                data: cargoOperationsData.map(item => item.loadingEfficiency),
                label: 'Ortish samaradorligi (%)',
                color: '#6366f1',
                valueFormatter: (v) => v + '%',
                highlightScope: { faded: 'global', highlighted: 'series' },
                faded: { additionalRadius: -8, color: 'rgba(200,200,200,0.2)' },
              }]}
              xAxis={[{ scaleType: 'band', data: cargoOperationsData.map(item => item.name), label: 'TexPD' }]}
              yAxis={[{ min: 0, max: 100, label: 'Samaradorlik (%)' }]}
              slotProps={{
                bar: {
                  borderRadius: 8,
                  style: { filter: 'drop-shadow(0 2px 8px #6366f1aa)' },
                },
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  labelStyle: { fontWeight: 600, fontSize: 14 },
                  itemMarkWidth: 18,
                  itemMarkHeight: 18,
                  itemGap: 18,
                },
              }}
              sx={{ background: 'linear-gradient(120deg, #f8fafc 80%, #e0e7ff 100%)', borderRadius: 3, boxShadow: '0 4px 16px 0 rgba(80, 80, 180, 0.13)', p: 1 }}
              margin={{ top: 10, bottom: 10, left: 10, right: 10 }}
              labelDisplay="auto"
              valueLabelDisplay="on"
            />
          </div>
        </div>

        {/* Cargo Operations Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Yuk Operatsiyalari Ma'lumotlari</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Hudud</th>
                  <th>Yuk Ortish (tonna)</th>
                  <th>Yuk Tushirish (tonna)</th>
                  <th>Ortish Samaradorligi (%)</th>
                  <th>Tushirish Samaradorligi (%)</th>
                  <th>O'rtacha Ortish Vaqti (soat)</th>
                  <th>O'rtacha Tushirish Vaqti (soat)</th>
                </tr>
              </thead>
              <tbody>
                {cargoOperationsData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="region-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.loading.toLocaleString()}</td>
                    <td className="font-semibold">{item.unloading.toLocaleString()}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.loadingEfficiency > 85 ? '#10b981' : item.loadingEfficiency > 75 ? '#f59e0b' : '#ef4444' }}>
                        {item.loadingEfficiency}%
                      </span>
                    </td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.unloadingEfficiency > 80 ? '#10b981' : item.unloadingEfficiency > 70 ? '#f59e0b' : '#ef4444' }}>
                        {item.unloadingEfficiency}%
                      </span>
                    </td>
                    <td>{item.loadingTime}</td>
                    <td>{item.unloadingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  <th>Tashuv hajmi (tonna)</th>
                  <th>Reyslar soni</th>
                  <th>Transport vositalari</th>
                  <th>Joylashuv</th>
                  <th>Ulush (%)</th>
                </tr>
              </thead>
              <tbody>
                {transportData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="region-color" style={{ backgroundColor: item.color }}></div>
                      {item.name}
                    </td>
                    <td className="font-semibold">{item.value.toLocaleString()}</td>
                    <td>{item.trips.toLocaleString()}</td>
                    <td>{item.vehicles}</td>
                    <td>{item.region}</td>
                    <td>
                      <span className="percentage-badge">
                        {((item.value / transportData.reduce((sum, i) => sum + i.value, 0)) * 100).toFixed(1)}%
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
    const timeout = setTimeout(() => setProgress(99.1), 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="efficiency-card">
      <div className="efficiency-header">
        <span className="efficiency-title">Xavfsizlik</span>
        <span className="efficiency-trend" style={{ color: '#16a34a' }}>✔️</span>
      </div>
      <div className="eff-bar-row">
        <div className="eff-bar-label">Xavfsiz reyslar</div>
        <div className="eff-bar-percent" style={{ color: '#16a34a' }}>99.1%</div>
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
        <div className="safety-badge badge-red">Hodisalar <span>2</span></div>
        <div className="safety-badge badge-orange">Texnik nosozliklar <span>5</span></div>
        <div className="safety-badge badge-blue">Profilaktika <span>12</span></div>
      </div>
    </div>
  );
} 