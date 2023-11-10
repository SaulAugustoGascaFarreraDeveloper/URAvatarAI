/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[]
    },
    typescript:{
        ignoreBuildErrors: true
    },
    eslint:{
        ignoreDuringBuilds: true
    },
}

module.exports = nextConfig
