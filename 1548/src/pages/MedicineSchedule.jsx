import React, { useState, useEffect, useRef } from 'react';
import './MedicineSchedule.css'; 

const initialMedicines = [
  {
    id: 1,
    name: 'Metformin 500mg',
    instructions: '1 tablet before breakfast',
    purpose: 'Diabetes control',
    timeSlot: 'Morning',
    time: '8:00 AM',
    status: 'Taken', 
  },
  {
    id: 2,
    name: 'Vitamin D3',
    instructions: '1 capsule after breakfast',
    purpose: 'Bone health',
    timeSlot: 'Morning',
    time: '8:00 AM',
    status: 'Taken',
  },
  {
    id: 3,
    name: 'Lisinopril 10mg',
    instructions: '1 tablet with lunch',
    purpose: 'Blood pressure',
    timeSlot: 'Afternoon',
    time: '1:00 PM',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Atorvastatin 20mg',
    instructions: '1 tablet with dinner',
    purpose: 'Cholesterol control',
    timeSlot: 'Evening',
    time: '7:00 PM',
    status: 'Upcoming',
  },
  {
    id: 5,
    name: 'Omeprazole 20mg',
    instructions: '1 tablet before dinner',
    purpose: 'Acidity control',
    timeSlot: 'Evening',
    time: '7:00 PM',
    status: 'Missed',
  },
  {
    id: 6,
    name: 'Melatonin 3mg',
    instructions: '1 tablet before sleep',
    purpose: 'Better sleep',
    timeSlot: 'Night',
    time: '10:00 PM',
    status: 'Upcoming',
  },
];

const initialFormData = {
  name: '',
  dosage: '',
  frequency: '',
  duration: '',
  morningTime: '08:00',
  afternoonTime: '13:00',
  nightTime: '22:00',
  takeWith: '',
  purpose: '',
  instructions: '',
  enableReminder: true,
};


const renderMedicineItem = (med, handlers) => {
  const { onMarkAsTaken, onMarkAsMissed, onSetReminder } = handlers;

  const getStatusBadge = () => {
    switch (med.status) {
      case 'Taken':
        return <span className="badge taken-badge mb-2">Taken</span>;
      case 'Pending':
        return <span className="badge pending-badge mb-2">Pending</span>;
      case 'Missed':
        return <span className="badge missed-badge mb-2">Missed</span>;
      case 'Upcoming':
      default:
        return <span className="badge pending-badge mb-2">Upcoming</span>;
    }
  };

  const getActionButton = () => {
    switch (med.status) {
      case 'Taken':
        return (
          <button className="btn btn-sm btn-success" disabled>
            <i className="fas fa-check"></i> Taken
          </button>
        );
      case 'Pending':
        return (
          <button
            className="btn btn-sm btn-warning"
            onClick={() => onMarkAsTaken(med.id)}
          >
            <i className="fas fa-clock"></i> Take Now
          </button>
        );
      case 'Missed':
        return (
          <button className="btn btn-sm btn-outline-danger" disabled>
            <i className="fas fa-times"></i> Missed
          </button>
        );
      case 'Upcoming':
      default:
        return (
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onSetReminder(med.id)}
            disabled={med.reminderSet}
          >
            <i className="fas fa-bell"></i>{' '}
            {med.reminderSet ? 'Reminder Set' : 'Set Reminder'}
          </button>
        );
    }
  };

  return (
    <div className="medicine-item" key={med.id}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-1">{med.name}</h6>
          <small className="text-muted">{med.instructions}</small>
          <br />
          <small className="text-muted">For: {med.purpose}</small>
        </div>
        <div className="text-end">
          {getStatusBadge()}
          <br />
          {getActionButton()}
        </div>
      </div>
    </div>
  );
};

function MedicineSchedule() {
  const [medicines, setMedicines] = useState(initialMedicines);
  const [activeDay, setActiveDay] = useState(28);
  const [formData, setFormData] = useState(initialFormData);
  const modalRef = useRef(null);
  

  const handleMarkAsTaken = (id) => {
    setMedicines((prevMeds) =>
      prevMeds.map((med) =>
        med.id === id ? { ...med, status: 'Taken' } : med
      )
    );
    alert('Medicine marked as taken! Great job staying on track.');
  };

  const handleMarkAsMissed = (id) => {
    if (window.confirm('Are you sure you want to mark this medicine as missed?')) {
      setMedicines((prevMeds) =>
        prevMeds.map((med) =>
          med.id === id ? { ...med, status: 'Missed' } : med
        )
      );
    }
  };

  const handleSetReminder = (id) => {
     setMedicines((prevMeds) =>
      prevMeds.map((med) =>
        med.id === id ? { ...med, reminderSet: true } : med
      )
    );
    alert('Reminder set! You will be notified 15 minutes before the scheduled time.');
  };

  const handleCalendarDayClick = (day) => {
    setActiveDay(day);
    alert(`Loading medicines for day ${day}...`);
    
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddMedicine = (e) => {
    e.preventDefault();
    
    
    let timeSlot = 'Morning'; 
    if (formData.frequency === 'twice') timeSlot = 'Morning/Evening';
    if (formData.frequency === 'thrice') timeSlot = 'Morning/Afternoon/Evening';
    
    const newMedicine = {
        id: Date.now(), 
        name: formData.name,
        instructions: `${formData.dosage} ${formData.takeWith.replace('_', ' ')}`,
        purpose: formData.purpose,
        timeSlot: timeSlot, 
        time: formData.morningTime, 
        status: 'Upcoming',
    };

    setMedicines(prev => [...prev, newMedicine]);
    alert('New medicine added to your schedule successfully!');

    setFormData(initialFormData);
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);
    if(modal) {
        modal.hide();
    }
  };

 
  useEffect(() => {
    const checkCurrentTimeMedicines = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
    
      if (
        ((currentHour === 8 || currentHour === 13 || currentHour === 19 || currentHour === 22)) 
        && currentMinute === 0
      ) {
        alert('Time to take your medicine! Check your schedule.');
      }
    };
    
   
    const intervalId = setInterval(checkCurrentTimeMedicines, 60000);

    return () => clearInterval(intervalId);
  }, []); 
  const takenCount = medicines.filter((m) => m.status === 'Taken').length;
  const pendingCount = medicines.filter((m) => m.status === 'Pending' || m.status === 'Upcoming').length;
  const missedCount = medicines.filter((m) => m.status === 'Missed').length;
  const totalCount = medicines.length;

  const handlers = { handleMarkAsTaken, handleMarkAsMissed, handleSetReminder };
  const morningMeds = medicines.filter((m) => m.timeSlot === 'Morning');
  const afternoonMeds = medicines.filter((m) => m.timeSlot === 'Afternoon');
  const eveningMeds = medicines.filter((m) => m.timeSlot === 'Evening');
  const nightMeds = medicines.filter((m) => m.timeSlot === 'Night');
  
  const weekDays = [22, 23, 24, 25, 26, 27, 28];

  return (
    <>
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
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

     
      <section
        className="py-4"
        style={{
          background: 'linear-gradient(135deg, var(--light-pink), var(--light-purple))',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="text-pink mb-2">
                <i className="fas fa-calendar-alt me-2"></i>Medication Schedule
              </h1>
              <p className="text-muted mb-0">
                Track your daily medication routine and never miss a dose
              </p>
            </div>
            <div className="col-md-4 text-end">
              <button
                className="btn btn-pink"
                data-bs-toggle="modal"
                data-bs-target="#addMedicineModal"
              >
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
                  <i className="fas fa-calendar-day me-2"></i>Today's Schedule -
                  December 28, 2024
                </h5>
                <div className="row text-center">
                  <div className="col-md-3">
                    <div className="card bg-success text-white">
                      <div className="card-body">
                        <h3>{takenCount}</h3>
                        <p className="mb-0">Medicines Taken</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card bg-warning text-dark">
                      <div className="card-body">
                        <h3>{pendingCount}</h3>
                        <p className="mb-0">Pending</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card bg-danger text-white">
                      <div className="card-body">
                        <h3>{missedCount}</h3>
                        <p className="mb-0">Missed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="card text-white"
                      style={{ background: 'var(--pink)' }}
                    >
                      <div className="card-body">
                        <h3>{totalCount}</h3>
                        <p className="mb-0">Total Today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="text-pink mb-3">
                  <i className="fas fa-calendar-week me-2"></i>This Week
                </h5>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2">
                    {weekDays.map(day => (
                        <div 
                            key={day}
                            className={`calendar-day ${activeDay === day ? 'active' : ''}`}
                            onClick={() => handleCalendarDayClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                  </div>
                  <div>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="text-pink mb-4">
                  <i className="fas fa-pills me-2"></i>Today's Medicines
                </h5>

               
                <div className="mb-4">
                  <h6 className="text-secondary mb-3">
                    <i className="fas fa-sun text-warning me-2"></i>Morning (8:00 AM)
                  </h6>
                  {morningMeds.length > 0 ? (
                    morningMeds.map(med => renderMedicineItem(med, handlers))
                  ) : (
                    <p className="text-muted">No medicines for this time.</p>
                  )}
                </div>

             
                <div className="mb-4">
                  <h6 className="text-secondary mb-3">
                    <i className="fas fa-sun text-warning me-2"></i>Afternoon (1:00 PM)
                  </h6>
                  {afternoonMeds.length > 0 ? (
                    afternoonMeds.map(med => renderMedicineItem(med, handlers))
                  ) : (
                    <p className="text-muted">No medicines for this time.</p>
                  )}
                </div>

                <div className="mb-4">
                  <h6 className="text-secondary mb-3">
                    <i className="fas fa-moon text-primary me-2"></i>Evening (7:00 PM)
                  </h6>
                   {eveningMeds.length > 0 ? (
                    eveningMeds.map(med => renderMedicineItem(med, handlers))
                  ) : (
                    <p className="text-muted">No medicines for this time.</p>
                  )}
                </div>

            
                <div className="mb-4">
                  <h6 className="text-secondary mb-3">
                    <i className="fas fa-moon text-dark me-2"></i>Night (10:00 PM)
                  </h6>
                   {nightMeds.length > 0 ? (
                    nightMeds.map(med => renderMedicineItem(med, handlers))
                  ) : (
                    <p className="text-muted">No medicines for this time.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <i
                  className="fas fa-bell text-pink"
                  style={{ fontSize: '2rem' }}
                ></i>
                <h6 className="mt-2">Reminder Settings</h6>
                <p className="text-muted small">Customize notification times</p>
                <button className="btn btn-outline-primary btn-sm">
                  Manage Reminders
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body text-center">
                <i
                  className="fas fa-chart-line text-pink"
                  style={{ fontSize: '2rem' }}
                ></i>
                <h6 className="mt-2">Adherence Report</h6>
                <p className="text-muted small">View medication compliance</p>
                <button className="btn btn-outline-primary btn-sm">
                  View Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div
        className="modal fade"
        id="addMedicineModal"
        tabIndex="-1"
        ref={modalRef}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-pink">
                <i className="fas fa-pills me-2"></i>Add New Medicine
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form id="addMedicineForm" onSubmit={handleAddMedicine}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Medicine Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., Paracetamol"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Dosage *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., 500mg"
                      name="dosage"
                      value={formData.dosage}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Frequency *</label>
                    <select 
                        className="form-select"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleFormChange} 
                        required
                    >
                      <option value="">Select Frequency</option>
                      <option value="once">Once a day</option>
                      <option value="twice">Twice a day</option>
                      <option value="thrice">Three times a day</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Duration (Days)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Days"
                      min="1"
                      name="duration"
                      value={formData.duration}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Morning Time</label>
                    <input 
                        type="time" 
                        className="form-control" 
                        name="morningTime"
                        value={formData.morningTime}
                        onChange={handleFormChange}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Afternoon Time</label>
                    <input 
                        type="time" 
                        className="form-control" 
                        name="afternoonTime"
                        value={formData.afternoonTime}
                        onChange={handleFormChange}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Night Time</label>
                    <input 
                        type="time" 
                        className="form-control" 
                        name="nightTime"
                        value={formData.nightTime}
                        onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Take with</label>
                    <select 
                        className="form-select"
                        name="takeWith"
                        value={formData.takeWith}
                        onChange={handleFormChange}
                    >
                      <option value="">Select option</option>
                      <option value="before_meal">Before meal</option>
                      <option value="after_meal">After meal</option>
                      <option value="with_meal">With meal</option>
                      <option value="empty_stomach">Empty stomach</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Purpose/Condition</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g., Blood pressure"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Special Instructions</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Any special instructions or notes..."
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleFormChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="enableReminder"
                      name="enableReminder"
                      checked={formData.enableReminder}
                      onChange={handleFormChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="enableReminder"
                    >
                      Enable push notifications for reminders
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="addMedicineForm"
                className="btn btn-pink"
              >
                <i className="fas fa-save me-2"></i>Add Medicine
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicineSchedule;