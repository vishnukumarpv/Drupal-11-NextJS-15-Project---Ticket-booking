/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable experimental features if needed
  },
   images: {
    remotePatterns: [new URL('https://picsum.photos/**')],
  },
}

module.exports = nextConfig