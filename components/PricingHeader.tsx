import { BillingToggle } from "./BillingToggle";

type PricingHeaderProps = {
  annual: boolean;
  onToggle: (value: boolean) => void;
};

export function PricingHeader({ annual, onToggle }: PricingHeaderProps) {
  return (
    <div className="text-center mb-12 max-w-xl">
      <p className="text-xs font-semibold tracking-widest uppercase text-background mb-3">
        Simple Pricing
      </p>
      <h1
        className="text-5xl font-light text-slate-900 mb-4 tracking-tight leading-tight"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        Choose your altitude
      </h1>
      <p className="text-slate-500 text-base leading-relaxed">
        Start free, scale when ready. Every plan includes core features —
        upgrade for the power to reach further.
      </p>
      <BillingToggle annual={annual} onToggle={onToggle} />
    </div>
  );
}
