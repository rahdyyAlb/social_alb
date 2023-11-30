const express = require('express');
const UserController = require('../controllers/UsersController');
const PostController = require('../controllers/PostController');


const router = express.Router();

// Routes pour les utilisateurs
router.post('/user', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/user/:id', UserController.getUserById);
router.put('/user/:id', UserController.updateUserById);
router.delete('/user/:id', UserController.deleteUserById);

// Routes pour les publications
router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getAllPosts);
router.get('/posts/:id', PostController.getPostById);
router.put('/posts/:id', PostController.updatePostById);
router.delete('/posts/:id', PostController.deletePostById);

module.exports = router;
