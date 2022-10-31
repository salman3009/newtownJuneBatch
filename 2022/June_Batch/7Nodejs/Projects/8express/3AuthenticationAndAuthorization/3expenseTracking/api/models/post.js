const mongoose=require('mongoose');

const MongooseSchema=mongoose.Schema({
    email:{type:String,required:true,unique: true },
    password:{type:String,required:true}
});

module.exports=mongoose.model('Post',MongooseSchema);
