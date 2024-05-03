/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'INP'],
  },

};

export default nextConfig;
