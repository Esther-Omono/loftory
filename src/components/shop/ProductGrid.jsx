import { useEffect, useState } from 'react';
import { getProducts } from '../../api/product';
import FilterResult from './FilterResult';
import ProductCard from './ProductCard';
import SkeletonGrid from '../common/SkeletonGrid';

const PER_PAGE = 12;

export default function ProductGrid({ filters }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // first load only
  const [isFetching, setIsFetching] = useState(false); // pagination/filtering
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE + 1;
  const end = Math.min(currentPage * PER_PAGE, total);

  useEffect(() => {
    async function loadProducts() {
      setIsFetching(true);

      const { data, total } = await getProducts(currentPage, PER_PAGE, filters);

      setProducts(data);
      setTotal(total);

      setLoading(false);
      setIsFetching(false);
    }

    loadProducts();
  }, [currentPage, filters]);

  return (
    <div className='py-4 -mt-4 lg:mt-0 min-h-150'>
      <FilterResult start={start} end={end} total={total} />

      {loading ? (
        <SkeletonGrid />
      ) : (
        <div className='relative'>
          <ProductCard products={products} />
          {/* Overlay loader instead of removing content */}
          {isFetching && (
            <div className='absolute inset-0 bg-white/60 flex items-center justify-center'>
              <p className='text-sm'>Loading...</p>
            </div>
          )}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className='flex items-center justify-center gap-2 mt-8'>
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 rounded-lg border border-smoked-violet text-smoked-violet disabled:opacity-40 hover:bg-smoked-violet hover:text-white transition'
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg border text-sm font-medium transition
                ${
                  currentPage === page
                    ? 'bg-smoked-violet text-white border-smoked-violet'
                    : 'border-smoked-violet text-smoked-violet hover:bg-smoked-violet hover:text-white'
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className='px-4 py-2 rounded-lg border border-smoked-violet text-smoked-violet disabled:opacity-40 hover:bg-smoked-violet hover:text-white transition'
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
