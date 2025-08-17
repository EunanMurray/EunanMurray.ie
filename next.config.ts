/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // or 'export' for full static
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig