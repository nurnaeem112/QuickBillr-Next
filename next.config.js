/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure that we can use the lucide-react icons without issues
  transpilePackages: ['lucide-react'],
};

export default nextConfig;
