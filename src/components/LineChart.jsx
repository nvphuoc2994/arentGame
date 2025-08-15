import {
    Chart,
    registerables,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            mode: 'index',
            position: 'nearest',
            intersect: false,
        },
    },
    scales: {
        x: {
            ticks: {
                color: 'white',
                font: {
                    size: 12,
                    weight: '300',
                    family: 'Hiragino Kaku Gothic Pro',
                },
            },
            grid: {
                display: true,
                color: 'white',
                lineWidth: 0.5,
            },
        },
        y: {
            display: false,
        },
    },
};

export function LineChart({ data }) {
    return <Line data={data} options={options} />;
}
