"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section id="education" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <GraduationCap className="size-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.education.heading}
          </h2>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{lt(education.degree, locale)}</h3>
                <p className="text-muted-foreground">{education.school}</p>
              </div>
              <Badge variant="outline">{education.period}</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t.education.gpa}:</span>
                <span className="font-semibold">{education.gpa}</span>
              </div>
              {education.scholarship && (
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {lt(education.scholarship, locale)}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}