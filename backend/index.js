import express from "express";
import mysql from "mysql";
import cors from "cors";

// THESE ARE ALL SUPER FUCKING IMPORTANT!!!
const app = express();
// NEED THIS SO I CAN POST !!
app.use(express.json());
app.use(cors());
// app.cors();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "flashcards_2.0",
});

app.get("/", (req, res) => {
  res.json("hello sir this is the backend");
});
// THIS IS FOR TEST
app.get("/list", (req, res) => {
  const q = "SELECT * FROM personal_flashcards";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

// THESE ARE FOR STUDENT MADE DECKS
app.get("/myflashcards", (req, res) => {
  const q = "SELECT * FROM my_flashcards";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

app.post("/myflashcards", (req, res) => {
  const q = "INSERT INTO my_flashcards (`english`,`japanese`,`example_sentence`) VALUES(?)";
  const values = [req.body.english, req.body.japanese, req.body.example_sentence];

  db.query(q, [values], (err, data) => {
    if (err) return res.json("failed");
    else return res.json("card made success");
  });
});

app.delete("/myflashcards/:id", (req, res) => {
  const cardId = req.params.id;
  const q = "DELETE FROM my_flashcards WHERE id = ? ";
  db.query(q, [cardId], (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

// THESE ARE FOR THE SCHOOL CLASSES - DECKS MADE BY TEACHERS FOR EACH CLASS

app.get("/classes/:id", (req, res) => {
  const classId = req.params.id;
  const q = `SELECT * FROM ${classId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

// NEED TO FIX THIS
// the problem is here for the delete function`lity not working
// I imagine it is a routing problem - wonrg param in address bar
// I need to male the address delete - it works with hardcoded values

app.delete("/classes/listening_kiso/:id", (req, res) => {
  const cardId = req.params.id;
  // I need to set this to whatever is in the
  const q = `DELETE FROM listening_kiso WHERE id = ? `;
  db.query(q, [cardId], (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

app.delete("/classes/listening_shokyu/:id", (req, res) => {
  const cardId = req.params.id;
  // I need to set this to whatever is in the
  const q = `DELETE FROM listening_shokyu WHERE id = ? `;
  db.query(q, [cardId], (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

app.get("/classes/*/:id", (req, res) => {
  res.json("dynamic class");
});

// -------

app.listen(8800, () => {
  console.log("connected to backend");
});
