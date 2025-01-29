"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import MyLineChart from './predictioncharts/linegraph';


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Something', 'Other'], // Add more labels as needed
  datasets: [
    {
      data: [2811, 1000], // Adjust values as needed
      backgroundColor: ['#007bff', '#00cccc'], // Customize colors
      hoverBackgroundColor: ['#0069d9', '#00b3b3'],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'bottom', // Adjust legend position
    },
  },
  // Add this to reduce the chart size
  aspectRatio: 8, // Adjust this value to control the aspect ratio
};

function PredectionSection() {
  return (
    <section className='bg-white h-72 shadow-md p-4 flex flex-wrap items-center rounded-lg ml-1 mt-3'>
        <MyLineChart />
    </section>
  )
}

export default PredectionSection