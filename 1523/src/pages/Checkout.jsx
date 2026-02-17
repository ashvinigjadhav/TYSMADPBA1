import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [total, setTotal] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('artist_cart')) || [];
    const storedUser = JSON.parse(localStorage.getItem('artist_user'));
    setCart(storedCart);
    setUser(storedUser);

    const totalAmount = storedCart.reduce((sum, item) => {
      const price = Number(item.price.replace(/[^0-9.-]+/g, ''));
      return sum + price * (item.qty || 1);
    }, 0);
    setTotal(totalAmount);
  }, []);

  const handlePayment = () => {
    if (!user) {
      alert('Please log in before making a payment.');
      navigate('/login');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty.');
      navigate('/cart');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      alert(`Payment of ₹${total.toLocaleString('en-IN')} successful! Thank you for your purchase.`);
      localStorage.removeItem('artist_cart');
      setIsProcessing(false);
      navigate('/gallery');
    }, 2000);
  };

  return (
    <section style={{ padding: '32px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some artworks before proceeding to checkout.</p>
      ) : (
        <div>
          <h3>Order Summary</h3>
          <div style={{ marginTop: '16px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', padding: '16px' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>{item.title} (x{item.qty || 1})</span>
                <span>₹{(Number(item.price.replace(/[^0-9.-]+/g, '')) * (item.qty || 1)).toLocaleString('en-IN')}</span>
              </div>
            ))}
            <hr style={{ margin: '16px 0', border: '1px solid rgba(255,255,255,0.1)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
              <span>Total:</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3>Payment Method</h3>
            <p style={{ color: 'var(--muted)' }}>For now, this is a simulated checkout for demo purposes.</p>
          </div>

          <button
            className="btn btn-primary"
            onClick={handlePayment}
            disabled={isProcessing}
            style={{ marginTop: '20px', width: '100%', padding: '12px', borderRadius: '10px' }}
          >
            {isProcessing ? 'Processing Payment...' : `Pay ₹${total.toLocaleString('en-IN')}`}
          </button>
        </div>
      )}
    </section>
  );
}