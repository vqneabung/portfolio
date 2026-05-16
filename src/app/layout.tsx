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
  title: "Vũ Quang Nguyên — Backend-Oriented Fullstack Developer",
  description:
    "Portfolio của Vũ Quang Nguyên — Backend & AI Application Developer. Kinh nghiệm với ASP.NET Core, NestJS, PostgreSQL, Docker, RAG, vector search. Vận hành homelab và deployment thực tế.",
  keywords: [
    "Vũ Quang Nguyên",
    "Backend Developer",
    "AI Developer",
    "Full-stack",
    "ASP.NET Core",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "RAG",
    "Vector Search",
    "Homelab",
    "Portfolio",
  ],
  authors: [{ name: "Vũ Quang Nguyên" }],
  openGraph: {
    title: "Vũ Quang Nguyên — Backend-Oriented Fullstack Developer",
    description:
      "Backend & AI Application Developer. Xây dựng hệ thống backend, retrieval systems, và deployment thực tế.",
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