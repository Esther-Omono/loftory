import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import FilterDrawer from '../components/shop/FilterDrawer';
import { IoFilter } from 'react-icons/io5';
import FilterResult from '../components/shop/FilterResult';

export default function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    price: [100000, 10000000],
    category: [],
    inStock: null,
  });

  const resetFilters = () =>
    setFilters({ price: [100000, 10000000], category: [], inStock: null });

  return (
    <div>
      <PageHeader title='Shop' />

      {/* Sticky bar - mobile only */}
      <div className='sticky top-16 z-30 bg-white border-b border-dusty-mauve px-4 sm:px-8 py-2 md:hidden'>
        <div className='flex items-center gap-3 flex-wrap'>
          <button
            onClick={() => setIsFilterOpen(true)}
            className='flex items-center gap-2 shrink-0'
          >
            <IoFilter size={20} /> Filter
          </button>

          <FilterResult
            filters={filters}
            setFilters={setFilters}
            mobileBarOnly /* To suppress the count text on mobile bar */
          />
        </div>
      </div>

      <div className='p-4 sm:px-8 lg:px-16 relative grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5'>
        {/* Desktop Sidebar */}
        <div className='hidden md:block'>
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Products */}
        <ProductGrid
          filters={filters}
          setFilters={setFilters}
          onResetFilters={resetFilters}
        />
      </div>

      {/* Mobile Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
