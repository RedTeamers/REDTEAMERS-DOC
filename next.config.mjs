import withNextra from 'nextra'


export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})({
  images: { unoptimized: true },
  reactStrictMode: true
})