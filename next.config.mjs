/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ["remotion", "@remotion/player", "@remotion/renderer"],
}

export default nextConfig
