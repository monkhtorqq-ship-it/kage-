import MatrixRain from '@/components/MatrixRain';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Features from '@/components/Features';
import About from '@/components/About';
import SecurityManual from '@/components/SecurityManual';
import ThreatBoard from '@/components/ThreatBoard';
import ScrollToTop from '@/components/ScrollToTop';


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixRain />
      <Header />
      <Hero />
      <ThreatBoard  />
      <About />
      <ScrollToTop />
      <Features />
      <SecurityManual />
      <Footer />
    </main>
  );
}