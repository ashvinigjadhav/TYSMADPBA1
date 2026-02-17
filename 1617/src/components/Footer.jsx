import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-5 pt-5">
      <div className="container text-center py-4">
        <p className="mb-0">© {new Date().getFullYear()} Voro — Exquisite Jewellery. All rights reserved.</p>
      </div>
    </footer>
  )
}
