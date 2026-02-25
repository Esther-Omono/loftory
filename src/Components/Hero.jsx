import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuArmchair } from 'react-icons/lu';

export default function Hero() {
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
      image: 'https://images.unsplash.com/photo-1616628182506-9b1c8c8e2c97',
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
  return (
    <section className='relative flex items-center justify-between bg-[#F5F2FA] py-10 pl-16 pr-0 overflow-hidden'>
      {/* Left Section */}
      <div className='w-[55%]'>
        <div className='inline-flex items-center gap-2 bg-white border border-[#C4A8C8] py-2 px-3 rounded-4xl font-[Raleway]'>
          <div className='bg-[#7B5EA7] p-2 rounded-full'>
            <LuArmchair size={17} fill='#F0EBE3' stroke='#F0EBE3' />
          </div>
          <p className='text-sm'>The Best Online Furniture Store</p>
        </div>

        <h1 className='text-6xl leading-tight font-medium my-6 font-[Cormorant-Garamond]'>
          Explore Our <span className='text-[#7B5EA7]'>Modern Furniture</span>{' '}
          Collection
        </h1>
        <p className='text-sm font-[Raleway] text-[#9B88A8] max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          risus, vestibulum vel tortor ac, suscipit imperdiet erat.
        </p>

        <button className='flex items-center gap-2 mt-8 font-[Raleway] font-medium text-sm bg-[#7B5EA7] px-7 py-3 rounded-xl text-white hover:bg-white hover:text-[#7B5EA7] hover:border hover:border-[#7B5EA7] transition-all'>
          Shop Now <IoIosArrowRoundForward />
        </button>
      </div>

      {/* Right Section */}
      <div className='relative w-[45%]'>
        <div className='relative bg-white rounded-bl-4xl rounded-tl-4xl pl-10 py-10 pr-0'>
          {/* Cards Row */}
          <div className='flex gap-8 overflow-visible'>
            {products.slice(0, 2).map((product, i) => (
              <div
                key={product.id}
                className={`
        relative flex-none
        rounded-3xl overflow-hidden
        shadow-xl transition-all duration-500
        cursor-pointer
        ${i === 0 ? 'w-85 z-10' : 'w-85 opacity-70'}
      `}
              >
                {/* Image */}
                <div className={`${i === 0 ? 'h-50' : 'h-50'} relative`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-full object-cover'
                  />

                  {/* Gradient */}
                  <div className='absolute inset-0 bg-linear-to-t from-black/30 to-transparent' />

                  {/* Price badge (first only) */}
                  {i === 0 && (
                    <span className='absolute top-5 right-5 bg-[#7B5EA7] text-white text-sm px-5 py-1.5 rounded-full shadow-md'>
                      {product.price}
                    </span>
                  )}
                </div>

                {/* Bottom content */}
                <div className='flex justify-between items-center px-6 py-5 bg-white'>
                  <div>
                    <h3 className='font-serif text-2xl font-semibold'>
                      {product.title}
                    </h3>
                    <p className='text-sm text-gray-500 mt-1'>
                      {product.items}
                    </p>
                  </div>

                  {i === 0 && (
                    <button className='w-10 h-10 flex items-center justify-center rounded-full bg-[#7B5EA7] text-white shadow-md hover:scale-105 transition'>
                      ↗
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className='flex gap-3 items-center mt-6 pl-1'>
            {/* Prev */}
            <button className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition'>
              ←
            </button>

            {/* Next */}
            <button className='w-9 h-9 flex items-center justify-center rounded-full bg-[#7B5EA7] text-white shadow-md hover:scale-105 transition'>
              →
            </button>

            {/* Indicators */}
            <div className='flex items-center gap-2 ml-3'>
              {products.map((_, i) => (
                <div
                  key={i}
                  className={`
            h-1.5 rounded-full transition-all duration-300 cursor-pointer
            ${i === 0 ? 'w-6 bg-[#7B5EA7]' : 'w-1.5 bg-gray-300'}
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
