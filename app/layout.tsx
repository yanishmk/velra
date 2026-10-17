import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velra. | Création, stratégie & automatisation IA",
  description: "Velra transforme les idées ambitieuses en marques visibles et les tâches répétitives en temps retrouvé.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
