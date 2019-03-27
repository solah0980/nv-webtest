const userController = require('./controllers/userController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
    app.get('/users', userController.index)
    app.get('/user/:userId', userController.show)
    app.post('/user', userController.create)
    app.put('/user/:userId', userController.put)
    app.delete('/user/:userId', userController.remove)
    app.post('/login', UserAuthenController.login)
}