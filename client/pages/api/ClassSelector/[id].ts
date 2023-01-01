import { NextApiRequest, NextApiResponse } from "next";

// import mysql from "mysql";

// const db = mysql.createConnection({
//   host: "sql6.freemysqlhosting.net",
//   user: "sql6587358",
//   password: "beh4prkep6",
//   database: "sql6587358",
// });

export default function getClass(req: NextApiRequest, res: NextApiResponse) {
  const yearId = req.query;
  // const weekId = req.query.weekId;
  // const classId = req.query.classId;

  res.status(200).json({ year: yearId });
}

//   const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     res.json(data);
//   });
// }

// app.get("/ClassSelector/:yearId/:weekId/:classId", function (req, res) {

//   const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     res.set("Access-Control-Allow-Origin", "*");
//     // res.send({ msg: "This has CORS enabled 🎈" });
//     res.json(data);
//   });
// });
