import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import CollectionGrid from '../components/home/CollectionGrid';
import Testimonial from '../components/home/Testimonial';
import Faq from '../components/home/Faq';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CollectionGrid />
      <Testimonial />
      <Faq />
      <Newsletter />
    </>
  );
}
