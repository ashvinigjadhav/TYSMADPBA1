import React from 'react'
import { useCart } from '../context/CartContext'

export default function Toasts() {
  const { toasts } = useCart()

  return (
    <div aria-live="polite" aria-atomic="true">
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999 }}>
        {toasts.map(t => (
          <div key={t.id} className={`toast show ${t.type}`} style={{ marginBottom: '0.5rem', minWidth: 260 }}>
            <div className="d-flex align-items-center">
              <div className="me-2">
                {t.type === 'success' && <i className="fas fa-check-circle"></i>}
                {t.type === 'error' && <i className="fas fa-exclamation-circle"></i>}
                {t.type === 'info' && <i className="fas fa-info-circle"></i>}
              </div>
              <div style={{ padding: '0.75rem 0.25rem' }}>{t.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
