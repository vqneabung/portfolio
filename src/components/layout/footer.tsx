"use client";

import { useTranslation } from "@/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
      <div className="section-container">
        <p>&copy; {new Date().getFullYear()} Vũ Quang Nguyên. {t.footer.built}</p>
      </div>
    </footer>
  );
}