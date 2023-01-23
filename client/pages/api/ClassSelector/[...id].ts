import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
import mysql from "mysql";

// This does not work when deployed however it works locally...

let db: mysql.Pool;

export function getDB(props: any) {
  db = mysql.createPool({
    host: props.host,
    user: props.user,
    password: props.password,
    database: props.database,
  });
  return db;
}

// Hardcoded Information - THIS WORKS - I have removed the data as I have asked the question on reddit

// const db = mysql.createPool({
//   host: "****",
//   user: "****",
//   password: "****",
//   database: "****",
// });

export default function getClass(req: NextApiRequest, res: NextApiResponse) {
  const id: string | string[] = req.query.id ? req.query.id : "";
  const yearId = id[0];
  const weekId = id[1];
  const classId = id[2];

  console.log(process.env.NEXT_PUBLIC_DB_PASSWORD);

  const q = `SELECT * FROM ${classId} WHERE year = ${yearId} AND week = ${weekId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
}
export async function getStaticProps() {
  // Connect to Database using DB properties
  return {
    props: {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  };
}
