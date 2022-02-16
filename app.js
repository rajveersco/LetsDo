//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
const res = require("express/lib/response");

const app= express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req, res){
    var today = new Date();

    var options= {
        weekday: "long",
        day: "numeric"
    };

var day= today.toLocaleDateString("en-US", options);

res.render("list", {
    kindofDay:day
});

});

app.listen(3000, function(){
    console.log("Server 3000 is running!");
});