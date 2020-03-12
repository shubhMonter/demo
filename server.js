const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
//db config
var db = require('./config/key').mongoURI;
// connect to MongoDB
mongoose.
connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello'));
app.get('/friend/list',routes.user);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server running on port: ${port}`));
