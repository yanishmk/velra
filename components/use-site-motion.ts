"use client";

import { useEffect } from "react";

/**
 * Animations du site Velra :
 * - apparition au scroll des éléments [data-reveal]
 * - barre de progression de lecture + ombre de la nav
 * - mascotte qui s'incline vers la souris
 * - boutons magnétiques [data-magnetic]
 * - léger parallaxe du grand mot « velra. »
 * Tout est coupé si l'utilisateur préfère réduire les animations.
 */
export function useSiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // Sécurité : si ce script ne s'exécute jamais, le layout retire « motion-ready » après 4 s et tout reste visible.
    root.classList.add("motion-ready", "motion-live");
    cleanups.push(() => root.classList.remove("motion-ready", "motion-live"));

    /* Apparition au scroll */
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
      );
      revealEls.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    /* Le système IA ne s'anime que lorsqu'il est à l'écran (économise la batterie) */
    const automation = document.querySelector<HTMLElement>(".automation-card");
    if (automation && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(([entry]) => {
        automation.classList.toggle("is-running", entry.isIntersecting);
      }, { threshold: 0.25 });
      io.observe(automation);
      cleanups.push(() => io.disconnect());
    }

    /* Progression du scroll, nav, parallaxe */
    const contactWord = document.querySelector<HTMLElement>(".contact-word");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        root.style.setProperty("--scroll-progress", progress.toFixed(4));
        root.classList.toggle("is-scrolled", window.scrollY > 12);
        if (contactWord && !reduce) {
          const rect = contactWord.parentElement!.getBoundingClientRect();
          const visible = 1 - rect.top / window.innerHeight; // 0 → entre dans l'écran
          contactWord.style.setProperty("--drift", `${Math.max(0, Math.min(1.4, visible)) * -90}px`);
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    });

    if (reduce) return () => cleanups.forEach((fn) => fn());

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    /* Mascotte qui suit la souris */
    const stage = document.querySelector<HTMLElement>(".mascot-stage");
    if (stage && finePointer) {
      const onMove = (e: PointerEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        stage.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
        stage.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
        stage.style.setProperty("--shift-x", `${(x * 14).toFixed(1)}px`);
      };
      window.addEventListener("pointermove", onMove);
      cleanups.push(() => window.removeEventListener("pointermove", onMove));
    }

    /* Boutons magnétiques */
    if (finePointer) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          btn.style.setProperty("--mx", `${((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1)}px`);
          btn.style.setProperty("--my", `${((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1)}px`);
        };
        const leave = () => {
          btn.style.setProperty("--mx", "0px");
          btn.style.setProperty("--my", "0px");
        };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);
}
