// app.js - LearnScape interactions
// All code is defensive (only runs when relevant elements exist)

// Helpers to store/retrieve study track
function getTrack() {
  return JSON.parse(localStorage.getItem('studyTrack') || '[]');
}
function setTrack(arr) {
  localStorage.setItem('studyTrack', JSON.stringify(arr));
}

// Add a resource to the track
function addToTrack(item) {
  const track = getTrack();
  if (track.some(t => t.id === item.id)) {
    alert('Resource already in your study track.');
    return;
  }
  track.push(item);
  setTrack(track);
  alert('Added to study track');
  renderTrack(); // update UI if on cart page
}

// Remove item by id
function removeFromTrack(id) {
  let track = getTrack();
  track = track.filter(t => t.id !== id);
  setTrack(track);
  renderTrack();
}

// Render track to both table and mobile grid (if elements exist)
function renderTrack() {
  const tbody = document.getElementById('track-body');
  const grid = document.getElementById('track-grid');
  const savedList = document.getElementById('savedRoadmapsList');

  const track = getTrack();

  if (tbody) {
    tbody.innerHTML = '';
    if (track.length === 0) {
      tbody.innerHTML = '<tr><td colspan="3" class="text-muted">No resources added yet.</td></tr>';
    } else {
      track.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${item.title}</td>
          <td>${item.type}</td>
          <td>
            <button class="btn btn-sm btn-danger remove-btn" data-id="${item.id}">Remove</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
      // attach remove handlers
      tbody.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromTrack(btn.dataset.id));
      });
    }
  }

  if (grid) {
    grid.innerHTML = '';
    track.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-12';
      card.innerHTML = `
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <strong>${item.title}</strong> <div class="small text-muted">${item.type}</div>
            </div>
            <div>
              <button class="btn btn-sm btn-danger remove-btn" data-id="${item.id}">Remove</button>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    grid.querySelectorAll('.remove-btn').forEach(btn => btn.addEventListener('click', () => removeFromTrack(btn.dataset.id)));
  }

  // savedRoadmapsList
  if (savedList) {
    const r = JSON.parse(localStorage.getItem('roadmaps') || '[]');
    if(r.length===0) {
      savedList.innerHTML = '<li class="list-group-item text-muted">No saved roadmaps.</li>';
    } else {
      savedList.innerHTML = '';
      r.forEach((rp, idx) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-start';
        li.innerHTML = `<div>
                          <strong>${rp.name}</strong> <div class="small text-muted">${new Date(rp.savedAt).toLocaleString()}</div>
                        </div>
                        <div>
                          <button class="btn btn-sm btn-outline-primary me-2" data-idx="${idx}" onclick="loadRoadmap(${idx})">Load</button>
                          <button class="btn btn-sm btn-outline-danger" data-idx="${idx}" onclick="deleteRoadmap(${idx})">Delete</button>
                        </div>`;
        savedList.appendChild(li);
      });
    }
  }
}

// Save current track as a named roadmap
function saveRoadmap(name) {
  if (!name) {
    alert('Please enter a name for your roadmap.');
    return;
  }
  const track = getTrack();
  if (track.length === 0) {
    alert('Your study track is empty.');
    return;
  }
  const roadmaps = JSON.parse(localStorage.getItem('roadmaps') || '[]');
  roadmaps.push({ name, items: track, savedAt: new Date().toISOString() });
  localStorage.setItem('roadmaps', JSON.stringify(roadmaps));
  alert('Roadmap saved.');
  renderTrack();
}

// Load a saved roadmap (overwrite current track)
function loadRoadmap(idx) {
  const roadmaps = JSON.parse(localStorage.getItem('roadmaps') || '[]');
  if(roadmaps[idx]) {
    localStorage.setItem('studyTrack', JSON.stringify(roadmaps[idx].items));
    alert('Roadmap loaded to your study track.');
    renderTrack();
  }
}

// Delete a saved roadmap
function deleteRoadmap(idx) {
  let roadmaps = JSON.parse(localStorage.getItem('roadmaps') || '[]');
  if (!roadmaps[idx]) return;
  if (!confirm('Delete this saved roadmap?')) return;
  roadmaps.splice(idx,1);
  localStorage.setItem('roadmaps', JSON.stringify(roadmaps));
  renderTrack();
}

// Contact form handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactName')?.value || '';
  const email = document.getElementById('contactEmail')?.value || '';
  const message = document.getElementById('contactMessage')?.value || '';
  // Basic validation
  if (!name || !email || !message) {
    alert('Please complete required fields.');
    return;
  }
  // Save message into localStorage (or send to backend when available)
  const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  messages.push({ name, email, message, date: new Date().toISOString() });
  localStorage.setItem('contactMessages', JSON.stringify(messages));
  document.getElementById('contactSuccess').style.display = 'block';
  document.getElementById('contactSuccess').className = 'text-success';
  document.getElementById('contactSuccess').innerText = 'Message saved locally. Thank you!';
  e.target.reset();
}

// Register & Login handlers (demo only — no backend)
function handleRegister(e) {
  e.preventDefault();
  alert('Registration demo: form values validated. For production implement backend.');
  e.target.reset();
}
function handleLogin(e) {
  e.preventDefault();
  // Demo: always success
  document.getElementById('loginStatus').innerText = 'Logged in (demo)';
  setTimeout(()=> document.getElementById('loginStatus').innerText = '', 2000);
}

// On DOM ready, wire up event listeners
document.addEventListener('DOMContentLoaded', function () {
  // bind add-to-track buttons (if present)
  document.querySelectorAll('.add-to-track').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = {
        id: btn.dataset.id,
        title: btn.dataset.title,
        type: btn.dataset.type
      };
      addToTrack(item);
    });
  });

  // save roadmap button(s)
  const saveBtn = document.getElementById('saveRoadmapBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const name = prompt('Name this roadmap (example: "Web Dev Basics")');
      if (name) saveRoadmap(name);
    });
  }
  const saveConfirm = document.getElementById('saveRoadmapConfirm');
  if (saveConfirm) {
    saveConfirm.addEventListener('click', () => {
      const nameInput = document.getElementById('roadmapName');
      saveRoadmap(nameInput?.value || '');
    });
  }

  // Wire up contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

  // Register & login
  const registerForm = document.getElementById('registerForm');
  if (registerForm) registerForm.addEventListener('submit', handleRegister);
  const loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', handleLogin);

  // Apply goal button demonstration
  const applyGoalBtn = document.getElementById('applyGoalBtn');
  if (applyGoalBtn) {
    applyGoalBtn.addEventListener('click', () => {
      const goal = document.getElementById('goalSelect').value;
      alert('Goal applied: ' + goal + '. Resource list could be filtered here.');
    });
  }

  // Initial render if on cart page
  renderTrack();
});
