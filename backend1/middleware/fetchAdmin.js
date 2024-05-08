const dotenv = require('dotenv')
dotenv.config();
const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    console.log('fetch');
    const {admin_id, admin_password} = req.body
   
    try {
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        console.log(admin_id, admin_password);
        
        if(admin_id==adminUsername && admin_password==adminPassword){
            next();
        }
        else{
            return res.send({error: "incorrect credential", login: false})
        }
        
        
    } catch (error) {
        // console.log(token);
        return res.status(401).send({ error: "Please authenticate using a valid token catch block", success:false })
    }

}


module.exports = fetchuser;