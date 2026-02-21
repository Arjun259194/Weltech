import BookSection from "@/components/sections/BookSection";
import FeatureSection from "@/components/sections/FeatureSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import ReviewSection from "@/components/sections/ReviewSection";
import SchedulingSection from "@/components/sections/SchedulingSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeatureSection />
      <ReviewSection />
      <SchedulingSection />
      <BookSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
