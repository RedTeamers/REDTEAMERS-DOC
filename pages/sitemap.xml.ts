// pages/sitemap.xml.ts
export const config = { runtime: 'experimental-edge' }

const urls = [
  '/', '/RTW', '/about'
]

export default async function handler() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(u => `<url><loc>https://www.redteamer.wiki${u}</loc></url>`).join('')}
  </urlset>`
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } })
}