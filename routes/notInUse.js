//fetching data from the backend and displaying it in display.ejs
// router.get('/display',(req,res) => {
//     BlogModel.find().then((results) => {
//             res.render('display',{printContent:results})
//     })
// })


//the update property
// // await BlogModel.findOneAndUpdate({_id:req.params.id},updateBlogData).set().then(result =>{ 
// when u use the const on the update method it does not work
   // const updateData = new BlogModel(updateBlogData)
    // await BlogModel.findByIdAndUpdate({ _id: req.params.id }, updateBlogData).set().then(result => {

      //  time MediaKeyStatusMap  {
      //    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
      //    timestamps: {currentTime:()=> Math.floor(Date.now())}
      //  }



  //     <script>
  //     const update = document.querySelector('button');

  //     const id = update.dataset.doc;
  //        const endpoint = `/blog/update/${id}`;
  //        const obj = {
  //          title: document.querySelector('input').getAttribute('value')
  //        }
  //              console.log(document.querySelector('input').getAttribute('value'))
  //        update.addEventListener("click", () => {

  //           //the fetch is a ajax client based 
  //           fetch(endpoint, {
  //              method: "PUT",
  //              body:JSON.stringify(obj)            
  //           }).then(result => result.json())
  //              .catch(err => console.log(err))
  //             //  console.log(obj)
  //        })
  //  </script>