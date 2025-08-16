import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const SITE = 'https://redteamer.wiki'
const DEFAULT_DESC =
  'RedTeamer.wiki is a practical knowledge base for Red Team operations: planning, adversary emulation, OPSEC & evasion, persistence, lateral movement, exfiltration, and reporting — mapped to real-world TTPs.'

const themeConfig = {
  logo: <span>Red Teamer Wiki</span>,
  project: { link: 'https://github.com/RedTeamers' },
  docsRepositoryBase: 'https://github.com/RedTeamers',
  footer: { text: '© ' + new Date().getFullYear() + ' redteamer.wiki' },
  search: { placeholder: 'Rechercher des articles…' },

  // <<--- Ajout clé
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Red Teamer',                 // ou '%s — RedTeamer.wiki'
      defaultTitle: 'RedTeamer.wiki',
    }
  },

  head: () => {
    const { frontMatter } = useConfig()
    const { asPath } = useRouter()

    const desc = frontMatter.description ?? DEFAULT_DESC
    const url = SITE + (asPath || '/')
    const ogImage = frontMatter.og ?? '/og-default.png'

    return (
      <>
        {/* on laisse Next-SEO gérer le <title> via frontMatter + titleTemplate */}
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RedTeamer.wiki" />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicon / PWA */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B0B0D" />
      </>
    )
  }
}

export default themeConfig
