import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/Home";
import Rooms from "./components/Rooms";
import Room from "./components/Room";
import Profile from "./components/Profile";
import SetProfile from "./components/SetProfile";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

 
const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";

const isProfileComplete = () => {
  const p = JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}");
  return !!p.displayName;
};

export default function App() {
  return (
<BrowserRouter>
  <Routes>

     
    <Route path="/landing" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

     
    <Route element={<Layout />}>
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create" element={<Rooms />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/room/:id" element={<Room />} />
      <Route path="/" element={<Landing />} />
      <Route path="/set-profile" element={<SetProfile />} />
    </Route>

  </Routes>
</BrowserRouter>

  );
}
