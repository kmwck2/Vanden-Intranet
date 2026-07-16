const express = require('express');
const router = express.Router();
const { teams } = require('../data/teams');

router.get('/', (req, res) => {
  res.json(teams);
});

router.get('/:id', (req, res) => {
  const team = teams.find(t => t.id === req.params.id);
  if (team) {
    res.json(team);
  } else {
    res.status(404).json({ error: 'Team not found' });
  }
});

module.exports = router;
