import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:5000",
    "127.0.0.1:5000",
    "*.replit.dev",
    "*.repl.co",
    "*.replit.app",
  ],
};

export default nextConfig;
