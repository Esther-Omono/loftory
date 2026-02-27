import { FiPackage } from 'react-icons/fi';
import { LuWallet } from 'react-icons/lu';
import { PiHeadsetBold } from 'react-icons/pi';

export default function Features() {
  return (
    <section className='px-16 py-10 flex items-center justify-center gap-20'>
      <div className='flex items-center justify-center gap-4 w-full'>
        <div className='flex'>
          <FiPackage size={50} stroke='#1C1C1C' />
          <span className='w-10 h-10 bg-smoked-violet -ml-7.5 mt-2.5 -z-9999 rounded-full'></span>
        </div>

        <div className='flex-1'>
          <h3 className='font-sans text-xl font-medium'>Free Shipping</h3>
          <p className='font-sans text-faded-iris text-sm'>
            For order above NGN10,000.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 w-full'>
        <div className='flex'>
          <LuWallet size={50} stroke='#1C1C1C' />
          <span className='w-10 h-10 bg-smoked-violet -ml-7.5 mt-2.5 -z-9999 rounded-full'></span>
        </div>

        <div className='flex-1'>
          <h3 className='font-sans text-xl font-medium'>Flexible Payment</h3>
          <p className='font-sans text-faded-iris text-sm'>
            Multiple secure payment options.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-4 w-full'>
        <div className='flex'>
          <PiHeadsetBold size={50} stroke='#1C1C1C' />
          <span className='w-10 h-10 bg-smoked-violet -ml-7.5 mt-2.5 -z-9999 rounded-full'></span>
        </div>

        <div className='flex-1'>
          <h3 className='font-sans text-xl font-medium'>24x7 Support</h3>
          <p className='font-sans text-faded-iris text-sm'>
            We support online all days.
          </p>
        </div>
      </div>
    </section>
  );
}
