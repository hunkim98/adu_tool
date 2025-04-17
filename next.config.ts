import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/adu_tool/" : "",
  basePath: isProd ? "/adu_tool" : "",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
