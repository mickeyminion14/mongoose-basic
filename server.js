const express = require('express');

const account = require('./routes/account/account');
const app = express();
const mongoose = require('mongoose');
const PORT = 8080; 
const url = "mongodb://minion:12345minion@ds157964.mlab.com:57964/todominion";
app.use(express.json());


app.use("/account",account);



app.use((req, res) => {
    res.send("Page not found 404 !!") 
});

mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology : true},() => {
    app.listen(PORT, () => {
        console.log("server running on port "+ PORT);
    })
});


