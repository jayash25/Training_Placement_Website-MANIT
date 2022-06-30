const mongoose = require("mongoose");
const URI = "mongodb+srv://pranav:Pg07%40monrrgrgodbatlas@cluster0.1y6tm.mongodb.net/tpo?retryWrites=true&w=majority";

const connect = () => {
  mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology:true, })
  .then(() => {
    console.log("Connect ho gya bhayaji !!");
  })
  .catch(err => {
    console.log("ERROR!!!!!");
    console.log(err);
  })
};
module.exports = connect;
