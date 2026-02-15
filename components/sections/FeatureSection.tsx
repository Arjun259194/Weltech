import { ChartNoAxesCombined, Clock4, Notebook } from "lucide-react";
import CurvedBadgeCard from "../CurvedBadgeCard";

export default function FeatureSection() {
  return (
    <section className="text-center py-10">
      <h2 className="text-5xl font-semibold">What <span className="text-primary">We Do</span></h2>
      <p className="mb-10">We provide comprehensive coaching designed to bring out the best in every student.</p>

      <div className="flex w-11/12 mx-auto px-10 space-x-20">
        <CurvedBadgeCard title="Proven Results" content="Consistently high success rates with students achieving top ranks in competitive exams" icon={<ChartNoAxesCombined size={48} />} />
        <CurvedBadgeCard title="Flexible Batches" content="Morning, afternoon, and evening batches to fit every student's schedule." icon={<Clock4 size={48} />} />
        <CurvedBadgeCard title="Study Materials" content="Comprehensive, curated study materials and practice sets developed in-house." icon={<Notebook size={48} />} />
      </div>
    </section>
  )
}

