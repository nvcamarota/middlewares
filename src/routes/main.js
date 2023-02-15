const router = require('express').Router();

const { index, admin, denied } = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin');

router
.get('/', index)
.get('/admin', accessAdmin, admin)
.get('/access-denied', denied)

module.exports = router;