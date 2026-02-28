import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import CollectionGrid from './Components/CollectionGrid';
import Testimonial from './Components/Testimonial';
import Faq from './Components/Faq';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CollectionGrid />
      <Testimonial />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}
