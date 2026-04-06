import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import ContactConsole from "@/components/ContactConsole";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <MatrixRain />
      <Header />
      <ContactConsole />
      <Footer />
    </main>
  );
}
