import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx' // Added Contact import
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import './App.css'

function App() {
  return (
    <div className="main-app-container">
     
      <Header />
      <main className="main-content "> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
