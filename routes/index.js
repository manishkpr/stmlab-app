var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session && req.session.passport && req.session.passport.user) {
    // res.send(template(req.session.passport.user));
    next();
  } else {
    res.render('index', { title: 'Twitch' }); 
  }
});

module.exports = router;
