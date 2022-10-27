const mongoose=require('mongoose');

const MongooseSchema=mongoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    reason:{type:String,required:false}
});

module.exports=mongoose.model('PostCollection',MongooseSchema);
