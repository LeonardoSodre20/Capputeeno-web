/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    baseUrl: "http://localhost:3333",
  },
};

module.exports = nextConfig;
