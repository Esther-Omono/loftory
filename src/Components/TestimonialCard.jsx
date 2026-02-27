import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';

export default function TestimonialCard({ name, profession, rating, quote }) {
  const ratingLevels = { 0.5: FaStarHalf, 1: FaStar };

  return (
    <div className='bg-white rounded-2xl overflow-hidden p-6'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-xl'>{name}</h3>
          <p className='text-faded-iris'>{profession}</p>

          <div className='flex items-center gap-1'>
            {rating.map((ratingPoint, index) => {
              const StarComponent = ratingLevels[ratingPoint];
              return (
                <StarComponent key={index} size={20} fill='gold' color='gold' />
              );
            })}
          </div>
        </div>

        <div className='h-12.5 w-12.5 rounded-full bg-pearl-violet flex items-center justify-center'>
          <FaQuoteRight fill='#7B5EA7' />
        </div>
      </div>

      <p className='text-sm text-faded-iris mt-2'>{quote}</p>
    </div>
  );
}
