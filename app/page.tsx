import BookSection from "@/components/sections/BookSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
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
    </div>
  );
}
