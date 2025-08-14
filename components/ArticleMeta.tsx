export default function ArticleMeta({ date, author, tags = [] }:{
  date: string; author: string; tags?: string[];
}) {
  return (
    <div className="mt-2 mb-6 text-sm text-gray-500">
      <span>{new Date(date).toLocaleDateString()}</span> · <span>{author}</span>
      {tags.length ? <> · {tags.map(t => `#${t}`).join(' ')}</> : null}
    </div>
  )
}