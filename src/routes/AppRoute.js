import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Statistic from "../components/Statistic";

const AppRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/:id/edit" element={<Form />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
