//requiring mongoose
const mongoose = require('mongoose');
//calling the Schema method class
const{Schema} = mongoose;

//creating a data structure for the blog model
const blogSchema = new Schema({
    //setting valiadation using the required and setting maxlength
    title: {
        type: String,
        required: true,
        maxlength: 30,
        // uppercase:true
    },
    description: {
        type: String,
        required: true,
        // unique:true,
        maxlength:50
    },
    content: {
        type: String,
        required: true,
        //the lowercase properity means accept input when the user enters an uppercaseletter
        //the system will process it as lowercase
        lowercase: true,
    }
},
    //timestamp allow us to have access to the time and date data was sent to the server
    { timestamps: true }
    );

//declaring a new variable and equating it to the mongoose model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

