const Promisse = require('bluebird')
const bcrypt = Promisse.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, option){
    const SALT_FACTOR = 8
    if (!user.changed('password')){
        return
    }

    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING,
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }

})
    //เช็คพาสเวิร์ดแบบ hash 
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    },

    User.associate = function (models) {}

    return User
}