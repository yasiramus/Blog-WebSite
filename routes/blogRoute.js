//requiring express in order to be able to use it
const express = require('express');

//router level middleware
const router = express.Router();

//importing the blogController.js from tthe controller folder 
//in order to use it or have access to it data
const Controller = require('../controller/blogController');

//using the imported controller
//sending/saving data to the backend
router.post('/create', Controller.SaveBlogData);

//using the imported controller
//fetching all data
router.get('/display', Controller.FetchDataBlog);

//using the imported controller
//fetching a single data
router.get('/detail/:id', Controller.FetchSingleData);

// display success message at the user/client side
router.get('/success', (req, res) => {
    res.render('success', { title: 'Success page' })
});

//updating/saving blog data this similar to using the put crud method at the backened
//i am using post here because with the post method i am unable to update data at the client side
router.post('/update/:id', Controller.UpadateSingleData);

//fetching data from the blog and displaying it at the updateBlog ejs so the the user/client
// can edit the blog data in order to update it
router.get('/fetch-update/:id',Controller.fetchUpdate)

//delete metthod 
//deleting data using their ids
router.delete('/delete/:id', Controller.DeleteDataBlog);

module.exports = router;