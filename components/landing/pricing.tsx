import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying things out",
    features: [
      "1 AI avatar",
      "3 videos per month",
      "720p resolution",
      "Community support",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$15",
    description: "Best for professionals and teams",
    features: [
      "Unlimited AI avatars",
      "Unlimited videos",
      "4K resolution",
      "Priority support",
      "Custom branding",
      "API access",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "SSO & SAML",
      "Custom SLA",
      "On-premise deployment",
      "Advanced analytics",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                tier.highlighted &&
                  "border-primary ring-2 ring-primary/20 relative"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Recommended
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  <Link href="/signup">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
