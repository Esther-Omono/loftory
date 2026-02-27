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
          className='w-9 h-9 flex items-center justify-center rounded-full transition-all duration-100 cursor-pointer hover:bg-lavender-mist hover:border hover:border-dusk-plum'
        >
          <Icon size={20} className='text-dusk-plum' />
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
    <nav className='px-16 h-16 flex items-center justify-between border-b border-b-dusty-mauve'>
      {/* Logo */}
      <Logo />

      <ul className='flex gap-9 items-center'>
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
    </nav>
  );
}
