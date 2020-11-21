// Load Data
var fs = require("fs");
var db = require("../Develop/db/db.json");
// Generate a v4 (random) id
var uuidv4 = require("uuid");

// Routing
module.exports = function(app){
    // API GET request to retrieve data from database
    app.get("/api/notes", function(req, res){
        res.send(db);
    });

    // API POST to create new notes
    app.post("/api/notes", function(req, res){
        var newNote = {
            id: uuidv4(),
            title : req.body.title,
            text: req.body.text
        };
        db.push(newNote);
        res.send(newNote);
    });

    // API DELETE to delete notes
    app.delete("/api/notes/:id", function(req, res){
        var notesID = req.params.id;
        for(var i = 0; i < db.length; i++){
            if(db[i].id === notesID){
                var index = db.indexOf(db);
                var deletedNote = db.slice(index, 1);
            }
        }
        res.send(deletedNote);
    })
}