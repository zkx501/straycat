const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json('user okk');
});

/* GET home page. */
router.get('/index', function(req, res, next) {
    res.render('user/index');
});

module.exports = router;