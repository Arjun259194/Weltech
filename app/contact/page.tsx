import { ContactHeaderSection } from "@/components/sections/ContactHeaderSection";
import { ContactMapSection } from "@/components/sections/ContactMapSection";
import { ContactSocialSection } from "@/components/sections/ContactSocialSection";
import { ContactTeamSection } from "@/components/sections/ContactTeamSection";
import { ContactBottomCtaSection } from "@/components/sections/ContactBottomCtaSection";

export default function page() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <ContactHeaderSection />
      <ContactMapSection />
      <ContactSocialSection />
      <ContactTeamSection />
      <ContactBottomCtaSection />
    </main>
  );
}
