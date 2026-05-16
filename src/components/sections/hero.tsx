"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail } from "lucide-react";
import { hero, personalInfo, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { useTranslation } from "@/i18n";

export function Hero() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-72px)] items-center pt-[72px]"
    >
      <div
        ref={ref}
        className={`section-container section-padding reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <Avatar className="size-32 border border-border">
            <AvatarFallback className="bg-muted text-3xl font-bold text-foreground">
              VQN
            </AvatarFallback>
          </Avatar>

          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {t.hero.subtitle}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {hero.name}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              {lt(hero.title, locale)}
            </p>
          </div>

          <p className="max-w-2xl text-muted-foreground">
            {lt(hero.brief, locale)}
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {hero.techBadges.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
              <Mail className="mr-2 size-4" />
              {t.contact.heading}
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <GithubIcon className="mr-2 size-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <LinkedinIcon className="mr-2 size-4" />
              LinkedIn
            </Button>
          </div>

          <a
            href="#about"
            className="mt-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronDown className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}