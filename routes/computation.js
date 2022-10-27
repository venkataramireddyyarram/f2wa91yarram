var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    var value1 = Math.random() * 15;
    var value2 = Math.random() * 15;
    var value3 = Math.random() * 15;
    var value4 = Math.random() * 15;
    var cosT = Math.acosh(value1);
    var logger = Math.log1p(value2);
    var tn = Math.tan(value3);
    var sqr = Math.sqrt(value4);
    res.render('computation', {
        title: 'Venkata Rami Reddy Yarram',
        value1: value1,
        value2: value2,
        value3: value3,
        value4: value4,
        cosT: cosT,
        logger: logger,
        tn: tn,
        sqr: sqr
    });
});
module.exports = router;