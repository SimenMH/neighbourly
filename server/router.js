const koaRouter = require('koa-router');
const postController = require('./controllers/post')
const noticeController = require('./controllers/notice')

const router = new koaRouter();


// Routing post
router.get('/api/post/:pos', postController.getPosts) // Gets all posts
router.post('/api/post', postController.createPost) // Creates a new post
router.delete('/api/post/:id', postController.deletePost) // Deletes a post

// Routing notice
router.get('/api/notice/:pos', postController.getNotices) // Gets all posts
router.post('/api/notice', postController.createNotice) // Creates a new post
router.delete('/api/notice/:id', postController.deleteNotice) // Deletes a post

// Routing event

// Routing Favor

module.exports = router;