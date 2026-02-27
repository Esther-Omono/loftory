import { CollectionGrid } from './Components/CollectionGrid';
import Features from './Components/Features';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Testimonial from './Components/Testimonial';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CollectionGrid />
      <Testimonial />
    </div>
  );
}
