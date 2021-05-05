'use strict';
const supertest = require('supertest');
const db = require('../models/index.js');
const Notice = require('../models/notice');
const app = require('../index');

describe('Notice', () => {
  const request = supertest(app);
  let body;

  beforeAll(async () => {
    await db.connectDB();
    console.log('Connected to Mongoose');
  });

  beforeEach(async () => {
    body = {
      content: 'content',
      longitude: 150,
      latitude: 150,
      color: 1,
      identifier: 'identifier',
      allowMessages: true
    };
    await request.post('/api/notice').send(body);
  });

  afterEach(async () => {
    await Notice.deleteMany();
  });

  it('should save a notice to the database', async (done) => {
    const notice = await Notice.findOne({ content: body.content });
    expect(notice.content).toBe(body.content);
    done();
  });

  it('should delete a notice from the database', async (done) => {
    await request.post('/api/notice').send({ ...body, content: 'second' });
    const { _id } = await Notice.findOne({ content: body.content });
    await request.delete(`/api/notice/${_id}`);
    const notices = await Notice.find();

    expect(notices.length).toBe(1);
    done();
  });
});
