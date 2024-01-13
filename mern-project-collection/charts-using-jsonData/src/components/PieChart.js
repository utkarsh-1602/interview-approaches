"use client"
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './PieChart.module.css'
import randomColor from 'randomcolor'

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({ jsonData }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    // Process your JSON data and extract relevant information for the pie chart
    const limitedData = jsonData.slice(0, 15); // Limit to the first 15 items

    const processedData = limitedData.map(() => ({
      data: [1,2,3,4,5,6,7,8], 
      backgroundColor: randomColor({ luminosity: 'dark', format: 'rgba' }),
      borderColor: 'rgba(255, 255, 255, 4)',
      borderWidth: 2,
    }));

    setChartData({
      labels: limitedData.map((item) => item.topic),
      datasets: processedData,
    });
  }, [jsonData]);

  return (
    <div className='text-black flex items-center justify-center m-9'>
      <div className={styles.container}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};


export default PieChart
