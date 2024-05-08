const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');
const fetchAdmin = require('../middleware/fetchAdmin')
const Holiday = require("../models/holiday")


router.post('/viewHoliday', fetchAdmin, async (req, res) => {
    try {
        const data = await Holiday.find()

        return res.json({ msg: 'message added success fully', data, success: true })
    }
    catch (err) {
        return res.json({ err: "some error occured", success: false })
    }
})

router.post('/addHoliday', fetchAdmin, async (req, res) => {
    const { name, duration, destination, location, amenities, level } = req.body
    try {
        const data = await Holiday.create({
            name, duration, destination, location, amenities, level
        })

        return res.json({ msg: 'message added success fully', data, success: true })
    }
    catch (err) {
        return res.json({ err: "some error occured", success: false })
    }
})

router.put('/editHoliday', fetchAdmin, async (req, res) => {
    const { name, duration, destination, location, amenities, level, _id } = req.body
    console.log(_id, name);
    try {
        const data = await Holiday.findByIdAndUpdate(
            _id, { name, duration, destination, location, amenities, level }, { new: true } 
        )
        console.log('----------');

        return res.json({ msg: 'message added success fully', data, success: true })
    }
    catch (err) {
        return res.json({ err: "some error occured", success: false })
    }
})

router.delete('/deleteHoliday', fetchAdmin, async (req, res) => {
    const {  _id } = req.body
    console.log(_id);
    try {
        const data = await Holiday.findByIdAndDelete(_id)
        console.log('----------');

        return res.json({ msg: 'message added success fully', data, success: true })
    }
    catch (err) {
        return res.json({ err: "some error occured", success: false })
    }
})

module.exports = router