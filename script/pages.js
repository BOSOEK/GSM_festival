const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get('/', function(req, res) {
    //파일이 hbs일때 
    //res.render('index');

    fs.createReadStream('./html/index.html').pipe(res);
});

module.exports = router;