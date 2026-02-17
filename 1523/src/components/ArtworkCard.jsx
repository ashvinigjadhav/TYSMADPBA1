import React from 'react'
import { Link } from 'react-router-dom'

export default function ArtworkCard({art}){
  return (
    <article className="card fade-up">
      <Link to={`/artwork/${art.id}`}> 
        <img src={art.images[0]} alt={art.title} loading="lazy" />
      </Link>
      <div className="meta">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <strong>{art.title}</strong>
          <div style={{fontSize:12,color:'var(--muted)'}}>{art.year}</div>
        </div>
        <div style={{color:'var(--muted)',fontSize:13,marginTop:6}}>{art.medium} • {art.dimensions}</div>
        <div style={{marginTop:8,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:700}}>{art.price}</div>
          <div style={{fontSize:12,color: art.availability==='Available' ? 'var(--accent-2)' : 'var(--muted)'}}>{art.availability}</div>
        </div>
      </div>
    </article>
  )
}