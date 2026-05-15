"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { Award } from "lucide-react";

export function Certifications() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="certifications" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <Award className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Chứng chỉ
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Card
              key={i}
              className="gradient-border bg-card"
              style={
                { "--reveal-delay": `${i * 80}ms` } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col gap-2 p-5">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <Badge
                  variant="outline"
                  className="w-fit border-secondary-accent/40 text-secondary-accent"
                >
                  {cert.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}