/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false }
        config.externals.push('pino-pretty', 'lokijs', 'encoding')
        return config
      },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            }
        ]
    }
}

module.exports = nextConfig
