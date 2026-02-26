/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // i18n will be handled via [lang] dynamic segment
  async rewrites() {
    return [
      { source: "/sitemap.xml", destination: "/api/sitemap-index" },
      { source: "/sitemap/:id", destination: "/api/sitemap-segment/:id" },
    ];
  },
};

export default nextConfig;
