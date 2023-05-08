const mongoose=require('mongoose');

const recordSchema=new mongoose.Schema({
    title:{type:String},
    tage:[{type:String}],
    imageUrls: [{type:String}],
    discription:{type : String},
    totalPrice :{type:Number},
    quantity:{type:Number},
    address:String,
    status:{type:String, enum:['Pending', 'Delivered', 'Canceled']},
    deletedAt:{type:Date,default:null},
    isUpdated:{type:Boolean, default:false},
    isDeleted:{type:Boolean,default:false}

},{timestamps:true});

module.exports=mongoose.model('Record',recordSchema);