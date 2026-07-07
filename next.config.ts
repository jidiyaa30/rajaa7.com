import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/raja7game", destination: "/raja7-game", permanent: true },
      { source: "/raja7gamess", destination: "/raja7-gaming", permanent: true },
      { source: "/raja7apk", destination: "/raja7-apk", permanent: true },
      { source: "/raja7gameapk", destination: "/raja7-game-apk", permanent: true },
      { source: "/raja7gameapkdownload", destination: "/raja7-game-apk-download", permanent: true },
      { source: "/raja7apkdownload", destination: "/raja7-apk-download", permanent: true },
    ];
  },
};

export default nextConfig;
