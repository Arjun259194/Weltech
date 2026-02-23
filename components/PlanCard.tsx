import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FeatureList } from "./FeatureList";
import type { Plan } from "./plans";

// 👇 Replace with your actual image path / import
// import planeBg from "@/assets/plane.jpg";

type PlanCardProps = {
  plan: Plan;
  annual: boolean;
};

function PrimeBackground() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(/assets/plane.jpg)`,
          backgroundPosition: "center 20%",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-secondary/60" />
    </>
  );
}

function PlanPrice({
  price,
  annual,
  isPrime,
}: {
  price: Plan["price"];
  annual: boolean;
  isPrime: boolean;
}) {
  const amount =
    price.monthly === 0 ? null : annual ? price.annual : price.monthly;
  const colorClass = isPrime ? "text-background" : "text-slate-900";
  const subColorClass = isPrime ? "text-background/70" : "text-slate-400";

  return (
    <div className="mb-2">
      <div className="flex items-start gap-0.5">
        {amount !== null && (
          <span
            className={`text-xl font-light mt-2 ${
              isPrime ? "text-background" : "text-slate-400"
            }`}
          >
            $
          </span>
        )}
        <span
          className={`text-6xl font-light leading-none ${colorClass}`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {amount ?? "Free"}
        </span>
      </div>
      {amount !== null && (
        <p className={`text-xs mt-2 ${subColorClass}`}>
          per seat / month · billed {annual ? "annually" : "monthly"}
        </p>
      )}
    </div>
  );
}

export function PlanCard({ plan, annual }: PlanCardProps) {
  const { name, price, description, badge, features, cta, isPrime } = plan;

  return (
    <Card
      className={`relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 ${
        isPrime
          ? "border-0 shadow-2xl shadow-blue-200 ring-1 ring-white/60"
          : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
      }`}
    >
      {isPrime && <PrimeBackground />}

      <CardHeader className="relative z-10 pb-0 pt-7 px-7">
        <div className="flex items-start justify-between mb-5">
          <span
            className={`text-2xl font-light tracking-tight ${
              isPrime ? "text-background" : "text-slate-900"
            }`}
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {name}
          </span>
          {badge && (
            <Badge className="bg-blue-600 hover:bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border-0">
              {badge}
            </Badge>
          )}
        </div>

        <PlanPrice price={price} annual={annual} isPrime={isPrime} />

        <p
          className={`text-sm italic leading-relaxed mb-5 ${
            isPrime ? "text-background/80" : "text-slate-400"
          }`}
        >
          {description}
        </p>

        <Separator className={isPrime ? "bg-blue-200/60" : "bg-slate-100"} />
      </CardHeader>

      <CardContent className="relative z-10 flex flex-col flex-1 pt-5 px-7 pb-7">
        <p
          className={`text-[10px] font-bold tracking-widest uppercase mb-4 ${
            isPrime ? "text-background" : "text-slate-400"
          }`}
        >
          What's included
        </p>

        <FeatureList features={features} isPrime={isPrime} />

        <Button
          variant={isPrime ? "default" : "outline"}
          className={`w-full font-semibold text-sm py-5 rounded-xl transition-all duration-200 ${
            isPrime
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-300/40 hover:shadow-blue-400/50 hover:scale-[1.02]"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
          }`}
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}
