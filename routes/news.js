const express = require('express');
const router = express.Router();
const { news } = require('../data/news');

router.get('/', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : news.length;
  res.json(news.slice(0, limit));
});

router.get('/:id', (req, res) => {
  const newsItem = news.find(n => n.id === req.params.id);
  if (newsItem) {
    res.json(newsItem);
  } else {
    res.status(404).json({ error: 'News not found' });
  }
});

module.exports = router;
