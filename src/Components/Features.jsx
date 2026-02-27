import { FiPackage } from 'react-icons/fi';
import { LuWallet } from 'react-icons/lu';
import { PiHeadsetBold } from 'react-icons/pi';

const features = [
  {
    id: 1,
    icon: FiPackage,
    title: 'Free Shipping',
    description: 'For order above NGN10,000.',
  },
  {
    id: 2,
    icon: LuWallet,
    title: 'Flexible Payment',
    description: 'Multiple secure payment options.',
  },
  {
    id: 3,
    icon: PiHeadsetBold,
    title: '24x7 Support',
    description: 'We support online all days.',
  },
];

function FeatureItem({ icon, title, description }) {
  const Icon = icon;

  return (
    <div className='flex items-center justify-center gap-4 w-full'>
      <div className='relative flex items-center justify-center'>
        <Icon size={50} stroke='#1C1C1C' />
        <span className='absolute w-10 h-10 bg-smoked-violet rounded-full -z-10 translate-x-3 translate-y-2'></span>
      </div>

      <div className='flex-1'>
        <h3 className='font-sans text-xl font-medium'>{title}</h3>
        <p className='font-sans text-faded-iris text-sm'>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className='px-16 py-10 flex items-center justify-center gap-20'>
      {features.map((feature) => (
        <FeatureItem
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}
