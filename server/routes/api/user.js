const express = require('express');
const router = express.Router();

const UserDao = require('../../dao/UserDao');

router.get('/insert', function (req, res, next) {
   console.log(req.query);
   let userDao = new UserDao();
   userDao.insert({
       'username': req.query.username,
       'password': req.query.password,
       'email': req.query.email,
       'mobilephone': req.query.moilephone,
       'gender': req.query.gender,
   });
   res.json('insert ok');
});

router.get('/delete', function (req, res, next) {
    console.log(req.query);
    let userDao = new UserDao();
    userDao.destroy({
        'username': req.query.username,

    });
    res.json('delete ok');
});

router.get('/update', function (req, res, next) {
    console.log(req.query);
    let userDao = new UserDao();
    userDao.update({
        'username':  req.query.username,
    },{
        'email': req.query.email,
        'mobilephone': req.query.moilephone,
    });
    res.json('update ok');
});

router.get('/query', function (req, res, next) {
    console.log(req.query);
    let userDao = new UserDao();
    userDao.query({
        'gender': req.query.gender,
    }, [['id', 'desc']],
        req.query.pageNo, req.query.pageSize,
    null);
    res.json('query ok');
});

router.get('/findOne', function (req, res, next) {
    console.log(req.query);
    let userDao = new UserDao();
    userDao.findOne({
        'gender': req.query.gender
    });
    res.json('query ok');
});

// router.get('/add', function(req, res, next) {
//     query('insert INTO USER (`NAME`, `age`) VALUES ("2", 3)', function (qerr, vals, fields) {
//         console.log(qerr);
//         console.log(vals);
//         console.log(fields);
//
//         console.log(eval(vals));
//         // res.assign('obj', {
//         //     a: 1,
//         //     b: vals.insertId,
//         // });
//         res.render('user/index');
//     });
//
// });
//
// router.get('/query', function(req, res, next) {
//    query('select * from USER where id=20', function (qerr, vals, fields){
//        console.log(qerr);
//        console.log(vals);
//        console.log(fields);
//
//        let temp = vals[0];
//
//        console.log(temp);
//        console.log(temp.name);
//        console.log(temp.age);
//    });
// });


module.exports = router;