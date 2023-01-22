import Head from "next/head";

export default function FirstPost(props) {
  return (
    <>
      <Head>
        <title>Environment Variables</title>
      </Head>
      <h1>Database Credentials</h1>

      <p>Host: {props.host}</p>
      <p>database: {props.database}</p>

      <p>Username: {props.username}</p>
      <p>Password: {props.password}</p>
    </>
  );
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
