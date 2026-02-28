import { useState } from 'react';
import Logo from './Logo';
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const icons = [CiSearch, CiHeart, CiShoppingCart, CiUser];

function NavIcons() {
  return (
    <div className='flex gap-4 items-center'>
      {icons.map((Icon, index) => (
        <div
          key={index}
          className='w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer hover:bg-lavender-mist hover:border hover:border-dusk-plum'
        >
          <Icon size={20} className='text-dusk-plum' />
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'Shop',
    'Categories',
    'About Us',
    'Contact Us',
    'Blog',
  ];

  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-b-dusty-mauve'>
      <div className='flex items-center justify-between h-16 px-4 sm:px-8 lg:px-16'>
        {/* Logo */}
        <Logo />

        {/* Desktop Nav (lg and above) */}
        <div className='hidden lg:flex items-center gap-10'>
          <ul className='flex gap-8 items-center'>
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`
            font-sans text-sm font-medium cursor-pointer transition
            ${
              active === item
                ? 'text-near-black underline decoration-2 decoration-smoked-violet underline-offset-6'
                : 'text-dusk-plum hover:text-dusty-mauve'
            }
          `}
              >
                {item}
              </li>
            ))}
          </ul>

          <NavIcons />
        </div>

        {/* Mobile / Tablet Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden cursor-pointer'
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Dropdown */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full z-40 lg:hidden px-6 pb-6 bg-white shadow-md border-t border-dusty-mauve'>
          <ul className='flex flex-col gap-5 mt-4'>
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false);
                }}
                className='font-sans text-sm font-medium text-dusk-plum cursor-pointer'
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Icons inside dropdown */}
          <div className='mt-6 pt-6 border-t border-dusty-mauve'>
            <NavIcons />
          </div>
        </div>
      )}
    </nav>
  );
}
