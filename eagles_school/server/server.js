const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database/database.js')
const router = require('./routes')
const app = express();
app.use(bodyParser.json())

app.use("/",router.router);

app.get('/',function(req,res){
    res.send('Home Page')
});



app.listen(3005,()=>{
    console.log('server listning in port 3001')

});

