import React from "react";
import ReactApexChart from 'react-apexcharts';
import './XalqaroTashuvlar.css';
import { PieChart, BarChart, LineChart } from '@mui/x-charts';
import { FaTrain, FaGlobe, FaRoute, FaClock } from 'react-icons/fa';

export default function InternationalTransportDashboard() {
  // State for trend period filtering
  const [trendPeriod, setTrendPeriod] = React.useState('6'); // Default to 6 months

  const internationalData = [
    { name: "Toshkent Xalqaro", value: 1850, color: "#00D4FF", region: "Markaziy", trips: 1250, vehicles: 65 },
    { name: "Samarqand Xalqaro", value: 1420, color: "#FF6B35", region: "Markaziy", trips: 980, vehicles: 48 },
    { name: "Buxoro Xalqaro", value: 1280, color: "#4ECDC4", region: "Markaziy", trips: 890, vehicles: 42 },
    { name: "Andijon Xalqaro", value: 1150, color: "#FF8A95", region: "Sharqiy", trips: 780, vehicles: 38 },
    { name: "Qo'qon Xalqaro", value: 980, color: "#45B7D1", region: "Sharqiy", trips: 650, vehicles: 32 },
    { name: "Surxondaryo Xalqaro", value: 720, color: "#DDA0DD", region: "Janubiy", trips: 480, vehicles: 25 },
    { name: "Qo'ng'irot Xalqaro", value: 680, color: "#98D8C8", region: "Markaziy", trips: 420, vehicles: 22 },
    { name: "Xorazm Xalqaro", value: 580, color: "#F7DC6F", region: "Shimoliy", trips: 380, vehicles: 20 },
    { name: "Qarshi TexPD", value: 420, color: "#00ecb1", region: "Markaziy", trips: 340, vehicles: 18 },
    { name: "Jizzax TexPD", value: 380, color: "#6ff786", region: "Shimoliy", trips: 390, vehicles: 26 },

  ];

  // International cargo operations data
  const cargoOperationsData = [
    { 
      name: "Toshkent Xalqaro", 
      loading: 1250, 
      unloading: 980, 
      loadingEfficiency: 94, 
      unloadingEfficiency: 91,
      loadingTime: 3.2,
      unloadingTime: 2.8,
      color: "#00D4FF",
      customsClearance: 98.5,
      internationalRoutes: 15
    },
    { 
      name: "Samarqand Xalqaro", 
      loading: 980, 
      unloading: 820, 
      loadingEfficiency: 92, 
      unloadingEfficiency: 89,
      loadingTime: 3.5,
      unloadingTime: 3.1,
      color: "#FF6B35",
      customsClearance: 96.8,
      internationalRoutes: 12
    },
    { 
      name: "Buxoro Xalqaro", 
      loading: 890, 
      unloading: 750, 
      loadingEfficiency: 90, 
      unloadingEfficiency: 87,
      loadingTime: 3.8,
      unloadingTime: 3.4,
      color: "#4ECDC4",
      customsClearance: 95.2,
      internationalRoutes: 10
    },
    { 
      name: "Andijon Xalqaro", 
      loading: 780, 
      unloading: 680, 
      loadingEfficiency: 88, 
      unloadingEfficiency: 85,
      loadingTime: 4.0,
      unloadingTime: 3.6,
      color: "#FF8A95",
      customsClearance: 93.5,
      internationalRoutes: 8
    },
    { 
      name: "Qo'qon Xalqaro", 
      loading: 650, 
      unloading: 580, 
      loadingEfficiency: 86, 
      unloadingEfficiency: 83,
      loadingTime: 4.2,
      unloadingTime: 3.8,
      color: "#45B7D1",
      customsClearance: 91.8,
      internationalRoutes: 6
    },
    { 
      name: "Surxondaryo Xalqaro", 
      loading: 480, 
      unloading: 420, 
      loadingEfficiency: 84, 
      unloadingEfficiency: 81,
      loadingTime: 4.5,
      unloadingTime: 4.1,
      color: "#DDA0DD",
      customsClearance: 89.3,
      internationalRoutes: 4
    },
    { 
      name: "Qo'ng'irot Xalqaro", 
      loading: 420, 
      unloading: 380, 
      loadingEfficiency: 82, 
      unloadingEfficiency: 79,
      loadingTime: 4.8,
      unloadingTime: 4.4,
      color: "#98D8C8",
      customsClearance: 87.6,
      internationalRoutes: 3
    },
    { 
      name: "Xorazm Xalqaro", 
      loading: 380, 
      unloading: 340, 
      loadingEfficiency: 80, 
      unloadingEfficiency: 77,
      loadingTime: 5.0,
      unloadingTime: 4.6,
      color: "#F7DC6F",
      customsClearance: 85.9,
      internationalRoutes: 2
    },
            { 
      name: "Qarshi TexPD", 
      loading: 550, 
      unloading: 400, 
      loadingEfficiency: 75, 
      unloadingEfficiency: 70,
      loadingTime: 3.8,
      unloadingTime: 3.5,
      color: "#0adda8" 
    },
    { 
      name: "Jizzax TexPD", 
      loading: 700, 
      unloading: 510, 
      loadingEfficiency: 73, 
      unloadingEfficiency: 68,
      loadingTime: 4.0,
      unloadingTime: 3.7,
      color: "#6ff786" 
    },
  ];

  const totalTrips = internationalData.reduce((sum, item) => sum + item.trips, 0);
  const totalVehicles = internationalData.reduce((sum, item) => sum + item.vehicles, 0);
  const averageTrips = Math.round(totalTrips / internationalData.length);
  const topPerformer = internationalData[0];
  const growthRate = 12.3;

  // Cargo operations calculations
  const totalLoading = cargoOperationsData.reduce((sum, item) => sum + item.loading, 0);
  const totalUnloading = cargoOperationsData.reduce((sum, item) => sum + item.unloading, 0);
  const avgLoadingEfficiency = Math.round(cargoOperationsData.reduce((sum, item) => sum + item.loadingEfficiency, 0) / cargoOperationsData.length);
  const avgUnloadingEfficiency = Math.round(cargoOperationsData.reduce((sum, item) => sum + item.unloadingEfficiency, 0) / cargoOperationsData.length);
  const avgCustomsClearance = (cargoOperationsData.reduce((sum, item) => sum + item.customsClearance, 0) / cargoOperationsData.length).toFixed(1);

  const regionData = internationalData.reduce(
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
    { month: "Avg", trips: 1250, loading: 18500, unloading: 15200, customs: 96.5 },
    { month: "Sen", trips: 1380, loading: 19800, unloading: 16800, customs: 97.2 },
    { month: "Okt", trips: 1520, loading: 21200, unloading: 18200, customs: 97.8 },
    { month: "Noy", trips: 1680, loading: 22800, unloading: 19500, customs: 98.1 },
    { month: "Dek", trips: 1820, loading: 24500, unloading: 21200, customs: 98.5 },
    { month: "Yan", trips: 1750, loading: 23800, unloading: 20800, customs: 98.2 },
    { month: "Fev", trips: 1920, loading: 25800, unloading: 22500, customs: 98.8 },
    { month: "Mar", trips: 2080, loading: 27800, unloading: 24200, customs: 99.1 },
    { month: "Apr", trips: 1980, loading: 26800, unloading: 23500, customs: 98.9 },
    { month: "May", trips: 2150, loading: 28800, unloading: 25200, customs: 99.3 },
    { month: "Iyun", trips: 2280, loading: 30200, unloading: 26800, customs: 99.6 },
    { month: "Iyul", trips: 2180, loading: 29200, unloading: 25800, customs: 99.4 },
  ];

  // Filter trend data based on selected period
  const getFilteredTrendData = () => {
    const periods = { '3': 3, '6': 6, '12': 12 };
    return monthlyTrend.slice(-periods[trendPeriod]);
  };

  const filteredTrendData = getFilteredTrendData();

  const transportModes = [
    { type: "Xalqaro yo'lovchi poyezdlari", count: 65, percentage: 40, color: "#3b82f6" },
    { type: "Xalqaro yuk poyezdlari", count: 45, percentage: 28, color: "#ef4444" },
    { type: "Konteyner poyezdlari", count: 32, percentage: 20, color: "#10b981" },
    { type: "Maxsus yuk poyezdlari", count: 20, percentage: 12, color: "#f59e0b" },
  ];

  // International cargo type distribution
  const cargoTypes = [
    { type: "Sanoat tovarlari", loading: 35, unloading: 32, color: "#3b82f6" },
    { type: "Qurilish materiallari", loading: 25, unloading: 28, color: "#ef4444" },
    { type: "Oziq-ovqat mahsulotlari", loading: 20, unloading: 22, color: "#10b981" },
    { type: "Kimyoviy moddalar", loading: 12, unloading: 11, color: "#f59e0b" },
    { type: "Boshqa", loading: 8, unloading: 7, color: "#8b5cf6" },
  ];

  // International destinations
  const internationalDestinations = [
    { country: "Rossiya", trips: 420, volume: 8500, growth: 15.2, color: "#3b82f6" },
    { country: "Xitoy", trips: 380, volume: 7200, growth: 18.7, color: "#ef4444" },
    { country: "Qozog'iston", trips: 320, volume: 5800, growth: 12.3, color: "#10b981" },
    { country: "Turkmaniston", trips: 280, volume: 4800, growth: 8.9, color: "#f59e0b" },
    { country: "Qirg'iziston", trips: 240, volume: 4200, growth: 11.5, color: "#8b5cf6" },
    { country: "Tojikiston", trips: 200, volume: 3600, growth: 9.8, color: "#ec4899" },
  ];

  // New analytical data for additional charts
  const seasonalAnalysis = [
    { season: "Qish", trips: 1850, volume: 28500, efficiency: 92.5, delays: 8.2 },
    { season: "Bahor", trips: 2100, volume: 32500, efficiency: 95.8, delays: 4.1 },
    { season: "Yoz", trips: 1950, volume: 30500, efficiency: 94.2, delays: 5.8 },
    { season: "Kuz", trips: 2200, volume: 34500, efficiency: 96.1, delays: 3.9 },
  ];

  const cargoTypeAnalysis = [
    { type: "Qurilish materiallari", volume: 12500, trips: 180, efficiency: 94.5, revenue: 8500000 },
    { type: "Oziq-ovqat mahsulotlari", volume: 9800, trips: 145, efficiency: 96.2, revenue: 7200000 },
    { type: "Sanoat tovarlari", volume: 15800, trips: 220, efficiency: 93.8, revenue: 12500000 },
    { type: "Kimyoviy moddalar", volume: 6800, trips: 95, efficiency: 97.1, revenue: 5800000 },
    { type: "Avtomobil qismlari", volume: 4200, trips: 65, efficiency: 95.4, revenue: 3800000 },
    { type: "Elektronika", volume: 3200, trips: 48, efficiency: 98.3, revenue: 4200000 },
  ];

  const routeEfficiencyData = [
    { route: "Toshkent-Moskva", distance: 3200, time: 72, efficiency: 94.2, cost: 8500000 },
    { route: "Toshkent-Pekin", distance: 4100, time: 96, efficiency: 91.8, cost: 12500000 },
    { route: "Toshkent-Almati", distance: 1800, time: 36, efficiency: 96.5, cost: 4800000 },
    { route: "Toshkent-Ashxobod", distance: 1200, time: 24, efficiency: 97.8, cost: 3200000 },
    { route: "Toshkent-Bishkek", distance: 900, time: 18, efficiency: 98.1, cost: 2400000 },
    { route: "Toshkent-Dushanbe", distance: 1100, time: 22, efficiency: 97.2, cost: 2800000 },
  ];

  const performanceMetrics = [
    { metric: "Vaqtida yetkazish", value: 96.8, target: 95.0, trend: "up" },
    { metric: "Yuk yo'qolish", value: 0.8, target: 1.0, trend: "down" },
    { metric: "Mijoz mamnuniyati", value: 94.2, target: 90.0, trend: "up" },
    { metric: "Yoqilg'i samaradorligi", value: 87.5, target: 85.0, trend: "up" },
    { metric: "Xavfsizlik ko'rsatkichi", value: 99.1, target: 98.0, trend: "up" },
    { metric: "Bojxona tozalash", value: 96.8, target: 95.0, trend: "up" },
  ];

  const weeklyTrendData = [
    { week: "1-hafta", trips: 520, volume: 8200, efficiency: 94.2 },
    { week: "2-hafta", trips: 580, volume: 9100, efficiency: 95.8 },
    { week: "3-hafta", trips: 540, volume: 8600, efficiency: 93.9 },
    { week: "4-hafta", trips: 610, volume: 9600, efficiency: 96.1 },
    { week: "5-hafta", trips: 590, volume: 9300, efficiency: 95.2 },
    { week: "6-hafta", trips: 630, volume: 9900, efficiency: 96.8 },
    { week: "7-hafta", trips: 570, volume: 9000, efficiency: 94.7 },
    { week: "8-hafta", trips: 650, volume: 10200, efficiency: 97.2 },
  ];

  // Bar chart options for international transport volume
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
      categories: internationalData.map(item => item.name),
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Xalqaro tashuv hajmi (tonna)',
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
      colors: internationalData.map(item => item.color)
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
    name: 'Xalqaro temir yo\'l tashuv hajmi',
    data: internationalData.map(item => item.value)
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
      name: 'Xalqaro temir yo\'l yuk ortish',
      data: cargoOperationsData.map(item => item.loading)
    },
    {
      name: 'Xalqaro temir yo\'l yuk tushirish',
      data: cargoOperationsData.map(item => item.unloading)
    }
  ];

  // Customs clearance efficiency chart
  const customsOptions = {
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
      min: 80,
      max: 100,
      labels: {
        style: {
          colors: '#3730a3'
        }
      }
    },
    colors: ['#10b981', '#3b82f6'],
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

  const customsSeries = [
    {
      name: 'Ortish samaradorligi',
      data: cargoOperationsData.slice(0, 6).map(item => item.loadingEfficiency)
    },
    {
      name: 'Yuklarni bojxonadan  o\'tkazish',
      data: cargoOperationsData.slice(0, 6).map(item => item.customsClearance)
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
      type: ['solid', 'gradient', 'gradient', 'gradient'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    colors: ['#f5130b', '#10b981', '#3b82f6', '#f59e0b'],
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
      name: 'Xalqaro temir yo\'l reyslar soni',
      data: filteredTrendData.map(item => item.trips)
    },
    {
      name: 'Xalqaro temir yo\'l yuk ortish hajmi (tonna)',
      data: filteredTrendData.map(item => item.loading)
    },
    {
      name: 'Xalqaro temir yo\'l yuk tushirish hajmi (tonna)',
      data: filteredTrendData.map(item => item.unloading)
    },
    {
      name: 'Yuklarni bojxonadan o\'tkazish (%)',
      data: filteredTrendData.map(item => item.customs)
    }
  ];

  // Transport modes pie chart
  const transportModesPieOptions = {
    chart: {
      type: 'pie',
      height: 300
    },
    labels: transportModes.map(item => item.type),
    colors: transportModes.map(item => item.color),
    legend: {
      position: 'bottom',
      labels: {
        colors: '#3730a3'
      }
    }
  };

  const transportModesPieSeries = transportModes.map(item => item.count);

  // International destinations chart
  const destinationsOptions = {
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
      categories: internationalDestinations.map(item => item.country),
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
          return val + " reys"
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

  const destinationsSeries = [
    {
      name: 'Temir yo\'l reyslar soni',
      data: internationalDestinations.map(item => item.trips)
    },
    {
      name: 'Temir yo\'l tashuv hajmi',
      data: internationalDestinations.map(item => item.volume)
    }
  ];

  // Seasonal analysis chart options
  const seasonalOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: seasonalAnalysis.map(item => item.season),
      labels: { style: { colors: '#3730a3' } }
    },
    yaxis: [
      {
        title: { text: 'Reyslar soni', style: { color: '#3730a3' } },
        labels: { style: { colors: '#3730a3' } }
      },
      {
        opposite: true,
        title: { text: 'Samaradorlik (%)', style: { color: '#10b981' } },
        labels: { style: { colors: '#10b981' } }
      }
    ],
    fill: { opacity: 1 },
    colors: ['#3b82f6', '#10b981'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const seasonalSeries = [
    {
      name: 'Reyslar soni',
      data: seasonalAnalysis.map(item => item.trips)
    },
    {
      name: 'Samaradorlik (%)',
      data: seasonalAnalysis.map(item => item.efficiency)
    }
  ];

  // Cargo type analysis chart options
  const cargoTypeOptions = {
    chart: {
      type: 'bar',
      height: 400,
      stacked: true,
      toolbar: { show: false },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: { fontSize: '13px', fontWeight: 900 }
          }
        }
      },
    },
    stroke: { width: 1, colors: ['#fff'] },
    xaxis: {
      categories: cargoTypeAnalysis.map(item => item.type),
      labels: { style: { colors: '#3730a3' } }
    },
    yaxis: { labels: { style: { colors: '#3730a3' } } },
    tooltip: {
      shared: false,
      y: { formatter: function (val) { return val + " tonna" } }
    },
    colors: ['#3b82f6', '#ef4444', '#10b981'],
    legend: { position: 'top', labels: { colors: '#3730a3' } }
  };

  const cargoTypeSeries = [
    {
      name: 'Tashuv hajmi',
      data: cargoTypeAnalysis.map(item => item.volume)
    },
    {
      name: 'Reyslar soni',
      data: cargoTypeAnalysis.map(item => item.trips)
    },
    {
      name: 'Samaradorlik',
      data: cargoTypeAnalysis.map(item => item.efficiency)
    }
  ];

  // Route efficiency chart options
  const routeEfficiencyOptions = {
    chart: {
      type: 'scatter',
      height: 350,
      toolbar: { show: false },
      background: 'transparent'
    },
    dataLabels: { enabled: false },
    xaxis: {
      title: { text: 'Masofa (km)', style: { color: '#3730a3' } },
      labels: { style: { colors: '#3730a3' } }
    },
    yaxis: {
      title: { text: 'Samaradorlik (%)', style: { color: '#3730a3' } },
      labels: { style: { colors: '#3730a3' } }
    },
    colors: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const routeEfficiencySeries = [{
    name: 'Yo\'nalishlar',
    data: routeEfficiencyData.map(item => ({
      x: item.distance,
      y: item.efficiency,
      z: item.cost / 1000000
    }))
  }];

  // Performance metrics chart options
  const performanceOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: { colors: ['#fff'] },
      formatter: (val, opt) => `${opt.w.globals.labels[opt.dataPointIndex]}: ${val}%`,
      offsetX: 0
    },
    xaxis: {
      categories: performanceMetrics.map(item => item.metric),
      labels: { style: { colors: '#3730a3' } }
    },
    yaxis: { labels: { show: false } },
    colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const performanceSeries = [{
    name: 'Ko\'rsatkichlar',
    data: performanceMetrics.map(item => item.value)
  }];

  // Weekly trend chart options
  const weeklyTrendOptions = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: { show: false },
      background: 'transparent'
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: {
      categories: weeklyTrendData.map(item => item.week),
      labels: { style: { colors: '#3730a3' } }
    },
    yaxis: { labels: { style: { colors: '#3730a3' } } },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    colors: ['#3b82f6', '#10b981', '#f59e0b'],
    legend: { position: 'top', labels: { colors: '#3730a3' } },
    grid: { borderColor: 'rgba(112, 156, 245, 0.1)', strokeDashArray: 3 }
  };

  const weeklyTrendSeries = [
    {
      name: 'Reyslar soni',
      data: weeklyTrendData.map(item => item.trips)
    },
    {
      name: 'Tashuv hajmi',
      data: weeklyTrendData.map(item => item.volume)
    },
    {
      name: 'Samaradorlik (%)',
      data: weeklyTrendData.map(item => item.efficiency)
    }
  ];

  // Current status statistics
  const currentStatusStats = [
    {
      label: "Faol xalqaro reyslar",
      value: 187,
      color: "#3b82f6",
      icon: "🌍"
    },
    {
      label: "Kutilayotgan reyslar",
      value: 34,
      color: "#f59e0b",
      icon: "⏳"
    },
    {
      label: "Yakunlangan reyslar",
      value: 156,
      color: "#10b981",
      icon: "✅"
    },
    {
      label: "Bekor qilingan reyslar",
      value: 12,
      color: "#ef4444",
      icon: "❌"
    }
  ];

  return (
    <div className="xalqaro-container">
      <div className="xalqaro-content">
        {/* Header */}
        <div className="xalqaro-header">
          <h1 className="xalqaro-title">
            Xalqaro Tashuvlar Dashboard
          </h1>
          <p className="xalqaro-subtitle">Xalqaro tashuvlar va bojxona operatsiyalari tahlili</p>
          <div className="xalqaro-divider"></div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card cyan">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>JAMI XALQARO REYSLAR</h4>
                <div className="stat-value">{totalTrips.toLocaleString()}</div>
                <div className="stat-unit">soni</div>
              </div>
              <div className="stat-icon"><FaGlobe color="#3b82f6" /></div>
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Jami Xalqaro Yuk Ortish</h4>
                <div className="stat-value">{totalLoading.toLocaleString()}</div>
                <div className="stat-unit">tonna</div>
              </div>
              <div className="stat-icon"><FaTrain color="#8b5cf6" /></div>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Jami Xalqaro Yuk Tushirish</h4>
                <div className="stat-value">{totalUnloading.toLocaleString()}</div>
                <div className="stat-unit">tonna</div>
              </div>
              <div className="stat-icon"><FaRoute color="#10b981" /></div>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-card-content">
              <div className="stat-info">
                <h4>Yuklarni bojxonadan  o'tkazish</h4>
                <div className="stat-value">86.7%</div>
                <div className="stat-unit">Samaradorlik</div>
              </div>
              <div className="stat-icon"><FaClock color="#f59e0b" /></div>
            </div>
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="charts-grid">
          {/* Loading vs Unloading Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Hududlar bo'yicha xalqaro temir yo'l yuk ortish va tushirish</h3>
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
              <h3 className="chart-title">Hududlar bo'yicha Xalqaro Temir Yo'l Tashuv Hajmi</h3>
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

        {/* Monthly Trend */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Xalqaro Tashuvlarning Oylik Analitikasi</h3>
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

        {/* Current Status Grid */}
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

        {/* Efficiency and Safety */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Xalqaro Samaradorlik va Xavfsizlik</h3>
            </div>            
            <div className="efficiency-card">
              <div className="efficiency-header">
                <span className="efficiency-title">Xalqaro Samaradorlik</span>
                <span className="efficiency-trend">↗</span>
              </div>
              <EfficiencyBar 
                label="Vaqtida yetkazish" 
                percent={96.8} 
                color="linear-gradient(90deg, #22d3ee, #16a34a, #22d3ee)" 
                percentColor="#16a34a" 
              />
              <EfficiencyBar 
                label="Yuklarni bojxonadan  o'tkazish" 
                percent={98.2} 
                color="linear-gradient(90deg, #6366f1, #a21caf, #6366f1)" 
                percentColor="#0ea5e9" 
              />
              <EfficiencyBar 
                label="Xalqaro standartlar" 
                percent={94.5} 
                color="linear-gradient(90deg, #0ea5e9, #6366f1, #0ea5e9)" 
                percentColor="#6366f1" 
              />
            </div>
            <SafetyCard />
          </div>

          {/* Top 5 International Regions */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Top 5 Xalqaro Hududlar</h3>
            </div>
            <div className="top-regions-list">
              {internationalData.slice(0, 5).map((item, index) => (
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

        {/* Transport Modes and International Destinations */}
        <div className="charts-grid">
          {/* Transport Modes */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Xalqaro temir yo'l transport turlari</h3>
            <span className="chart-badge">Foiz</span>

            </div>
            <PieChart
              height={260}
              series={[{
                data: transportModes.map(item => ({
                  id: item.type,
                  value: item.percentage,
                  label: item.type,
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

          {/* International Destinations */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Xalqaro temir yo'l yo'nalishlari</h3>
            <span className="chart-badge">Foiz</span>

            </div>
            <BarChart
              height={260}
              series={[{
                data: internationalDestinations.map(item => item.trips),
                label: 'Reyslar soni',
                color: '#6366f1',
                valueFormatter: (v) => v + ' reys',
                highlightScope: { faded: 'global', highlighted: 'series' },
                faded: { additionalRadius: -8, color: 'rgba(200,200,200,0.2)' },
              }]}
              xAxis={[{ scaleType: 'band', data: internationalDestinations.map(item => item.country), label: 'Mamlakat' }]}
              yAxis={[{ min: 0, max: 500, label: 'Reyslar soni' }]}
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

        {/* Customs Efficiency and International Routes */}
        <div className="charts-grid">
          






          {/* International Routes */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Xalqaro temir yo'l yo'nalishlari taqsimoti</h3>
            </div>
            <ReactApexChart 
              options={destinationsOptions} 
              series={destinationsSeries} 
              type="bar" 
              height={350} 
            />
          </div>
        </div>

        {/* Seasonal Analysis and Cargo Types */}
        <div className="charts-grid">
          {/* Seasonal Analysis */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Fasllar bo'yicha xalqaro tashuvlar analizi</h3>
            </div>
            <ReactApexChart 
              options={seasonalOptions} 
              series={seasonalSeries} 
              type="bar" 
              height={350} 
            />
          </div>

          {/* Cargo Types Analysis */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Yuk turlari bo'yicha xalqaro tashuvlar</h3>
            </div>
            <ReactApexChart 
              options={cargoTypeOptions} 
              series={cargoTypeSeries} 
              type="bar" 
              height={400} 
            />
          </div>
        </div>

        {/* Route Efficiency and Performance Metrics */}
        <div className="charts-grid">






          {/* Performance Metrics */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-indicator"></div>
              <h3 className="chart-title">Xalqaro tashuvlar ko'rsatkichlari</h3>
            <span className="chart-badge">Foiz</span>

            </div>
            <ReactApexChart 
              options={performanceOptions} 
              series={performanceSeries} 
              type="bar" 
              height={350} 
            />
          </div>
        </div>
        {/* Cargo Operations Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Xalqaro Yuk Operatsiyalari Ma'lumotlari</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Hudud</th>
                  <th>Xalqaro Yuk Ortish (tonna)</th>
                  <th>Xalqaro Yuk Tushirish (tonna)</th>
                  <th>Ortish Samaradorligi (%)</th>
                  <th>Bojxona Tozalash (%)</th>
                  <th>Xalqaro Yo'nalishlar</th>
                  <th>O'rtacha Ortish Vaqti (soat)</th>
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
                      <span className="percentage-badge" style={{ backgroundColor: item.loadingEfficiency > 90 ? '#10b981' : item.loadingEfficiency > 80 ? '#f59e0b' : '#ef4444' }}>
                        {item.loadingEfficiency}%
                      </span>
                    </td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.customsClearance > 95 ? '#10b981' : item.customsClearance > 90 ? '#f59e0b' : '#ef4444' }}>
                        {item.customsClearance}%
                      </span>
                    </td>
                    <td>{item.internationalRoutes}</td>
                    <td>{item.loadingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* International Transport Data Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Xalqaro Tashuvlar Batafsil Ma'lumotlari</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Hudud</th>
                  <th>Xalqaro Tashuv hajmi (tonna)</th>
                  <th>Xalqaro Reyslar soni</th>
                  <th>Transport vositalari</th>
                  <th>Joylashuv</th>
                  <th>Ulush (%)</th>
                </tr>
              </thead>
              <tbody>
                {internationalData.map((item, index) => (
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
                        {((item.value / internationalData.reduce((sum, i) => sum + i.value, 0)) * 100).toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Seasonal Analysis Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Fasllar bo'yicha xalqaro tashuvlar ma'lumotlari</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Fasl</th>
                  <th>Reyslar soni</th>
                  <th>Tashuv hajmi (tonna)</th>
                  <th>Samaradorlik (%)</th>
                  <th>Kechikishlar (%)</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {seasonalAnalysis.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.season}</td>
                    <td>{item.trips.toLocaleString()}</td>
                    <td>{item.volume.toLocaleString()}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.efficiency > 95 ? '#10b981' : item.efficiency > 90 ? '#f59e0b' : '#ef4444' }}>
                        {item.efficiency}%
                      </span>
                    </td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.delays < 5 ? '#10b981' : item.delays < 8 ? '#f59e0b' : '#ef4444' }}>
                        {item.delays}%
                      </span>
                    </td>
                    <td>
                      <span className="trend-indicator" style={{ color: item.efficiency > 94 ? '#10b981' : '#ef4444' }}>
                        {item.efficiency > 94 ? '↗' : '↘'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cargo Types Analysis Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Yuk turlari bo'yicha batafsil ma'lumotlar</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Yuk turi</th>
                  <th>Tashuv hajmi (tonna)</th>
                  <th>Reyslar soni</th>
                  <th>Samaradorlik (%)</th>
                  <th>Tushum (so'm)</th>
                  <th>O'rtacha narx (so'm/tonna)</th>
                </tr>
              </thead>
              <tbody>
                {cargoTypeAnalysis.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.type}</td>
                    <td>{item.volume.toLocaleString()}</td>
                    <td>{item.trips}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.efficiency > 96 ? '#10b981' : item.efficiency > 93 ? '#f59e0b' : '#ef4444' }}>
                        {item.efficiency}%
                      </span>
                    </td>
                    <td>{item.revenue.toLocaleString()}</td>
                    <td>{(item.revenue / item.volume).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Route Efficiency Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Xalqaro yo'nalishlar samaradorligi</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Yo'nalish</th>
                  <th>Masofa (km)</th>
                  <th>Vaqt (soat)</th>
                  <th>Samaradorlik (%)</th>
                  <th>Xarajat (so'm)</th>
                  <th>O'rtacha tezlik (km/soat)</th>
                </tr>
              </thead>
              <tbody>
                {routeEfficiencyData.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.route}</td>
                    <td>{item.distance.toLocaleString()}</td>
                    <td>{item.time}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.efficiency > 96 ? '#10b981' : item.efficiency > 93 ? '#f59e0b' : '#ef4444' }}>
                        {item.efficiency}%
                      </span>
                    </td>
                    <td>{item.cost.toLocaleString()}</td>
                    <td>{(item.distance / item.time).toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Metrics Table */}
        <div className="data-table-container">
          <div className="chart-header">
            <div className="chart-indicator"></div>
            <h3 className="chart-title">Xalqaro tashuvlar ko'rsatkichlari</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Ko'rsatkich</th>
                  <th>Joriy qiymat</th>
                  <th>Maqsad</th>
                  <th>Holat</th>
                  <th>Trend</th>
                  <th>Farq</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold">{item.metric}</td>
                    <td>
                      <span className="percentage-badge" style={{ backgroundColor: item.value >= item.target ? '#10b981' : '#ef4444' }}>
                        {item.value}%
                      </span>
                    </td>
                    <td>{item.target}%</td>
                    <td>
                      <span className="status-badge" style={{ backgroundColor: item.value >= item.target ? '#10b981' : '#ef4444' }}>
                        {item.value >= item.target ? 'Yaxshi' : 'Yaxshilash kerak'}
                      </span>
                    </td>
                    <td>
                      <span className="trend-indicator" style={{ color: item.trend === 'up' ? '#10b981' : '#ef4444' }}>
                        {item.trend === 'up' ? '↗' : '↘'}
                      </span>
                    </td>
                    <td>
                      <span style={{ color: item.value >= item.target ? '#10b981' : '#ef4444' }}>
                        {(item.value - item.target).toFixed(1)}%
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
    const timeout = setTimeout(() => setProgress(99.8), 300);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="efficiency-card">
      <div className="efficiency-header">
        <span className="efficiency-title">Xalqaro Xavfsizlik</span>
        <span className="efficiency-trend" style={{ color: '#16a34a' }}>✔️</span>
      </div>
      <div className="eff-bar-row">
        <div className="eff-bar-label">Xavfsiz xalqaro reyslar</div>
        <div className="eff-bar-percent" style={{ color: '#16a34a' }}>99.8%</div>
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
        <div className="safety-badge badge-red">Xalqaro hodisalar <span>1</span></div>
        <div className="safety-badge badge-orange">Bojxona muammolari <span>3</span></div>
        <div className="safety-badge badge-blue">Xalqaro standartlar <span>15</span></div>
      </div>
    </div>
  );
} 