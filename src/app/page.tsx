import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ChaletShowcase from "@/components/ChaletShowcase";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Story />
        <ChaletShowcase />
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
