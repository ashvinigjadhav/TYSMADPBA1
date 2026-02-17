import React from 'react'

export default function Exhibitions(){
  const shows = [
    {title:'Rain and Silence — Solo', venue:'Jehangir Art Gallery, Mumbai', date:'March 2024'},
    {title:'Urban Tides', venue:'Pune Art Collective', date:'September 2023'},
  ]
  return (
    <section>
      <h2>Exhibitions & Projects</h2>
      <ul style={{color:'var(--muted)'}}>
        {shows.map((s,i)=> <li key={i}><strong>{s.title}</strong> — {s.venue} • {s.date}</li>)}
      </ul>
    </section>
  )
}