'use strict'

const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const productSchema = new Schema({
    name : String,
    price : String,
    onSale : Boolean
});

const product = model('product', productSchema)

const taskSchema = new Schema({
    name : String,
    summary : String,
    priority : Number,
    deadline : String,
    completed : Boolean

});

const task = model('task', taskSchema)


mongoose.connect('mongodb://localhost:27017/Tasks',{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{

if(err){console.error(err);}else{console.log('Connected')}
});
module.exports ={'product':product,'task':task};
