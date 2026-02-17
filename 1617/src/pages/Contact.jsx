import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Contact(){
  const { showToast } = useCart()
  const [form, setForm] = useState({ name:'', email:'', subject:'', method:'email', urgent:false, message:'' })

  function handleChange(e){
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.subject){
      showToast('❌ Please fill required fields', 'error')
      return
    }
    showToast('✅ Golden message sent successfully!', 'success')
    setForm({ name:'', email:'', subject:'', method:'email', urgent:false, message:'' })
  }

  return (
    <section className="page-section contact bg-light py-5" id="contact">
      <div className="container-fluid container-xxl">
        <div className="section-header mb-5 text-center">
          <h2 className="display-4 fw-bold text-dark">Contact Us</h2>
          <p className="lead text-dark">We'd love to hear from you</p>
        </div>

        <div className="row g-5 contact-container">
          <div className="col-md-4 contact-info">
            <div className="mb-4 d-flex align-items-start info-item">
              <i className="fas fa-map-marker-alt fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h3 className="h5 fw-bold text-dark">Visit Us</h3>
                <p className="text-dark mb-0">Jewelry Street, Diamond Road, Boutique No. 101</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start info-item">
              <i className="fas fa-phone-alt fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h3 className="h5 fw-bold text-dark">Call Us</h3>
                <p className="text-dark mb-0">+91 9876543210</p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start info-item">
              <i className="fas fa-envelope fa-2x text-primary me-3 mt-1"></i>
              <div>
                <h3 className="h5 fw-bold text-dark">Email Us</h3>
                <p className="text-dark mb-0">supportvoro@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-8 contact-form">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold text-dark">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold text-dark">Email *</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold text-dark">Subject *</label>
                  <select className="form-select" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Choose a subject...</option>
                    <option>General Inquiry</option>
                    <option>Custom Order</option>
                    <option>Returns/Exchanges</option>
                    <option>Careers</option>
                  </select>
                </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold text-dark">Preferred Contact Method</label>
                    <div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" name="method" value="email" checked={form.method==='email'} onChange={handleChange} type="radio" />
                        <label className="form-check-label">Email</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" name="method" value="phone" checked={form.method==='phone'} onChange={handleChange} type="radio" />
                        <label className="form-check-label">Phone</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input name="urgent" onChange={handleChange} checked={form.urgent} className="form-check-input" type="checkbox" />
                      <label className="form-check-label fw-bold text-dark">Mark as Urgent</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold text-dark">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="5"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
