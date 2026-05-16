"use client";

import { Card, CardContent } from "@/components/ui/card";
import { homelab, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { Server, Cpu, BookOpen, AlertCircle } from "lucide-react";
import Image from "next/image";

export function Homelab() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section id="homelab" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <Server className="size-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.homelab.heading}
          </h2>
        </div>

        <p className="mb-8 max-w-3xl text-muted-foreground">
          {lt(homelab.description, locale)}
        </p>

        {/* Specs grid */}
        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {homelab.specs.map((spec) => (
            <Card key={lt(spec.label, locale)} className="transition-colors hover:bg-muted/50">
              <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                <Cpu className="mb-2 size-5 text-primary" />
                <span className="text-sm font-medium">{lt(spec.label, locale)}</span>
                <span className="mt-1 text-xs text-muted-foreground">{spec.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold">{t.homelab.services}</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homelab.services.map((service) => (
              <Card key={service.name} className="transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-3 p-3">
                  {service.icon ? (
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${service.icon}/${service.icon}-original.svg`}
                      alt={service.name}
                      width={24}
                      height={24}
                      className="size-6 shrink-0"
                      unoptimized
                    />
                  ) : (
                    <div className="flex size-6 shrink-0 items-center justify-center rounded bg-muted text-[10px] font-bold text-muted-foreground">
                      {service.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{service.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {lt(service.description, locale)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <AlertCircle className="size-5 text-orange-500" />
            {t.homelab.challenges}
          </h3>
          <ul className="space-y-3">
            {homelab.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange-500" />
                {lt(challenge, locale)}
              </li>
            ))}
          </ul>
        </div>

        {/* What I Learned */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <BookOpen className="size-5 text-green-500" />
            {t.homelab.learned}
          </h3>
          <p className="text-sm text-muted-foreground">
            {lt(homelab.learned, locale)}
          </p>
        </div>
      </div>
    </section>
  );
}