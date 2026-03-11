import { FaHeart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

export default function ProductCard() {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      title: 'Modern Lounge Chair',
      category: 'Chair',
      price: '₦1,200',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      title: 'Minimal Sofa',
      category: 'Sofa',
      price: '₦980',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
      title: 'Wooden Coffee Table',
      category: 'Bedroom',
      price: '₦450',
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {products.map((product) => (
        <div
          key={product.id}
          className='bg-pearl-violet rounded-2xl p-4 shadow-md group'
        >
          {/* Image container */}
          <div className='relative overflow-hidden rounded-xl'>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105'
            />

            {/* Hover Buttons */}
            <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50'>
              <button className='bg-white p-3 rounded-full shadow hover:bg-smoked-violet hover:text-white transition'>
                <FaHeart />
              </button>

              <button className='bg-white p-3 rounded-full shadow hover:bg-smoked-violet hover:text-white transition'>
                <FaCartShopping />
              </button>
            </div>
          </div>

          <p className='text-sm font-medium text-smoked-violet mt-3'>
            {product.category}
          </p>

          <h3 className='text-lg font-semibold'>{product.title}</h3>

          <p className='text-xl font-bold text-smoked-violet'>
            {product.price}
          </p>
        </div>
      ))}
    </div>
  );
}
