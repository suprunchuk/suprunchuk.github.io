import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['geist'],
  images: {
    unoptimized: true,
  },
}

export default withNextra(nextConfig)
