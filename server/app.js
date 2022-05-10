const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({path: "./config.env"});
require("./db/conn");

// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


// We link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

//Middleware
// const middleware = (req, res, next) =>{
//     console.log("Hello my MIddleware");
//     next();
// }

// app.get("/contact", (req, res) => {
//     // res.cookie("Test", "niraj");
//     res.send("Hello contact world from the server.")
// });

app.listen(PORT,function(){
    console.log("Server started at port 5000.");
});