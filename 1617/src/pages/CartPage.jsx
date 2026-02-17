import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage(){
  const { cart, updateQuantity, removeFromCart, subtotal, total, DELIVERY_FEE, clearCart, showToast } = useCart()

  function handleCheckout(){
    showToast('👑 Golden Order Confirmed! Check modal for details (UI simplified).', 'success', 3500)
    clearCart()
  }

  if (cart.length === 0) {
    return (
      <section className="page-section cart bg-light py-5" id="cart">
        <div className="container text-center">
          <div className="text-center p-5 bg-white rounded shadow-sm">
            <i className="fas fa-shopping-basket fa-4x text-secondary mb-3"></i>
            <p className="lead text-dark">Your cart is empty</p>
            <a href="/menu" className="btn btn-outline-primary mt-3">Browse Collections</a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-section cart bg-light py-5" id="cart">
      <div className="container-fluid container-xxl">
        <div className="section-header mb-5 text-center">
          <h2 className="display-4 fw-bold text-dark">Your Cart</h2>
          <p className="lead text-dark">Review your selected treasures</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="table-responsive d-none d-lg-block">
              <table className="table table-hover align-middle bg-white rounded shadow-sm">
                <thead className="table-primary">
                  <tr>
                    <th>Product</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-end">Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.imgUrl} alt={item.name} style={{width: 80, height:80, objectFit:'cover', borderRadius:12, border: '4px solid var(--primary-color)'}} className="me-3" />
                          <div>
                            <span className="fw-bold text-dark h6">{item.name}</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">₹{item.price.toLocaleString('en-IN')}</td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <button className="btn btn-sm btn-outline-warning me-2" onClick={() => updateQuantity(item.id, -1)}>−</button>
                          <span className="fw-bold mx-3">{item.quantity}</span>
                          <button className="btn btn-sm btn-outline-warning ms-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                      </td>
                      <td className="text-end">₹{(item.price * item.quantity).toLocaleString('en-IN')}</td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile representation */}
            <div className="d-lg-none">
              {cart.map(item => (
                <div key={item.id} className="card mb-4 shadow-lg cart-item-mobile">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img src={item.imgUrl} alt={item.name} className="img-fluid rounded-3" />
                      </div>
                      <div className="col-8">
                        <h6 className="card-title mb-2 text-dark fw-bold">{item.name}</h6>
                        <p className="text-primary fw-bold mb-1 h6">₹{item.price.toLocaleString('en-IN')}</p>
                        <p className="text-secondary mb-3 small fw-bold">Total: ₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="btn-group" role="group">
                            <button className="btn btn-sm btn-outline-warning" onClick={() => updateQuantity(item.id, -1)}>−</button>
                            <button className="btn btn-sm btn-light disabled">{item.quantity}</button>
                            <button className="btn btn-sm btn-outline-warning" onClick={() => updateQuantity(item.id, 1)}>+</button>
                          </div>
                          <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card bg-gold-light h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title h4 mb-4 pb-3 border-bottom border-warning text-dark">Order Summary</h3>
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-normal text-dark">Subtotal</span>
                  <span className="fw-bold text-dark">₹{subtotal().toLocaleString('en-IN')}</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-normal text-dark">Delivery Fee</span>
                  <span className="fw-bold text-dark">₹{DELIVERY_FEE.toLocaleString('en-IN')}</span>
                </div>
                <div className="d-flex justify-content-between pt-3 border-top border-warning total">
                  <span className="h5 fw-bold text-dark">Total</span>
                  <span className="h5 fw-bold text-primary">₹{total().toLocaleString('en-IN')}</span>
                </div>
                <button className="btn btn-primary btn-lg w-100 mt-4" onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
