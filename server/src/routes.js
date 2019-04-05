const userController = require('./controllers/userController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const blogController = require('./controllers/BlogController')
const CommentController = require('./controllers/CommentController')
let multer = require('multer')

module.exports = (app) => {
     //upload section
    let storage = multer.diskStorage({
        destination: function(req, file, callback){
            callback(null, './public/uploads');
        },
        filename: function (req, file, callback) {
            console.log(file)
            callback(null, file.originalname);
        }
    })
    let upload = multer({storage: storage}).array("userPhoto", 10)
    // upload
  app.post("/upload",
  function(req, res) {    
    upload(req, res, function(err) {
    if (err) {
      return res.end("Error uploading file.");

      }
      res.end("File is uploaded");

    })
  }
)

//delete file uploaded function
app.post('/upload/delete',
  async function (req, res) {
    try {
      const fs = require('fs');      

      console.log(req.body.filename)
      fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename, (err) => {
        if (err) throw err;
        res.send("Delete sucessful")
        // console.log('successfully deleted material file');
      });
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete file the material'
      })
    }
  }
)

    //route get login
    app.post('/login', UserAuthenController.login)
    
    //route ger user
    app.get('/users', isAuthenController,userController.index)
    app.get('/user/:userId', userController.show)
    app.post('/user', userController.create)
    app.put('/user/:userId', userController.put)
    app.delete('/user/:userId', userController.remove)
   

    //route get blog
    app.get('/blogs', blogController.index)
    app.get('/blog/:blogId', blogController.show)
    app.post('/blog', blogController.create)
    app.put('/blog/:blogId', blogController.put)
    app.delete('/blog/:blogId', blogController.remove)

    //route get comment
    app.get('/comments', CommentController.index)
    app.get('/comment/:commentId', CommentController.show)
    app.post('/comment', CommentController.create)
    app.put('/comment/:commentId', CommentController.put)
    app.delete('/comment/:commentId', CommentController.remove)

}