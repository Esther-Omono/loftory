import Logo from './Logo';
import { FaFacebook, FaPinterest, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    FaFacebook,
    FaXTwitter,
    FaPinterest,
    RiInstagramFill,
    FaYoutube,
  ];

  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Contact Us', 'Career'],
    },
    {
      title: 'Customer Services',
      links: ['Shop', 'My Account', 'Track Your Order', 'FAQ'],
    },
    {
      title: 'Our Information',
      links: ['Privacy', 'User Terms & Condition', 'Return Policy'],
    },
    {
      title: 'Contact Info',
      links: [
        '+234 (0) 9012345678',
        'example@gmail.com',
        '23 Dove Crescent, Ikoyi, Lagos, Nigeria',
      ],
    },
  ];

  return (
    <footer className='bg-smoked-violet text-white py-10 px-16 font-sans'>
      <div className='flex items-center justify-center gap-8'>
        {/* Left Section */}
        <div className='basis-1/3'>
          <Logo bgColor='bg-white' iconColor='#7B5EA7' textColor='text-white' />

          <p className='py-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            molestie velit. Sed vel sodales lorem. In at mauris vitae velit
            sollicitudin sollicitudin eu et.
          </p>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4'>
            {socialIcons.map((Icon, i) => (
              <div
                key={i}
                className='w-10 h-10 bg-white flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition'
              >
                <Icon className='text-smoked-violet' size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className='basis-2/3 flex justify-between gap-8'>
          {footerSections.map((section, index) => (
            <div key={index} className='flex-1'>
              <h3 className='mb-4 text-base font-semibold'>{section.title}</h3>

              {section.links.map((link, i) => (
                <p
                  key={i}
                  className='py-2 text-sm cursor-pointer hover:text-gray-300 transition-colors'
                >
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Styled Divider */}
      <hr className='my-10 border-t border-white/20 w-3/4 mx-auto' />

      <div className='text-center text-sm opacity-80'>
        <p>Copyright &copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
}
