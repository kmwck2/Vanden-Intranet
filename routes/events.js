const express = require('express');
const router = express.Router();
const { events } = require('../data/events');

router.get('/', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : events.length;
  res.json(events.slice(0, limit));
});

router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: 'Event not found' });
  }
});

module.exports = router;
