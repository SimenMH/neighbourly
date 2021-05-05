'use strict';
const supertest = require('supertest');
const db = require('../models/index.js');
const Favor = require('../models/favor');
const app = require('../index');

describe('Name of the group', () => {

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
      allowMessages: true,
      resolved: true
    };
    await request.post('/api/favor').send(body);
  });

  afterEach(async () => {
    await Favor.deleteMany();
  });

  it('should save a favor to the database', async (done) => {
    const favor = await Favor.findOne({ content: body.content });
    expect(favor.content).toBe(body.content);
    done();
  });

  it('should delete a favor from the database', async (done) => {
    await request.post('/api/favor').send({ ...body, content: 'second' });
    const { _id } = await Favor.findOne({ content: body.content });
    await request.delete(`/api/favor/${_id}`);
    const favors = await Favor.find();

    expect(favors.length).toBe(1);
    done();
  });

  it('should save a favor to the database', async (done) => {
    const { _id } = await Favor.findOne({ content: body.content });
    await request.put(`/api/favor/${_id}`);
    const favor = await Favor.findOne({ content: body.content });
    expect(favor.resolved).toBe(true);
    done();
  });
});
