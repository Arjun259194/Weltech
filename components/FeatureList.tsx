import { Check } from "lucide-react";

type FeatureListProps = {
  features: string[];
  isPrime: boolean;
};

function FeatureItem({ label, isPrime }: { label: string; isPrime: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <div
        className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${isPrime ? "bg-blue-200 text-blue-700" : "bg-slate-100 text-slate-500"
          }`}
      >
        <Check className="w-2.5 h-2.5" strokeWidth={3} />
      </div>
      <span
        className={`text-sm ${isPrime ? "text-background/80 font-bold" : "text-slate-600"
          }`}
      >
        {label}
      </span>
    </li>
  );
}

export function FeatureList({ features, isPrime }: FeatureListProps) {
  return (
    <ul className="space-y-3 flex-1 mb-8">
      {features.map((f) => (
        <FeatureItem key={f} label={f} isPrime={isPrime} />
      ))}
    </ul>
  );
}
