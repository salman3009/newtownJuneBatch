const mongoose=require('mongoose');

const MongooseSchema=mongoose.Schema({
    expenseName:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:String,required:true},
    paidBy:{type:String,required:true}
});

module.exports=mongoose.model('Post',MongooseSchema);
