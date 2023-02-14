const router = require('express').Router();

const { list, detail } = require('../controllers/productsController');

/* /products */

router
.get('/', list)
.get('/detail/:id', detail)

module.exports = router;