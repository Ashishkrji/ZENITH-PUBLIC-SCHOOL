import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Programs from '@/components/home/Programs';
import FacilitiesPreview from '@/components/home/FacilitiesPreview';
import Testimonials from '@/components/home/Testimonials';
import AdmissionCTA from '@/components/home/AdmissionCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Programs />
      <FacilitiesPreview />
      <Testimonials />
      <AdmissionCTA />
    </>
  );
}
