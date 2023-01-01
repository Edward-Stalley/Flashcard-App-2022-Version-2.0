import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

export default function getAllWeeks(req: NextApiRequest, res: NextApiResponse) {
  const week = req.query.weekId;

  const q = `SELECT * FROM listening_kiso WHERE week = ${week}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
  // res.json({ byID: req.query.weekId, message: "get class by id" });
  // res.json({ week: "all weeks" });
}
