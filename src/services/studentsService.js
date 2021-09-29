const getStudents = async () => {
  const {students} = await require('../data/students.json');
  return students;
};

module.exports = { getStudents };