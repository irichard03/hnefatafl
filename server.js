const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.static("./views/public"));

app.get('/bar', (req,res)=>{
    res.send("foo")
})

app.listen(PORT, ()=>{
    console.clear();
    console.log(`server is running on port: ${PORT}`);
});