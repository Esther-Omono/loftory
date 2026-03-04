import { LuArmchair } from 'react-icons/lu';

export default function Logo({
  bgColor = 'bg-smoked-violet',
  iconColor = '#F5F2FA',
  textColor = 'text-near-black',
}) {
  return (
    <div className='flex items-center gap-2.5 cursor-pointer'>
      <div className={`${bgColor} p-2 rounded-full`}>
        <LuArmchair size={25} color={iconColor} />
      </div>
      <p className={`${textColor} text-[22px] font-serif`}>loftory.</p>
    </div>
  );
}
