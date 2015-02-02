var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    uuid = require("node-uuid"),
    http = require("http"),
    app = express();

app.use(express.static(path.join(__dirname, "public")));

var notes = [
{
    _id: uuid.v1(),
    title: "My Little Pony",
    text: "Is so cuuute I want to paint my hair rainbow colors!",
    order: 0,
},
{
    _id: uuid.v1(),
    title: "pick up goceries",
    text: "eggs, milk, bread, food goop",
    order: 1,
},
{
    _id: uuid.v1(),
    title: "pick up cat",
    text: "get scratched! don't do it. oweee!",
    order: 2,
},
{
    _id: uuid.v1(),
    title: "my other little pony",
    text: "is a mean cat mean mean mean mean mean mean mean mean mean mean mean mean mean mean mean mean mean mean!!!",
    order: 3,
},
{
    _id: uuid.v1(),
    title: "go play",
    text: "sugar and spice and everything nice",
    order: 4,
},
{
    _id: uuid.v1(),
    title: "Powerpuff Girls",
    text: "RULE!",
    order: 5,
}
];

app.use(bodyParser.json());

app.get("/notes", function (req, res) {
    res.status(200).json(notes.filter(function (note) {
        return !note._deleted
    }));
});

app.get("/notes/:id", function (req, res) {
    var found = false;

    notes.some(function (note) {
        if (note._id == req.params.id) {
            found = note;
            return true;
        }
    });

    if (!found) {
        res.status(404).end("Note not found");
    }
    else {
        res.status(200).json(found);
    }
});

app.post("/notes", function (req, res) {
    notes.push({
        _id: uuid.v1(),
        title: req.body.title,
        text: req.body.text,
        order: notes.length
    });

    res.status(201).json(notes[notes.length - 1]);
});

app.put("/notes/:id", function (req, res) {
    var found = false;

    notes.some(function (note) {
        if (note._id == req.params.id && !note._deleted) {
            note.title = req.body.title;
            note.text = req.body.text;
            found = note;
            return true;
        }
    });

    if (!found) {
        res.status(404).end("Note not found");
    }
    else {
        res.status(200).json(found);
    }
});

app.delete("/notes/:id", function (req, res) {
    var found = false;

    notes.some(function (note) {
        if (note._id == req.params.id & !note._deleted) {
            note._deleted = true;
            found = note;
            return true;
        }
    });

    if (!found) {
        res.status(404).end("Note not found");
    }
    else {
        res.status(200).json(found);
    }
});

http.createServer(app).listen(8000, function () {
    console.log("Listening on port 8000");
});
