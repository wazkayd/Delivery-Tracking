const request = require('supertest');
const app = require('../app');

describe('API foundation', () => {
  test('GET / returns a running message', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message');
  });

  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body).toHaveProperty('db');
  });

  test('unknown routes return JSON 404', async () => {
    const res = await request(app).get('/this-route-does-not-exist');

    expect(res.status).toBe(404);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.message).toMatch(/Cannot GET/i);
  });

  test('invalid JSON returns JSON 400', async () => {
    const res = await request(app)
      .post('/health')
      .set('Content-Type', 'application/json')
      .send('{"email":');

    expect(res.status).toBe(400);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body.message).toBe('Invalid JSON payload');
  });
});
