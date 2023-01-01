import express from "express";
// import cors from "cors";
import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";

// const db = mysql.createConnection({
//   host: "sql6.freemysqlhosting.net",
//   user: "sql6587358",
//   password: "beh4prkep6",
//   database: "sql6587358",
// });

// export default function getClass(req: NextApiRequest, res: NextApiResponse) {
//   const q = `SELECT * FROM listening_kiso`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     res.json(data);
//   });
// }

export default function getClassById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "sorry only GET requests are accepted" });
  }

  res.json({ hello: "world" });
}
