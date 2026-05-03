/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker/Cloud Run deployment
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Raise the App Router route-handler body size limit so large video uploads
  // (up to 500 MB) are not rejected by Next.js before reaching the route code.
  experimental: {
    serverBodySizeLimit: "500mb",
  },
}

export default nextConfig
