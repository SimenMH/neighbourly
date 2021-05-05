'use strict';
const supertest = require('supertest');
const db = require('../models/index.js');
const Post = require('../models/post');
const app = require('../index');

describe('Post', () => {
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
    };
    await request.post('/api/post').send(body);
  });

  afterEach(async () => {
    await Post.deleteMany();
  });

  it('should save a post to the database', async (done) => {
    const post = await Post.findOne({ content: body.content });
    expect(post.content).toBe(body.content);
    done();
  });

  it('should delete a post from the database', async (done) => {
    await request.post('/api/post').send({ ...body, content: 'second' });
    const { _id } = await Post.findOne({ content: body.content });
    await request.delete(`/api/post/${_id}`);
    const favors = await Post.find();

    expect(favors.length).toBe(1);
    done();
  });
  
});
