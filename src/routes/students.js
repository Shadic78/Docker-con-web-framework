const express = require('express');
const router = express.Router();

router.get('/students', async (req, res) => {
  const {students} = await require('../data/students.json');
  return res.status(200).json(students);
});

module.exports = router;