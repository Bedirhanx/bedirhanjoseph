import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import { About, Skills, Projects } from './components/Sections';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

export default function Home() {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee items={['DATA SCIENCE', 'PYTHON', 'MACHINE LEARNING', 'SQL', 'BUSINESS', 'DE ANZA', 'OPEN TO INTERNSHIPS']} />
        <Marquee items={['no cap', 'the data doesn’t lie', 'built different', 'it’s giving insights', 'lowkey genius']} alt reverse />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
