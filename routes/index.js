var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('index.html');
});

//Subscribe to mailing list
//TODO: Don't add if already on list
router.post('/subscribe', function (req, res, next) {
    User.create(req.body);
    res.send("Success");
});

//Unsubscribe from mailing list
router.post('/unsubscribe', function (req, res, next) {
    User.find(req.body).remove().exec();
    res.send("Success");
});

module.exports = router;
