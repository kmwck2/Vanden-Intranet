# Vanden Company Intranet Portal

A modern, feature-rich intranet application for Vanden Company built with vanilla HTML/CSS/JavaScript and Node.js/Express backend.

## 🎨 Features

- **Dashboard**: Overview of company statistics and quick access to recent news/events
- **Employee Directory**: Search and browse all company employees with contact information
- **News & Announcements**: Centralized hub for company communications
- **Document Library**: Access shared documents and resources
- **Team Pages**: View teams, departments, and team leads
- **Event Calendar**: Track upcoming company events and activities

## 🎯 Design System

The intranet uses the Vanden corporate color palette:

- **Primary**: Dark Blue (#000066), Light Blue (#0070BD)
- **Accent**: Orange (#ED8B00), Light Orange (#FF9F0D)
- **Secondary**: Green (#205959), Mid Green (#308686), Teal (#0097A9)
- **Neutral**: Gray (#8C8C8C), Light Gray (#DCDCDC)

## 📦 Project Structure

```
Vanden/
├── app.js                 # Main Express server
├── package.json           # Project dependencies
├── public/
│   ├── index.html        # Main HTML page
│   ├── css/
│   │   └── styles.css    # Vanden color theme & styling
│   ├── js/
│   │   └── app.js        # Frontend JavaScript
│   └── assets/           # Images, icons, etc.
├── routes/
│   ├── dashboard.js      # Dashboard API routes
│   ├── employees.js      # Employee directory routes
│   ├── news.js          # News & announcements routes
│   ├── documents.js     # Document library routes
│   ├── teams.js         # Teams & departments routes
│   └── events.js        # Events & calendar routes
└── data/
    ├── employees.js     # Sample employee data
    ├── news.js         # Sample news data
    ├── documents.js    # Sample document data
    ├── teams.js        # Sample team data
    └── events.js       # Sample event data
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd c:\Users\caden\Desktop\Vanden
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Development Mode

For development with auto-reload:
```bash
npm run dev
```

(Make sure `nodemon` is installed: `npm install --save-dev nodemon`)

## 📱 Pages & Sections

### Dashboard
- Quick statistics (total employees, news, documents, teams)
- Recent news feed
- Upcoming events preview

### Employee Directory
- Browse all company employees
- Search functionality
- Employee details (name, title, department, email, phone)

### News & Announcements
- Company-wide announcements
- News feed with dates
- Latest updates from management

### Document Library
- Centralized document storage
- Multiple file types (PDF, DOC, XLS, PPT)
- File size information
- Easy browsing

### Teams & Departments
- Departmental structure
- Team information and leads
- Team member count
- Department descriptions

### Events & Calendar
- Interactive calendar view
- Upcoming events list
- Event details (location, date/time)
- Event tracking

## 🔌 API Endpoints

All endpoints return JSON data:

- `GET /api/dashboard` - Dashboard statistics
- `GET /api/employees` - All employees
- `GET /api/employees/:id` - Individual employee
- `GET /api/news` - All news articles
- `GET /api/news/:id` - Individual news article
- `GET /api/documents` - All documents
- `GET /api/documents/:id` - Individual document
- `GET /api/teams` - All teams
- `GET /api/teams/:id` - Individual team
- `GET /api/events` - All events
- `GET /api/events/:id` - Individual event

## 🎨 Customization

### Adding More Employees
Edit `data/employees.js` and add new employee objects following this format:

```javascript
{
  id: 'unique-id',
  name: 'Employee Name',
  email: 'email@vanden.com',
  phone: '+1 (555) 123-4567',
  title: 'Job Title',
  department: 'Department Name',
  initials: 'EN'
}
```

### Adding News
Edit `data/news.js` and add new news items:

```javascript
{
  id: 'unique-id',
  title: 'News Title',
  description: 'News description...',
  date: '2026-07-16',
  author: 'Author Name'
}
```

### Adding Documents
Edit `data/documents.js` and add documents:

```javascript
{
  id: 'unique-id',
  name: 'Document Name',
  type: 'pdf', // pdf, doc, xls, ppt, folder, image, video
  size: 2048576,
  date: '2026-07-16'
}
```

### Adding Events
Edit `data/events.js` and add events:

```javascript
{
  id: 'unique-id',
  name: 'Event Name',
  date: '2026-08-05',
  time: '2:00 PM',
  location: 'Event Location',
  description: 'Event description'
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This intranet portal is proprietary software for Vanden Company.

## 📞 Support

For issues or questions, contact IT Support:
- Email: it-support@vanden.com
- Extension: 5000

---

**Version**: 1.0.0  
**Last Updated**: July 16, 2026
