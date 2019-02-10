var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('streamer', { title: 'Streamer', streamer_name: req.body.streamer_name }); 
});

module.exports = router;
