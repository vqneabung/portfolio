"use client";

import { useState } from "react";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/i18n";
import type { Locale } from "@/i18n";

export function Navbar() {
  const { locale, t, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLocale = () => {
    const next: Locale = locale === "vi" ? "en" : "vi";
    setLocale(next);
  };

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="section-container flex h-[72px] items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          VQN
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="gap-1.5 text-xs font-medium"
          >
            <Globe className="size-4" />
            {locale === "vi" ? "EN" : "VI"}
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" className="md:hidden" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex items-center justify-between px-1 pt-2">
                <a
                  href="#hero"
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold"
                >
                  VQN
                </a>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLocale}
                  className="gap-1.5 text-xs font-medium"
                >
                  <Globe className="size-4" />
                  {locale === "vi" ? "EN" : "VI"}
                </Button>
              </div>
              <Separator className="my-4" />
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}