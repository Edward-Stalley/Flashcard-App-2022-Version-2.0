/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    DB_HOST: "db4free.net",
    DB_USER: "thelazyboon",
    DB_PASSWORD: "spirited",
    DB_DATABASE: "flashcards",
  },

  // env: {
  //   DB_HOST: process.env.DB_HOST,
  //   DB_USER: process.env.DB_USER,
  //   DB_PASSWORD: process.env.DB_PASSWORD,
  //   DB_DATABASE: process.env.DB_DATABASE,
  // },
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
