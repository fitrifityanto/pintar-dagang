import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Tambahkan baris ini
  },
  output: "export",
  /* config options here */
};

export default nextConfig;
