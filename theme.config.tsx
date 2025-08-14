import { useConfig } from 'nextra-theme-docs'
import React from 'react'

const SITE = 'https://news.keystone.dz'

const themeConfig = {
  logo: <span>Keystone News</span>,
  project: { link: 'https://github.com/keystone/news-site' },
  docsRepositoryBase: 'https://github.com/keystone/news-site/blob/main',
  footer: { text: '© ' + new Date().getFullYear() + ' Keystone' },
  search: { placeholder: 'Rechercher des articles…' },
  head: () => {
    const { frontMatter } = useConfig()
    const title = frontMatter.title ?? 'Keystone News'
    const desc = frontMatter.description ?? 'Actus, analyses et sécurité'
    return (
      <>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/og-default.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </>
    )
  }
}

export default themeConfig