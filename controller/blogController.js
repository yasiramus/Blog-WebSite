//implenting the controller method 
//importing or requiring the model in order to have access to the mongoose schema within the model
const BlogModel = require('../model/blog');

//sending/saving data to the backend
const SaveBlogData = async (req, res) => {
    const blogData = {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    }
    const BlogBody = new BlogModel(blogData);
    //saving data to the backend
    //implenting the concise body arrow functions and the implicit return
    await BlogBody.save().then(result => {
        // res.send(result)
        //redirecting to the success page
        if (result) {
            console.log('Data has recorded successfully');
            res.redirect('success')
        }
        // res.redirect('display')
        //implenting the concise body arrow functions
    }).catch(err =>
        console.log(err.message)
        )
         
};

//fetching all data from the backend and rendering it in the display.ejs file
const FetchDataBlog = async (req, res) => {
    //the find method allows us to fetch all data
    //while the sort method allow to sort data both 
    //in the ascending and the descending order.
    // await BlogModel.find().sort({ title: -1 }).then(result => {
    await BlogModel.find().then(result => {
        //displaying or rendering it in display.ejs
        if (result) {
            const reversed = result.reverse()
            // res.send(result)
            res.render('display', { title: 'Display Page', printContent: reversed })
            console.log('All blog data has been fetched successfully');
        }
    }).catch(err =>
        console.log(err.message))
};

//rendering the detail page by fetching a single data blog
const FetchSingleData = async (req, res) => {
    await BlogModel.findById(req.params.id).then((result) => {
        if (result) {
            res.render('detail', { title: 'Detail Content Page', blogdata: result })
            console.log('Data has fetched successfully')
            // res.send(result)
        }
    }).catch((err) => console.log(err.message))
};

//updating a single data for the updateblog.ejs and redirecting it to the display page
const UpadateSingleData = async (req, res) => {
    const updateBlogData = {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    }
    //the updateone update the first document that matches with the filter
    await BlogModel.updateOne({ _id: req.params.id }, updateBlogData).set().then(result => {
        //this commented code also works that is another way to update data
    // await BlogModel.findByIdAndUpdate({_id:req.params.id},req.body).then((result) => {
        if(result){
            res.redirect('/blog/display')
            console.log(result);
        }
    }).catch(err => {
        console.log(err.message)
    })
};

//fetching data from the blog and displaying it at the updateBlog ejs so the the user can edit the blog data
// in order to update it
const fetchUpdate = async (req, res) => {
    const id = req.params.id
    //the findbyid here helps to fetch data using the id
    await BlogModel.findById(id).then(result => {
        //this commented code also works that is another way to fetch data to lean more about what new  does put 
        //ur cursor on it
    // await BlogModel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then((result) => {
        //displaying or rendering it in updateBlog.ejs
        if (result) {
            res.render('updateBlog', {title:'update Page',data:result})
            console.log('blog data hasbeen fetched for updating');
        }
    }).catch(err =>
        console.log(err.message))
};

//deletion of blog data using the id
const DeleteDataBlog = async (req, res) => {
    await BlogModel.findByIdAndDelete(req.params.id)
        .then(result => {
            res.send(result)
            console.log('blog data successfully deleted');
        }).catch(err => {
            console.log(err.message);
        })
};

//exporting it in order to have access to it outside or use it
module.exports = {
    SaveBlogData,
    FetchDataBlog,
    FetchSingleData,
    DeleteDataBlog,
    UpadateSingleData,
    fetchUpdate
};