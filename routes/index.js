var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Latifah Rahma'})
})
router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Latifah Rahma'})

})
module.exports = router;