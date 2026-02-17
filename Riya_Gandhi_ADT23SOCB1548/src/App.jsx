import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import MedicineBasket from "./pages/MedicineBasket";
import MedicineSchedule from "./pages/MedicineSchedule";
import MedicineHealth from "./pages/MedicineHealth";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<MedicineBasket />} />
          <Route path="/schedule" element={<MedicineSchedule />} />
          <Route path="/health" element={<MedicineHealth />} />
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
