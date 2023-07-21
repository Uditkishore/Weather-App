import React from 'react';
import { Box, Typography } from "@mui/material";

const box = {
  display: 'flex',
  padding: '10px',
  // backgroundColor: "lightgreen",
  marginTop: "10px",
  justifyContent: "space-around"
};

const smallBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "48%",
  border: "1px solid black",
  backgroundColor: "black",
  color: "white",
  borderRadius: "10px"
};

const Footer = ({ props }) => {
    let data = props();
  const dataObj = data ? data[0] : null;

  return (
    <Box>
      <Box sx={box}>
        <Box sx={smallBox}>
          <Typography>Max Temp</Typography>
          <Typography sx={{ color: 'green' }}>{dataObj ? dataObj.temp.max : ""}</Typography>
        </Box>
        <Box sx={smallBox}>
          <Typography>Min Temp</Typography>
          <Typography sx={{ color: 'green' }}>{dataObj ? dataObj.temp.min : ""}</Typography>
        </Box>
      </Box>
      <Box sx={box}>
        <Box sx={smallBox}>
          <Typography>Feels Like</Typography>
          <Typography sx={{ color: 'green' }}>{dataObj ? dataObj.feels_like.day : ""}</Typography>
        </Box>
        <Box sx={smallBox}>
          <Typography>Forecast</Typography>
          <Typography sx={{ color: 'green' }}>{dataObj ? dataObj.weather[0].description : ""}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
