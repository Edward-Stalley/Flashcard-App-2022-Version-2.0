// import mysql from "mysql";

import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

export default async function executeQuery({ query }) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
