const mongoose = require('mongoose')
const holiday = require('./holiday')

const Employee = new mongoose.Schema(
    {
        
        empId:{
            type:Number,
            require:true
        },
        name: {
            type: String,
            required:true
        },
        email:{
            type: String,
            required:true,
        },
        password:{
            type:String,
            required:true
        },
        target:{
            type:Number,
            default:0
        },
        incentive:{
            type:String,
            default:0
        },
        holiday:{
            type:Object,
            default:{}
        },
        bonus:{
            type:Number,
            default:0
        }
       
    },

)
module.exports = mongoose.model("employee", Employee)