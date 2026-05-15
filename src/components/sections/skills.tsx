"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { skills, lt } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";

type SkillCategory = Skill["category"];
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { Wrench } from "lucide-react";
import Image from "next/image";

export function Skills() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");

  const categoryFilters: { key: SkillCategory | "all"; label: string }[] = [
    { key: "all", label: t.skills.all },
    { key: "language", label: t.skills.language },
    { key: "framework", label: t.skills.framework },
    { key: "database", label: t.skills.database },
    { key: "tool", label: t.skills.tool },
    { key: "softskill", label: t.skills.softskill },
    { key: "language_other", label: t.skills.language_other },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <Wrench className="size-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.skills.heading}
          </h2>
        </div>

        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categoryFilters.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.key as SkillCategory | "all")}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Skills grid - card with icon */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className="transition-colors hover:bg-muted/50">
              <CardContent className="flex items-center gap-3 p-3">
                {skill.icon ? (
                  <Image
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="size-6 shrink-0"
                    unoptimized
                  />
                ) : (
                  <div className="flex size-6 shrink-0 items-center justify-center rounded bg-muted text-[10px] font-bold text-muted-foreground">
    {skill.name.charAt(0)}
                  </div>
                )}
                <span className="truncate text-sm font-medium">
                  {skill.nameLocal ? lt(skill.nameLocal, locale) : skill.name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}