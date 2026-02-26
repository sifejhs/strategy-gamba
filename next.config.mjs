/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // i18n will be handled via [lang] dynamic segment
  async rewrites() {
    return [
      {
        source: "/google28a1bb12c03039aa.html",
        destination: "/api/google-verify",
      },
    ];
  },
};

export default nextConfig;
