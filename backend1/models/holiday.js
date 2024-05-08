const mongoose = require('mongoose')

const Holiday = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
            unique: true
        },
        duration: {
            type: String,
            required: true,
        },
        destination:{
            type: String,
            required: true
        },
        location:{
            type:String,
            required:true
        },
        amenities:{
            type:String,
            required:true
        },
        level:{
            type:Number,
            required:true
        }
       
    },

)
module.exports = mongoose.model("holiday", Holiday)