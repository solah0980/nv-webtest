let express = require('express')
let bodyPaser = require('body-parser')
const app = express()
const {sequelize} = require('./models')
const cors = require('cors')


app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: true}))
app.use(cors())


require('./userPassport')
require('./routes')(app)

app.use('/assets', express.static('public'))

let port = 8081

sequelize.sync({force: false}).then(()=>{
app.listen(port, function(){
    console.log('Server running on: ' + port)
})
})
