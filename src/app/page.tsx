"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#ablauf", label: "Ablauf" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: "Zählerablesung",
      description: "Erfassung von Verbrauchsdaten durch geschulte Teams mit verlässlicher Terminplanung und digitaler Datenübergabe.",
      features: ["Wasser, Wärme, Strom", "Planbare Durchführung", "Digitale Datenübergabe"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Rauchwarnmelder-Service",
      description: "Inspektion, Austausch und Dokumentation durch erfahrene Fachkräfte für Ihre Sicherheit im Bestand.",
      features: ["Regelmäßige Inspektion", "Austausch bei Bedarf", "Klare Protokolle"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.146.38-6.22L1.68 7.62l6.238-.264L11.42 1.5l2.734 5.856 6.238.264-4.356 4.476.38 6.22-5.0-3.146z" />
        </svg>
      ),
      title: "Gerätemontage",
      description: "Montage, Austausch und Inbetriebnahme technischer Geräte durch passende Spezialisten aus unserem Netzwerk.",
      features: ["Sorgfältige Installation", "Terminkoordination", "Funktionstests"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Dokumentation",
      description: "Übersichtliche Nachweise für Ihre Verwaltung und Eigentümer – digital, strukturiert und jederzeit abrufbar.",
      features: ["Digitale Protokolle", "Strukturierte Belege", "Sichere Archivierung"],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      ),
      title: "Feuerlöscher-Wartung",
      description: "Prüfung, Wartung und Instandsetzung von Feuerlöschern nach gesetzlichen Vorgaben und Sicherheitsstandards.",
      features: ["Gesetzliche Prüfung", "Sofortiger Austausch", "Nachweis-dokumentation"],
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.382-2.772a9.094 9.094 0 01-3.741.479 3 3 0 004.681 2.72m-.94-3.198l-.001-.031c0-.225.012-.447.037-.666A11.944 11.944 0 0112 3c2.17 0 4.207.576 5.963 1.584A6.062 6.062 0 0118 5.281m-12 0a5.971 5.971 0 00.941 3.197m0 0A5.995 5.995 0 0012 12.75" />
        </svg>
      ),
      title: "Starkes Service-Netzwerk",
      description: "Eigene geschulte Servicekräfte plus ein belastbares Netzwerk aus Fach- und Montagepartnern.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      title: "Erfahrene Monteure",
      description: "Routinierte Teams, die technische Abläufe kennen und Arbeiten sauber umsetzen.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Spezialisten je Gewerk",
      description: "Ob Ablesung, Montage oder Geräteservice – die richtigen Fachkräfte für jedes Gewerk.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Reibungslose Koordination",
      description: "Ein Ansprechpartner, klare Abstimmung, vollständige Umsetzung.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Kontaktieren Sie uns per Telefon, E-Mail oder Formular. Ein fester Ansprechpartner nimmt Ihren Bedarf auf.",
    },
    {
      number: "02",
      title: "Termin & Durchführung",
      description: "Wir koordinieren alle Termine und setzen die Arbeiten mit eigenen Kräften und passenden Spezialisten um.",
    },
    {
      number: "03",
      title: "Dokumentation & Abschluss",
      description: "Sie erhalten alle Protokolle und Nachweise digital – gebündelt, übersichtlich und jederzeit abrufbar.",
    },
  ];

  const stats = [
    { value: "15+", label: "Jahre Erfahrung" },
    { value: "50+", label: "Partner im Netzwerk" },
    { value: "1.000+", label: "Betreute Objekte" },
    { value: "98%", label: "Zufriedenheit" },
  ];

  const targetGroups = [
    "Hausverwaltungen",
    "Wohnungseigentümergemeinschaften",
    "Wohnungsbaugesellschaften",
    "Gewerbeimmobilien",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                scrolled ? "bg-primary" : "bg-white/20"
              }`}>
                <span className={`text-xl font-bold transition-colors ${
                  scrolled ? "text-white" : "text-white"
                }`}>M</span>
              </div>
              <span className={`text-lg font-semibold transition-colors ${
                scrolled ? "text-dark" : "text-white"
              }`}>
                Marcev Services
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    scrolled ? "text-dark" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-white text-dark hover:bg-white/90"
                }`}
              >
                Beratung anfragen
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 w-full transition-all ${
                  scrolled ? "bg-dark" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-full transition-all ${
                  scrolled ? "bg-dark" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full transition-all ${
                  scrolled ? "bg-dark" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-in">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-dark font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="block w-full text-center px-5 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beratung anfragen
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-deep via-dark to-primary-dark">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" style={{ animation: "pulse-slow 8s ease-in-out infinite" }} />
          </div>
          {/* Geometric pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <div className="w-2 h-2 bg-primary-light rounded-full" />
                <span className="text-white/80 text-sm font-medium">Technische Gebäudebetreuung</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ein Partner.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                  Alle Gewerke.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
                Eigene Servicekräfte und ein belastbares Partnernetzwerk setzen Ablesung, Rauchwarnmelder und Geräteservice zuverlässig um. Seit vielen Jahren im Einsatz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold text-center transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                >
                  Beratung anfragen
                </a>
                <a
                  href="#leistungen"
                  className="px-8 py-4 border border-white/20 hover:border-white/40 text-white rounded-full font-semibold text-center transition-all hover:bg-white/5"
                >
                  Leistungen entdecken
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-3">
                    {services.slice(0, 2).map((service, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all group cursor-default"
                      >
                        <div className="text-white/60 group-hover:text-primary-light transition-colors mb-3">
                          {service.icon}
                        </div>
                        <h3 className="text-white font-semibold text-sm">{service.title}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {services.slice(2, 5).map((service, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/15 transition-all group cursor-default text-center"
                      >
                        <div className="text-white/60 group-hover:text-primary-light transition-colors mb-2 flex justify-center">
                          {service.icon}
                        </div>
                        <h3 className="text-white font-semibold text-xs">{service.title}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/60 text-sm">Zufriedene Kunden</div>
                        <div className="text-2xl font-bold text-white">500+</div>
                      </div>
                      <div className="h-12 w-px bg-white/10" />
                      <div>
                        <div className="text-white/60 text-sm">Objekte betreut</div>
                        <div className="text-2xl font-bold text-white">1.000+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Unsere Leistungen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
              Technische Betreuung aus einer Hand
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Ein eingespieltes Netzwerk, klare Abläufe und passende Spezialisten für jede Aufgabe in Ihrer Immobilienverwaltung.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`animate-on-scroll delay-${(i + 1) * 100} group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100`}
              >
                <div className="w-14 h-14 bg-surface-warm rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="animate-on-scroll text-center">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Benefits Section */}
      <section id="ueber-uns" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Warum Marcev Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
                Erfahrung, die im Alltag funktioniert
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Wir sind Ihr zentraler Ansprechpartner für alle technischen Aufgaben rund um Ihre Immobilie. Mit eigenen geschulten Servicekräften und einem etablierten Netzwerk aus Fachpartnern stellen wir sicher, dass jede Aufgabe von den richtigen Spezialisten erledigt wird.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {targetGroups.map((group, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-surface rounded-xl">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-dark">{group}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
                <div className="relative bg-surface rounded-3xl p-8 space-y-6">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-surface-warm rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-dark mb-1">{benefit.title}</h3>
                        <p className="text-sm text-text-secondary">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="ablauf" className="py-24 bg-surface-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              So funktioniert&apos;s
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
              Drei Schritte zur koordinierten Gebäudebetreuung
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {steps.map((step, i) => (
              <div
                key={i}
                className={`animate-on-scroll delay-${(i + 1) * 150} relative text-center`}
              >
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/25">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-dark-deep" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit für eine zuverlässige
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                Gebäudebetreuung?
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Gespräch. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="px-8 py-4 bg-white text-dark hover:bg-gray-100 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Jetzt Anfrage senden
              </a>
              <a
                href="tel:017641447322"
                className="px-8 py-4 border border-white/30 text-white hover:border-white/60 rounded-full font-semibold transition-all hover:bg-white/5"
              >
                0176 41447322
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Kontakt
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                Jetzt unverbindlich anfragen
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-10">
                Nutzen Sie das Kontaktformular oder erreichen Sie uns direkt per Telefon oder E-Mail. Wir melden uns innerhalb von 24 Stunden zurück.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-surface rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Telefon</div>
                    <a href="tel:017641447322" className="text-lg font-semibold text-dark hover:text-primary transition-colors">
                      0176 41447322
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface rounded-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">E-Mail</div>
                    <a href="mailto:kontakt@marcev.de" className="text-lg font-semibold text-dark hover:text-primary transition-colors">
                      kontakt@marcev.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll delay-200">
              <form className="bg-surface rounded-2xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Max Mustermann"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Ihre Hausverwaltung"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="mail@beispiel.de"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+49 123 456789"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Beschreiben Sie Ihren Bedarf..."
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-deep py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <span className="text-lg font-semibold text-white">Marcev Services</span>
              </div>
              <p className="text-white/60 leading-relaxed max-w-md">
                Technische Gebäudebetreuung für Hausverwaltungen. Ein Ansprechpartner für alle Gewerke – zuverlässig, erfahren und koordiniert.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a href="tel:017641447322" className="hover:text-white transition-colors">
                    0176 41447322
                  </a>
                </li>
                <li>
                  <a href="mailto:kontakt@marcev.de" className="hover:text-white transition-colors">
                    kontakt@marcev.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Marcev Services. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#impressum" className="text-white/40 hover:text-white transition-colors">
                Unternehmensinfo
              </a>
              <a href="#datenschutz" className="text-white/40 hover:text-white transition-colors">
                Datennutzung
              </a>
              <a href="#agb" className="text-white/40 hover:text-white transition-colors">
                Bedingungen
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
