const request = require('supertest');
const app = require('../src/app');

describe('Student endpoint test', () => {
  it('Should return 6 students from /students', async () => {
    const response = await request(app).get('/students');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveLength(5);
  });
});