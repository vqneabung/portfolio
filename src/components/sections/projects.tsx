"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { projects, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { FolderOpen, ExternalLink, Users, AlertCircle, Lightbulb, Zap, ArrowRight, BookOpen } from "lucide-react";

export function Projects() {
  const { t } = useTranslation();
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <FolderOpen className="size-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.projects.heading}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { locale, t } = useTranslation();

  return (
    <Card
      style={
        { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
      }
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <Badge variant="outline" className="shrink-0">
            {lt(project.role, locale)}
          </Badge>
        </div>
        <CardDescription>
          {project.period}
          {project.teamSize > 0 && (
            <span className="ml-2 inline-flex items-center gap-1">
              · <Users className="size-3" /> {project.teamSize} {t.projects.members}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{lt(project.description, locale)}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Dialog>
          <DialogTrigger render={<Button variant="default" size="sm" />}>
            {t.projects.detail}
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto lg:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{project.name}</DialogTitle>
              <DialogDescription>
                {lt(project.role, locale)} · {project.period}
                {project.teamSize > 0 && ` · ${project.teamSize} ${t.projects.members}`}
              </DialogDescription>
            </DialogHeader>
            <Separator className="my-2" />
            <div className="space-y-5">
              {/* Problem */}
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <AlertCircle className="size-4 text-primary" />
                  {t.projects.problem}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {lt(project.problem, locale)}
                </p>
              </div>

              {/* What I Built */}
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Lightbulb className="size-4 text-primary" />
                  {t.projects.whatIBuilt}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {lt(project.whatIBuilt, locale)}
                </p>
              </div>

              {/* Architecture Flow */}
              {project.architectureFlow.length > 0 && (
                <div>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                    <ArrowRight className="size-4 text-primary" />
                    {t.projects.architecture}
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/30 p-3">
                    {project.architectureFlow.map((step, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        {step.startsWith("→") ? (
                          <>
                            <ArrowRight className="size-3 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {step.replace("→ ", "")}
                            </span>
                          </>
                        ) : (
                          <Badge variant="secondary" className="text-xs font-medium">
                            {step}
                          </Badge>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Zap className="size-4 text-primary" />
                  {t.projects.highlights}
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {lt(h, locale)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <AlertCircle className="size-4 text-orange-500" />
                  {t.projects.challenges}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {lt(project.challenges, locale)}
                </p>
              </div>

              {/* What I Learned */}
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <BookOpen className="size-4 text-green-500" />
                  {t.projects.learned}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {lt(project.learned, locale)}
                </p>
              </div>

              <Separator className="my-2" />

              {/* Responsibilities */}
              <div>
                <h4 className="mb-2 text-sm font-semibold">
                  {t.projects.responsibilities}
                </h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {lt(resp, locale)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="mb-2 text-sm font-semibold">{t.projects.technologies}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold">{t.projects.links}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <Button
                        key={typeof link.label === "string" ? link.label : link.label.vi}
                        variant="outline"
                        size="sm"
                        nativeButton={false}
                        render={
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                      >
                        <ExternalLink className="mr-1 size-3" />
                        {lt(link.label, locale)}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}