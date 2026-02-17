import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Toasts from './components/Toasts'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect } from 'react'

export default function App(){
  useEffect(() => {
    document.title = 'Voro - Exquisite Jewellery'
  }, [])
  return (
    <>
      <Navbar />
      <main className="mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
      <Toasts />
    </>
  )
}
