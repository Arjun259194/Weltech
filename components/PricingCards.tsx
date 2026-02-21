"use client"
import { useState } from "react";
import { PLANS } from "./plans";
import { PricingHeader } from "./PricingHeader";
import { PlanCard } from "./PlanCard";

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <PricingHeader annual={annual} onToggle={setAnnual} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full items-stretch">
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} annual={annual} />
        ))}
      </div>
    </>
  );
}
