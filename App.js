const express = require('express');
const route = require('./Routes/Route');

const index = express()
index.use(route)


index.listen(9001,()=>{
console.log("success");
})