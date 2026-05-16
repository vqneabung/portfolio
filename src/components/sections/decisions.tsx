"use client";

import { Card, CardContent } from "@/components/ui/card";
import { technicalDecisions, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { GitBranch } from "lucide-react";

export function Decisions() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section id="decisions" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-4 flex items-center gap-3">
          <GitBranch className="size-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.decisions.heading}
          </h2>
        </div>
        <p className="mb-8 text-muted-foreground">
          {t.decisions.subtitle}
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {technicalDecisions.map((decision, i) => (
            <Card
              key={i}
              style={
                { "--reveal-delay": `${i * 80}ms` } as React.CSSProperties
              }
              className="transition-colors hover:bg-muted/30"
            >
              <CardContent className="space-y-3 p-6">
                <h3 className="text-sm font-semibold">
                  {lt(decision.question, locale)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lt(decision.answer, locale)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}