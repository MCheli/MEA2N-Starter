var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.get('/api', function(req, res, next){
  res.send(process.env.APPURL);
});

module.exports = router;
