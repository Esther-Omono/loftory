export default function FilterResult() {
  // Dummy active filters
  const activeFilters = [
    { id: 1, label: 'Price', value: '₦100 - ₦5,000,000' },
    { id: 2, label: 'Category', value: 'Bedroom' },
    { id: 3, label: 'Availability', value: 'In Stock' },
  ];

  return (
    <div className='mb-6'>
      <p className='mb-3 text-sm md:text-base'>Showing 1-12 of 240 results</p>

      <div className='flex flex-wrap items-center gap-3'>
        <p className='py-1 text-sm font-medium'>Active Filters</p>

        {activeFilters.map((filter) => (
          <div
            key={filter.id}
            className='flex items-center gap-2 bg-smoked-violet text-pearl-violet px-3 py-1 rounded-2xl text-sm'
          >
            {filter.label}: {filter.value}
            <button className='cursor-pointer font-semibold hover:opacity-70'>
              ✕
            </button>
          </div>
        ))}

        <button className='text-smoked-violet underline cursor-pointer text-sm'>
          Clear All
        </button>
      </div>
    </div>
  );
}
