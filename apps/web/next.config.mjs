/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.creciendojuntos.site" }],
        destination: "https://creciendojuntos.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
