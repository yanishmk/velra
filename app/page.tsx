"use client";

import Image from "next/image";
import {
  Bot,
  Camera,
  Check,
  Mail,
  Menu,
  MessageCircle,
  Network,
  PenTool,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Marque & direction créative",
    description:
      "Une identité nette, un ton reconnaissable et un système visuel simple à faire vivre.",
    details: ["Positionnement", "Identité visuelle", "Templates de marque"],
    icon: PenTool,
    className: "service-card service-wide",
  },
  {
    number: "02",
    title: "Réseaux sociaux",
    description:
      "Une présence régulière qui raconte quelque chose, au lieu de seulement remplir un calendrier.",
    details: ["Stratégie éditoriale", "Création de contenu", "Gestion & suivi"],
    icon: Camera,
    className: "service-card",
  },
  {
    number: "03",
    title: "Publicité digitale",
    description:
      "Des campagnes conçues pour capter l’attention, apprendre vite et convertir mieux.",
    details: ["Meta Ads", "Créatifs publicitaires", "Optimisation"],
    icon: Target,
    className: "service-card",
  },
  {
    number: "04",
    title: "Automatisation IA",
    description:
      "Des systèmes utiles qui répondent, organisent et relancent pendant que votre équipe avance.",
    details: ["Workflows", "Assistants IA", "Suivis automatisés"],
    icon: Bot,
    className: "service-card service-wide service-dark",
  },
];

const goals = [
  {
    label: "Se lancer",
    eyebrow: "Créer une base solide",
    title: "Passer d’une idée à une marque prête à être vue.",
    copy: "On clarifie votre positionnement, construit votre univers et prépare les premiers contenus pour lancer sans improviser.",
    deliverables: ["Plateforme de marque", "Direction visuelle", "Kit de lancement"],
  },
  {
    label: "Se démarquer",
    eyebrow: "Gagner en impact",
    title: "Transformer une présence correcte en marque mémorable.",
    copy: "On resserre le message, élève la création et relie le contenu à une stratégie d’acquisition mesurable.",
    deliverables: ["Audit & repositionnement", "Système de contenu", "Campagnes paid"],
  },
  {
    label: "Se libérer",
    eyebrow: "Automatiser l’utile",
    title: "Retirer les tâches répétitives du quotidien.",
    copy: "On cartographie les frictions, connecte vos outils et construit des automatisations compréhensibles par votre équipe.",
    deliverables: ["Cartographie des processus", "Workflows IA", "Documentation claire"],
  },
];

const process = [
  {
    step: "01",
    title: "Comprendre",
    copy: "On commence par le contexte, les objectifs et les vraies contraintes de votre équipe.",
  },
  {
    step: "02",
    title: "Construire",
    copy: "On transforme la stratégie en identité, contenus, campagnes ou systèmes concrets.",
  },
  {
    step: "03",
    title: "Faire évoluer",
    copy: "On mesure, ajuste et documente pour que ce qui fonctionne continue de progresser.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGoal, setActiveGoal] = useState(0);
  const goal = goals[activeGoal];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell" id="top">
      <header className="nav-shell">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Velra, retour en haut">
          velra<span>.</span>
        </button>

        <nav
          className={menuOpen ? "nav-links nav-links-open" : "nav-links"}
          id="main-navigation"
          aria-label="Navigation principale"
        >
          <button onClick={() => scrollTo("expertises")}>Expertises</button>
          <button onClick={() => scrollTo("approche")}>Approche</button>
          <button onClick={() => scrollTo("ia")}>Automatisation IA</button>
        </nav>

        <button className="nav-contact" onClick={() => scrollTo("contact")}>
          Parler de votre projet
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero section-width">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Agence créative + technologie · Gatineau / Ottawa
          </div>
          <h1>
            Des marques
            <br />
            <em>impossibles</em>
            <br />
            à ignorer.
          </h1>
          <p>
            Velra réunit direction créative, contenu, acquisition et automatisation IA pour faire avancer votre marque comme un seul système.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("contact")}>
              Démarrer un projet
            </button>
            <button className="button button-secondary" onClick={() => scrollTo("expertises")}>
              Voir nos expertises
            </button>
          </div>
          <div className="hero-proof">
            <div>
              <strong>Une vision</strong>
              <span>de la stratégie à l’exécution</span>
            </div>
            <div>
              <strong>Un partenaire</strong>
              <span>créatif, proche et réactif</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-image-frame">
            <Image
              src="/images/velra-hero-final.png"
              alt="Mascotte Velra dans un studio violet"
              fill
              priority
              sizes="(max-width: 820px) 92vw, 44vw"
              className="hero-image"
            />
          </div>
          <div className="hero-art-label">
            <span>Studio Velra</span>
            <strong>Création · stratégie · systèmes</strong>
          </div>
          <div className="hero-art-badge">
            <Sparkles size={16} />
            <span>Votre idée prend forme</span>
          </div>
        </div>
      </section>

      <section className="capability-strip" aria-label="Expertises principales">
        <div className="capability-track">
          {["Branding", "Réseaux sociaux", "Création de contenu", "Ads", "Automatisation IA", "Stratégie digitale"].map((item) => (
            <span key={item}>{item}<i>✦</i></span>
          ))}
          {["Branding", "Réseaux sociaux", "Création de contenu", "Ads", "Automatisation IA", "Stratégie digitale"].map((item) => (
            <span key={`${item}-duplicate`} aria-hidden="true">{item}<i>✦</i></span>
          ))}
        </div>
      </section>

      <section className="services section-width" id="expertises">
        <div className="section-intro">
          <div>
            <span className="section-index">01 / Expertises</span>
            <h2>Une seule équipe.<br /><em>Quatre leviers.</em></h2>
          </div>
          <p>
            Le message, l’image, la diffusion et les systèmes travaillent ensemble. C’est là que la marque devient plus forte — et le quotidien plus simple.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className={service.className} key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <div className="service-icon"><Icon size={22} strokeWidth={1.7} /></div>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul>
                  {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="goals-section" id="approche">
        <div className="goals-inner section-width">
          <div className="goals-heading">
            <span className="section-index light">02 / Votre objectif</span>
            <h2>Pas de formule copiée-collée.</h2>
            <p>On part de l’endroit où vous êtes, puis on construit le prochain mouvement utile.</p>
          </div>

          <div className="goals-workspace">
            <div className="goal-tabs" role="tablist" aria-label="Choisir votre objectif">
              {goals.map((item, index) => (
                <button
                  key={item.label}
                  className={activeGoal === index ? "goal-tab active" : "goal-tab"}
                  onClick={() => setActiveGoal(index)}
                  aria-pressed={activeGoal === index}
                >
                  <span>0{index + 1}</span>{item.label}
                </button>
              ))}
            </div>

            <article className="goal-panel" aria-live="polite">
              <span className="goal-eyebrow">{goal.eyebrow}</span>
              <h3>{goal.title}</h3>
              <p>{goal.copy}</p>
              <div className="goal-deliverables">
                {goal.deliverables.map((item) => (
                  <div key={item}><Check size={15} />{item}</div>
                ))}
              </div>
            </article>

            <aside className="goal-principles">
              <span>Ce qu’on protège</span>
              <div><strong>Clarté</strong><i /></div>
              <div><strong>Cohérence</strong><i /></div>
              <div><strong>Vitesse</strong><i /></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="automation section-width" id="ia">
        <div className="automation-copy">
          <span className="section-index">03 / Automatisation IA</span>
          <h2>L’IA ne remplace pas votre équipe.</h2>
          <h2 className="accent-heading">Elle lui rend du temps.</h2>
          <p>
            On automatise les passages répétitifs entre vos outils, vos prospects et votre équipe — sans transformer votre entreprise en usine incompréhensible.
          </p>
          <button className="button button-primary" onClick={() => scrollTo("contact")}>
            Explorer une automatisation
          </button>
        </div>

        <div className="automation-board">
          <div className="board-header">
            <div><span className="board-dot" /> Workflow actif</div>
            <small>Velra OS</small>
          </div>
          <div className="workflow">
            <div className="workflow-node">
              <Mail size={19} />
              <span><small>Entrée</small><strong>Nouveau lead</strong></span>
            </div>
            <div className="workflow-line"><i /></div>
            <div className="workflow-node highlighted">
              <Bot size={19} />
              <span><small>Analyse</small><strong>Qualification IA</strong></span>
            </div>
            <div className="workflow-line"><i /></div>
            <div className="workflow-node">
              <MessageCircle size={19} />
              <span><small>Action</small><strong>Réponse adaptée</strong></span>
            </div>
            <div className="workflow-line"><i /></div>
            <div className="workflow-node complete">
              <Check size={19} />
              <span><small>Suivi</small><strong>Tâche créée</strong></span>
            </div>
          </div>
          <div className="board-footer">
            <div><span>Temps humain</span><strong>réservé aux décisions</strong></div>
            <div className="pulse-ring"><Bot size={24} /></div>
          </div>
        </div>
      </section>

      <section className="process section-width">
        <div className="section-intro process-intro">
          <div>
            <span className="section-index">04 / La méthode</span>
            <h2>Clair du premier échange<br /><em>jusqu’à la suite.</em></h2>
          </div>
          <p>Des étapes lisibles, des décisions expliquées et des livrables faits pour être utilisés — pas rangés dans un dossier.</p>
        </div>
        <div className="process-grid">
          {process.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <div className="process-rule" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-width" id="contact">
        <div className="contact-glow" />
        <div className="contact-copy">
          <span>Votre prochain mouvement</span>
          <h2>On commence par<br />une conversation.</h2>
        </div>
        <div className="contact-action">
          <p>Parlez-nous de ce qui doit devenir plus clair, plus visible ou plus simple.</p>
          <a className="button button-light" href="mailto:bonjour@velra.agency">
            bonjour@velra.agency
          </a>
        </div>
      </section>

      <footer className="footer section-width">
        <div className="footer-brand">
          <div className="brand">velra<span>.</span></div>
          <p>Création · stratégie · impact</p>
        </div>
        <div className="footer-location">
          <span>Gatineau / Ottawa</span>
          <span>Canada</span>
        </div>
        <div className="footer-links">
          <a href="mailto:bonjour@velra.agency"><Mail size={17} /> Courriel</a>
          <span><Camera size={17} /> Instagram</span>
          <span><Network size={17} /> LinkedIn</span>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Velra Agency</span>
          <button onClick={() => scrollTo("top")}>Retour en haut</button>
        </div>
      </footer>
    </main>
  );
}
