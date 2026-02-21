export type Plan = {
  id: string;
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  badge?: string;
  features: string[];
  cta: string;
  isPrime: boolean;
};

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for individuals just getting started.",
    features: [
      "Up to 3 projects",
      "5 GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Get Started Free",
    isPrime: false,
  },
  {
    id: "prime",
    name: "Prime",
    price: { monthly: 29, annual: 23 },
    description: "Elevate your workflow. Built for professionals.",
    badge: "Most Popular",
    features: [
      "Unlimited projects",
      "100 GB storage",
      "Advanced analytics",
      "Priority support",
      "Full API access",
      "Custom integrations",
      "Team collaboration",
    ],
    cta: "Upgrade to Prime",
    isPrime: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: 99, annual: 79 },
    description: "Full-scale power for growing teams.",
    features: [
      "Everything in Prime",
      "Unlimited storage",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
      "Custom contracts",
      "SSO & SAML",
    ],
    cta: "Contact Sales",
    isPrime: false,
  },
];
