var express = require('express');
var router = express.Router();
var fs = require('fs');

/* Hämta alla användare */
router.get('/', function(req, res, next) {
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  })
});
router.get('/email', function(req, res, next) {
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  })
});

module.exports = router;
