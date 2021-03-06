const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
//instantiate my app
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Request
// app.get("/",(req,res) =>{res.send("Avengers Assemble")});
// app.get("/Avengers",(req,res) =>{res.status(200).send("Hello Avengers its good to see you")});

// app.get("/error",(req,res)=>{
//     res.status(500).send("oops something has gone wrong")
// });
//importing all of methods 
const ProductRoute = require('./router/products.js');

app.use("/product",ProductRoute);

const TaskRoute = require('./router/task.js')
app.use("/task",TaskRoute)
//error handling
app.use((req,res,next) => {
    next(createError(404, 'Resource not found'));
});

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
})

//comunicat with the app on a specififc port 
//app.listen(5019);
//DEPOLY ON A RANDOM PORT
//const server = app.listen

const server = app.listen(5019, () =>{ console.log(`server was succesfully started on port number: ${server.address().port}`)} );
