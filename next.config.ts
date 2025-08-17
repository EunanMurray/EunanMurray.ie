/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // CRITICAL: Must be 'export' for Azure Static Web Apps
  images: {
    unoptimized: true  // Required when using 'export'
  },
  trailingSlash: true  // Helps with routing on Azure
}

module.exports = nextConfig