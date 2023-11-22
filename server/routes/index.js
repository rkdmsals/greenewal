var express = require('express');
var router = express.Router();
// const app = express();
//const cartRoutes = require('./cartRoutes');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/api/feedback', require('./feedback'));
router.use('/api/addToCart', require('./cartRoutes'));

////////
//router.use('/api/addToCart', require('./cartRoutes'));
/////////

module.exports = router;