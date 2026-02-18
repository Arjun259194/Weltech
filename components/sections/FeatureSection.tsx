import { ChartNoAxesCombined, Clock4, Notebook } from "lucide-react";
import CurvedBadgeCard from "../CurvedBadgeCard";
import { AccentUnderline } from "../ui/textEffects";

export default function FeatureSection() {
  return (
    <section className="md:w-11/12 w-full mx-auto space-y-3 text-center py-10">
      <h2 className="text-5xl  font-semibold">
        What <span className="text-primary">We Do</span>
      </h2>
      <p className="mb-10 mx-2 md:mx-0">
        We provide comprehensive coaching designed to bring out the{" "}
        <AccentUnderline className="text-2xl" underline>
          best in every student.
        </AccentUnderline>
      </p>

      <div className="flex flex-col md:flex-row px-10 space-y-5 md:space-x-20">
        <CurvedBadgeCard
          title="Proven Results"
          content="Consistently high success rates with students achieving top ranks in competitive exams"
          icon={<ChartNoAxesCombined size={48} />}
        />
        <CurvedBadgeCard
          title="Flexible Batches"
          content="Morning, afternoon, and evening batches to fit every student's schedule."
          icon={<Clock4 size={48} />}
        />
        <CurvedBadgeCard
          title="Study Materials"
          content="Comprehensive, curated study materials and practice sets developed in-house."
          icon={<Notebook size={48} />}
        />
      </div>
    </section>
  );
}
