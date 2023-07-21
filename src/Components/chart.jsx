import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Typography, Box } from '@mui/material';

const Chartdata = ({ props }) => {
  const getDate = (unixTimestamp) => {
    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(unixTimestamp * 1000); // Unix timestamp is in seconds, so convert to milliseconds

    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
    const day = date.getUTCDate().toString().padStart(2, '0');
    const dayOfWeek = weekday[date.getUTCDay()];
    const formattedDate = `${year}-${month}-${day} (${dayOfWeek})`;

    return formattedDate;
  };

  const data = props();

  let categoryData = [];
  let seriesData = [];

  if (data?.daily) {
    data.daily.forEach((e) => {
      let day = getDate(e.dt).split(' ')[1];
      categoryData.push(day);

      let temp = e.feels_like.day;
      seriesData.push(temp);
    });
  }

  const options = {
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: categoryData,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 90, 120],
      },
    },
  };

  const series = [
    {
      name: 'Temperature',
      type: 'area',
      data: seriesData,
    },
  ];

  return (
    <div>
      <Box sx={{ border: 1, p: 2, backgroundColor: 'skyblue' }}>
        <Typography>
          {data.name}, {data.timezone}
        </Typography>
        <Box sx={{ height: '350px', mt: 2 }}>
          <Chart options={options} series={series} type="area" height={350} />
        </Box>
      </Box>
    </div>
  );
};

export default Chartdata;
