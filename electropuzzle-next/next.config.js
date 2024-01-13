const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        autoPrerender: false,
    },
    https: false, // Disable HTTPS for both development and production      
}

module.exports = withNextVideo(nextConfig)
