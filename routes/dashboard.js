const express = require('express');
const router = express.Router();
const { employees } = require('../data/employees');
const { news } = require('../data/news');
const { documents } = require('../data/documents');
const { teams } = require('../data/teams');

router.get('/', (req, res) => {
  res.json({
    totalEmployees: employees.length,
    totalNews: news.length,
    totalDocuments: documents.length,
    totalTeams: teams.length,
    activeUsers: Math.floor(Math.random() * (employees.length - 50 + 1)) + 50
  });
});

module.exports = router;
