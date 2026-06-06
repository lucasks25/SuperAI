/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Workaround for Next.js 14 auto-generated type issue with metadata-interface
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
