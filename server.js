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

// app.post("/api/notes", (req, res) => {
    
//     //Read the db.json file from disk using fs

//     //Parse it as json and stored the array in a variable

//     fs.readFile("db.json", "utf-8", (err, data) => {

//         res.json(JSON.parse(data));

//     });

// })

//     let dkfjsldkfj = JSON.parse(data);

app.post("/api/notes", function(req, res) {

    
    fs.readFile("db.json", "utf-8", (err, notesData) => {

        //Everything after you read the file from the hard drive happens here
        let savedNotes = JSON.parse(notesData);

        //Get the new note from the request
        let newNote = req.body;
        newNote.id = savedNotes.length;
        
        //Add the new note to the saved notes array
        savedNotes.push(newNote);
        
        fs.writeFile("db.json", JSON.stringify(savedNotes), (err) => {
            
            res.send("Gibberish");

        });
        
    
    });

    
});

app.delete("/api/notes/:id", function(req, res) {

    
    fs.readFile("db.json", "utf-8", (err, notesData) => {

        let savedNotes = JSON.parse(notesData);

        let noteID = req.params.id;
        savedNotes.splice(noteID, 1);

        
        for (var i = 0; i < savedNotes.length; i++) {
            let note = savedNotes[i];
            note.id = i;
        }
        

        fs.writeFile("db.json", JSON.stringify(savedNotes), (err) => {
            
            res.send("Gibberish");

        });
       
        
    
    });

    
});
    
    

    


app.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "./index.html"));

});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });