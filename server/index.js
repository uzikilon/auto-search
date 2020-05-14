const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const proxy = require('express-http-proxy');
const users = require('./users.json');


const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(session({ secret: 'my-app-secret', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: false }));

app.post('/api/login', function (req, res) {
  const {username, password} = req.body;
  if (users.find(user => user.username == username && user.password == password)) {
    req.session.loggedIn = true;
    res.send({status: 'ok'});
  } else {
    res.status(403).send({status: 'error'});
  }
});

app.use(proxy('https://vpic.nhtsa.dot.gov/'));

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

