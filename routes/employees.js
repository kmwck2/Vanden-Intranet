const express = require('express');
const router = express.Router();
const { employees } = require('../data/employees');

router.get('/', (req, res) => {
  res.json(employees);
});

router.get('/:id', (req, res) => {
  const employee = employees.find(e => e.id === req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: 'Employee not found' });
  }
});

module.exports = router;
