import React from 'react'

export default function About(){
  return (
    <section>
      <div style={{display:'grid',gridTemplateColumns:'240px 1fr',gap:20,alignItems:'start'}}>
        <div style={{borderRadius:12,overflow:'hidden'}}>
          <img src="/assets/portrait.jpg" alt="Artist portrait" style={{width:'100%',height:300,objectFit:'cover'}} />
        </div>
        <div>
          <h2>About Aarav Patel</h2>
          <p style={{color:'var(--muted)'}}>Born and based in Pune, Aarav works across oil painting and ink drawing. His practice examines urban memory and monsoon-lit atmospheres. His works have been exhibited across Maharashtra and featured in local art publications.</p>

          <h3 style={{marginTop:18}}>CV & Exhibitions</h3>
          <ul style={{color:'var(--muted)'}}>
            <li>Solo Exhibition: "Rain and Silence" — Jehangir Art Gallery, Mumbai (2024)</li>
            <li>Group Show: "Urban Tides" — Pune Art Collective (2023)</li>
            <li>Residency: Kala Bhavan, Pune (2022)</li>
          </ul>

          <a href="/assets/CV-Aarav-Patel.pdf" className="btn btn-outline" style={{marginTop:12}}>Download CV</a>
        </div>
      </div>
    </section>
  )
}