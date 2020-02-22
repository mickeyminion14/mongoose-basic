const express = require('express');

const account = require('./routes/account/account');
const app = express();
const PORT = 8080; 

app.use("/account",account);



app.use((req, res) => {
    res.send("Page not found 404 !!") 
});

app.listen(PORT, () => {
    console.log("server running on port "+ PORT);
})