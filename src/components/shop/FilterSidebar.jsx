import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function FilterSidebar({ filters, setFilters }) {
  const priceRange = filters?.price || [100000, 10000000];

  const handlePriceChange = (newRange) => {
    setFilters((prev) => ({
      ...prev,
      price: newRange,
    }));
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      const exists = prev.category.includes(category);

      return {
        ...prev,
        category: exists
          ? prev.category.filter((c) => c !== category)
          : [...prev.category, category],
      };
    });
  };

  const handleAvailabilityChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      inStock: value,
    }));
  };

  return (
    <aside className='p-4'>
      <h2 className='font-semibold'>Filters</h2>

      <hr className='my-8 border-t border-dusty-mauve w-full mx-auto' />

      {/* Category Filter */}
      <div className='space-y-3 mb-6'>
        <h3 className='font-medium'>Category</h3>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Bedroom')}
            checked={filters?.category.includes('Bedroom')}
          />
          <span>Bedroom</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Chair')}
            checked={filters?.category.includes('Chair')}
          />
          <span>Chair</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Couch')}
            checked={filters?.category.includes('Couch')}
          />
          <span>Couch</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Dining')}
            checked={filters?.category.includes('Dining')}
          />
          <span>Dining</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Kitchen')}
            checked={filters?.category.includes('Kitchen')}
          />
          <span>Kitchen</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Stool')}
            checked={filters?.category.includes('Stool')}
          />
          <span>Stool</span>
        </label>

        <label className='flex items-center gap-2'>
          <input
            type='checkbox'
            className='accent-smoked-violet w-4 h-4'
            onChange={() => handleCategoryChange('Table')}
            checked={filters?.category.includes('Table')}
          />
          <span>Table</span>
        </label>
      </div>

      <hr className='my-8 border-t border-dusty-mauve w-full mx-auto' />

      {/* Price Filter */}
      <div className='space-y-3 mb-6'>
        <h3 className='font-medium'>Price</h3>

        {/* Display selected price */}
        <div className='mb-3 text-sm text-near-black'>
          ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
        </div>

        {/* Dual-thumb slider */}
        <Slider
          range
          min={100000}
          max={10000000}
          step={5000}
          value={priceRange}
          onChange={handlePriceChange} // dynamically filter
          allowCross={false} // thumbs can't cross
          trackStyle={[{ backgroundColor: '#7b5ea7', height: 8 }]}
          handleStyle={[
            {
              borderColor: '#7b5ea7',
              height: 20,
              width: 20,
              marginTop: -6,
              backgroundColor: '#7b5ea7',
            },
            {
              borderColor: '#7b5ea7',
              height: 20,
              width: 20,
              marginTop: -6,
              backgroundColor: '#7b5ea7',
            },
          ]}
          railStyle={{ backgroundColor: '#e5e7eb', height: 8 }}
        />

        <div className='flex justify-between text-xs text-faded-iris mt-2'>
          <span>₦100,000</span>
          <span>₦10,000,000</span>
        </div>
      </div>

      <hr className='my-8 border-t border-dusty-mauve w-full mx-auto' />

      {/* Availability Filter */}
      <div className='space-y-3 mb-6'>
        <h3 className='font-medium'>Availability</h3>

        <label className='flex items-center gap-2'>
          <input
            type='radio'
            name='inStock'
            checked={filters?.inStock === true}
            onChange={() => handleAvailabilityChange(true)}
            className='accent-smoked-violet w-4 h-4'
          />
          <span>In Stock</span>
        </label>
        <label className='flex items-center gap-2'>
          <input
            type='radio'
            name='inStock'
            checked={filters?.inStock === false}
            onChange={() => handleAvailabilityChange(false)}
            className='accent-smoked-violet w-4 h-4'
          />
          <span>Out of Stock</span>
        </label>
      </div>
    </aside>
  );
}
