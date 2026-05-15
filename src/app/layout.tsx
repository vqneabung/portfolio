import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vũ Quang Nguyên — Software Developer",
  description:
    "Portfolio của Vũ Quang Nguyên — Sinh viên năm cuối Kỹ thuật Phần mềm, Đại học FPT. Kinh nghiệm với ASP.NET Core, React, PostgreSQL, Redis, Docker.",
  keywords: [
    "Vũ Quang Nguyên",
    "Software Developer",
    "Full-stack",
    "React",
    "ASP.NET Core",
    "PostgreSQL",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Vũ Quang Nguyên" }],
  openGraph: {
    title: "Vũ Quang Nguyên — Software Developer",
    description:
      "Portfolio của Vũ Quang Nguyên — Kinh nghiệm phát triển backend & full-stack.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col antialiased">
        <I18nProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </I18nProvider>
      </body>
    </html>
  );
}