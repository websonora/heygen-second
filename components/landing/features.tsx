import { Zap, Shield, Globe, Layers, BarChart3, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate professional videos in minutes, not hours. Our AI processes your content at blazing speed.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption. Your data and content are always protected.",
  },
  {
    icon: Globe,
    title: "40+ Languages",
    description:
      "Create videos in over 40 languages with natural-sounding AI voices and accurate lip sync.",
  },
  {
    icon: Layers,
    title: "100+ Templates",
    description:
      "Choose from a growing library of professionally designed templates for any use case.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track video performance with detailed analytics. Understand engagement and optimize content.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with shared workspaces, comments, and role-based access control.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to create AI videos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features that make video creation effortless
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
