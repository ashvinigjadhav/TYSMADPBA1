import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div>
        <div style={{fontWeight:700}}>Aarav Patel — Artist</div>
        <div style={{color:'var(--muted)'}}>C/o 42, Shukrawar Peth, Pune 411002, Maharashtra, India</div>
        <div style={{color:'var(--muted)',marginTop:6}}>Email: aarav.patel.art@example.com | Phone: +91-98765-43210</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <div style={{fontWeight:700}}>Follow</div>
        <div style={{color:'var(--muted)'}}>Instagram • Behance • LinkedIn</div>
        <div style={{marginTop:10,color:'var(--muted)'}}>© {new Date().getFullYear()} Aarav Patel</div>
      </div>
    </footer>
  )
}