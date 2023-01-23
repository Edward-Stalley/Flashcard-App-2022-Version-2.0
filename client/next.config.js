/** @type {import('next').NextConfig} */

// i commented this out to test something but it is usally on so revert back if there are problems
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // env: {
  //   DB_HOST: "db4free.net",
  //   DB_USER: "thelazyboon",
  //   DB_PASSWORD: "spirited",
  //   DB_DATABASE: "flashcards",
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
