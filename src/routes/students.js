const express = require('express');
const router = express.Router();
const { getStudents } = require('../services/studentsService');

router.get('/students', async (req, res) => {
  const students = await getStudents();
  return res.status(200).json(students);
});

module.exports = router;