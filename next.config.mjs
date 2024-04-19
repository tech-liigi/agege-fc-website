/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "19fsjx9t",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "ske5ePteVyBh9HwK63V1x5gEJ0bvupEzqEHnu93lNe6XHwQr6oi1KprZRcpM2PPmMyRoPOveTG3v6gZy2XxrmUfT4iMChDK3cRRy7r7N36oTILdrnzUx2nGBli4VjRtjJQvOTLJw14z0cBVsEM5CP1o21svfn1RblYFoap6Wy2GKgV6aWhKz",
  },
};

export default nextConfig;
