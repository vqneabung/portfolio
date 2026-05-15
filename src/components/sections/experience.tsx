"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section id="experience" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.experience.heading}
          </h2>
        </div>

        <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-12 sm:pl-8"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              {/* Timeline dot */}
              <div className="absolute left-[11px] top-2 size-3 rounded-full bg-primary sm:left-[-5px]" />

              <Card className="gradient-border bg-card">
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-lg">{lt(exp.title, locale)}</CardTitle>
                    <Badge
                      variant="outline"
                      className="w-fit border-primary/40 text-primary"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {lt(resp, locale)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}