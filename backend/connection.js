const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb+srv://rushi:MsUjKS7yEOsl2Te4@cluster0.gc5zk.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: "True",
    })
  
    .then(()=>{
        console.log("Connected to MongoDB")
    })
}

module.exports = connect;