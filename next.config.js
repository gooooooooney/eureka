/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  //https://github.com/livekit/client-sdk-js/issues/938
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
}

module.exports = nextConfig
