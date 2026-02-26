export const CollectionCard = ({
  count,
  title,
  items = [],
  image,
  large = false,
}) => {
  return (
    <div
      className={`
        flex
        ${large ? 'flex-col md:flex-row' : 'flex-col md:flex-row'}
        justify-between
        bg-[#F5F2FA]
        rounded-2xl
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${large ? 'min-h-130' : 'min-h-62.5'}
        p-6
      `}
    >
      {/* Info */}
      <div className='flex-1'>
        <p className='text-sm text-[#1C1C1C] mb-2 font-sans'>
          <span className='font-bold text-[#7B5EA7]'>{count}</span> Items
        </p>

        <h2 className='text-2xl md:text-[28px] font-semibold text-[#1C1C1C] mb-4'>
          {title}
        </h2>

        <ul className='space-y-1'>
          {items.map((item) => (
            <li key={item} className='text-sm text-[#9B88A8]'>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        className={`
          flex
          items-center
          justify-center
          overflow-hidden rounded-2xl
          ${large ? 'md:w-[55%] h-105' : 'md:w-[45%] h-45'}
          mt-6 md:mt-0
        `}
      >
        <img src={image} alt={title} className='w-full h-full object-cover' />
      </div>
    </div>
  );
};
