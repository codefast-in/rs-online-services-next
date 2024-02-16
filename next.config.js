/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'nextui-docs-v2.vercel.app',
            port: '',
            pathname: '/images/**',
          }, {
            protocol: 'https',
            hostname: 'cdn.dummyjson.com',
            port: '',
            pathname: '/product-images/1/**',
          },

        ],
      },
}

module.exports = nextConfig
