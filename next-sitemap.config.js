/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://redteamer.wiki',   // <-- ton domaine de prod
  generateRobotsTxt: true,             // crée robots.txt
  sitemapSize: 45000,                  // découpe auto si beaucoup de pages
  priority: null,                      // laisse par défaut
  changefreq: 'weekly',
  exclude: [
    // On exclut les routes non "pages" et techniques
    '/_meta',
    '/**/_meta',
    '/api/*',
    '/404',
    '/sitemap.xml',      // si tu gardes une route custom, mais on va la supprimer (voir §4)
    '/rss.xml'           // garde ta route RSS séparée
  ],
  // (Optionnel) si tu as des pages dynamiques/exotiques à ajouter manuellement :
  additionalPaths: async (config) => {
    const extra = []
    // Exemple:
    // extra.push(await config.transform(config, '/some-non-standard-path'))
    return extra
  },
  transform: async (config, path) => {
    // Personnalise metadata par défaut ici si besoin
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [] // i18n si tu en ajoutes
    }
  }
}
