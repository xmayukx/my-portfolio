const path = require("path");
const withImages = require('next-images');
module.exports = withImages(); 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
