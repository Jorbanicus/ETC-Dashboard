/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Apply raw-loader for text files
      config.module.rules.push({
        test: /\.txt$/,
        use: 'raw-loader',
      });
  
      return config;
    },
  };