import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Create stunning AI videos in minutes
          </h1>
          <p className="max-w-lg text-lg text-muted-foreground">
            Transform your ideas into professional videos with AI-powered
            avatars, voices, and templates. No camera or studio required.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/signup">Get started free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">See features</Link>
            </Button>
          </div>
        </div>
        <div className="relative hidden aspect-video overflow-hidden rounded-xl lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div className="flex h-full items-center justify-center bg-muted">
            <div className="text-center text-muted-foreground">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10" />
              <p className="text-sm font-medium">AI Video Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
