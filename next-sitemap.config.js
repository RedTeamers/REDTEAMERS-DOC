/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://redteamer.wiki',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/_meta',
    '/**/_meta',
    '/api/*',
    '/404',
    '/**/_app',
    '/**/_meta'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://redteamer.wiki/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Dynamically set priority based on path depth
    let priority = config.priority
    let changefreq = config.changefreq

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path === '/CVE' || path === '/RTW' || path === '/initalaccess') {
      priority = 0.9
      changefreq = 'daily'
    } else {
      priority = 0.8
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
