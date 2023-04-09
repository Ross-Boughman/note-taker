const fs = require("fs");
const express = require("express");
const path = require("path");


const app = express();

const PORT = process.env.PORT || 3306;


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.post("/notes", (req, res) => {
    const note = req.body

    
});


app.listen(PORT, () => console.log("Server listening on port " + PORT));