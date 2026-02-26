import MatrixRain from '@/components/MatrixRain';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MatrixRain />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}