const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kaushikharshit5:78E8Ga5pCehxkSMY@userpage-db.zrh6dih.mongodb.net/?retryWrites=true&w=majority&appName=userpage-db");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error"));
db.once('open',function(){
    console.log("successfully connected to database");
})

module.exports = db; 
 