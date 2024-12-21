/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'https',
                hostname: 'facebook.com'
            },
            {
                protocol: 'https',
                hostname: 'www.w3.org'
            },
        ],
    },
};

export default nextConfig;
