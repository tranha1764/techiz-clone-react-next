export default function Loading() {
  return (
    <div className="container-custom py-16 md:py-24 animate-pulse">
      {/* Skeleton header */}
      <div className="space-y-4 mb-12">
        <div className="h-4 w-32 bg-bg-surface-light rounded" />
        <div className="h-12 w-3/4 bg-bg-surface-light rounded-lg" />
        <div className="h-12 w-1/2 bg-bg-surface-light rounded-lg" />
        <div className="h-5 w-2/3 bg-bg-surface rounded mt-4" />
      </div>

      {/* Skeleton cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card">
            <div className="h-4 w-16 bg-bg-surface-light rounded mb-4" />
            <div className="h-6 w-full bg-bg-surface-light rounded mb-3" />
            <div className="h-4 w-full bg-bg-surface-light rounded mb-2" />
            <div className="h-4 w-3/4 bg-bg-surface-light rounded mb-2" />
            <div className="h-4 w-1/2 bg-bg-surface-light rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
