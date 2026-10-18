"use client";

import Image from "next/image";
import {
  Bot,
  Calendar,
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
    number: "01",
    icon: PenTool,
    title: "Identité",
    copy: "Une marque claire et reconnaissable.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Réseaux sociaux",
    copy: "Du contenu qui attire et engage.",
  },
  {
    number: "03",
    icon: Target,
    title: "Publicité",
    copy: "Des campagnes pensées pour convertir.",
  },
  {
    number: "04",
    icon: Bot,
    title: "Automatisation IA",
    copy: "Moins de tâches. Plus de temps.",
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
          <a href="mailto:velracommunication@gmail.com">Contact</a>
        </nav>

        <a className="nav-cta" href="mailto:velracommunication@gmail.com?subject=Prendre%20un%20rendez-vous%20avec%20Velra">
          Prendre rendez-vous
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
            Création, publicité et IA pour faire avancer votre marque.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:velracommunication@gmail.com?subject=Prendre%20un%20rendez-vous%20avec%20Velra">
              <Calendar size={17} /> Prendre rendez-vous
            </a>
            <button className="button secondary" onClick={() => scrollTo("services")}>
              Nos services
            </button>
          </div>
        </div>

        <div className="mascot-stage" aria-label="Mascotte Velra">
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
          <div>
            <p className="eyebrow">Ce qu’on fait</p>
            <h2>Quatre expertises.<br /><span>Un même cap.</span></h2>
          </div>
          <p className="section-lead">
            Une marque visible, cohérente et efficace.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article className={`service-card service-card-${index + 1}`} key={service.title}>
                <div className="service-card-top">
                  <div className="service-icon"><Icon size={22} strokeWidth={1.8} /></div>
                  <span>{service.number}</span>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ai-section page-width" id="ia">
        <div className="ai-copy">
          <p className="eyebrow">Automatisation IA</p>
          <h2>Moins de répétition.<br /><span>Plus d’élan.</span></h2>
          <p>
            Vos outils répondent, organisent et relancent automatiquement.
          </p>
          <div className="benefits">
            <span><Check size={16} /> Réponses 24/7</span>
            <span><Check size={16} /> Suivis clients</span>
            <span><Check size={16} /> Moins d’erreurs</span>
          </div>
          <a className="button ai-button" href="mailto:velracommunication@gmail.com">
            Explorer une automatisation
          </a>
        </div>

        <div className="automation-stage">
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
          <p className="automation-caption"><span>24/7</span> Simple. Visible. Automatique.</p>
        </div>
      </section>

      <section className="contact page-width" id="contact">
        <div className="contact-topline">
          <span>Votre prochain projet</span>
          <span>Gatineau · Ottawa · À distance</span>
        </div>
        <div className="contact-main">
          <h2>Une bonne idée mérite<br /><span>un vrai mouvement.</span></h2>
          <div>
            <p>Un projet en tête? Parlons-en.</p>
            <div className="contact-actions">
              <a className="button light-button" href="mailto:velracommunication@gmail.com">
                velracommunication@gmail.com
              </a>
              <a className="button phone-button" href="tel:+15145704038">
                514 570-4038
              </a>
            </div>
          </div>
        </div>
        <span className="contact-word" aria-hidden="true">velra.</span>
      </section>

      <footer className="footer page-width">
        <div className="brand">velra<span>.</span></div>
        <p>Création · stratégie · automatisation IA</p>
        <span>Gatineau / Ottawa · © 2026</span>
      </footer>
    </main>
  );
}
