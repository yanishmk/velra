"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Camera,
  Check,
  ChevronRight,
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
    icon: PenTool,
    title: "Identité & contenu",
    copy: "Une direction claire, des contenus qui se reconnaissent au premier regard.",
    tag: "Création",
  },
  {
    number: "02",
    icon: Camera,
    title: "Réseaux sociaux",
    copy: "De la stratégie au calendrier éditorial, votre présence reste régulière et vivante.",
    tag: "Communauté",
  },
  {
    number: "03",
    icon: Target,
    title: "Ads & acquisition",
    copy: "Des campagnes ciblées, des messages précis et des décisions guidées par les données.",
    tag: "Performance",
  },
  {
    number: "04",
    icon: Bot,
    title: "Automatisation IA",
    copy: "Les tâches répétitives s’exécutent en arrière-plan. Votre équipe se concentre sur l’essentiel.",
    tag: "Efficacité",
  },
];

const steps = [
  {
    title: "On clarifie",
    copy: "Vos objectifs, votre audience, votre différence. On pose la bonne question avant de produire.",
  },
  {
    title: "On construit",
    copy: "Un univers cohérent et des systèmes simples qui rendent chaque prise de parole plus facile.",
  },
  {
    title: "On accélère",
    copy: "On mesure, on automatise et on améliore ce qui fonctionne déjà pour créer un vrai momentum.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(3);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <button className="brand" onClick={() => scrollTo("top")} aria-label="Velra, retour en haut">
          velra<span>.</span>
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Navigation principale">
          <button onClick={() => scrollTo("services")}>Expertises</button>
          <button onClick={() => scrollTo("methode")}>Méthode</button>
          <button onClick={() => scrollTo("automatisation")}>IA & automatisation</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button className="topbar-cta" onClick={() => scrollTo("contact")}>
          Parlons-nous <ArrowUpRight size={15} strokeWidth={2.3} />
        </button>

        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Ouvrir le menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Agence créative · Gatineau / Ottawa</div>
          <h1>
            Votre marque,
            <br />
            <span>plus claire.</span>
            <br />
            <strong>plus libre.</strong>
          </h1>
          <p className="hero-lede">
            Velra transforme les idées ambitieuses en marques visibles — et les tâches répétitives en temps retrouvé.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo("contact")}>
              Construire quelque chose <ArrowUpRight size={17} />
            </button>
            <button className="text-button" onClick={() => scrollTo("services")}>
              Découvrir nos expertises <ChevronRight size={16} />
            </button>
          </div>
          <div className="hero-signals">
            <div><span>✦</span><p>Créatif par nature</p></div>
            <div><span>⌁</span><p>Stratégique par réflexe</p></div>
            <div><span>↗</span><p>Orienté résultats</p></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Mascotte Velra, image de marque">
          <div className="visual-grid" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-image-wrap">
            <Image src="/images/mascot-hero.png" alt="Mascotte Velra portant un hoodie violet" fill priority sizes="(max-width: 900px) 92vw, 48vw" className="hero-image" />
          </div>
          <div className="floating-note note-top"><Sparkles size={15} /> Idées → impact</div>
          <div className="floating-note note-bottom"><span className="live-dot" /> Toujours en mouvement</div>
          <div className="hero-stamp"><span>V</span><small>Velra<br />studio</small></div>
        </div>
      </section>

      <section className="proof-bar section-pad" aria-label="Indicateurs Velra">
        <p className="proof-intro">Ce qu’on aime faire<br /><span>prendre de l’avance.</span></p>
        <div className="proof-stat"><strong>360°</strong><span>de la stratégie<br />à l’exécution</span></div>
        <div className="proof-stat"><strong>24/7</strong><span>des systèmes qui<br />travaillent pour vous</span></div>
        <div className="proof-stat"><strong>1</strong><span>partenaire créatif<br />à vos côtés</span></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot purple" /> Nos expertises</div>
            <h2>Tout ce qu’il faut pour<br /><em>rester remarquable.</em></h2>
          </div>
          <p>Une équipe compacte, une vision large. On relie la créativité à ce qui fait vraiment avancer votre entreprise.</p>
        </div>

        <div className="services-layout">
          <div className="service-list">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button key={service.number} className={activeService === index ? "service-row active" : "service-row"} onClick={() => setActiveService(index)}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon size={20} strokeWidth={1.8} /></span>
                  <span className="service-name">{service.title}</span>
                  <ChevronRight className="service-arrow" size={19} />
                </button>
              );
            })}
          </div>

          <div className="service-detail">
            <div className="detail-topline"><span>0{activeService + 1} / 04</span><span>{services[activeService].tag}</span></div>
            <div className="detail-icon">{(() => { const Icon = services[activeService].icon; return <Icon size={28} strokeWidth={1.6} />; })()}</div>
            <h3>{services[activeService].title}</h3>
            <p>{services[activeService].copy}</p>
            <div className="detail-footer"><span>Ensemble, on va plus loin.</span><ArrowUpRight size={18} /></div>
          </div>
        </div>
      </section>

      <section className="automation-section section-pad" id="automatisation">
        <div className="automation-copy">
          <div className="eyebrow light"><span className="eyebrow-dot" /> Velra intelligence</div>
          <h2>L’IA qui travaille<br /><span>pour vous.</span></h2>
          <p>Moins de copier-coller. Moins de relances oubliées. Plus de temps pour décider, créer et servir vos clients.</p>
          <div className="automation-points">
            <div><Check size={15} /><span>Réponses et suivis automatisés</span></div>
            <div><Check size={15} /><span>Workflows adaptés à votre réalité</span></div>
            <div><Check size={15} /><span>Des données qui restent humaines</span></div>
          </div>
          <button className="button button-lilac" onClick={() => scrollTo("contact")}>Imaginer mon système <ArrowUpRight size={17} /></button>
        </div>
        <div className="automation-visual">
          <div className="automation-glow" />
          <div className="automation-card card-back"><Image src="/images/mascot-orders.png" alt="Mascotte Velra gérant une commande" fill sizes="300px" /></div>
          <div className="automation-card card-front"><Image src="/images/mascot-email.png" alt="Mascotte Velra automatisant des emails" fill sizes="300px" /></div>
          <div className="workflow-chip chip-one"><Mail size={16} /><span><b>Nouveau lead</b><small>traité automatiquement</small></span><Check size={15} /></div>
          <div className="workflow-chip chip-two"><Bot size={16} /><span><b>Assistant Velra</b><small>répond en votre nom</small></span><span className="chip-pulse" /></div>
        </div>
      </section>

      <section className="method-section section-pad" id="methode">
        <div className="section-heading compact">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot purple" /> Notre manière de faire</div>
            <h2>Simple à comprendre.<br /><em>Difficile à oublier.</em></h2>
          </div>
          <p>On ne vous vend pas de la complexité. On vous donne un système qui fait du sens, puis on le rend mémorable.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <div className="step-number">0{index + 1}</div>
              <div className="step-line" />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-section section-pad">
        <div className="statement-mark">V<span>.</span></div>
        <div>
          <p className="statement-kicker">Votre prochain chapitre commence ici.</p>
          <h2>On ne crée pas juste<br /><span>du bruit.</span> On crée<br />de l’élan.</h2>
        </div>
        <button className="circle-cta" onClick={() => scrollTo("contact")} aria-label="Nous contacter"><ArrowUpRight size={26} /></button>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-card">
          <div className="contact-main">
            <div className="eyebrow"><span className="eyebrow-dot purple" /> Parlons de la suite</div>
            <h2>Une idée en tête ?<br /><em>Faisons-la exister.</em></h2>
            <p>Décrivez-nous ce que vous voulez rendre plus clair, plus visible ou plus automatique. On vous répond avec des idées concrètes.</p>
            <a className="button button-primary" href="mailto:bonjour@velra.agency">bonjour@velra.agency <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-side">
            <div className="contact-orb"><MessageCircle size={28} strokeWidth={1.4} /></div>
            <span>Gatineau · Ottawa</span>
            <span>Canada</span>
            <div className="social-links"><a href="#contact" aria-label="Instagram"><Camera size={18} /></a><a href="#contact" aria-label="LinkedIn"><Network size={18} /></a><a href="mailto:bonjour@velra.agency" aria-label="Courriel"><Mail size={18} /></a></div>
          </div>
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="brand footer-brand">velra<span>.</span></div>
        <p>Des idées qui font parler<br />de votre marque.</p>
        <div className="footer-meta"><span>© 2025 Velra agency</span><span>Création · Stratégie · Impact</span></div>
      </footer>
    </main>
  );
}
