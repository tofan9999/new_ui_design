import Image from "next/image";
import Template from "./layout/Template";
import HeroSection from "@/components/home/heroSection";
import AboutSection from "@/components/home/aboutSection";
import ServicesSection from "@/components/home/servicesSection";

export default function Home() {
  return (
    <Template>
      {/* Hero secition */}
      <HeroSection />
      {/* about secition */}
      <AboutSection />
      {/* services secition */}
      < ServicesSection/>



    </Template>
  );
}
