const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const app = express();



app.listen(3000, () =>{
    console.log("listening")
});
app.get('class/work', function(req, res){
        res.send("Hello World!")
    }
);