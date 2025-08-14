import type { NextRequest } from 'next/server'

export const config = { runtime: 'edge' }

const SITE = 'https://news.keystone.dz'

export default async function handler(req: NextRequest) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Keystone News</title>
      <link>${SITE}</link>
      <description>Actus & analyses</description>
      <item>
        <title>Lancement de la plateforme CTI</title>
        <link>${SITE}/news/2025/08/lancement-plateforme</link>
        <pubDate>${new Date('2025-08-10').toUTCString()}</pubDate>
        <guid>${SITE}/news/2025/08/lancement-plateforme</guid>
        <description>Présentation des nouveautés et feuille de route.</description>
      </item>
    </channel>
  </rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml' } })
}