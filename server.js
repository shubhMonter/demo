const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
const bodyParser = require('body-parser');
const logger  = require('morgan');
//db config
var db = require('./config/key').mongoURI;
// connect to MongoDB
mongoose.
connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.get('/', (req, res) => res.send('hello'));
app.get('/friend/list', routes.friend);
app.post('/friend/add', routes.friend);
app.post('/friend/delete', routes.friend);
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
});
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on port: ${port}`));
