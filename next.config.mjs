/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        webVitalsAttribution: ['CLS', 'LCP', 'FID', 'TTFB', 'INP']
      }

};

export default nextConfig;
