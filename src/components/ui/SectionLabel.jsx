export default function SectionLabel({ number, title, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'

  return (
    <div className={alignClass}>
      {number && (
        <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
          {number}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 leading-tight mb-3">
        {title}
      </h2>
      <div
        className={`h-0.5 w-10 bg-accent-500 ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}
      />
    </div>
  )
}
