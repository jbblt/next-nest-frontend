import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    turbo: {
      minify: true,
      treeShaking: true,
    }
  },
  webpack: (config, { isServer }) => {    if (!isServer) {
      config.externals.push('fs', 'path', 'os');
    }

    config.module.rules.push({
      test: /backend/,
      use: 'null-loader',
    });

    return config;
  },
};


export default nextConfig;
