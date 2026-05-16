// EmptyState.jsx
export default function EmptyState({ onClear }) {
  return (
    <div className='mt-4 flex flex-col items-center justify-center py-20 px-4 text-center'>
      {/* Illustration */}
      <div className='relative mb-6'>
        {/* Sofa shape */}
        <div className='w-36 h-16 bg-smoked-violet/10 rounded-2xl relative mx-auto'>
          <div className='absolute -top-5 inset-x-0 h-8 bg-smoked-violet/15 rounded-xl' />
          <div className='absolute top-2 -left-4 w-7 h-12 bg-smoked-violet/15 rounded-lg' />
          <div className='absolute top-2 -right-4 w-7 h-12 bg-smoked-violet/15 rounded-lg' />
        </div>

        {/* Search + X badge */}
        <div className='absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-smoked-violet/40 bg-pearl-violet flex items-center justify-center'>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#7b5ea7'
            strokeWidth='2'
            strokeLinecap='round'
          >
            <circle cx='10' cy='10' r='7' />
            <line x1='15' y1='15' x2='21' y2='21' />
            <line x1='7' y1='7' x2='13' y2='13' />
            <line x1='13' y1='7' x2='7' y2='13' />
          </svg>
        </div>
      </div>

      <h3 className='text-lg font-medium text-dusk-plum mb-2'>
        No results found
      </h3>
      <p className='text-sm text-smoked-violet/70 mb-6 max-w-xs'>
        No products match your current filters. Try adjusting or clearing them
        to see more.
      </p>

      <button
        onClick={onClear}
        className='px-5 py-2 rounded-lg bg-smoked-violet text-pearl-violet text-sm font-medium hover:opacity-90 transition'
      >
        Clear all filters
      </button>
    </div>
  );
}
