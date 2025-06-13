import type { NextConfig } from "next";
import CopyPlugin from "copy-webpack-plugin";
import path from "node:path";

// Exclude @nutrient-sdk/viewer from the client-side bundle to optimize performance
// and avoid potential conflicts with the script loaded in layout.js
const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        "@nutrient-sdk/viewer": "@nutrient-sdk/viewer",
      });
    }

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(
              __dirname,
            "node_modules/@nutrient-sdk/viewer/dist",
          ),
          to: path.resolve(__dirname, "public"),
          info: () => ({ minimized: true }),
          force: true,
        },
      ],
    }),
  );

  return config;
},
  
};

export default nextConfig;
