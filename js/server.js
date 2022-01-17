//importing express
const express = require("express");

//importing mongoose
const mongoose = require('mongoose');

//this is an application middleware express()
const app = express();

//importing the morgan inbuilt module
const morgan = require('morgan');

//setting the port number
const PORT = process.env.PORT || 8000;

//setting the views engine
app.set('view engine', 'ejs');

//importing the route folder
const BlogRoute = require('../routes/blogRoute');
const Redirect = require('../routes/redirect');

//middlewares
//allow us to send data to the backend
app.use(express.urlencoded({ extended: true }));

//allow to access the req.body
app.use(express.json());

//using the third party middleware morgan
app.use(morgan('combined'));

//serving static files
app.use(express.static('static'));

//using the blog route
app.use('/blog', BlogRoute);
app.use('/redirect', Redirect)

//declaring a variable and equating it to the mongodb database
const mongoUri = 'mongodb://localhost:27017/blogdatabase';

//connecting to the database
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    if (success) {
        console.log('mongodb connection established')
    }
}).catch(err => console.log(err.message));

//404 page
app.use((req, res) => {
    res.status(404).render('notfound',{title:'Error'})
});

//server listening
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
});