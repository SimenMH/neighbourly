const koaRouter = require('koa-router');
const getAllController = require('./controllers/getAllController');
const postController = require('./controllers/post')
const noticeController = require('./controllers/notice')

const router = new koaRouter();

// Routing for all
router.get('/api/all/:pos', getAllController.getAll)

// Routing for posts
router.post('/api/post', postController.createPost) // Creates a new post
router.delete('/api/post/:id', postController.deletePost) // Deletes a post

// Routing for notices
router.post('/api/notice', noticeController.createNotice) // Creates a new post
router.delete('/api/notice/:id', noticeController.deleteNotice) // Deletes a post

// Routing for events

// Routing for favors

module.exports = router;