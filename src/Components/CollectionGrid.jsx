import { CollectionCard } from './CollectionCard';
import chairImg from '../assets/chair.jpg';

export default function CollectionGrid() {
  const categories = [
    {
      count: '1500+',
      title: 'Chairs',
      items: [
        'Gaming Chair',
        'Lounge Chair',
        'Folding Chair',
        'Dining Chair',
        'Office Chair',
        'Armchair',
        'Club Chair',
      ],
      image: chairImg,
    },
    {
      count: '750+',
      title: 'Sofa',
      items: [
        'Reception Sofa',
        'Sectional Sofa',
        'Armless Sofa',
        'Curved Sofa',
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    },
    {
      count: '450+',
      title: 'Stools',
      items: [
        'Counter Stools',
        'Upholstered Stools',
        'Wooden Bar Stools',
        'Plastic Stools',
      ],
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    },
  ];

  return (
    <section className='py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-300 mx-auto px-6'>
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={`
              ${index === 0 ? 'md:col-start-1 md:row-start-1 md:row-span-2' : ''}
              ${index === 1 ? 'md:col-start-2 md:row-start-1' : ''}
              ${index === 2 ? 'md:col-start-2 md:row-start-2' : ''}
            `}
          >
            <CollectionCard {...category} large={index === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
