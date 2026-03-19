import { useState, useEffect } from "react";
import kenny from "./assets/kenny.png";
import setup from "./assets/setup.png";
import proj1 from "./assets/proj1.png";
import proj2a from "./assets/proj2a.png";
import proj3 from "./assets/proj3.png";
import proj5 from "./assets/proj5.png";
import proj7 from "./assets/proj7.png";
import proj8 from "./assets/proj8.png";
import proj9 from "./assets/proj9.png";
import proj10 from "./assets/proj10.png";
import projBotsconia from "./assets/page.png";
 
const STACK = [
  { name: "n8n", type: "Automatización" },
  { name: "Go High Level", type: "CRM / Flujos" },
  { name: "Retell AI", type: "Agentes de voz" },
  { name: "Vapi", type: "Agentes de voz" },
  { name: "Chatwoot", type: "CRM / Chat" },
  { name: "React", type: "Frontend" },
  { name: "JavaScript", type: "Frontend / Node" },
  { name: "Laravel / PHP", type: "Backend" },
  { name: "Python", type: "Scraping / Data" },
  { name: "Docker", type: "DevOps" },
  { name: "MySQL / MongoDB", type: "Bases de datos" },
  { name: "Git / GitHub", type: "Control de versiones" },
];
 
const PROJECTS = [
  {
    title: "Integración Retell AI + Go High Level",
    badge: "AI + CRM",
    badgeColor: "#f5a623",
    desc: "Flujo post-llamada conectado a una función custom de Retell. Crea o actualiza contactos en GHL con variables dinámicas, aplica etiquetas automáticas y adjunta el resumen y recording de la llamada en la conversación del cliente.",
    tags: ["Retell AI", "Go High Level", "n8n", "Webhook"],
    img: proj1,
  },
  {
    title: "Sistema omnicanal para restaurantes",
    badge: "Omnichannel",
    badgeColor: "#4a9eff",
    desc: "Arquitectura modular de workflows para dos restaurantes españoles: chatbot principal en n8n + agente de llamadas en Vapi, ambos compartiendo los mismos módulos de reservación, cancelación, reagendamiento y disponibilidad.",
    tags: ["n8n", "Vapi", "WhatsApp API", "Last.app"],
    img: proj2a,
  },
  {
    title: "Generador automatizado de videos con IA",
    badge: "AI Content",
    badgeColor: "#f5a623",
    desc: "Pipeline que scrapea videos de referencia en Instagram vía Apify, los registra en Sheets como base anti-duplicados, los describe con IA, genera un prompt y produce el video final vía API. Contenido diario sin intervención humana.",
    tags: ["n8n", "Apify", "OpenAI", "Google Sheets"],
    img: proj3,
  },
  {
    title: "Generador de posts con IA para redes",
    badge: "AI Content",
    badgeColor: "#f5a623",
    desc: "Flujo que extrae posts de Instagram, aplica un filtro IA para clasificar entre noticias y publicidad, genera prompts específicos por tipo, transforma el diseño con nueva marca usando Banana Pro y publica automáticamente con caption generado.",
    tags: ["n8n", "OpenAI", "Banana Pro", "Instagram API"],
    img: proj5,
  },
  {
    title: "Extracción masiva de datos con visión IA",
    badge: "Data + AI",
    badgeColor: "#4a9eff",
    desc: "Procesamiento de +300 imágenes con datos de clientes almacenadas en Google Drive. Extracción automática de información con visión IA, mapeo de campos y volcado estructurado en Google Sheets, con filtro anti-duplicados por imagen.",
    tags: ["n8n", "Google Drive", "OpenAI Vision", "Google Sheets"],
    img: proj7,
  },
  {
    title: "Campañas de llamadas automatizadas",
    badge: "Automation",
    badgeColor: "#4a9eff",
    desc: "Activación por Schedule Trigger en horarios específicos: lee contactos desde Sheets, inyecta variables dinámicas en Retell, ejecuta las llamadas una por una, marca el estado en el sheet al finalizar y se desactiva automáticamente notificando vía GHL.",
    tags: ["n8n", "Retell AI", "Google Sheets", "Go High Level"],
    img: proj8,
  },
  {
    title: "Blast calls — 1,500 llamadas en 45 min",
    badge: "Scale",
    badgeColor: "#f5a623",
    desc: "Ejecución manual que lanza hasta 1,500 llamadas en una sola corrida vía batch call a la API de Retell. Lee y filtra contactos desde Sheets, formatea las variables y despacha todo en paralelo en aproximadamente 45 minutos.",
    tags: ["n8n", "Retell AI", "Google Sheets", "Batch API"],
    img: proj9,
  },
  {
    title: "Chatbot con agente IA y memoria persistente",
    badge: "AI Agent",
    badgeColor: "#f5a623",
    desc: "Agente conversacional con memoria persistente en PostgreSQL, capaz de detectar intención del cliente, notificar asesores humanos cuando es necesario y enviar media. Arquitectura multi-entrada para chat y webhook simultáneos.",
    tags: ["n8n", "OpenAI", "PostgreSQL", "Webhook"],
    img: proj10,
  },
  {
    title: "Botsconia — Landing page",
    badge: "Web",
    badgeColor: "#4a9eff",
    desc: "Landing page para empresa de automatizaciones. Diseño moderno orientado a conversión, con integración de formularios y llamadas a la acción claras.",
    tags: ["JavaScript", "HTML/CSS", "GitHub Pages"],
    img: projBotsconia,
  },
];
 
const EXPERIENCE = [
  {
    role: "Especialista en Automatizaciones",
    company: "Camia",
    date: "Sep 2025 – Mar 2026",
    type: "Remoto",
    desc: "Desarrollo de automatizaciones con n8n y Go High Level para clientes de múltiples sectores. Creación de agentes telefónicos con IA (Retell AI), integración de APIs externas, scraping de redes sociales y generación de contenido multimedia automatizado.",
    tags: ["n8n", "Go High Level", "Retell AI", "APIs"],
  },
  {
    role: "Desarrollador de Automatizaciones",
    company: "Entropia",
    date: "Abr 2025 – Sep 2025",
    type: "Remoto",
    desc: "Diseño e implementación de flujos de trabajo en n8n para nichos de ventas, información, servicio al cliente y reservas. Integración con APIs de terceros y gestión de comunicaciones mediante Chatwoot CRM.",
    tags: ["n8n", "Vapi", "Chatwoot", "WhatsApp API"],
  },
  {
    role: "Desarrollador Web",
    company: "Ing. Diego Maigualca",
    date: "Abr 2024 – Abr 2025",
    type: "Latacunga",
    desc: "Desarrollo y mantenimiento de sitios web dinámicos y responsivos con HTML, CSS, JavaScript, PHP y MySQL. Implementación de soluciones personalizadas con WordPress y Elementor.",
    tags: ["HTML/CSS", "PHP", "WordPress", "MySQL"],
  },
];

const BG = "#080c14";
const ACCENT = "#4a9eff";
const SURFACE = "#0d1520";
const BORDER = "rgba(74,158,255,0.12)";
const MONO = "'Space Mono', monospace";
const SANS = "'DM Sans', sans-serif";


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: BG, color: "#e8eaf0", fontFamily: SANS, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

       {/* LIGHTBOX */}
        {activeImg && (
          <div onClick={() => setActiveImg(null)} style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: "2rem",
          }}>
            <img src={activeImg} style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 8, objectFit: "contain" }} />
          </div>
        )}

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1rem 3rem",
        background: scrolled ? "rgba(8,12,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${BORDER}` : "none",
        transition: "all 0.35s ease",
      }}>
        <div style={{ fontFamily: MONO, fontSize: 13, color: ACCENT, letterSpacing: "0.1em" }}>KP</div>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[["home","hero"],["about","about"],["resume","projects"],["contact","contact"]].map(([label, id]) => (
            <button key={label} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: 13, color: "rgba(255,255,255,0.5)",
              fontFamily: SANS, letterSpacing: "0.05em", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}
            >
              {label}
            </button>
          ))}
        </div>
        <a href="https://wa.me/593989162764" target="_blank" rel="noreferrer" style={{
          fontFamily: MONO, fontSize: 11, color: "rgba(255,255,255,0.3)",
          textDecoration: "none", transition: "color 0.2s",
          display: "flex", alignItems: "center", gap: 6,
        }}
          onMouseEnter={e => e.currentTarget.style.color = ACCENT}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </nav>

      {/* HERO */}
      <section id="hero" style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center", overflow: "hidden",
      }}>
        <img src={setup} alt="" style={{
          position: "absolute", inset: 0, width: "100%", height: "110%",
          objectFit: "cover", objectPosition: "center",
          filter: "grayscale(30%) brightness(0.3) saturate(0.5)",
          zIndex: 0,
        }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${BG} 40%, transparent 40%)`, zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BG} 5%, transparent 35%)`, zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${BG} 0%, transparent 18%)`, zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, padding: "0 4rem", maxWidth: 700 }}>
          <p style={{ fontFamily: MONO, fontSize: 11, color: ACCENT, letterSpacing: "0.25em", marginBottom: "1.75rem", textTransform: "uppercase" }}>
            Especialista en Automatizaciones
          </p>
          <h1 style={{ fontFamily: MONO, fontWeight: 700, fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 0.95, margin: "0 0 0.1em", color: "#d0d8e8" }}>
            KENNY
          </h1>
          <h1 style={{ fontFamily: MONO, fontWeight: 700, fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 0.95, margin: "0 0 1.5rem", color: "#ffffff" }}>
            PEDREROS
          </h1>
          <p style={{ fontFamily: MONO, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", marginBottom: "2.5rem" }}>
            Automation Developer
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            {["Resume", "Portfolio"].map((label) => (
              <button key={label} onClick={() => scrollTo(label === "Resume" ? "experience" : "projects")} style={{
                background: "transparent", color: "#e8eaf0",
                fontFamily: MONO, fontSize: 11, letterSpacing: "0.08em",
                padding: "0.65rem 1.5rem", borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#e8eaf0"; }}
              >
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1.5rem", marginTop: "3.5rem", alignItems: "center" }}>
          {[
            { href: "https://www.linkedin.com/in/kennypedreros-1b5919340", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
            { href: "https://github.com/KennyPedreros", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
            { href: "https://wa.me/593989162764", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
          ].map(({ href, icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" style={{
              color: "rgba(255,255,255,0.35)", textDecoration: "none",
              transition: "color 0.2s", display: "flex", alignItems: "center",
            }}
              onMouseEnter={e => e.currentTarget.style.color = ACCENT}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
            >{icon}</a>
          ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        position: "relative", minHeight: "85vh",
        display: "flex", alignItems: "center", overflow: "hidden",justifyContent: "center", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "65%", zIndex: 0 }}>
          <img src={kenny} alt="Kenny Pedreros" style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%",
            filter: "grayscale(100%) contrast(1.05) brightness(0.8)",
          }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${BG} 53%, transparent 75%)` }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: `linear-gradient(to top, ${BG}, transparent)` }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "15%", background: `linear-gradient(to bottom, ${BG}, transparent)` }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "5rem 4rem 5rem 1rem", maxWidth: 560, marginLeft: "-29%" }}>
          <h2 style={{ fontFamily: MONO, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "0.5rem", color: "#fff" }}>
            ABOUT
          </h2>
          <p style={{ fontFamily: MONO, fontSize: 11, color: ACCENT, marginBottom: "2rem", letterSpacing: "0.05em" }}>
            Kennypedreros10@gmail.com
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            Profesional con experiencia en automatización de procesos con n8n y Go High Level, y desarrollo web full stack. He construido agentes telefónicos con IA, flujos de trabajo para ventas, atención al cliente y reservas, integraciones con APIs externas y generación de contenido multimedia automatizado.
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.9 }}>
            En el área de desarrollo, trabajo con stacks modernos como React, Laravel y Spring Boot, construyendo desde aplicaciones web responsivas hasta sistemas backend robustos. Me adapto rápido a nuevos entornos, entrego con responsabilidad y disfruto convertir ideas complejas en soluciones de software concretas y bien ejecutadas.
          </p>
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: `1px solid ${BORDER}` }}>
            <p style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>
              Ecuador — Universidad ESPE
            </p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 3rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: ACCENT, letterSpacing: "0.2em", marginBottom: 8, textTransform: "uppercase" }}>Stack</p>
          <h2 style={{ fontFamily: MONO, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", fontWeight: 700, color: "#fff" }}>Herramientas que uso</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: 10 }}>
          {STACK.map((s) => (
            <div key={s.name} style={{
              background: SURFACE, border: `1px solid ${BORDER}`,
              borderRadius: 8, padding: "0.9rem 1rem",
              display: "flex", alignItems: "center", gap: 10,
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{
                width: 30, height: 30, borderRadius: 5, flexShrink: 0,
                background: `${ACCENT}18`, display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: MONO, fontSize: 8, fontWeight: 700, color: ACCENT,
              }}>
                {s.name.slice(0, 3).toUpperCase()}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#e8eaf0" }}>{s.name}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{s.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

            {/* PROJECTS */}
            <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 3rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: ACCENT, letterSpacing: "0.2em", marginBottom: 8, textTransform: "uppercase" }}>Portfolio</p>
          <h2 style={{ fontFamily: MONO, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", fontWeight: 700, color: "#fff" }}>Automatizaciones & builds</h2>
          <p style={{ color: "rgba(255,255,255,0.3)", marginTop: "0.5rem", fontSize: "0.85rem" }}>Flujos reales construidos para clientes y proyectos propios.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
          {PROJECTS.map((p) => (
            <div key={p.title} style={{
              background: SURFACE, border: `1px solid ${BORDER}`,
              borderRadius: 10, overflow: "hidden",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {/* IMAGE */}
              <div style={{ position: "relative", height: 180, overflow: "hidden", cursor: "zoom-in" }}
                onClick={() => setActiveImg(p.img)}
              >
                <img src={p.img} alt={p.title} style={{
                  width: "100%", height: "100%", objectFit: "cover", objectPosition: "top",
                  transition: "transform 0.4s ease",
                }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(13,21,32,0.9) 0%, transparent 60%)",
                }} />
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  fontFamily: MONO, fontSize: 9, padding: "3px 7px", borderRadius: 3,
                  border: `1px solid ${p.badgeColor}`, color: p.badgeColor,
                  background: "rgba(8,12,20,0.7)",
                }}>{p.badge}</div>
              </div>
 
              {/* CONTENT */}
              <div style={{ padding: "1.1rem 1.25rem" }}>
                <div style={{ fontFamily: MONO, fontSize: "0.82rem", marginBottom: "0.5rem", fontWeight: 700, color: "#fff" }}>{p.title}</div>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
 
              {/* TAGS */}
              <div style={{
                padding: "0.75rem 1.25rem", borderTop: `1px solid ${BORDER}`,
                display: "flex", flexWrap: "wrap", gap: 5,
              }}>
                {p.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: MONO, fontSize: 9, color: "rgba(255,255,255,0.25)",
                    background: `${ACCENT}0a`, borderRadius: 3, padding: "2px 6px",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* EXPERIENCE */}
      <section id="experience" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 3rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: ACCENT, letterSpacing: "0.2em", marginBottom: 8, textTransform: "uppercase" }}>Resume</p>
          <h2 style={{ fontFamily: MONO, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", fontWeight: 700, color: "#fff" }}>Experiencia laboral</h2>
        </div>
        <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
          <div style={{ position: "absolute", left: 0, top: 8, bottom: 0, width: 1, background: BORDER }} />
          {EXPERIENCE.map((e, i) => (
            <div key={e.role} style={{ position: "relative", marginBottom: i < EXPERIENCE.length - 1 ? "2.5rem" : 0 }}>
              <div style={{
                position: "absolute", left: "-2.05rem", top: 6,
                width: 9, height: 9, borderRadius: "50%",
                background: ACCENT, border: `2px solid ${BG}`,
              }} />
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{e.date}</span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: ACCENT }}>{e.company} · {e.type}</span>
              </div>
              <div style={{ fontSize: "0.92rem", fontWeight: 600, marginBottom: "0.5rem", color: "#fff" }}>{e.role}</div>
              <p style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.8 }}>{e.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "0.75rem" }}>
                {e.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: MONO, fontSize: 9, color: "rgba(255,255,255,0.25)",
                    background: `${ACCENT}0a`, borderRadius: 3, padding: "2px 6px",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 3rem 8rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: MONO, fontSize: 10, color: ACCENT, letterSpacing: "0.2em", marginBottom: 8, textTransform: "uppercase" }}>Contacto</p>
          <h2 style={{ fontFamily: MONO, fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", fontWeight: 700, color: "#fff" }}>¿Tienes un proceso que automatizar?</h2>
          <p style={{ color: "rgba(255,255,255,0.3)", marginTop: "0.5rem", fontSize: "0.85rem" }}>Hablemos. Respondo en menos de 24h.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
        {[
          { label: "Email", value: "Kennypedreros10@gmail.com", href: "mailto:Kennypedreros10@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
          { label: "LinkedIn", value: "kenny pedreros", href: "https://www.linkedin.com/in/kennypedreros-1b5919340", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
          { label: "GitHub", value: "KennyPedreros", href: "https://github.com/KennyPedreros", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
          { label: "WhatsApp", value: "+593 989 162 764", href: "https://wa.me/593989162764", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
        ].map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{
            background: SURFACE, border: `1px solid ${BORDER}`,
            borderRadius: 8, padding: "1.1rem 1.25rem",
            display: "flex", alignItems: "center", gap: 12,
            textDecoration: "none", transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT}
            onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 7,
              background: `${ACCENT}15`, display: "flex", alignItems: "center", justifyContent: "center",
              color: ACCENT, flexShrink: 0,
            }}>{c.icon}</div>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontFamily: MONO }}>{c.label}</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#e8eaf0", marginTop: 2 }}>{c.value}</div>
            </div>
          </a>
        ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${BORDER}`, padding: "1.5rem 3rem",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem",
      }}>
        <span style={{ fontFamily: MONO, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Kenny Pedreros · Ecuador · 2026</span>
        <span style={{ fontFamily: MONO, fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Automation Developer</span>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #080c14; }
        ::-webkit-scrollbar-thumb { background: #1a2a3a; border-radius: 3px; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}