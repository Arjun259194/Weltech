import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type BillingToggleProps = {
  annual: boolean;
  onToggle: (value: boolean) => void;
};

export function BillingToggle({ annual, onToggle }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      <Label
        htmlFor="billing-toggle"
        className={`text-sm font-medium cursor-pointer transition-colors ${
          !annual ? "text-slate-900" : "text-slate-400"
        }`}
      >
        Monthly
      </Label>
      <Switch
        id="billing-toggle"
        checked={annual}
        onCheckedChange={onToggle}
      />
      <Label
        htmlFor="billing-toggle"
        className={`text-sm font-medium cursor-pointer transition-colors ${
          annual ? "text-slate-900" : "text-slate-400"
        }`}
      >
        Annual
      </Label>
      {annual && (
        <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs hover:bg-emerald-50">
          Save 20%
        </Badge>
      )}
    </div>
  );
}
