/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/original/**',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/w500/**',
      },
      {
        protocol: 'https',
        hostname: 'rb.gy',
        pathname: '/**',
      },

    ],
  },
};

export default nextConfig;
