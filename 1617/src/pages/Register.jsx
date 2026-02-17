import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Register(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { registerUser } = useCart()
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    if(registerUser(name, email, password)){
      nav('/login')
    }
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="mb-4">Create Account</h3>
            <form onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input className="form-control" value={name} onChange={e=>setName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" value={password} onChange={e=>setPassword(e.target.value)} type="password" required minLength={6} />
              </div>
              <button className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
