/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Store-project-with-Next",
  assetPrefix: "/Store-project-with-Next/",
};

module.exports = nextConfig;
