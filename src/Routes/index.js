import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/LandingPAge";
import Aboutindex from "../components/About";
import Contactindex from "../components/ContactUs";


const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutindex/>} />
        <Route path="/contactus" element={<Contactindex/>} />
        
      </Routes>
    </>
  );
};
 
export default AppRoute;
