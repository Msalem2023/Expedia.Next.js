/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"https",
            hostname:["mediaim.expedia.com","images.trvl-media.com"]
        }]
    }
};


export default nextConfig;
