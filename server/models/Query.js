const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Query = mongoose.model("query", UserSchema)
module.exports = Query;