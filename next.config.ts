import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rhythmdoshi.site",
          },
        ],
        destination: "https://rhythmdoshi.site/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;