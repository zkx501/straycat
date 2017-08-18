const express = require('express');
const router = express.Router();

const UserDao = require('../../dao/UserDao');

router.get('/', function (req, res, next) {
    let userDao = new UserDao();
    let a = userDao.insert();
    console.log(a);
    res.json('ok');
});

module.exports = router;