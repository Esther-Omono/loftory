import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mt-2 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className='mb-4 rounded-2xl overflow-hidden transition-all duration-300'
          >
            {/* Header */}
            <button
              onClick={() => toggleItem(index)}
              className={`w-full flex justify-between items-center p-4 sm:p-6 border rounded-2xl transition-all duration-300 ${isOpen ? 'bg-pearl-violet text-near-black border-transparent rounded-b-none' : 'bg-white border-dusk-plum text-charcoal'}`}
            >
              <h3 className='text-base sm:text-lg font-medium text-left pr-4'>
                {item.question}
              </h3>
              <span
                className={`
                  flex items-center justify-center shrink-0
                  transition-all duration-300
                  ${isOpen ? 'text-smoked-violet' : 'text-near-black'}
                `}
              >
                {isOpen ? <FaMinus size={15} /> : <FaPlus size={15} />}
              </span>
            </button>

            {/* Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-125' : 'max-h-0'}`}
            >
              <div className='bg-smoked-violet rounded-b-2xl p-4 sm:p-6'>
                <p className='text-sm text-white leading-relaxed'>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
