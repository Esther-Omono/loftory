import Heading from './Heading';
import { MdMailOutline } from 'react-icons/md';

export default function Newsletter() {
  return (
    <section className='bg-pearl-violet py-10 px-4 sm:px-6 lg:px-16 font-sans'>
      <Heading
        title='Our Newsletter'
        subtitle='Subscribe to our Newsletter to get Updates on our Latest Collection'
      />

      <p className='text-center py-2 mb-4 text-sm sm:text-base'>
        Get 20% off on your first order just by subscribing to our news letter
      </p>

      <form className='flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto w-full'>
        <div className='relative flex items-center bg-white rounded-4xl py-2 px-3 border border-transparent focus-within:border-smoked-violet focus-within:ring-2 focus-within:ring-smoked-violet/20 transition w-full'>
          <div className='w-10 h-10 bg-smoked-violet rounded-full flex items-center justify-center shrink-0'>
            <MdMailOutline size={20} color='#F5F2FA' />
          </div>
          <input
            type='email'
            placeholder='Enter your email address'
            className='flex-1 py-2 px-3 text-base sm:text-sm bg-transparent outline-none w-full'
          />
        </div>

        <button className='w-full sm:w-auto py-2.5 px-6 bg-smoked-violet text-pearl-violet rounded-3xl border border-transparent hover:border hover:border-smoked-violet hover:bg-white hover:text-smoked-violet transition'>
          Subscribe
        </button>
      </form>
    </section>
  );
}
