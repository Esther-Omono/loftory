import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function FilterSidebar({ products, setFilteredProducts }) {
  const [priceRange, setPriceRange] = useState([100000, 10000000]);

  // Dynamically filter products as the slider changes
  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    if (setFilteredProducts) {
      const filtered = products.filter(
        (p) => p.price >= newRange[0] && p.price <= newRange[1],
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <aside className='p-4'>
      <h2 className='font-semibold'>Filters</h2>

      <hr className='my-8 border-t border-dusty-mauve w-full mx-auto' />

      {/* Category Filter */}
      <div className='space-y-3 mb-6'>
        <h3 className='font-medium'>Category</h3>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
          <span>Bedroom</span>
        </label>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
          <span>Chair</span>
        </label>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
          <span>Couch</span>
        </label>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
          <span>Dining</span>
        </label>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
          <span>Kitchen</span>
        </label>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
          <span>Stool</span>
        </label>

        <label className='flex items-center gap-2'>
          <input type='checkbox' className='accent-smoked-violet w-4 h-4' />
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
          <input type='radio' className='accent-smoked-violet w-4 h-4' />
          <span>In Stock</span>
        </label>
        <label className='flex items-center gap-2'>
          <input type='radio' className='accent-smoked-violet w-4 h-4' />
          <span>Out of Stock</span>
        </label>
      </div>
    </aside>
  );
}
