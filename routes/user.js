// import
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
// route.method (path, controllers)
router.post('/', userCtrl.createUser);

module.exports = router;