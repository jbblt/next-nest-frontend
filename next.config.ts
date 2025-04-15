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
};

export default nextConfig;
