import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
import mysql from "mysql";

// Hosted Online

// TO DO
// I Need to understand how to access these vaues in this api page.

const db = mysql.createPool({
  host: process.env.NEXT_PUBLIC_DB_HOST,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_DB_DATABASE,
});

// const db = mysql.createPool({
//   host: "db4free.net",
//   user: "thelazyboon",
//   password: "spirited",
//   database: "flashcards",
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

// export async function getStaticProps() {
//   return {
//     props: {
//       HOST: process.env.DB_HOST,
//       PASSWORD: process.env.PASSWORD,
//       DATABASE: process.env.DB_DATABASE,
//       USER: process.env.DB_USER,
//     },
//   };
// }

// const host = process.env.DB_HOST;
// const user = process.env.DB_HOST;
// const password = process.env.DB_PASSWORD;
// const database = process.env.DB_DATABASE;

// console.log(`this is the user ${user} and password:${password}`);
// }
