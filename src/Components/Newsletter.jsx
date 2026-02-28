import Heading from './Heading';
import { MdMailOutline } from 'react-icons/md';

export default function Newsletter() {
  return (
    <section className='bg-pearl-violet py-10 px-16 font-sans'>
      <Heading
        title='Our Newsletter'
        subtitle='Subscribe to our Newsletter to get Updates on our Latest Collection'
      />

      <p className='text-center py-1 mb-4'>
        Get 20% off on your first order just by subscribing to our news letter
      </p>

      <form className='flex items-center justify-center gap-4 max-w-3xl mx-auto'>
        <div className='relative flex-1 flex items-center bg-white rounded-4xl py-1 px-2 border border-transparent focus-within:border-smoked-violet focus-within:ring-2 focus-within:ring-smoked-violet/20 transition'>
          <div className='w-8 h-8 bg-smoked-violet rounded-full flex items-center justify-center shrink-0'>
            <MdMailOutline size={20} color='#F5F2FA' />
          </div>
          <input
            type='email'
            placeholder='Enter your email address'
            className='flex-1 py-2 px-3 text-base bg-transparent outline-none'
          />
        </div>

        <button className='py-2.5 px-6 bg-smoked-violet text-pearl-violet rounded-3xl border border-transparent hover:border hover:border-smoked-violet hover:bg-white hover:text-smoked-violet'>
          Subscribe
        </button>
      </form>
    </section>
  );
}
