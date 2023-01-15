/** @type {import('next').NextConfig} */
require("dotenv").config();
// i commented this out to test something but it is usally on so revert back if there are problems
const nextConfig = {
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    API_ENDPOINT: "client/pages/api/ClassSelector/[...id].ts",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// export async function rewrites() {
//   return [
//     {
//       source: "sql6.freemysqlhosting.net",
//       destination: "http://localhost:8800/:path*",
//     },
//   ];
// }
