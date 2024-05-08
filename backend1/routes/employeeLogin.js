const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const fetchAdmin = require('../middleware/fetchAdmin')
const Employee = require('../models/employee')


router.post('/employeeSignup',  async (req, res) => {
    console.log(req.body);
    const {empId, name, email, password } = req.body
    try {
        const data =await Employee.findOne({empId})
        if(!data){
           
            const emp = await Employee.create({name, empId, password, email, target:0,incentive:0,holiday:{}, bonus:0})
            return res.json({msg:'message added success fully', login:true})
        }
        // return res.json({msg:'message added success fully', login:true})
    }
    catch (err) {
        return res.json({ err: "some error occured" , login: false})
    }
})

module.exports = router

// empId:{
//     type:Number,
//     require:true
// },
// name: {
//     type: String,
//     required:true
// },
// email:{
//     type: String,
//     required:true,
// },
// password:{
//     type:String,
//     required:true
// },
// target:{
//     type:Number,
//     default:0
// },
// incentive:{
//     type:Boolean,
//     default:0
// },
// holiday:{
//     default:{}
// }