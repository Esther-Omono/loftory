import { LuArmchair } from 'react-icons/lu';

export default function Logo() {
  return (
    <div className='flex items-center gap-2.5 cursor-pointer'>
      <div className='bg-[#7B5EA7] p-2 rounded-full'>
        <LuArmchair size={25} fill='#F0EBE3' stroke='#F0EBE3' />
      </div>
      <p className='text-[#1c1c1c] text-[22px] font-[Cormorant-Garamond]'>
        Loftory.
      </p>
    </div>
  );
}
