const userController = require('./controllers/userController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.get('/users', isAuthenController,userController.index)
    app.get('/user/:userId', userController.show)
    app.post('/user', userController.create)
    app.put('/user/:userId', userController.put)
    app.delete('/user/:userId', userController.remove)
    app.post('/login', UserAuthenController.login)
}