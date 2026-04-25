'use client';

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrasi modul Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const ChartVolume: React.FC = () => {
    // Label jam (00:00 - 23:00)
    const labels = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

    const data: ChartData<'line'> = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Total Chat',
                data: [12, 19, 3, 5, 2, 3, 10, 45, 60, 55, 40, 35, 30, 45, 50, 75, 80, 40, 30, 25, 20, 15, 10, 5],
                // Menggunakan palette warna biru yang senada dengan ChartBar Anda (rgba 151, 168, 215)
                borderColor: 'rgba(151, 168, 215, 1)',
                backgroundColor: 'rgba(151, 168, 215, 0.2)',
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 6,
                borderWidth: 1
            },
            {
                fill: true,
                label: 'Berhasil Dijawab (RAG)',
                data: [10, 15, 2, 4, 1, 3, 8, 40, 55, 50, 38, 30, 28, 40, 48, 70, 75, 38, 28, 22, 18, 12, 8, 4],
                borderColor: 'rgba(75, 192, 192, 1)', // Warna hijau toska untuk pembeda
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 1
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                align: 'end' as const, // Align ke kanan sesuai style admin modern
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    color: '#BABABA', // Warna teks legend disamakan
                    font: {
                        size: 8,
                        family: 'Arial'
                    }
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#1f2937',
                padding: 12,
                cornerRadius: 8,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Samakan dengan style ChartBar (Clean)
                },
                ticks: {
                    maxRotation: 0,
                    autoSkip: true,
                    maxTicksLimit: 12,
                    color: '#BABABA', // Samakan dengan style ChartBar
                    font: {
                        size: 11,
                        family: 'Arial',
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(212, 212, 212, 0.2)', // Garis horizontal tipis identik ChartBar
                },
                ticks: {
                    stepSize: 20,
                    color: '#D4D4D4', // Samakan dengan style ChartBar
                    font: {
                        size: 12
                    }
                }
            },
        },
    };

    return (
        /* Sesuai permintaan: Style pembungkus, tinggi 350px, position relative */
        <div style={{ position: 'relative', height: '350px', width: '100%' }}>
            <Line options={options} data={data} />
        </div>
    );
};

export default ChartVolume;