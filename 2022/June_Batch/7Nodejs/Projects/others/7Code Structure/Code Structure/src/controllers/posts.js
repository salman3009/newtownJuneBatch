const Post = require("../models/post");


exports.createPost = (req, res, next) => {
  

  const post = new Post({
    category: req.body.category,
    empId: req.body.empId,
  });

  post.save().then(function(result){
   
    res.status(201).json({
      message:"Successfully added",
      posts:result
     });
  }).catch(function (error) {
 
    res.status(500).json({
      message: "Some internal error occured"
    });
  });
};


exports.updatePost = (req, res, next) => {
  const filter = { _id: req.body.id };
  const update = { category: req.body.category,empId:req.body.category};
  Post.update(filter,update).then(result=>{
    res.status(200).json({message:"update successfully"});
  });

}

exports.getPosts = (req, res, next) => {
 
  const postQuery = Post.find();
  postQuery
    .then(documents => {
    
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: documents
    
      });
    }).catch(error => {
     
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};


exports.deletePost = (req, res, next) => {

  Post.deleteOne({empId:req.params.id}).then(documents=>{
    res.status(200).json({
      message:'posts fetched successful',
      posts:documents
    });
  });  

 


};



