import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Brif from "@/components/Brif";
import Cards from "@/components/Cards";
import ContactForm from "@/components/ContactForm";
import Personnel from "@/components/Personnel";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Brif />
      <Cards />
      <ContactForm />
      <Personnel />
      {/* Google Maps-iframe här, det kräver ingen komponent */}
      <section className="w-full h-96">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?f=q&source=embed&hl=sv&q=Hammarvägen+28,+piteå&output=embed"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </section>
    </main>
  );
}
