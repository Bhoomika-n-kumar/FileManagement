// server.js

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();

const DIR = './uploads';

const cors = require('cors')

const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}
 
let storage = multer.diskStorage({ 
    destination: (req, file, cb) => {  
      cb(null, DIR); 
    }, 
    filename: (req, file, cb) => { 
      cb(null, file.fieldname + '-' + Date.now() + '.' + /*path.extname(*/file.originalname/*)*/);    
    }  
}); 

let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true); //to communicate the response to frontend
  next();
});
 
/*app.get('/start', function (req, res) {
  res.end('file catcher example');
});*/
 
app.post('/start/upload',upload.single('file'), function (req, res) {
    if (!req.file) { //if any file is not upoaded
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        console.log(req.file);
        /*return res.send({
          success: true
        })*/
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename}); 
      }
});

app.post('/start1/upload',upload.single('file'), function (req, res) {  });

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});