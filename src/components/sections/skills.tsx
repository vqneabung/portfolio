"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skills, lt } from "@/data/portfolio";
import type { Skill } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryKey = Skill["category"];

const categoryColors: Record<CategoryKey, string> = {
  language: "bg-blue-500/15 text-blue-400 border-blue-500/30 hover:bg-blue-500/25",
  framework: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25",
  database: "bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/25",
  tool: "bg-purple-500/15 text-purple-400 border-purple-500/30 hover:bg-purple-500/25",
  softskill: "bg-pink-500/15 text-pink-400 border-pink-500/30 hover:bg-pink-500/25",
  language_other: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/25",
};

export function Skills() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">(
    "all"
  );

  const categoryFilters: { key: CategoryKey | "all"; label: string }[] = [
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
          <Wrench className="size-6 text-primary" />
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
              onClick={() => setActiveCategory(cat.key as CategoryKey | "all")}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={cn(
                "px-3 py-1.5 text-sm font-medium transition-colors",
                categoryColors[skill.category]
              )}
            >
              {skill.nameLocal ? lt(skill.nameLocal, locale) : skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}