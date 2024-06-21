import React from 'react';
import { Paper, Typography } from '@mui/material';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

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

 export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
  },

  // Modify the axis by adding scales
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      display: false,
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.4,
    },
  ],
};

const GraphArea : React.FC = () =>{
  return (
    <Paper
     sx={{
      p: 3,
      boxSizing: 'border-box',
      flex: 1,
      width: '100px',
      m: 1
     }}
     >
      <div>
        <Typography sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          50 <div style={{
            display: 'inline-block',
            color: 'green',
            fontSize: '8px',
          }}>-40%</div>
        </Typography>
        <p style={{
          fontSize: '11px',
          fontWeight: 'lighter'
        }}>Title</p>
      </div>
      <Line options={options} data={data} />
    </Paper>
  )
}

export default GraphArea;