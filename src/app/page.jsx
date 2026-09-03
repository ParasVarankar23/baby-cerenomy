import CinematicIntro from "@/components/CinematicIntro";
import InvitationEnvelope from "@/components/InvitationEnvelope";
import BabyArrival from "@/components/BabyArrival";
import ParentsSection from "@/components/ParentsSection";
import SistersSection from "@/components/SistersSection";
import FamilyStory from "@/components/FamilyStory";
import InvitationCard from "@/components/InvitationCard";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import Gallery from "@/components/Gallery";
import FloatingFlowers from "@/components/FloatingFlowers";
import FloralBackground from "@/components/FloralBackground";
import Butterflies from "@/components/Butterflies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdf8]">
      <FloralBackground />

      <FloatingFlowers />

      <Butterflies />

      <CinematicIntro />

      <InvitationEnvelope />

      <BabyArrival />

      <ParentsSection />

      <SistersSection />

      <FamilyStory />

      <InvitationCard />

      <Countdown />

      <EventDetails />

      <LocationSection />

      <Gallery />

      <Footer />
    </main>
  );
}