import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import FilterSidebar from '../components/shop/FilterSidebar';
import ProductGrid from '../components/shop/ProductGrid';
import FilterDrawer from '../components/shop/FilterDrawer';
import { IoFilter } from 'react-icons/io5';

export default function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div>
      <PageHeader title='Shop' />

      <div className='p-4 sm:px-8 lg:px-16 relative grid grid-cols-1 md:grid-cols-[260px_1fr] gap-5'>
        {/* Filter Button - Mobile Only */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className='text-left md:hidden flex items-center gap-2'
        >
          <IoFilter size={20} /> Filter
        </button>

        {/* Desktop Sidebar */}
        <div className='hidden md:block'>
          <FilterSidebar />
        </div>

        {/* Products */}
        <ProductGrid />
      </div>

      {/* Mobile Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}
