import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
import executeQuery from "../../../db";
import mysql from "mysql";

// This does not work when deployed however it works locally...

// let db: mysql.Pool;

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// Hardcoded Information - THIS WORKS - I have removed the data as I have asked the question on reddit

// const db = mysql.createPool({
//   host: "****",
//   user: "****",
//   password: "****",
//   database: "****",
// });

export default async function getClass(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] = req.query.id ? req.query.id : "";
  const yearId = id[0];
  const weekId = id[1];
  const classId = id[2];

  try {
    const result = await executeQuery({
      query: `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`,
    });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
}

// *******Original

// console.log(process.env.NEXT_PUBLIC_DB_PASSWORD);

// const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
// db.query(q, (err, data) => {
//   if (err) return res.json(err);
//   res.json(data);
// });

// *******Original

// }
// export async function getStaticProps() {
//   // Connect to Database using DB properties
//   return {
//     props: {
//       host: process.env.DB_HOST,
//       username: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE,
//     },
//   };
// }
