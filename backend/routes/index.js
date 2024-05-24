// const express = require('express');
// const authController = require('../controller/authController');
// const blogController = require('../controller/blogController');
// const commentController = require('../controller/commentController');
// const auth = require('../middlewares/auth');

// const router = express.Router();
 
// // User endpoints
// // register 
// router.post('/register', authController.register);

// // login 
// router.post('/login' , authController.login);

// // logout
// router.post('/logout' , auth, authController.logout);

// // refresh
// router.get('/refresh' , authController.refresh);



// // Blog endpoints  :- CRUD
// // Create 
// router.post('/blog', auth, blogController.create);

// // Get All Blogs
// router.get('/blog/all', auth, blogController.getAll);

// // Get Blog by ID
// router.get('/blog/:id', auth, blogController.getById);

// // Update
// router.put('/blog', auth, blogController.update);

// // Delete
// router.delete('/blog/:id', auth, blogController.delete);

// // Comment endpoints
// // Create Comment
// router.post('/comment', auth, commentController.create);

// // Get Comments by ID 
// router.get('/comment/:id', auth, commentController.getById);

// module.exports = router;








const express = require('express');
const authController = require('../controller/authController');
const blogController = require('../controller/blogController');
const commentController = require('../controller/commentController');
const auth = require('../middlewares/auth');

const router = express.Router();

// user

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// logout
router.post('/logout', auth, authController.logout)

// refresh
router.get('/refresh', authController.refresh);

// blog

// create
router.post('/blog', auth, blogController.create);

// get all
router.get('/blog/all', auth, blogController.getAll);

// get blog by id
router.get('/blog/:id', auth, blogController.getById);

// update
router.put('/blog', auth, blogController.update);

// delete
router.delete('/blog/:id', auth, blogController.delete);

// comment
// create 
router.post('/comment', auth, commentController.create);

// get 
router.get('/comment/:id', auth, commentController.getById);

module.exports = router;



