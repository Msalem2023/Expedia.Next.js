/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"http",
            hostname:"trvl-media.com"
        }]
    }
};


export default nextConfig;
