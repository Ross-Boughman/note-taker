const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const notes = require("./db/db.json");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// returns notes on notes page
app.get("/api/notes", (req, res) => {
  res.json(notes.slice(1));
});

// get route for index page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// get route for notes page
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// another route for index, making it home page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// creates a new note, adding id based on array position. Pushes
// new note to array
function writeNote(body, array) {
  const newNote = body;
  if (!Array.isArray(array)) array = [];

  if (array.length === 0) array.push(0);

  body.id = array[0];
  array[0]++;

  array.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(array, null, 2)
  );
  return newNote;
}

// post route for writeNote function, populates notes on page
app.post("/api/notes", (req, res) => {
  const newNote = writeNote(req.body, notes);
  res.json(newNote);
});

// function to remove notes based on id, removes from db.json
function deleteNote(id, array) {
  for (let i = 0; i < array.length; i++) {
    let note = array[i];

    if (note.id == id) {
      array.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(array, null, 2)
      );

      break;
    }
  }
}

// delete route using deleteNote function, returning note page
// with updated (deleted) db.json
app.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(true);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
