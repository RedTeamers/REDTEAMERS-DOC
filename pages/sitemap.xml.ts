// pages/sitemap.xml.ts
export const config = { runtime: 'experimental-edge' }

const urls = [
  '/', '/news', '/about',
  '/news/2025/08/lancement-plateforme', '/authors/riles'
]

export default async function handler() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>https://doc.redteamers.io${u}</loc></url>`).join('')}
  </urlset>`
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}