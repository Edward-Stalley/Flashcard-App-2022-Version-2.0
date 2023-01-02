import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql";

// Hosted Online
const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

export default function getClass(req: NextApiRequest, res: NextApiResponse) {
  const q = `SELECT * FROM listening_kiso WHERE week = ${req.query.id}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
}
// export default function getWeekById(req: NextApiRequest, res: NextApiResponse) {
//   //   if (req.method !== "GET") {
//   //     res.status(500).json({ message: "sorry only GET requests are accepted" });
//   //   }

//   res.json({ byID: req.query.id, message: "get week by id" });
// }

// app.get("/ClassSelector/:yearId/:weekId/:classId", function (req, res) {
//   const yearId = req.params.yearId;
//   const weekId = req.params.weekId;
//   const classId = req.params.classId;

//   const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     res.set("Access-Control-Allow-Origin", "*");
//     // res.send({ msg: "This has CORS enabled 🎈" });
//     res.json(data);
//   });
// });
