import FilterSidebar from './FilterSidebar';
import { HiOutlineX } from 'react-icons/hi';

export default function FilterDrawer({ isOpen, onClose, filters, setFilters }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-15 left-0 h-full overflow-y-auto w-[80%] bg-pearl-violet z-50
          transition-transform duration-300 md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className='p-4 h-full'>
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </>
  );
}
