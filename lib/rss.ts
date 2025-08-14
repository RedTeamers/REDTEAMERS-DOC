export function buildRss(items: { title: string; link: string; date: string; guid?: string; description?: string }[]) {
  const head = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>`
  const body = items.map(i => `
    <item>
      <title>${i.title}</title>
      <link>${i.link}</link>
      <pubDate>${new Date(i.date).toUTCString()}</pubDate>
      <guid>${i.guid ?? i.link}</guid>
      <description>${i.description ?? ''}</description>
    </item>
  `).join('')
  const tail = `</channel></rss>`
  return head + body + tail
}