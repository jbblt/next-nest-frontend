import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push("fs", "path", "os");
    }

    return config;
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-inline' https://accounts.google.com; style-src 'self' 'unsafe-inline'; frame-src https://accounts.google.com; connect-src 'self' https://next-nest-portfolio-backend.onrender.com",
        },
      ],
    },
  ],
};

export default nextConfig;
