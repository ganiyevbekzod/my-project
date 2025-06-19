import { BarChart } from '@mui/x-charts/BarChart';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    "Toshkent",
    "Qoraqalpogʻiston",
    "Andijon",
    "Fargʻona",
    "Namangan",
    "Samarqand",
    "Buxoro",
    "Xorazm",
    "Surxondaryo",
    "Qashqadaryo",
    "Jizzax",
    "Sirdaryo",
    "Navoiy"
];

export default function Mijozlarcharts() {
    return (
        <BarChart
            height={400}
            series={[
                { data: pData, label: 'Jismoniy shaxslar soni', id: 'pvId', stack: 'total' },
                { data: uData, label: 'Yuridik shaxslar soni', id: 'uvId', stack: 'total' },
            ]}
            xAxis={[{ data: xLabels }]}
            yAxis={[{ width: 50 }]}
        />
    );
}




