import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, getCurrentUser } from "../utils/auth";

export default function Register(){
  const nav = useNavigate();
  const [form, setForm] = useState({name:"", email:"", password:""});
  const [error, setError] = useState("");

  function handleChange(e){
    setForm(s=> ({...s,[e.target.name]: e.target.value}));
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!form.name || !form.email || !form.password){ setError("Please fill all fields"); return; }
    
    registerUser(form);
    nav("/gallery");
  }

  
  if(getCurrentUser()) {
    nav("/gallery");
    return null;
  }

  return (
    <section style={{maxWidth:540}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={{display:"grid",gap:10}}>
        <label className="label">Name</label>
        <input name="name" className="input" value={form.name} onChange={handleChange} />
        <label className="label">Email</label>
        <input name="email" className="input" value={form.email} onChange={handleChange} />
        <label className="label">Password</label>
        <input name="password" type="password" className="input" value={form.password} onChange={handleChange} />
        {error && <div style={{color:"salmon"}}>{error}</div>}
        <div style={{marginTop:8}}>
          <button className="btn btn-primary" type="submit">Create account</button>
        </div>
      </form>
    </section>
  );
}