import React from 'react'

export default function FilterBar({tags, active, onChange}){
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:12}}>
      <button className="btn btn-outline" onClick={()=>onChange(null)}>All</button>
      {tags.map(t=> (
        <button key={t} className="btn" style={{background: active===t? 'var(--accent-2)': 'transparent', color: active===t? '#05132b' : 'var(--muted)'}} onClick={()=>onChange(t)}>{t}</button>
      ))}
    </div>
  )
}