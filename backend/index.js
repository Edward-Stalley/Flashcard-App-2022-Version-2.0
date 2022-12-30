import express from "express";
import mysql from "mysql";
import cors from "cors";

// import Mysqli from "mysqli";

// THESE ARE ALL SUPER FUCKING IMPORTANT!!!
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://eb-flashcards.vercel.app",
  })
);

// const mysqli = require("mysqli");
// NEED THIS SO I CAN POST !!
// (x) => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader())
// app.cors();

// let db = new Mysqli({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "flashcards_2.0",
// });

// DO NOT DELETE - Works for local host
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "flashcards_2.0",
});

// 000webhost test

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "id20077970_root",
//   password: "g)3Lyc>e^xm!iE@&",
//   database: "id20077970_eb_flashcards",
// });

// const MYSQL_URL = "mysql://root:nkEDYn2avYUNrKTiEsmf@containers-us-west-19.railway.app:6177/railway";

// Railway - DB hosting website
// const db = mysql.createConnection({
//   host: "containers-us-west-19.railway.app",
//   user: "root",
//   password: "nkEDYn2avYUNrKTiEsmf",
//   database: "railway",
// });

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

// Dynamic get request from database based on dynamic year/week/class

app.get("/ClassSelector/:yearId/:weekId/:classId", function (req, res) {
  const yearId = req.params.yearId;
  const weekId = req.params.weekId;
  const classId = req.params.classId;

  const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    res.set("Access-Control-Allow-Origin", "*");
    // res.send({ msg: "This has CORS enabled 🎈" });

    res.json(data);
  });
});

// test new server database railway

// app.get("/https://eb-flashcards.vercel.app/test", function (req, res) {
//   const q = `SELECT * FROM listening_kiso`;
//   railWaydb.query(q, (err, data) => {
//     if (err) return res.json(err);
//     console.log(data);

//     res.json(data);
//   });
// });

// RAILWAY URL
// app.get("/ClassSelector/:yearId/:weekId/:classId", function (req, res) {
app.get("https://eb-flashcards.vercel.app/ClassSelector/:yearId/:weekId/:classId", function (req, res) {
  const yearId = req.params.yearId;
  const weekId = req.params.weekId;
  const classId = req.params.classId;

  const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);

    res.json(data);
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

app.delete("/classes/listening_kiso/:id", (req, res) => {
  const cardId = req.params.id;
  const q = `DELETE FROM listening_kiso WHERE id = ? `;
  db.query(q, [cardId], (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    return res.json(data);
  });
});

app.delete("/classes/listening_shokyu/:id", (req, res) => {
  const cardId = req.params.id;
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
