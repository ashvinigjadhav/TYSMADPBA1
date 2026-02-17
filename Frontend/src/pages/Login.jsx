import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser } from "../utils/auth";

export default function Login(){
  const nav = useNavigate();
  const [form, setForm] = useState({email:"", password:""});
  const [error, setError] = useState("");

  function handleChange(e){ setForm(s=>({...s,[e.target.name]: e.target.value})); }

  function handleSubmit(e){
    e.preventDefault();
    const user = loginUser(form);
    if(!user){ setError("Invalid credentials. If you don't have an account, please register."); return; }
    nav("/gallery");
  }

  if(getCurrentUser()){
    nav("/gallery");
    return null;
  }

  return (
    <section style={{maxWidth:540}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{display:"grid",gap:10}}>
        <label className="label">Email</label>
        <input name="email" className="input" value={form.email} onChange={handleChange} />
        <label className="label">Password</label>
        <input name="password" type="password" className="input" value={form.password} onChange={handleChange} />
        {error && <div style={{color:"salmon"}}>{error}</div>}
        <div style={{marginTop:8}}>
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}