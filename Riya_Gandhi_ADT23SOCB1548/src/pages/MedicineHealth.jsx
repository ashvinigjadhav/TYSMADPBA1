import React, { useState } from 'react';
import './MedicineHealth.css'; 
const HealthRecords = () => {
  
  const [records, setRecords] = useState([
    {
      id: 1,
      title: 'Heart Medication Prescription',
      category: 'prescription',
      doctor: 'Dr. Sarah Johnson',
      date: '15 Dec 2024',
      type: 'PDF Document',
      description: 'Blood pressure medication and cardiac health prescriptions from cardiology consultation.',
    },
    {
      id: 2,
      title: 'Complete Blood Count',
      category: 'lab',
      doctor: 'City Hospital Lab',
      date: '10 Dec 2024',
      type: 'PDF Document',
      description: 'Complete blood count test results including RBC, WBC, platelets, and hemoglobin levels.',
    },
    {
      id: 3,
      title: 'Chest X-Ray',
      category: 'imaging',
      doctor: 'Radiology Center',
      date: '08 Dec 2024',
      type: 'Image File',
      description: 'Chest X-ray for routine health checkup. Results show clear lungs with no abnormalities.',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    doctor: '',
    date: '',
    notes: '',
    file: null,
  });


  const filteredRecords = records.filter((record) => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || record.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`${files.length} file(s) uploaded successfully!\n\nFiles: ${Array.from(files).map(f => f.name).join(', ')}`);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Health record added successfully!');
    setShowModal(false);
    setFormData({
      title: '',
      category: '',
      doctor: '',
      date: '',
      notes: '',
      file: null,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          
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
                <i className="fas fa-file-medical me-2"></i>Health Records
              </h1>
              <p className="text-muted mb-0">Store and manage all your medical records securely</p>
            </div>
            <div className="col-md-4 text-end">
              <button className="btn btn-pink" onClick={() => setShowModal(true)}>
                <i className="fas fa-plus me-2"></i>Add New Record
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
                  <i className="fas fa-cloud-upload-alt me-2"></i>Quick Upload
                </h5>
                <div className="upload-area" onClick={() => document.getElementById('fileInput').click()}>
                  <i className="fas fa-upload text-pink" style={{ fontSize: '3rem' }}></i>
                  <h5 className="mt-3 text-pink">Upload Medical Documents</h5>
                  <p className="text-muted">Drag & drop files here or click to browse</p>
                  <small className="text-muted">Supported: PDF, JPG, PNG, DOC (Max 10MB)</small>
                  <input
                    type="file"
                    id="fileInput"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search records..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select className="form-select" value={filterCategory} onChange={handleFilter}>
              <option value="">All Categories</option>
              <option value="prescription">Prescriptions</option>
              <option value="lab">Lab Reports</option>
              <option value="imaging">X-Ray/Scan</option>
              <option value="vaccination">Vaccinations</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="row" id="recordsContainer">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <div key={record.id} className="col-lg-4 col-md-6 mb-4 record-item" data-category={record.category}>
                <div className="card record-card h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h6 className="card-title mb-0">{record.title}</h6>
                      <span className={`badge ${record.category === 'prescription' ? 'category-badge' : record.category === 'lab' ? 'bg-success' : 'bg-warning'} rounded-pill`}>
                        {record.category.charAt(0).toUpperCase() + record.category.slice(1)}
                      </span>
                    </div>
                    <div className="mb-3">
                      <small className="text-muted">
                        <i className="fas fa-user-md me-1"></i>{record.doctor}
                      </small>
                      <br />
                      <small className="text-muted">
                        <i className="fas fa-calendar me-1"></i>{record.date}
                      </small>
                      <br />
                      <small className="text-muted">
                        <i className="fas fa-file-pdf me-1"></i>{record.type}
                      </small>
                    </div>
                    <p className="card-text text-muted small">{record.description}</p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="fas fa-eye"></i> View
                      </button>
                      <button className="btn btn-sm btn-outline-success">
                        <i className="fas fa-download"></i> Download
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div id="emptyState" className="text-center py-5">
              <i className="fas fa-folder-open text-muted" style={{ fontSize: '4rem' }}></i>
              <h5 className="mt-3 text-muted">No records found</h5>
              <p className="text-muted">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

  
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-pink">
                  <i className="fas fa-plus-circle me-2"></i>Add New Health Record
                </h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Record Title *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g., Blood Test Report"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Category *</label>
                      <select
                        className="form-select"
                        name="category"
                        value={formData.category}
                        onChange={handleFormChange}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="prescription">Prescription</option>
                        <option value="lab">Lab Report</option>
                        <option value="imaging">X-Ray/Scan</option>
                        <option value="vaccination">Vaccination</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Doctor/Hospital</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dr. John Smith"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Date *</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Notes/Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Additional notes about this record..."
                      name="notes"
                      value={formData.notes}
                      onChange={handleFormChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Upload File</label>
                    <input
                      type="file"
                      className="form-control"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      name="file"
                      onChange={handleFormChange}
                    />
                    <small className="text-muted">Optional: PDF, JPG, PNG, DOC (Max 10MB)</small>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-pink">
                      <i className="fas fa-save me-2"></i>Save Record
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthRecords;
