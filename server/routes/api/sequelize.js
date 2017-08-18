// const express = require('express');
// const router = express.Router();
//
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize('zkx', 'root', 'root123', {
//     host: '127.0.0.1',
//     port: 3306,
//     dialect: 'mysql',
//     timezone: '+08:00' //东八时区
// });
//
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
//
//
// const SequelizeModel = sequelize.define('sequelize', {
//     name: {
//         type: Sequelize.STRING(50)
//     },
//     age: {
//         type: Sequelize.INTEGER
//     },
//     createdAt: {
//         type: Sequelize.DATE,
//     },
//     updatedAt: {
//         type: Sequelize.DATE,
//     }
// },{
//     // timestamps: false,
//     freezeTableName: true
// });
//
// router.get('/', function(req, res, next) {
//     res.json('sequelize ok');
// });
//
// router.get('/add', function(req, res, next) {
//     SequelizeModel.sync({force: false})
//         .then(() => {
//         // Table created
//         return SequelizeModel.create({
//             name: 'John',
//             age: 1
//         });
//     }).catch((err)=>{
//         console.log('add error');
//         console.log(err.message);
//     });
//     res.json('sequelize  add ok');
// });
//
// router.get('/delete', function(req, res, next) {
//     SequelizeModel.destroy({
//         where:{
//             name:'bb'
//         }
//     }).then(function(result){
//         console.log('destroy user');
//         console.log(result);
//     });
//
//     res.json('sequelize delete ok');
// });
//
// router.get('/update', function(req, res, next) {
//     SequelizeModel.update({
//         age:100
//     },{
//         where:{
//             name: 'aa'
//
//         }
//     }).then(function(result){
//         console.log('updated user');
//         console.log(result);
//     });
//
//     res.json('sequelize update ok');
// });
//
// router.get('/query', function(req, res, next) {
//     SequelizeModel.findAll({
//         offset: 10,
//         limit: 3
//     }).then(function (result) {
//         // console.log(result);
//         for(let i=0; i<result.length ;i++){
//             console.log(result[i].id+' '+result[i].name+' '+result[i].age+' '+result[i].createdAt+' '+result[i].updatedAt);
//         }
//     });
//
//     res.json('sequelize query ok');
// });
//
//
// module.exports = router;