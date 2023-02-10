/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      toggleMaintenance
        ? {
            source: "/((?!maintenance).*)",
            destination: "/maintenance",
            permanent: false,
          }
        : {
            source: "/maintenance.html",
            destination: "/",
            permanent: false,
          },
    ];
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}`],
  },
  // reactStrictMode: true,
};
const toggleMaintenance = true;

module.exports = nextConfig;
