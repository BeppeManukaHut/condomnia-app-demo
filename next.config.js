/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig

