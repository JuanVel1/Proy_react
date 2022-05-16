const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        min:3,
    },
    lastname:{
        type:String,
        require:true,
        min:3,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        unique:true,
    },
    active:{
        type:Boolean,
        require:true,
    }, 
    avatar:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
    }

})

module.exports = mongoose.model("User",userSchema)