/** @type {import('next').NextConfig} */
const nextConfig = {
   
  images: {
    unoptimized: true, // 👈 disables image optimization (needed for static export)
  },
};

export default nextConfig;
