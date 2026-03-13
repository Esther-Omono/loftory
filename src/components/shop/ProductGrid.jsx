import { useEffect, useState } from 'react';
import { getProducts } from '../../api/product';
import FilterResult from './FilterResult';
import ProductCard from './ProductCard';

const PER_PAGE = 12;

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE + 1;
  const end = Math.min(currentPage * PER_PAGE, total);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const { data, total } = await getProducts(currentPage, PER_PAGE);

      setProducts(data);
      setTotal(total);
      setLoading(false);
    }

    loadProducts();
  }, [currentPage]);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className='py-4 -mt-4 lg:mt-0'>
      <FilterResult start={start} end={end} total={total} />

      <ProductCard products={products} />

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
