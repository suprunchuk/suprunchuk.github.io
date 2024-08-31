const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/nextjs-github-pages",
  transpilePackages: ["geist"],
  images: {
    unoptimized: true,
  },
};

module.exports = withNextra(nextConfig)
