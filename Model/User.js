const mongoose=require('mongoose');

const Schema=mongoose.Schema;
var Userschema=new Schema({
    
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("User",Userschema);