import { useState } from 'react';
import Logo from './Logo';
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';

const icons = [CiSearch, CiHeart, CiShoppingCart, CiUser];

function NavIcons() {
  return (
    <div className='flex gap-5 items-center'>
      {icons.map((Icon, index) => (
        <div
          key={index}
          className='w-9 h-9 flex items-center justify-center rounded-full transition-all duration-100 cursor-pointer hover:bg-[#ede8f5] hover:border hover:border-[#6b5878]'
        >
          <Icon size={20} className='text-[#6b5878]' />
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('Home');

  const navItems = [
    'Home',
    'Shop',
    'Categories',
    'About Us',
    'Contact Us',
    'Blog',
  ];

  return (
    <nav className='px-12 h-16 flex items-center justify-between border-b border-b-[#C4A8C8]'>
      {/* Logo */}
      <Logo />

      <ul className='flex gap-9 items-center'>
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`
            font-[Raleway] text-sm font-medium cursor-pointer transition
            ${
              active === item
                ? 'text-[#2B2B2B] underline decoration-2 decoration-[#7B5EA7] underline-offset-6'
                : 'text-[#6b5878] hover:text-[#C4A8C8]'
            }
          `}
          >
            {item}
          </li>
        ))}
      </ul>
      <NavIcons />
    </nav>
  );
}
