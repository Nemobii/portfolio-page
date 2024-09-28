/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix:'https://nemobii.github.io/portfolio-page/',
  reactStrictMode: true,
};

export default nextConfig;