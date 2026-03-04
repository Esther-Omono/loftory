export default function Heading({ title, subtitle }) {
  return (
    <div className='p-2.5 text-center'>
      <div className='flex items-center justify-center gap-2.5 mb-2'>
        <div className='w-5 sm:w-6 md:w-8 h-0.5 bg-smoked-violet'></div>
        <p className='font-sans text-lg sm:text-xl md:text-2xl'>{title}</p>
      </div>
      <h1 className='font-sans text-near-black text-2xl lg:text-3xl leading-snug sm:leading-normal md:leading-tight'>
        {subtitle}
      </h1>
    </div>
  );
}
