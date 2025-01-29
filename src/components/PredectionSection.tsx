"use client"
import React from 'react'
import MyLineChart from './predictioncharts/linegraph';

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
function PredectionSection() {
  return (
    <section className='bg-white shadow-md p-4 flex flex-wrap items-center rounded-lg ml-1 mt-3'>
        <div>
        <MyLineChart />
        </div>
        <div className='w-full flex justify-between flex-wrap'>
            <p>Prediction for the next 5 months</p> <h2>Status: <span>Good</span></h2>
        </div>
    </section>
  )
}

export default PredectionSection