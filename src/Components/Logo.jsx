import { LuArmchair } from 'react-icons/lu';

export default function Logo() {
  return (
    <div className='flex items-center gap-2.5 cursor-pointer'>
      <div className='bg-smoked-violet p-2 rounded-full'>
        <LuArmchair size={25} fill='#F5F2FA' stroke='#F5F2FA' />
      </div>
      <p className='text-near-black text-[22px] font-serif'>loftory.</p>
    </div>
  );
}
