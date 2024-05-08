const connectToDb =require('./db')
const express = require("express");
const cors = require("cors");
const app = express();
 // Load environment variables from .env file
app.use(cors());
app.use(express.json({ limit: '10MB' }))
const bodyParser = require("body-parser"); 


// urlencodedParser()
connectToDb()

// console.log(adminUsername, adminPassword);




app.use('/api/auth', require('./routes/adminLogin'))
app.use('/api/auth', require('./routes/employeeLogin'))
app.use('/api/auth', require('./routes/handleHoliday'))
app.use('/api/auth', require('./routes/calculation'))
// app.use('/api/addproduct', require('./routes/addproduct'))
// app.use('/api/allproduct', require('./routes/seeAllProducts'))
// app.use('/api/message', require('./routes/message_route'))
// app.use('/api/cart', require('./routes/addToCart'))


// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files

const server = app.listen(5000);


// "cors": "^2.8.5",
//     "dotenv": "^16.4.5",
//     "express": "^4.19.2",
//     "mongoose": "^8.3.3",
//     "mysql": "^2.18.1",
//     "nodemon": "^3.1.0"