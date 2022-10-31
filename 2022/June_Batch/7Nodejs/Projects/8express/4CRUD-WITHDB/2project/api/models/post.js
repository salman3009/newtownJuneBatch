const mongoose=require('mongoose');

const MongooseSchema=mongoose.Schema({
    name:{type:String,required:true},
    emailId:{type:String,required:true}
});

module.exports=mongoose.model('Post',MongooseSchema);
