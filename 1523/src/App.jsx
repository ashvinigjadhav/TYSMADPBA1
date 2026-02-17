// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// core UI
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages (make sure these files exist)
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ArtworkDetails from "./pages/ArtworkDetails";
import Exhibitions from "./pages/Exhibitions";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
// auth / cart pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

// route guard
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from './pages/Checkout';

export default function App() {
  const location = useLocation();

  return (
    <div className="app-root">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="main-content"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artwork/:id" element={<ArtworkDetails />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected cart route (only accessible when logged in) */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="/checkout" element={<Checkout/>} />

            
            {/* Add a fallback route if you want */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}