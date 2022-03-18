const express = require("express"); // require express
const path = require("path"); // require path 

const app = express(); // run express and store the methods in app

let Port = process.env.PORT || 3000 // initalised thr port

app.use(express.json()); //this is to accept data in json format

app.use(express.urlencoded({ extended: true })); // this is basically to decode the data send through html form

// const route = require("./routes/route"); 

const triggerFunction = require("../controller/timeController");
// console.log(timeController)


//give the path to our html page and join it with express
const staticPath = path.join(__dirname, "./public")
app.use(express.static(staticPath))

app.get("/", (req,res) =>{
    res.send("hello")
})


app.post("/form", triggerFunction, (req,res) =>{
    var item = req.body.name;
    console.log(item);
})


// this is basically to listen on the port
app.listen(Port, function () {
  console.log(`App running on port ${Port}` );
});