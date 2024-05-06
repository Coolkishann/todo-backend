//routes / auth.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/isLoggedIn', authController.isLoggedIn);
module.exports = router;