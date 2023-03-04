const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};
// SASS
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "styles")],
// };

module.exports = nextConfig;
