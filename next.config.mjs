/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // 👈 tells Next.js to build into /out
  images: {
    unoptimized: true, // 👈 disables image optimization (needed for static export)
  },
};

export default nextConfig;
