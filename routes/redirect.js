const express = require('express');

//router level middleware
const router = express.Router();

//home.ejs
//for filling in data or collection of data for blogpost user
router.get('/home', (req, res) => {
    res.render('home',{title:'Home Page'})
});

router.get('/about', (req, res) => {
    res.render('aboutpage', {title : "About"})
});

module.exports=router;

