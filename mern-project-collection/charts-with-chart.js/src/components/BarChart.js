"use client"
import React, { useEffect, useState } from 'react'
import styles from './BarChart.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

  const [chartData, setChartData] = useState({
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      lables: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales $',
          data: [15234, 20000, 18000, 25000, 30000, 344663],
          backgroundColor: 'rgba(955, 99, 222, 10)',
        },
        {
          label: 'Profit +',
          data:[5000, 7000, 6000, 8000, 10000, 120000],
          backgroundColor: 'rgba(53, 162, 235, 60)',
        },
      ],
    })

    setChartOptions({

      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Daily Revenue',
        },
        font: {
          weight: 'bold',
          color: 'black',
        }  
      },

      maintainAspectRatio: false,
      responsive: true

    })

  })

  return (
    <>
      <div className='text-black flex items-center justify-center' >      
      <div className={styles.container}>
      <Bar data={chartData} options={chartOptions}/>
      </div>
      </div>
    </>
  )
}

export default BarChart