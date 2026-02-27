import TestimonialCard from './TestimonialCard';
import Heading from './Heading';

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Leslie Alexander',
      profession: 'Architect',
      rating: [1, 1, 1, 1, 0.5],
      quote:
        'Suspendisse dolor augue, mollis quis blandit imperdiet, vestibulum ut neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 2,
      name: 'Sam Blackwood',
      profession: 'Technician',
      rating: [1, 1, 1, 1, 1],
      quote:
        'Suspendisse dolor augue, mollis quis blandit imperdiet, vestibulum ut neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 3,
      name: 'Josephine Bernice',
      profession: 'Engineer',
      rating: [1, 1, 1, 1],
      quote:
        'Suspendisse dolor augue, mollis quis blandit imperdiet, vestibulum ut neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  ];
  return (
    <section className='bg-pearl-violet py-10 px-16 font-sans'>
      <Heading title='Testimonial' subtitle='What Our Clients Say' />

      <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 p-8'>
        {testimonials.map((testimony) => (
          <TestimonialCard
            key={testimony.id}
            name={testimony.name}
            profession={testimony.profession}
            rating={testimony.rating}
            quote={testimony.quote}
          />
        ))}
      </div>
    </section>
  );
}
