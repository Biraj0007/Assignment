const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1:27017/incentive'

const connectToDb= ()=>{mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
}


module.exports = connectToDb