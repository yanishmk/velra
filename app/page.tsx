"use client";

import Image from "next/image";
import {
  Bot,
  Camera,
  Check,
  Mail,
  Menu,
  PenTool,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: PenTool,
    title: "Identité",
    copy: "Une marque claire, cohérente et facile à reconnaître.",
  },
  {
    icon: Camera,
    title: "Réseaux sociaux",
    copy: "Du contenu pensé pour attirer, engager et rester en tête.",
  },
  {
    icon: Target,
    title: "Publicité",
    copy: "Des campagnes créatives qui transforment l’attention en résultats.",
  },
  {
    icon: Bot,
    title: "Automatisation IA",
    copy: "Moins de tâches répétitives. Plus de temps pour avancer.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main id="top">
      <header className="nav-shell">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Velra, retour en haut">
          velra<span>.</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("ia")}>Automatisation IA</button>
          <a href="mailto:bonjour@velra.agency">Contact</a>
        </nav>

        <a className="nav-cta" href="mailto:bonjour@velra.agency">
          Parlons de votre projet
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">Agence créative · Gatineau / Ottawa</p>
          <h1>
            Votre marque,
            <br />
            <span>plus forte.</span>
          </h1>
          <p className="hero-lead">
            Création, réseaux sociaux, publicité et IA réunis pour faire avancer votre entreprise simplement.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:bonjour@velra.agency">
              Démarrer un projet
            </a>
            <button className="button secondary" onClick={() => scrollTo("services")}>
              Découvrir Velra
            </button>
          </div>
        </div>

        <div className="mascot-stage" aria-label="Mascotte Velra">
          <div className="soft-orb" />
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
          <div className="floating-note note-top">Idées qui avancent</div>
          <div className="floating-note note-bottom">Créatif + efficace</div>
          <Image
            className="mascot"
            src="/images/velra-mascot-simple-v2.png"
            alt="Mascotte Velra souriante avec un hoodie violet"
            fill
            priority
            sizes="(max-width: 820px) 92vw, 44vw"
          />
        </div>
      </section>

      <section className="services page-width" id="services">
        <div className="section-heading">
          <p className="eyebrow">Ce qu’on fait</p>
          <h2>Tout ce qu’il faut.<br /><span>Rien de trop.</span></h2>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon"><Icon size={22} strokeWidth={1.8} /></div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ai-section page-width" id="ia">
        <div className="ai-copy">
          <p className="eyebrow light">Automatisation IA</p>
          <h2>Votre entreprise avance, même quand vous êtes occupé.</h2>
          <p>
            Nous connectons vos outils pour répondre, organiser et relancer automatiquement — sans compliquer votre quotidien.
          </p>
          <div className="benefits">
            <span><Check size={16} /> Réponses automatiques</span>
            <span><Check size={16} /> Suivis clients</span>
            <span><Check size={16} /> Moins d’erreurs</span>
          </div>
        </div>

        <div className="automation-card" aria-label="Exemple de processus automatisé">
          <div className="automation-top">
            <span><i /> Système actif</span>
            <small>Velra IA</small>
          </div>
          <div className="automation-step">
            <Mail size={20} />
            <div><small>Nouveau message</small><strong>Demande reçue</strong></div>
          </div>
          <div className="connector" />
          <div className="automation-step featured">
            <Bot size={20} />
            <div><small>Action automatique</small><strong>Réponse préparée</strong></div>
          </div>
          <div className="connector" />
          <div className="automation-step">
            <Check size={20} />
            <div><small>Suivi</small><strong>Équipe informée</strong></div>
          </div>
        </div>
      </section>

      <section className="contact page-width" id="contact">
        <div>
          <p>Une idée en tête ?</p>
          <h2>On la fait avancer.</h2>
        </div>
        <a className="button light-button" href="mailto:bonjour@velra.agency">
          bonjour@velra.agency
        </a>
      </section>

      <footer className="footer page-width">
        <div className="brand">velra<span>.</span></div>
        <p>Création · stratégie · automatisation IA</p>
        <span>Gatineau / Ottawa · © 2026</span>
      </footer>
    </main>
  );
}
