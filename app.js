const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import routes
const dashboardRoutes = require('./routes/dashboard');
const employeeRoutes = require('./routes/employees');
const newsRoutes = require('./routes/news');
const documentsRoutes = require('./routes/documents');
const teamsRoutes = require('./routes/teams');
const eventsRoutes = require('./routes/events');

// Use routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/documents', documentsRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/events', eventsRoutes);

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Vanden Intranet running at http://localhost:${PORT}`);
});
