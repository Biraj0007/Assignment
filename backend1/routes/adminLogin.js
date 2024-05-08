const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const fetchAdmin = require('../middleware/fetchAdmin')


router.post('/adminLogin',fetchAdmin,  async (req, res) => {
    const {admin_id, admin_password } = req.body
    try {
        
        return res.json({msg:'message added success fully', login:true})
    }
    catch (err) {
        return res.json({ err: "some error occured" , login: false})
    }
})

module.exports = router