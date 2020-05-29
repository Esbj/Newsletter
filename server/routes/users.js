var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET All users. */
router.get('/', function(req, res, next) {
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;
    var users = JSON.parse(data);
    res.send(users);
  })
});

/* POST Log In user */

router.post('/authorize', function(req, res) {
  fs.readFile('users.json', (err, data) =>{
    if (err) throw err;

    var logInAllowed = false;
    var users = JSON.parse(data);

    for (let i = 0; i < users.length; i++) {
      const element = users[i];

      if(element.password == req.body.password && element.userName == req.body.userName)
      {
        logInAllowed = true;
      }
    }
    res.send(logInAllowed);
  })
})



module.exports = router;
