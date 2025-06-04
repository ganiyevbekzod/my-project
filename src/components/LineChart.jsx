import React from 'react';
import { Line } from 'react-chartjs-2'; // react-chartjs-2 kutubxonasini import qilish
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js kutubxonasini ro'yxatdan o'tkazish
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  // Diagramma uchun ma'lumotlar
  const chartData = {
    labels: data.labels,  // X o'qi uchun oylik nomlar
    datasets: [
      {
        label: 'Sales Data',  // Diagramma nomi
        data: data.values,    // Sotuvlar yoki boshqa qiymatlar
        borderColor: 'rgba(75,192,192,1)', // Chiziq rangi
        backgroundColor: 'rgba(75,192,192,0.2)', // Chiziqning fon rangi
        fill: true, // Grafikni to'ldirish
        tension: 0.4, // Chiziqning yumshoqligi
      },
    ],
  };

  // Grafik uchun opsiyalar
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data', // Diagramma sarlavhasi
      },
      legend: {
        display: true,  // Legendni ko'rsatish
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month', // X o'qi nomi
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // X o'qidagi grid kataklarining rangi (ochiq kulrang)
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount', // Y o'qi nomi
        },
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Y o'qidagi grid kataklarining rangi (ochiq kulrang)
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 8,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
