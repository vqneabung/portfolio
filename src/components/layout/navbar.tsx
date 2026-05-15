"use client";

import { useState } from "react";
import { Menu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="section-container flex h-[72px] items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          <Code2 className="size-5 text-primary" />
          <span className="gradient-text">VQN</span>
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

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <Menu className="size-5" />
            <span className="sr-only">Mở menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Menu điều hướng</SheetTitle>
            <div className="flex items-center justify-between px-1 pt-2">
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-lg font-bold"
              >
                <Code2 className="size-5 text-primary" />
                <span className="gradient-text">VQN</span>
              </a>
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
      </nav>
    </header>
  );
}