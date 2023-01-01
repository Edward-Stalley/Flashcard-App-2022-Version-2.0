import express from "express";
import cors from "cors";
import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

export default function getClass(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "sorry we only accept GET requests" });
  }
  const q = `SELECT * FROM listening_kiso`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
}

// res.set("Access-Control-Allow-Origin", "*");
// res.send({ msg: "This has CORS enabled 🎈" });
// res.statusCode = 200;
// res.json({ hello: "world", mwethod: req.method });

// const app = express();
// app.use(express.json());
// app.use(
//   cors({
//     origin: "https://eb-flashcards.vercel.app",
//   })
// );

// const yearId = req.params.yearId;
// const weekId = req.params.weekId;
// const classId = req.params.classId;

//   res.setHeader("Content-Type", "application/json");
