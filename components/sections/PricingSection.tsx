import PricingCards from "../PricingCards";

export default function PricingSection() {
  return (
    <section className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 py-16">
      <PricingCards />
      <p className="text-center mt-10 text-xs text-slate-400 tracking-wide">
        No credit card required · Cancel anytime · SOC 2 Compliant
      </p>
    </section>

  )
}

