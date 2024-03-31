const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const db = require('./config/mongoose');


const port = process.env.PORT; 

const app = express();

app.use(express.urlencoded());
app.use('/', require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log("Error");
        return;
    }
    console.log(`Server is running on server -> ${port}`);

}) 