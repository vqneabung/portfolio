"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="education" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <GraduationCap className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Học vấn
          </h2>
        </div>

        <Card className="gradient-border bg-card">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{education.degree}</h3>
                <p className="text-muted-foreground">{education.school}</p>
              </div>
              <Badge
                variant="outline"
                className="w-fit border-primary/40 text-primary"
              >
                {education.period}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">GPA:</span>
                <span className="font-semibold text-primary">
                  {education.gpa}
                </span>
              </div>
              {education.scholarship && (
                <div className="flex items-center gap-2">
                  <Award className="size-4 text-secondary-accent" />
                  <span className="text-sm text-muted-foreground">
                    {education.scholarship}
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