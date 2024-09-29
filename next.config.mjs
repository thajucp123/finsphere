/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=0',
            },
          ],
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/favicon.ico',
          destination: '/logo.svg', // Change this to your favicon URL
        },
      ];
    },
  };
  
  export default nextConfig;