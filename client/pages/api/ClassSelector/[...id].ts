import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
import mysql from "mysql";

// Hosted Online

const db = mysql.createPool({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

// db.connect(function (err) {
//   if (err) throw err;
// });

// Mylocal

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "flashcards_2.0",
// });

export default function getClass(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] = req.query.id ? req.query.id : "";

  const yearId = id[0];
  const weekId = id[1];
  const classId = id[2];

  // const parsedJson = JSON.parse(req.query);
  const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
}
