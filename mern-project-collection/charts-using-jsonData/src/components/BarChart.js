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

const BarChart = ({jsonData}) => {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  })

  const [chartOptions, setChartOptions] = useState({
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Revenue',
      },
      font: {
        weight: 'bold',
        color: 'black',
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  })

  useEffect(() => {

    // Process your JSON data and extract relevant information for the chart
    const processedData = jsonData.map((item) => ({
      label: item.intensity,
      data: [item.relevance], 
      backgroundColor: 'rgba(53, 162, 235, 60)',
    }));

    setChartData({
      labels: jsonData.map((item) => item.intensity),
      datasets: processedData,
    });

  }, [jsonData])

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