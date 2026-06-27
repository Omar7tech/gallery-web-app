import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Unsplash is used for curated, luxury-grade placeholder photography.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Next.js 16 defaults qualities to [75]; we keep a tight, intentional set.
    qualities: [70, 80, 90],
  },
};

export default nextConfig;
