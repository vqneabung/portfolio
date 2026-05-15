"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { about, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { User } from "lucide-react";

export function About() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <User className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.about.heading}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {about.description.map((paragraph, i) => (
                <p key={i}>{lt(paragraph, locale)}</p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-row gap-4 lg:flex-col lg:gap-6">
            {about.highlights.map((h) => (
              <Card
                key={lt(h.label, locale)}
                className="gradient-border flex-1 bg-card"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-3xl font-bold text-primary">
                    {h.value}
                  </span>
                  <span className="mt-1 text-sm text-muted-foreground">
                    {lt(h.label, locale)}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12 opacity-30" />
      </div>
    </section>
  );
}