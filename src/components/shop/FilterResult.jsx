export default function FilterResult({
  start,
  end,
  total,
  filters,
  setFilters,
}) {
  // Dummy active filters
  const activeFilters = [];

  if (filters?.category?.length > 0) {
    filters.category.forEach((cat) => {
      activeFilters.push({
        id: `category-${cat}`,
        label: 'Category',
        value: cat,
        onRemove: () =>
          setFilters((prev) => ({
            ...prev,
            category: prev.category.filter((c) => c !== cat),
          })),
      });
    });
  }

  if (filters?.inStock !== null && filters?.inStock !== undefined) {
    activeFilters.push({
      id: 'inStock',
      label: 'Availability',
      value: filters.inStock ? 'In Stock' : 'Out of Stock',
      onRemove: () => setFilters((prev) => ({ ...prev, inStock: null })),
    });
  }

  const defaultPrice = [100000, 10000000];
  if (
    filters?.price &&
    (filters.price[0] !== defaultPrice[0] ||
      filters.price[1] !== defaultPrice[1])
  ) {
    activeFilters.push({
      id: 'price',
      label: 'Price',
      value: `₦${filters.price[0].toLocaleString()} – ₦${filters.price[1].toLocaleString()}`,
      onRemove: () => setFilters((prev) => ({ ...prev, price: defaultPrice })),
    });
  }

  const clearAll = () =>
    setFilters({ price: defaultPrice, category: [], inStock: null });

  return (
    <div className='mb-6'>
      <p className='mb-3 text-sm md:text-base'>
        {total > 0
          ? `Showing ${start}-${end} of ${total} results`
          : 'No results found'}
      </p>

      {activeFilters.length > 0 && (
        <div className='flex flex-wrap items-center gap-3'>
          <p className='py-1 text-sm font-medium'>Active Filters</p>

          {activeFilters.map((filter) => (
            <div
              key={filter.id}
              className='flex items-center gap-2 bg-smoked-violet text-pearl-violet px-3 py-1 rounded-2xl text-sm'
            >
              {filter.label}: {filter.value}
              <button
                onClick={filter.onRemove}
                className='cursor-pointer font-semibold hover:opacity-70'
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={clearAll}
            className='text-smoked-violet underline cursor-pointer text-sm'
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}
