import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Template = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
  };

  const welcomeTextStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  };

  const instructionStyle = {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  };

  return (
    <Box style={containerStyle}>
      <Typography variant="h2" style={welcomeTextStyle}>
        Welcome to the Weather App
      </Typography>
      <Typography variant="body1" style={instructionStyle}>
        Please enter your location above to get the weather forecast:
      </Typography>
    </Box>
  );
};

export default Template;
