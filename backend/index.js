const express = require("express");
const path = require("path")
const connect = require("./connection");
const cors = require("cors");

const app = express();
PORT = 8000;
app.use(express.json());
app.use(cors());
app.use("/" , require(path.join(__dirname , "routes/routes.js")))

// app.get("/", (req,res) => {
//     res.send("Hello world !")
// })

connect()
app.listen(PORT , () => {
    console.log("server is running at http://localhost:8000")
})