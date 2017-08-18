const Sequelize = require("sequelize");

module.exports = {
    username: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        validate: {
            isEmail: true,
        }
    },
    mobilephone: {
        type: Sequelize.BIGINT(11),
        validate: {
            isEmail: true,
        }
    },
    gender: {
        type: Sequelize.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    }
};

