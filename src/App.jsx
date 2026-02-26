import { CollectionGrid } from './Components/CollectionGrid';
import Features from './Components/Features';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CollectionGrid />
    </div>
  );
}
