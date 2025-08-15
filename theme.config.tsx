import { useConfig } from 'nextra-theme-docs'
import React from 'react'

const SITE = 'https://redteamer.wiki'

const themeConfig = {
  logo: <span>Red Teamers Docs</span>,
  project: { link: 'https://github.com/RedTeamers' },
  docsRepositoryBase: 'https://github.com/RedTeamers',
  footer: { text: '© ' + new Date().getFullYear() + ' RedTeamers' },
  search: { placeholder: 'Rechercher des articles…' },
  head: () => {
    const { frontMatter } = useConfig()
    const title = frontMatter.title ?? 'Red Teamers Wiki'
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