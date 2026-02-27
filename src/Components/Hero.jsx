import { useEffect, useMemo, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuArmchair } from 'react-icons/lu';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    title: 'Modern Lounge Chair',
    items: '2,500+ Items',
    price: '$1,200',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    title: 'Minimal Sofa',
    items: '1,800+ Items',
    price: '$980',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    title: 'Wooden Coffee Table',
    items: '900+ Items',
    price: '$450',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const extendedProducts = useMemo(() => {
    return [products[products.length - 1], ...products, products[0]];
  }, []);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === products.length + 1) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(1);
      }, 700);
      return () => clearTimeout(timer);
    }

    if (index === 0) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(products.length);
      }, 700);
      return () => clearTimeout(timer);
    }

    const enableTimer = setTimeout(() => {
      setTransitionEnabled(true);
    }, 750);

    return () => clearTimeout(enableTimer);
  }, [index]);

  return (
    <section className='relative flex items-center justify-between bg-pearl-violet py-10 pl-16 overflow-hidden'>
      {/* Left Section */}
      <div className='w-[55%]'>
        <div className='inline-flex items-center gap-2 bg-white border border-dusty-mauve py-2 px-3 rounded-4xl font-sans'>
          <div className='bg-smoked-violet p-2 rounded-full'>
            <LuArmchair size={17} fill='#F5F2FA' stroke='#F5F2FA' />
          </div>
          <p className='text-sm'>The Best Online Furniture Store</p>
        </div>

        <h1 className='text-6xl leading-tight font-medium my-6 font-serif'>
          Explore Our{' '}
          <span className='text-smoked-violet'>Modern Furniture</span>{' '}
          Collection
        </h1>
        <p className='text-sm font-sans text-faded-iris max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          risus, vestibulum vel tortor ac, suscipit imperdiet erat.
        </p>

        <button className='flex items-center gap-2 mt-8 font-sans] font-medium text-sm bg-smoked-violet px-7 py-3 rounded-xl text-white hover:bg-white hover:text-smoked-violet hover:border hover:border-smoked-violet transition-all'>
          Shop Now <IoIosArrowRoundForward />
        </button>
      </div>

      {/* Right Section */}
      <div className='relative w-[45%]'>
        <div className='relative bg-white rounded-bl-4xl rounded-tl-4xl pl-10 py-10 pr-0'>
          {/* Cards Row */}
          <div className='overflow-hidden'>
            <div
              className={`flex gap-8 ${
                transitionEnabled
                  ? 'transition-transform duration-700 ease-in-out'
                  : ''
              }`}
              style={{
                transform: `translateX(-${index * 352}px)`,
              }}
            >
              {extendedProducts.map((product) => (
                <div
                  key={product.id}
                  className='flex-none w-80 rounded-3xl overflow-hidden border border-lavender-mist'
                >
                  {/* Image */}
                  <div className='h-50 relative'>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='w-full h-full object-cover'
                    />

                    {/* Gradient */}
                    <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />

                    {/* Price badge (first only) */}
                    <span className='absolute top-5 right-5 bg-smoked-violet text-white font-sans text-sm px-5 py-1.5 rounded-full shadow-md'>
                      {product.price}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className='flex justify-between items-center px-6 gap-4 py-5 bg-white font-sans'>
                    <div>
                      <h3 className=' text-2xl font-semibold text[#1C1C1C]'>
                        {product.title}
                      </h3>
                      <p className='text-sm text-faded-iris mt-1'>
                        {product.items}
                      </p>
                    </div>

                    <button className='w-10 h-10 flex items-center justify-center rounded-full bg-smoked-violet text-white shadow-md hover:scale-105 transition'>
                      ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className='flex gap-3 items-center mt-6 pl-1'>
            {/* Prev */}
            <button
              onClick={() => setIndex((prev) => prev - 1)}
              className='w-9 h-9 flex items-center justify-center rounded-full bg-pearl-violet shadow-md hover:scale-105 transition'
            >
              ←
            </button>

            {/* Next */}
            <button
              onClick={() => setIndex((prev) => prev + 1)}
              className='w-9 h-9 flex items-center justify-center rounded-full bg-smoked-violet text-white shadow-md hover:scale-105 transition'
            >
              →
            </button>

            {/* Indicators */}
            <div className='flex items-center gap-2 ml-3'>
              {products.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i + 1)}
                  className={`
            h-1.5 rounded-full transition-all duration-300 cursor-pointer
            ${i + 1 === index ? 'w-6 bg-smoked-violet' : 'w-1.5 bg-gray-300'}
          `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
