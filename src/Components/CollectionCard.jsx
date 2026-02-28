export const CollectionCard = ({
  count,
  title,
  items = [],
  image,
  large = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between bg-pearl-violet rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-6 ${
        large ? 'md:min-h-128' : 'md:min-h-64'
      }`}
    >
      {/* Info */}
      <div className='flex-1'>
        <p className='text-sm text-near-black mb-2 font-sans'>
          <span className='font-bold text-smoked-violet'>{count}</span> Items
        </p>

        <h2 className='text-2xl sm:text-3xl md:text-[28px] font-semibold text-near-black mb-4'>
          {title}
        </h2>

        <ul className='space-y-1'>
          {items.map((item) => (
            <li key={item} className='text-sm sm:text-base text-faded-iris'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        className={`flex items-center justify-center overflow-hidden rounded-2xl mt-6 md:mt-0 w-full ${
          large
            ? 'md:w-[55%] h-60 sm:h-72 md:h-full'
            : 'md:w-[45%] h-40 sm:h-48 md:h-full'
        }`}
      >
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
    </div>
  );
};
