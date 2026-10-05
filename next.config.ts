import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: { root: __dirname },
  // Endereços antigos (versão 1 do site) continuam funcionando.
  async redirects() {
    return [
      { source: "/dicas", destination: "/biblioteca", permanent: true },
      { source: "/dicas/:slug", destination: "/biblioteca/:slug", permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
