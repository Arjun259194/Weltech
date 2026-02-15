import { LanguageToggleWrapper } from "@/components/LanguageWrapper";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import ReviewSection from "@/components/sections/ReviewSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeatureSection />
      <ReviewSection />
    </div>
  );
}
