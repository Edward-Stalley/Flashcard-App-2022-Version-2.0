/** @type {import('next').NextConfig} */

// i commented this out to test something but it is usally on so revert back if there are problems
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "sql6.freemysqlhosting.net",
        destination: "http://localhost:8800/",
      },
    ];
  },
};
