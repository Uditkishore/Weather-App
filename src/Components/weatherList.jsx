import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const mainDiv = {
  display: 'flex',
  height: '200px',
};

const smallDiv = {
  display: 'flex',
  height: '200px',
  alignItems: 'center',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
};

const WeatherItem = ({ date, icon, tempMax, tempMin, weatherMain }) => (
  <Container sx={{ textAlign: 'center' }}>
    <Typography>{date}</Typography>
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
      <Typography>{tempMax}°</Typography>
      <Typography>{tempMin}°</Typography>
    </Box>
    <img width={'75%'} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={weatherMain} />
    <Typography>{weatherMain}</Typography>
  </Container>
);

const WeatherList = ({ props }) => {
  const data = props();

  const getDate = (unixTimestamp) => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(unixTimestamp * 1000); // Unix timestamp is in seconds, so convert to milliseconds

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
    const day = date.getUTCDate();
    const dayOfWeek = weekday[date.getUTCDay()];
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} (${dayOfWeek})`.replace(/\(|\)/g, '');

    return formattedDate;
  };

  return (
    <div>
      <Box sx={mainDiv}>
        {data && data.length ? (
          <Container sx={smallDiv}>
            {data.map((e, i) => {
              const day = getDate(e.dt).split(' ')[1];
              const icon = e.weather[0].icon;
              const tempMax = Math.floor(e.temp.max);
              const tempMin = Math.floor(e.temp.min);
              const weatherMain = e.weather[0].main;

              return (
                <WeatherItem
                  key={i}
                  date={day}
                  icon={icon}
                  tempMax={tempMax}
                  tempMin={tempMin}
                  weatherMain={weatherMain}
                />
              );
            })}
          </Container>
        ) : (
          <Container sx={{ textAlign: 'center' }}>Loading</Container>
        )}
      </Box>
    </div>
  );
};

export default WeatherList;
