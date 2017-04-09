var express = require('express');
var router = express.Router();
const User = require('../models/user');
var path = require('path');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//Subscribe to mailing list
//TODO: Don't add if already on list
router.post('/subscribe', function (req, res, next) {
    User.create(req.body);
    res.sendFile(path.join(__dirname, '../public/success.html'));
});

//Unsubscribe from mailing list
router.post('/unsubscribe', function (req, res, next) {
    User.find(req.body).remove().exec();
    res.sendFile(path.join(__dirname, '../public/success.html'));
});

module.exports = router;
