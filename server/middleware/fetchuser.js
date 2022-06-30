const JWT_SECRET = "pranav0907";
var jwt = require('jsonwebtoken');

const fetchuser = (req,res,next)=>{
    try {
        const token = req.header('auth-token');
        if(!token)
            res.status(401).send("Invalid token");
        const data = jwt.verify(token, JWT_SECRET);
        req.userdatafromjwt = data.userdata;
        next()
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal server error !");
    }
}

module.exports = fetchuser