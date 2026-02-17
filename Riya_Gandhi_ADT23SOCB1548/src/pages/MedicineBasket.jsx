import React, { useState } from 'react';
import './MedicineBasket.css'; 
const MedicineBasket = () => {
  
  const [activeTab, setActiveTab] = useState('inventory');


  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Metformin 500mg',
      stock: 45,
      expiry: 'Jun 2025',
      purpose: 'Diabetes control',
      stockLevel: 'high', 
      expiryStatus: 'good', 
    },
    {
      id: 2,
      name: 'Lisinopril 10mg',
      stock: 8,
      expiry: 'Jan 2025',
      purpose: 'Blood pressure',
      stockLevel: 'medium',
      expiryStatus: 'warning',
    },
    {
      id: 3,
      name: 'Omeprazole 20mg',
      stock: 3,
      expiry: 'Mar 2025',
      purpose: 'Acidity control',
      stockLevel: 'low',
      expiryStatus: 'good',
    },
  ]);

  const changeQuantity = (id, delta) => {
    setMedicines((prevMedicines) =>
      prevMedicines.map((med) =>
        med.id === id
          ? { ...med, stock: Math.max(0, med.stock + delta) } 
          : med
      )
    );
  };

  
  const expiringSoon = medicines.filter((med) => med.expiryStatus === 'warning');


  const wellStocked = medicines.filter((med) => med.stockLevel === 'high').length;
  const lowStock = medicines.filter((med) => med.stockLevel === 'medium' || med.stockLevel === 'low').length;
  const expiringSoonCount = expiringSoon.length;
  const totalMedicines = medicines.length;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="homePage.html">
            <i className="fas fa-heartbeat text-pink"></i> MediCare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  Health Records
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Basket">
                  Basket
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    

    
      <section className="py-4 header-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="text-pink mb-2">
                <i className="fas fa-shopping-basket me-2"></i>Medicine Basket
              </h1>
              <p className="text-muted mb-0">Manage your medicine inventory and track expiry dates</p>
            </div>
            <div className="col-md-4 text-end">
              <button className="btn btn-pink">
                <i className="fas fa-plus me-2"></i>Add Medicine
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4">
        
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="text-pink mb-3">
                  <i className="fas fa-chart-pie me-2"></i>Inventory Overview
                </h5>
                <div className="row text-center">
                  <div className="col-md-3">
                    <div className="card bg-success text-white">
                      <div className="card-body">
                        <h3>{wellStocked}</h3>
                        <p className="mb-0">Well Stocked</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card bg-warning text-dark">
                      <div className="card-body">
                        <h3>{lowStock}</h3>
                        <p className="mb-0">Low Stock</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card bg-danger text-white">
                      <div className="card-body">
                        <h3>{expiringSoonCount}</h3>
                        <p className="mb-0">Expiring Soon</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card text-white custom-pink">
                      <div className="card-body">
                        <h3>{totalMedicines}</h3>
                        <p className="mb-0">Total Medicines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        <ul className="nav nav-tabs mb-4" id="basketTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'inventory' ? 'active' : ''}`}
              onClick={() => setActiveTab('inventory')}
              type="button"
            >
              <i className="fas fa-boxes me-2"></i>My Inventory
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === 'expired' ? 'active' : ''}`}
              onClick={() => setActiveTab('expired')}
              type="button"
            >
              <i className="fas fa-exclamation-triangle me-2"></i>Expiring Soon
            </button>
          </li>
        </ul>

        <div className="tab-content" id="basketTabContent">
          
          {activeTab === 'inventory' && (
            <div className="tab-pane fade show active" id="inventory" role="tabpanel">
              <div className="row">
                {medicines.map((med) => (
                  <div key={med.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card medicine-card h-100">
                      <div className={`stock-indicator stock-${med.stockLevel}`}></div>
                      <div className="card-body">
                        <h6 className="card-title text-pink">{med.name}</h6>
                        <div className="mb-2">
                          <small className="text-muted">Stock: </small>
                          <span className={`badge ${med.stockLevel === 'high' ? 'bg-success' : med.stockLevel === 'medium' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                            {med.stock} tablets
                          </span>
                        </div>
                        <div className="mb-2">
                          <small className="text-muted">Expires: </small>
                          <span className={`expiry-${med.expiryStatus}`}>{med.expiry}</span>
                        </div>
                        <div className="mb-3">
                          <small className="text-muted">Purpose: {med.purpose}</small>
                        </div>
                        <div className="quantity-controls mb-3">
                          <span className="quantity-btn" onClick={() => changeQuantity(med.id, -1)}>
                            -
                          </span>
                          <span className="mx-2">
                            Current: <strong>{med.stock}</strong>
                          </span>
                          <span className="quantity-btn" onClick={() => changeQuantity(med.id, 1)}>
                            +
                          </span>
                        </div>
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'expired' && (
            <div className="tab-pane fade show active" id="expired" role="tabpanel">
              <div className="row">
                {expiringSoon.map((med) => (
                  <div key={med.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card medicine-card h-100">
                      <div className={`stock-indicator stock-${med.stockLevel}`}></div>
                      <div className="card-body">
                        <h6 className="card-title text-pink">{med.name}</h6>
                        <div className="mb-2">
                          <small className="text-muted">Stock: </small>
                          <span className={`badge ${med.stockLevel === 'high' ? 'bg-success' : med.stockLevel === 'medium' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                            {med.stock} tablets
                          </span>
                        </div>
                        <div className="mb-2">
                          <small className="text-muted">Expires: </small>
                          <span className={`expiry-${med.expiryStatus}`}>{med.expiry}</span>
                        </div>
                        <div className="mb-3">
                          <small className="text-muted">Purpose: {med.purpose}</small>
                        </div>
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-outline-primary">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicineBasket;
