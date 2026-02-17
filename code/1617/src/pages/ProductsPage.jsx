import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function ProductsPage({ preview = false }) {
  const { productsData, addToCart } = useCart()
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...Array.from(new Set(productsData.map(p => p.category)))]

  const items = productsData.filter(p => filter === 'all' ? true : p.category === filter)
  const shownItems = preview ? items.slice(0, 3) : items

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4 menu-filter">
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className={`btn btn-outline-primary filter-btn ${filter === cat ? 'active' : ''}`}>
            {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 grid">
        {shownItems.map(item => (
          <div key={item.id} className="col item" data-category={item.category}>
            <div className="card h-100 shadow-sm border-0">
              <div className="item-img position-relative overflow-hidden" style={{height: 250}}>
                <img src={item.imgUrl} className="card-img-top h-100 w-100 object-fit-cover" alt={item.name} />
                {item.badge && <span className="badge bg-danger position-absolute top-0 end-0 m-2 text-white">{item.badge}</span>}
              </div>
              <div className="card-body item-info">
                <h3 className="card-title h5 text-dark">{item.name}</h3>
                <p className="card-text text-secondary small">Premium collection piece</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="price h4 mb-0 text-primary">₹{item.price.toLocaleString('en-IN')}</span>
                  <button onClick={() => addToCart(item)} className="btn btn-sm btn-primary add-to-cart-btn">
                    <i className="fas fa-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
