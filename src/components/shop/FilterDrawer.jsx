import FilterSidebar from './FilterSidebar';
import { HiOutlineX } from 'react-icons/hi';

export default function FilterDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className='absolute inset-0 bg-black/40 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          absolute top-0 left-0 h-full overflow-y-auto w-[80%] bg-pearl-violet z-50
          transition-transform duration-300 md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className='p-4 h-full'>
          <HiOutlineX onClick={onClose} className='mb-2' size={20} />

          <FilterSidebar />
        </div>
      </div>
    </>
  );
}
