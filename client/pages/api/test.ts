import express from "express";
import cors from "cors";
import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: "https://eb-flashcards.vercel.app",
    })
  );

  const db = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6587358",
    password: "beh4prkep6",
    database: "sql6587358",
  });

  const yearId = req.params.yearId;
  const weekId = req.params.weekId;
  const classId = req.params.classId;

  const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log(data);
    res.set("Access-Control-Allow-Origin", "*");
    // res.send({ msg: "This has CORS enabled 🎈" });
    res.statusCode = 200;

    res.setHeader("Content-Type", "application/json");
    res.json(data);

    //   app.get("/ClassSelector/:yearId/:weekId/:classId", function (req, res) {
    //     const yearId = req.params.yearId;
    //     const weekId = req.params.weekId;
    //     const classId = req.params.classId;

    //     const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
    //     db.query(q, (err, data) => {
    //       if (err) return res.json(err);
    //       console.log(data);
    //       res.set("Access-Control-Allow-Origin", "*");
    //       // res.send({ msg: "This has CORS enabled 🎈" });
    //       res.statusCode = 200;

    //       res.setHeader("Content-Type", "application/json");
    //       res.json(data);
    //       //   res.json({ name: "John Doe" });
    //     });
  });
}
