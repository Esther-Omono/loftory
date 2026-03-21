export default function SkeletonGrid() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className='bg-gray-200 rounded-2xl p-4 animate-pulse'>
          <div className='h-48 bg-gray-300 rounded-xl mb-4'></div>

          <div className='h-4 bg-gray-300 rounded w-1/3 mb-2'></div>
          <div className='h-5 bg-gray-300 rounded w-2/3 mb-2'></div>
          <div className='h-4 bg-gray-300 rounded w-1/4'></div>
        </div>
      ))}
    </div>
  );
}
