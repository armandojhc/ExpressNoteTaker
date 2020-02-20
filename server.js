var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();




var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/notes", (req, res) => {

    res.sendFile(path.join(__dirname, "./notes.html"));

});

app.get("/assets/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./assets/index.js"));
})

app.get("/assets/styles.css", (req, res) => {
    
    res.sendFile(path.join(__dirname, "./assets/styles.css"));
})

app.get("/api/notes", (req, res) => {
    
    fs.readFile("db.json", "utf-8", (err, data) => {

        res.json(JSON.parse(data));

    });

})

app.post("/api/notes", (req, res) => {
    
    //Read the db.json file from disk using fs

    //Parse it as json and stored the array in a variable

    let dkfjsldkfj = JSON.parse(data);

    

    //Add the new note to the array

    //Write that JSON.stringify(json array) back to disk as db.json

    //res.json the notes array

    
    

    
})

app.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "./index.html"));

});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });