import React,{useEffect,useState  } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../Components/header";
import { Home } from "../Components/Home";
import  Template  from '../Components/template';

export const Router = () => {
    const [shouldRedirect, setShouldRedirect] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      // If shouldRedirect is true, navigate to the root page and then set it to false.
      navigate('/');
      setShouldRedirect(false);
    }
  }, [shouldRedirect, navigate]);
    return <>
        <Container>
            <Header />
        </Container>
        <Routes>
            <Route index path='/' element={<Template />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    </>
}
