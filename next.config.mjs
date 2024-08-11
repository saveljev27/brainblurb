/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    api: {
      baseApiUrl: 'https://api.brainblurb.com',
    },
  },
};

export default nextConfig;
