import React, { createContext, useContext, useEffect, useState } from 'react'
import productsData from '../data/products'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

const DELIVERY_FEE = 250
const CART_KEY = 'VoroGoldenCart'
const USER_KEY = 'VoroGoldenUser'

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [toasts, setToasts] = useState([])
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  })

  useEffect(() => {
    const raw = localStorage.getItem(CART_KEY)
    if (raw) setCart(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
    else localStorage.removeItem(USER_KEY)
  }, [user])

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
    showToast(`✨ ${product.name} added to cart!`, 'success')
  }

  function updateQuantity(id, delta) {
    setCart(prev => {
      const next = prev.map(p => p.id === id ? { ...p, quantity: p.quantity + delta } : p)
      return next.filter(p => p.quantity > 0)
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id))
    showToast('🗑️ Item removed', 'success')
  }

  function clearCart() {
    setCart([])
  }

  function subtotal() {
    return cart.reduce((s, p) => s + p.price * p.quantity, 0)
  }

  function total() {
    return subtotal() + (cart.length > 0 ? DELIVERY_FEE : 0)
  }

  // Simple mock registration/auth (client-side only)
  function registerUser(name, email, password) {
    const userObj = { username: name, email }
    setUser(userObj)
    showToast('🎉 Registered successfully!', 'success')
    return true
  }

  function authenticateUser(email, password) {
    const raw = localStorage.getItem(USER_KEY)
    if (!raw) {
      showToast('❌ No user found. Please register first.', 'error')
      return false
    }
    const u = JSON.parse(raw)
    if (u.email === email) {
      setUser(u)
      showToast(`🎉 Welcome back, ${u.username}!`, 'success')
      return true
    }
    showToast('❌ Wrong credentials', 'error')
    return false
  }

  function logout() {
    setUser(null)
    showToast('Logged out', 'info')
  }

  // Toasts
  function showToast(message, type = 'info', duration = 3000) {
    const id = Date.now().toString()
    setToasts(t => [...t, { id, message, type }])
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id))
    }, duration)
  }

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    total,
    DELIVERY_FEE,
    productsData,
    user,
    registerUser,
    authenticateUser,
    logout,
    toasts,
    showToast
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
