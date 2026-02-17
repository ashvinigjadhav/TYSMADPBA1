import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { authenticateUser } = useCart()
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    if(authenticateUser(email, password)){
      nav('/')
    }
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="mb-4">Login</h3>
            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
