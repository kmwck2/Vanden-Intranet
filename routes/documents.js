const express = require('express');
const router = express.Router();
const { documents } = require('../data/documents');

router.get('/', (req, res) => {
  res.json(documents);
});

router.get('/:id', (req, res) => {
  const doc = documents.find(d => d.id === req.params.id);
  if (doc) {
    res.json(doc);
  } else {
    res.status(404).json({ error: 'Document not found' });
  }
});

module.exports = router;
