const koaRouter = require('koa-router');
const getAllController = require('./controllers/getAllController');
const postController = require('./controllers/post');
const noticeController = require('./controllers/notice');
const eventController = require('./controllers/event');
const favorController = require('./controllers/favor');

const router = new koaRouter();

// Routing for all
router.get('/api/all/:pos', getAllController.getAll);

// Routing for posts
router.post('/api/post', postController.createPost); // Creates a new post
router.delete('/api/post/:id', postController.deletePost); // Deletes a post

// Routing for notices
router.post('/api/notice', noticeController.createNotice); // Creates a new post
router.delete('/api/notice/:id', noticeController.deleteNotice); // Deletes a post

// Routing for events
router.post('/api/event', eventController.createEvent); // Creates a new post
router.put('/api/event/:id/:interest', eventController.updateEventInterest); // Updates interest
router.delete('/api/event/:id', eventController.deleteEvent); // Deletes a post

// Routing for favors
router.post('/api/favor', favorController.createFavor); // Creates a new post
router.put('/api/favor/:id', favorController.resolveFavor); // Deletes a post
router.delete('/api/favor/:id', favorController.deleteFavor); // Deletes a post

module.exports = router;
