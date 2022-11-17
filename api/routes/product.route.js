const express = require('express');
const router = express.Router();
const path = require('path');

const proudctController = require('../controllers/product.controller');

//simple test url to check comms
router.get('./test', proudctController.test);
router.post('./create', proudctController.product_create);

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../views/insert.html"))
});

module.exports = router;
