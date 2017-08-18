let userModel = require('../model/UserModel');
let BaseDao = require('./BaseDao');

module.exports = class UserDao extends BaseDao{
    constructor() {
        super('user', userModel)
    }
};