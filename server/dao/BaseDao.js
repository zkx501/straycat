const mysqlConfig  = require('../config/mysqlConfig');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.user, mysqlConfig.password, {
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    dialect: 'mysql',
    timezone: '+08:00' //东八时区
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;

module.exports = class BaseDao {
    constructor(tableName, tableModel) {
        this.BaseModel = sequelize.define(tableName, tableModel, {
            timestamps: true,
            freezeTableName: true
        });
    }

    insert(data) {
        console.log('insert');
        this.BaseModel.sync({force: false}).then(() => {
            return this.BaseModel
                .create(data)
                .then((result) => {
                    console.log('insert ok');
                    return result;
                }).catch((err) => {
                    console.log('insert err:', err);
                });
        });

    };
    destroy(where) {
        console.log('delete');
        this.BaseModel.destroy({
            where: where
        }).then(function(result){
            console.log('delete ok');
            console.log(result);
        }).catch((err) => {
            console.log('delete err:', err);
        });
    };
    update(where, data) {
        console.log('update');
        this.BaseModel.update(data, {
            where: where
        }).then(function(result){
            console.log('update ok');
            console.log(result);
        }).catch((err) => {
            console.log('update err:', err);
        });
    };
    findOne(where) {
        console.log('findOne');
        this.BaseModel.findOne({where: where})
            .then(result => {
                console.log('findOne ok');
                console.log(JSON.stringify(result));
            })
            .catch(err => {
                console.log('findOne err:', err);
            });
    };
    findList(where, order, attrInclude, attrExclude) {
        console.log('findList');
        this.query(where, order, null, null, attrInclude, attrExclude);
    };

    findListByPage(where, order, pageNo, pageSize, attrInclude, attrExclude) {
        console.log('findListByPage');
        this.query(where, order, pageNo, pageSize, attrInclude, attrExclude);
    };

    query(where, order, pageNo, pageSize, attrInclude, attrExclude) {
        let option = {};
        if(where){
            option.where = where;
        }
        if(pageNo && pageSize){
            option.offset = parseInt((pageNo-1) * pageSize);
        }
        if(pageSize){
            option.limit = parseInt(pageSize?pageSize:20);
        }
        if(order){
            option.order = order;
        }
        if(attrInclude){
            option.attributes = {
                exclude: attrInclude,
            };
        }else{
            if(attrExclude){
                option.attributes = {
                    exclude: attrExclude,
                };
            }
        }
        this.BaseModel.findAll(option)
            .then(function (result) {
                // console.log(result);
                for(let i=0; i<result.length ;i++){
                    console.log(JSON.stringify(result[i]));
                }
            }).catch((err) => {
                console.log('query err:', err);
            });
    };
};