import React from 'react'

export default function About(){
  return (
    <section className="page-section about container-fluid container-xxl py-5" id="about">
      <div className="section-header mb-5 text-center">
        <h2 className="display-4 fw-bold text-dark">About Us</h2>
        <p className="lead text-dark">Our Commitment to Craftsmanship</p>
      </div>
      <div className="row align-items-center g-5 about-container">
        <div className="col-md-6 col-12 about-image">
          <img src="https://www.sacredfig.in/cdn/shop/files/WhatsApp_Image_2025-06-20_at_11.10.07_AM-Photoroom.jpg" alt="Jewelry Crafting" className="img-fluid rounded shadow-lg" />
        </div>
        <div className="col-md-6 col-12 about-content">
          <h3 className="h2 mb-4 text-primary">Crafting Beauty Since 2025</h3>
          <p className="text-dark">Voro is a dedicated team of artisans committed to bringing you the finest handcrafted jewelry. Our mission is to create pieces that not only adorn but also tell a story, embodying timeless elegance and personal significance.</p>
        </div>
      </div>
    </section>
  )
}
