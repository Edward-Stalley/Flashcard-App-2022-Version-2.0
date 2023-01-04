import { NextApiRequest, NextApiResponse } from "next";
// import { useRouter } from "next/router";
import mysql from "mysql";

// Hosted Online

const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net",
  user: "sql6587358",
  password: "beh4prkep6",
  database: "sql6587358",
});

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

  function handleDisconnect() {
    // connection = mysql.createConnection(db_config); // Recreate the connection, since
    // the old one cannot be reused.

    db.connect(function (err) {
      // The server is either down
      if (err) {
        // or restarting (takes a while sometimes).
        console.log("error when connecting to db:", err);
        setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
      } // to avoid a hot loop, and to allow our node script to
    }); // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    db.on("error", function (err) {
      console.log("db error", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        // Connection to the MySQL server is usually
        handleDisconnect(); // lost due to either server restart, or a
      } else {
        // connnection idle timeout (the wait_timeout
        throw err; // server variable configures this)
      }
    });
  }

  handleDisconnect();
}
