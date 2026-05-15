"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo, lt } from "@/data/portfolio";
import { useReveal } from "@/hooks/use-reveal";
import { useTranslation } from "@/i18n";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import type { LucideIcon } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | undefined;
}

export function Contact() {
  const { locale, t } = useTranslation();
  const { ref, isVisible } = useReveal();

  const contactItems: ContactItem[] = [
    {
      icon: Mail,
      label: t.contact.email,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "vqneabung",
      href: personalInfo.github,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Quang Nguyên Vũ",
      href: personalInfo.linkedin,
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: lt(personalInfo.location, locale),
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div
        ref={ref}
        className={`section-container reveal ${isVisible ? "visible" : ""}`}
      >
        <div className="mb-10 flex items-center gap-3">
          <Send className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t.contact.heading}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info cards */}
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {t.contact.description}
            </p>
            <div className="space-y-3">
              {contactItems.map((item) => (
                <Card key={item.label} className="bg-card">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-medium transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick email CTA */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-8 text-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
              <Mail className="size-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{t.contact.ctaTitle}</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {t.contact.ctaDescription}
            </p>
            <Button size="lg" nativeButton={false} render={<a href={`mailto:${personalInfo.email}`} />}>
              <Mail className="mr-2 size-4" />
              {t.contact.sendEmail}
            </Button>
            <Separator className="my-6 w-3/4 opacity-30" />
            <div className="flex gap-3">
              <Button variant="outline" size="icon" nativeButton={false} render={<a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" />}>
                <GithubIcon className="size-4" />
              </Button>
              <Button variant="outline" size="icon" nativeButton={false} render={<a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />}>
                <LinkedinIcon className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}