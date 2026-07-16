// Vanden Intranet Frontend JavaScript

const API_BASE = '/api';

// Page Navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    navigateTo(page);
  });
});

function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Show selected page
  const selectedPage = document.getElementById(page);
  if (selectedPage) {
    selectedPage.classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === page) {
        link.classList.add('active');
      }
    });

    // Load page-specific data
    loadPageData(page);
  }
}

function loadPageData(page) {
  switch(page) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'employees':
      loadEmployees();
      break;
    case 'news':
      loadNews();
      break;
    case 'documents':
      loadDocuments();
      break;
    case 'teams':
      loadTeams();
      break;
    case 'events':
      loadEvents();
      break;
  }
}

// Load Dashboard Data
async function loadDashboard() {
  try {
    const [dashboard, news, events] = await Promise.all([
      fetch(`${API_BASE}/dashboard`).then(r => r.json()),
      fetch(`${API_BASE}/news?limit=3`).then(r => r.json()),
      fetch(`${API_BASE}/events?limit=3`).then(r => r.json())
    ]);

    // Update counters
    document.getElementById('employee-count').textContent = dashboard.totalEmployees;
    document.getElementById('news-count').textContent = dashboard.totalNews;
    document.getElementById('document-count').textContent = dashboard.totalDocuments;
    document.getElementById('teams-count').textContent = dashboard.totalTeams;

    // Load recent news
    const newsList = document.getElementById('news-dashboard');
    newsList.innerHTML = news.map(item => `
      <div class="list-item">
        <div class="item-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div class="item-date">${formatDate(item.date)}</div>
      </div>
    `).join('');

    // Load upcoming events
    const eventsList = document.getElementById('events-dashboard');
    eventsList.innerHTML = events.map(item => `
      <div class="list-item">
        <div class="item-content">
          <h3>${item.name}</h3>
          <p>${item.location}</p>
        </div>
        <div class="item-date">${formatDate(item.date)}</div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading dashboard:', error);
  }
}

// Load Employees
async function loadEmployees() {
  try {
    const employees = await fetch(`${API_BASE}/employees`).then(r => r.json());
    const list = document.getElementById('employees-list');
    
    list.innerHTML = employees.map(emp => `
      <div class="employee-card">
        <div class="employee-avatar">${emp.initials}</div>
        <div class="employee-info">
          <div class="employee-name">${emp.name}</div>
          <div class="employee-title">${emp.title}</div>
          <div class="employee-dept">${emp.department}</div>
          <p style="margin-top: 10px; font-size: 12px; color: var(--text-light);">
            <strong>Email:</strong> ${emp.email}<br>
            <strong>Phone:</strong> ${emp.phone}
          </p>
        </div>
      </div>
    `).join('');

    // Add search functionality
    const searchInput = document.getElementById('employee-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.employee-card').forEach(card => {
          const name = card.querySelector('.employee-name').textContent.toLowerCase();
          const title = card.querySelector('.employee-title').textContent.toLowerCase();
          card.style.display = name.includes(query) || title.includes(query) ? 'block' : 'none';
        });
      });
    }
  } catch (error) {
    console.error('Error loading employees:', error);
  }
}

// Load News
async function loadNews() {
  try {
    const news = await fetch(`${API_BASE}/news`).then(r => r.json());
    const list = document.getElementById('news-list');
    
    list.innerHTML = news.map(item => `
      <div class="list-item">
        <div class="item-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
        <div class="item-date">${formatDate(item.date)}</div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading news:', error);
  }
}

// Load Documents
async function loadDocuments() {
  try {
    const documents = await fetch(`${API_BASE}/documents`).then(r => r.json());
    const list = document.getElementById('documents-list');
    
    list.innerHTML = documents.map(doc => `
      <div class="document-card">
        <div class="document-icon">${getDocumentIcon(doc.type)}</div>
        <div class="document-name">${doc.name}</div>
        <div class="document-size">${formatFileSize(doc.size)}</div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading documents:', error);
  }
}

// Load Teams
async function loadTeams() {
  try {
    const teams = await fetch(`${API_BASE}/teams`).then(r => r.json());
    const list = document.getElementById('teams-list');
    
    list.innerHTML = teams.map(team => `
      <div class="team-card">
        <div class="team-header">
          <div class="team-name">${team.name}</div>
          <div class="team-members">${team.members} members</div>
        </div>
        <div class="team-body">
          <div class="team-lead">
            <div class="team-lead-label">Team Lead</div>
            <div class="team-lead-name">${team.lead}</div>
          </div>
          <p style="color: var(--text-light); font-size: 13px; line-height: 1.5;">${team.description}</p>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading teams:', error);
  }
}

// Load Events
async function loadEvents() {
  try {
    const events = await fetch(`${API_BASE}/events`).then(r => r.json());
    
    // Generate calendar
    generateCalendar();
    
    // Load events list
    const list = document.getElementById('events-list');
    list.innerHTML = events.map(event => `
      <div class="list-item">
        <div class="item-content">
          <h3>${event.name}</h3>
          <p>${event.location}</p>
        </div>
        <div class="item-date">${formatDate(event.date)}</div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Error loading events:', error);
  }
}

// Calendar Generator
function generateCalendar() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const calendar = document.getElementById('calendar');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  let calendarHTML = `
    <div class="calendar-grid">
      <div class="calendar-header">
        <button style="background: none; border: none; color: var(--vanden-dark-blue); font-weight: 600; cursor: pointer;">❮</button>
        <div class="calendar-title">${monthNames[currentMonth]} ${currentYear}</div>
        <button style="background: none; border: none; color: var(--vanden-dark-blue); font-weight: 600; cursor: pointer;">❯</button>
      </div>
  `;
  
  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dayHeaders.forEach(day => {
    calendarHTML += `<div class="day-header">${day}</div>`;
  });
  
  // Empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarHTML += '<div class="calendar-day" style="opacity: 0;"></div>';
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today.getDate() && currentMonth === today.getMonth();
    const classes = `calendar-day ${isToday ? 'today' : ''}`;
    calendarHTML += `<div class="${classes}">${day}</div>`;
  }
  
  calendarHTML += '</div>';
  calendar.innerHTML = calendarHTML;
}

// Utility Functions
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function getDocumentIcon(type) {
  const icons = {
    'pdf': '📄',
    'doc': '📝',
    'xls': '📊',
    'ppt': '🎯',
    'folder': '📁',
    'image': '🖼️',
    'video': '🎥',
    'default': '📎'
  };
  return icons[type] || icons['default'];
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  loadDashboard();
});
