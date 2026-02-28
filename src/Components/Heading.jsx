export default function Heading({ title, subtitle }) {
  return (
    <div className='p-2.5 text-center'>
      <div className='flex items-center justify-center gap-2.5'>
        <div className='w-5 h-0.5 bg-smoked-violet'></div>
        <p className='font-sans text-xl mb-1'>{title}</p>
      </div>
      <h1 className='font-sans text-near-black text-4xl'>{subtitle}</h1>
    </div>
  );
}
