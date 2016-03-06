var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express',
        scripts: ['javascripts/custom/slider.js']
    });
    
});



module.exports = router;