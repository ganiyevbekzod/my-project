import React from "react";
import ReactApexChart from "react-apexcharts";
import { BarChart } from '@mui/x-charts/BarChart';
import './PulTushumlariChart.css';

export default function ChartsOverviewDemo() {
    const options = {
        chart: {
            type: 'bar',
            height: 300,
            toolbar: {
                show: false,
            },
            background: 'transparent',
            fontFamily: 'Inter, sans-serif',
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '60%',
                endingShape: 'rounded',
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        xaxis: {
            categories: ['TEXPD1', 'TEXPD2', 'TEXPD3', 'TEXPD4', 'TEXPD5', 'TEXPD6', 'TEXPD7', 'TEXPD8', 'TEXPD9', 'TEXPD10'],
            labels: {
                style: {
                    colors: '#05CD99',
                    fontSize: '12px',
                    fontWeight: '500',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#A3AED0',
                    fontSize: '12px',
                },
            },
        },
        fill: {
            colors: ['#4318FF'],
        },
        colors: ['#4318FF'],
        grid: {
            show: true,
            borderColor: 'rgba(226, 232, 240, 0.5)',
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
    };

    const series = [
        {
            name: 'Pul tushumlari',
            data: [60, 50, 15, 25, 49, 30, 29, 44, 24, 38]
        }
    ];

    return (
        <div className="pul-tushumlari-card">
            <ReactApexChart options={options} series={series} type="bar" height={300} />
        </div>
    );
}

export const Overview = () => {
    const [state] = React.useState({
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Umumiy cheklovlar soni',
                            formatter: function (w) {
                                return 249
                            }
                        }
                    }
                }
            },
            labels: ['Davlat', 'Stansiya', 'Vagon turi', 'Qabul qiluvchi'],
        },
    });
    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="radialBar"
                    height={350} />
            </div>
            <div id="html-dist">
            </div>
        </div>
    );
}