const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const { body, validationResult } = require('express-validator');
const fetchAdmin = require('../middleware/fetchAdmin')
const Employee = require('../models/employee')
const Holiday = require('../models/holiday');
const { text } = require('body-parser');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: 'bipa9210@gmail.com',
        pass: 'gjbx tgme xxbd nabh'
    }
});


router.post('/updateTarget', fetchAdmin, async (req, res) => {
    console.log('----------->');
    const { admin_id, admin_password, listOfEmployees } = req.body
    try {
        const holiday = await Holiday.find()
        // console.log(holiday);
        const listEmployee = listOfEmployees
        listEmployee.sort((a, b) => b.target - a.target);
        const sort_holiday = holiday
        sort_holiday.sort((a, b) => b.level - a.level)
        for (item of listEmployee) {

            const data = await Employee.findOne({ empId: item.empId })
            console.log('------');
            console.log(data._id);
            let incentive = data.incentive
            let Bonus = data.bonus
            let Holiday = data.holiday
            let total = item.target + data.target
            console.log(`---> total - ${total}, ${data?.target}, `);
            console.log(Bonus, Holiday,incentive);
            console.log('@@@@@@@', data);
            if (total >= 10000 && total < 20000) {
                incentive = 1.5
            }
            if (total >= 20000 && total < 30000) {
                incentive = 3
            }
            if (total >= 30000 && total < 50000) {
                incentive = 3.5
                Bonus = 1000
            }
            if (total >= 50000) {
                incentive = 5
                Bonus = 0
                Holiday = sort_holiday[0]
                console.log('more then 50k');
                if(sort_holiday.length>1){
                    sort_holiday.shift()
                    console.log('holiday removed');
                }

            }
            const updated_Employee = await Employee.findByIdAndUpdate(data._id, { target: total, incentive, holiday: Holiday, bonus: Bonus },{ new: true } )
            console.log('===');  
            console.log(updated_Employee);
            let mailOptions = {
                from: {
                    name :'official',
                    address:'bipa9210@gmail.com'
                },
                to: data.email,
                subject: 'Your Achieved Target',
                text: `target is${total} incentive ${incentive}%`
            };
            const up = await transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              console.log('sentttttttttttttttttttttt', up);
        }
    }
    catch (err) {
        console.log('error occured');
        return res.json({ err: "some error occured", login: false })
    }
})

module.exports = router