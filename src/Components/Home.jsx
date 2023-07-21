import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../Redux/action'
import { Box, Container, CircularProgress } from "@mui/material";
import Chartdata from "./chart";
import Footer from "./footer";
import WeatherList from "./weatherList";


export const Home = () => {

    const api = useSelector((getData) => getData.appReducer) // Getting the date from redux store.

    const sendData = () => {
        return api.data.daily
    }

    const sendApexChartData = () => {
        return api.data
    }

    return <>
        {api?.isLoading ? (
            <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
            <Container fixed sx={search}>
                <WeatherList props={sendData} />
                <Chartdata props={sendApexChartData} />
                <Footer props={sendData}/>
            </Container>
        )}
    </>
};

const search = {
    margin: 'auto',
    padding: '20px'
};
