import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import RequestForm from '../components/RequestForm';
import Pricing from '../components/Pricing';
import Notices from '../components/Notices';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <RequestForm />
      <Pricing />
      <Notices />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}