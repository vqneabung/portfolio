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
import { projects } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { FolderOpen, ExternalLink, Users } from "lucide-react";

export function Projects() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <FolderOpen className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Dự án
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
  return (
    <Card
      className="gradient-border bg-card transition-shadow hover:shadow-lg hover:shadow-primary/5"
      style={
        { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
      }
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{project.name}</CardTitle>
          <Badge
            variant="outline"
            className="shrink-0 border-secondary-accent/40 text-secondary-accent"
          >
            {project.role}
          </Badge>
        </div>
        <CardDescription>
          {project.period}{" "}
          {project.teamSize > 0 && (
            <span className="ml-2 inline-flex items-center gap-1">
              · <Users className="size-3" /> {project.teamSize} thành viên
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">{project.description}</p>
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
            Chi tiết
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto bg-card sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{project.name}</DialogTitle>
              <DialogDescription>
                {project.role} · {project.period}
                {project.teamSize > 0 && ` · ${project.teamSize} thành viên`}
              </DialogDescription>
            </DialogHeader>
            <Separator className="my-2" />
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div>
                <h4 className="mb-2 text-sm font-semibold">
                  Trách nhiệm & Đóng góp
                </h4>
                <ul className="space-y-2">
                  {project.responsibilities.map((resp, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Công nghệ</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.links.length > 0 && (
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Liên kết</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <Button
                        key={link.label}
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
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {project.links.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <ExternalLink className="mr-1 size-3" />
            GitHub
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}