const router = require('express').Router();

const { register, login, profile, denied } = require('../controllers/usersController');

/* /users */

router
.get('/register', register)
.get('/login', login)
.get('/profile', profile)

module.exports = router;