import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velra — Agence créative, performance & automatisation IA",
  description: "Velra réunit direction créative, contenu, acquisition et automatisation IA pour construire des marques impossibles à ignorer.",
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
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Active les animations avant le premier affichage (évite un flash du contenu) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var r=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;r.classList.add('motion-ready');setTimeout(function(){if(!r.classList.contains('motion-live'))r.classList.remove('motion-ready')},4000)})()",
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
