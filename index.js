const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT; 

const app = express();



app.listen(port, (err)=>{
    if(err){
        console.log("Error");
        return;
    }
    console.log(`Server is running on server -> ${port}`);

})