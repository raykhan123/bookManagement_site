const mongoose = require("mongoose");
const ObjectId= mongoose.Schema.Types.ObjectId

const bookModel = new mongoose.Schema({
    title: {
        type:String,
        required:true,
          unique: true,
          trim:true
        },
    excerpt:{
        type : String,
        required:true,
        trim : true
    },
    userId: {
        type : ObjectId,
        ref : "User",
        required : true,
        trim : true
    },
    ISBN:{
        type : String,
        required: true,
        trim: true,
        unique: true, 
        min: 13,
        max:17
    },
    category:{
        type : String,
        required : true,
        trim : true
    },
    subcategory :{
        type: String,
        required : true,
        trim : true
    },
    reviews:{
        type : Number,
        trim: true,
        default: 0,
    },
    deletedAt:{
        type : Date,
        trim : true
    },
    isDeleted:{
        type : Boolean,
        default : false
    },
    releasedAt:{
        type : Date,
        trim : true,
      
    }
},{timestamps:true})

module.exports = mongoose.model("Book", bookModel);