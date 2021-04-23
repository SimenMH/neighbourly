const koaRouter = require('koa-router');
const postController = require('./controllers/post')

const router = new koaRouter();


// Routing post
router.get('/api/post/:pos', postController.getPosts) // Gets all posts
router.post('/api/post', postController.createPost) // Creates a new post
router.delete('/api/post/:id', postController.deletePost) // Deletes a post

// Routing notice

// Routing event

// Routing Favor

module.exports = router;