/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // /signup is the public sign-up path used in CTAs, ads and emails.
      // The sign-up form itself lives in the app (app.aiceless.com).
      { source: '/signup', destination: 'https://app.aiceless.com/signup', permanent: false },
    ]
  },
}

module.exports = nextConfig
