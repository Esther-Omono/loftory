import FilterResult from './FilterResult';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  return (
    <div className='py-4 -mt-4 lg:mt-0'>
      <FilterResult />

      <ProductCard />
    </div>
  );
}
