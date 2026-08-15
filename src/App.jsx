import { useState, useEffect } from "react";
import setup from "./assets/setup.png";
import proj1 from "./assets/proj1.png";
import proj2a from "./assets/proj2a.png";
import proj3 from "./assets/proj3.png";
import proj5 from "./assets/proj5.png";
import proj7 from "./assets/proj7.png";
import proj8 from "./assets/proj8.png";
import proj9 from "./assets/proj9.png";
import proj10 from "./assets/proj10.png";
import proj11 from "./assets/proj11.png";
import page from "./assets/page.png";
import sapOrquestador from "./assets/FlujoOrquestador.png";
import sapListarOrdenes from "./assets/ListarOrdenesSap.png";
import sapReconocerFacturas from "./assets/ReconocerFacturas.png";
import sapRegistrarPagos from "./assets/Registrar_Pagos.png";
import sapTransfAlmacenes from "./assets/Transf_Almacenes.png";

const IMG = {
  "assets/setup.png": setup,
  "assets/proj1.png": proj1,
  "assets/proj2a.png": proj2a,
  "assets/proj3.png": proj3,
  "assets/proj5.png": proj5,
  "assets/proj7.png": proj7,
  "assets/proj8.png": proj8,
  "assets/proj9.png": proj9,
  "assets/proj10.png": proj10,
  "assets/proj11.png": proj11,
  "assets/page.png": page,
  "assets/sap-orquestador.png": sapOrquestador,
  "assets/sap-listar-ordenes.png": sapListarOrdenes,
  "assets/sap-reconocer-facturas.png": sapReconocerFacturas,
  "assets/sap-registrar-pagos.png": sapRegistrarPagos,
  "assets/sap-transf-almacenes.png": sapTransfAlmacenes,
};

const BG = "#080c14";
const SURFACE = "#0d1520";
const ACCENT = "#4a9eff";
const AMBER = "#f5a623";
const BORDER = "rgba(74,158,255,0.12)";
const MONO = "'Space Mono', monospace";

const COPY = {
  es: {
    nav: [["#about","Sobre mí"],["#stack","Stack"],["#sap","SAP"],["#projects","Proyectos"],["#experience","Experiencia"],["#contact","Contacto"]],
    navCta: "CONTACTAR",
    heroLead: "Conecto sistemas de negocio y sustituyo procesos manuales. Integro SAP Business One con plataformas externas mediante flujos en n8n contra su Service Layer (OData), y modelo la capa de datos para que la operación sea consultable por perfiles no técnicos.",
    heroMeta: "N8N · SAP BUSINESS ONE · ODATA · LANGCHAIN",
    ctaWork: "VER TRABAJO SAP",
    ctaResume: "VER PROYECTOS",
    aboutTitle: "SOBRE MÍ",
    aboutP1: "Ingeniero de automatización e integraciones con más de 2 años conectando sistemas de negocio y sustituyendo procesos manuales en ventas, atención al cliente y operaciones. Trabajo end-to-end: levantamiento del proceso, diseño de la arquitectura (orquestador + subflujos), modelado de la capa de datos y puesta en producción con monitoreo de errores.",
    aboutP2: "Especializado en Python, n8n y agentes con LangChain, con base sólida de desarrollo full stack (React, Laravel, Spring Boot) que me permite construir el conector a medida cuando la herramienta estándar no llega. He entregado soluciones para clientes de Ecuador, Estados Unidos y México, en modalidad remota y como freelance.",
    aboutEdu: "INGENIERÍA EN SOFTWARE · UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE — LATACUNGA",
    facts: [["+2","años en automatización"],["3","países atendidos"],["+20","flujos en producción"],["C1","inglés"]],
    stackTitle: "COMPETENCIAS TÉCNICAS",
    stackSub: "Herramientas y lenguajes con los que trabajo a diario.",
    sapTitle: "INTEGRACIONES SAP BUSINESS ONE",
    sapSub: "Flujos en n8n que consumen el Service Layer (OData) de SAP Business One, con Data tables como tablas temporales y Google Sheets como base consultiva para el cliente.",
    sapPillars: [
      ["Service Layer / OData","Lectura y escritura contra el ERP","Los flujos consumen el Service Layer de SAP Business One para leer y escribir datos entre el ERP y los sistemas de la operación, con manejo de autenticación, control de errores y reintentos."],
      ["Data tables","Tablas temporales dentro del flujo","Uso las Data tables de n8n como almacenamiento intermedio entre pasos: los datos se validan y consolidan antes de escribirse en SAP, sin dejar registros a medias en el ERP."],
      ["Google Sheets","Base consultiva para el cliente","Sobre Sheets modelo la capa de consulta del proceso, para que el personal no técnico revise el estado de la operación sin entrar al ERP ni pedir soporte."]
    ],
    sapGalleryTitle: "Flujos en producción",
    sapGalleryNote: "5 de +20 flujos",
    projTitle: "PROYECTOS",
    projSub: "Flujos reales construidos para clientes y proyectos propios.",
    expTitle: "EXPERIENCIA PROFESIONAL",
    contactTitle: "¿Tienes un proceso que automatizar?",
    contactSub: "Disponible para posiciones full-time y proyectos. Respondo en menos de 24 h.",
    contacts: [
      ["Email","kennypedreros10@gmail.com","mailto:kennypedreros10@gmail.com"],
      ["LinkedIn","kenny-pedreros","https://www.linkedin.com/in/kenny-pedreros-1b5919340"],
      ["GitHub","KennyPedreros","https://github.com/KennyPedreros"],
      ["WhatsApp","+593 98 916 2764","https://wa.me/593989162764"]
    ]
  },
  en: {
    nav: [["#about","About"],["#stack","Stack"],["#sap","SAP"],["#projects","Work"],["#experience","Experience"],["#contact","Contact"]],
    navCta: "GET IN TOUCH",
    heroLead: "I connect business systems and replace manual processes. I integrate SAP Business One with external platforms through n8n flows against its Service Layer (OData), and model the data layer so the operation stays queryable by non-technical people.",
    heroMeta: "N8N · SAP BUSINESS ONE · ODATA · LANGCHAIN",
    ctaWork: "VIEW SAP WORK",
    ctaResume: "VIEW PROJECTS",
    aboutTitle: "ABOUT",
    aboutP1: "Automation and integrations engineer with 2+ years connecting business systems and replacing manual processes across sales, customer service and operations. I work end-to-end: process discovery, architecture design (orchestrator + subflows), data-layer modelling, and production rollout with error monitoring.",
    aboutP2: "Specialised in Python, n8n and LangChain agents, backed by solid full stack development experience (React, Laravel, Spring Boot) that lets me build a custom connector when off-the-shelf tooling falls short. I have delivered solutions for clients in Ecuador, the United States and Mexico, remotely and as a freelancer.",
    aboutEdu: "SOFTWARE ENGINEERING · UNIVERSIDAD DE LAS FUERZAS ARMADAS ESPE — LATACUNGA",
    facts: [["2+","years in automation"],["3","countries served"],["20+","flows in production"],["C1","english"]],
    stackTitle: "TECHNICAL SKILLS",
    stackSub: "Tools and languages I work with day to day.",
    sapTitle: "SAP BUSINESS ONE INTEGRATIONS",
    sapSub: "n8n flows consuming the SAP Business One Service Layer (OData), with Data tables as temporary tables and Google Sheets as a queryable base for the client.",
    sapPillars: [
      ["Service Layer / OData","Reading and writing against the ERP","The flows consume the SAP Business One Service Layer to read and write data between the ERP and operational systems, handling authentication, error control and retries."],
      ["Data tables","Temporary tables inside the flow","I use n8n Data tables as intermediate storage between steps: data is validated and consolidated before it is written to SAP, so no half-finished records land in the ERP."],
      ["Google Sheets","A queryable layer for the client","I model the process query layer on Sheets, so non-technical staff can check the state of the operation without entering the ERP or asking for support."]
    ],
    sapGalleryTitle: "Flows in production",
    sapGalleryNote: "5 of 20+ flows",
    projTitle: "SELECTED WORK",
    projSub: "Real flows built for clients and personal projects.",
    expTitle: "PROFESSIONAL EXPERIENCE",
    contactTitle: "Got a process worth automating?",
    contactSub: "Open to full-time roles and projects. I reply within 24 hours.",
    contacts: [
      ["Email","kennypedreros10@gmail.com","mailto:kennypedreros10@gmail.com"],
      ["LinkedIn","kenny-pedreros","https://www.linkedin.com/in/kenny-pedreros-1b5919340"],
      ["GitHub","KennyPedreros","https://github.com/KennyPedreros"],
      ["WhatsApp","+593 98 916 2764","https://wa.me/593989162764"]
    ]
  }
};

const STACK = [
  ["PY","Python","Scripting / Data","python","Scripting / Data"],
  ["SAP","SAP Business One","Service Layer / OData","sap","Service Layer / OData"],
  ["N8N","n8n","Orquestación de flujos","n8n","Workflow orchestration"],
  ["LC","LangChain","Agentes IA","langchain","AI agents"],
  ["RET","Retell AI","Agentes de voz","","Voice agents"],
  ["GHL","Go High Level","CRM / Flujos","","CRM / Flows"],
  ["CHT","Chatwoot","CRM / Chat","chatwoot","CRM / Chat"],
  ["JS","JavaScript / TS","Frontend / Node","javascript","Frontend / Node"],
  ["RCT","React","Frontend","react","Frontend"],
  ["LAR","Laravel / PHP","Backend","laravel","Backend"],
  ["DJG","Django","Backend","django/44b78b","Backend"],
  ["SPR","Spring Boot","Backend / Java","springboot","Backend / Java"],
  ["SQL","MySQL / MongoDB","Bases de datos","mysql/6f9fc4","Databases"],
  ["DBX","Databricks","Datos","databricks","Data"],
  ["DKR","Docker","DevOps","docker","DevOps"],
  ["GIT","Git / GitHub","Control de versiones","github/e8eaf0","Version control"]
];

const SAP_FLOWS = [
  ["Flujo orquestador","assets/sap-orquestador.png","Enruta cada solicitud al subflujo especializado que corresponde.",
   "Orchestrator flow","Routes every request to the specialised subflow that handles it."],
  ["Listar órdenes SAP","assets/sap-listar-ordenes.png","Consulta de órdenes desde el Service Layer (OData) de SAP Business One.",
   "List SAP orders","Order lookups through the SAP Business One Service Layer (OData)."],
  ["Reconocer facturas","assets/sap-reconocer-facturas.png","Lectura de facturas con IA y mapeo de campos hacia el ERP.",
   "Invoice recognition","Reading invoices with AI and mapping the fields into the ERP."],
  ["Registrar pagos","assets/sap-registrar-pagos.png","Escritura de pagos en SAP Business One con validación y control de errores.",
   "Register payments","Writing payments into SAP Business One with validation and error control."],
  ["Transferencia entre almacenes","assets/sap-transf-almacenes.png","Movimientos de inventario entre almacenes generados automáticamente.",
   "Warehouse transfers","Inventory movements between warehouses generated automatically."]
];

const PROJECTS = [
  ["Automatización integral para lavandería","Freelance",
   "Sistema completo en n8n con flujo orquestador, subflujos especializados, agentes LangChain que interpretan lenguaje natural y Google Sheets como capa de datos para pedidos y clientes.",
   ["n8n","LangChain","Google Sheets","REST API"],"assets/proj11.png",
   "End-to-end laundry automation","Full system in n8n with an orchestrator flow, specialised subflows, LangChain agents that interpret natural language, and Google Sheets as the data layer for orders and customers."],
  ["Integración Retell AI + Go High Level","AI + CRM",
   "Flujo post-llamada conectado a una función custom de Retell. Crea o actualiza contactos en GHL con variables dinámicas, aplica etiquetas automáticas y adjunta el resumen y recording de la llamada.",
   ["Retell AI","Go High Level","n8n","Webhook"],"assets/proj1.png",
   "Retell AI + Go High Level integration","Post-call flow wired to a custom Retell function. Creates or updates GHL contacts with dynamic variables, applies automatic tags and attaches the call summary and recording."],
  ["Sistema omnicanal para restaurantes","Omnichannel",
   "Arquitectura modular de workflows para dos restaurantes españoles: chatbot principal en n8n + agente de llamadas en Vapi, compartiendo los mismos módulos de reservación, cancelación y disponibilidad.",
   ["n8n","Vapi","WhatsApp API","Last.app"],"assets/proj2a.png",
   "Omnichannel system for restaurants","Modular workflow architecture for two Spanish restaurants: a main n8n chatbot plus a Vapi call agent, both sharing the same booking, cancellation and availability modules."],
  ["Chatbot con agente IA y memoria persistente","AI Agent",
   "Agente conversacional con memoria persistente en PostgreSQL, capaz de detectar intención del cliente, notificar asesores humanos cuando es necesario y enviar media. Arquitectura multi-entrada.",
   ["n8n","OpenAI","PostgreSQL","Webhook"],"assets/proj10.png",
   "AI chatbot with persistent memory","Conversational agent with persistent memory in PostgreSQL, able to detect customer intent, notify human advisors when needed and send media. Multi-entry architecture."],
  ["Blast calls — 1,500 llamadas en 45 min","Scale",
   "Ejecución que lanza hasta 1,500 llamadas en una sola corrida vía batch call a la API de Retell. Lee y filtra contactos desde Sheets, formatea variables y despacha todo en paralelo.",
   ["n8n","Retell AI","Google Sheets","Batch API"],"assets/proj9.png",
   "Blast calls — 1,500 calls in 45 min","A single run that fires up to 1,500 calls through Retell's batch call API. Reads and filters contacts from Sheets, formats the variables and dispatches everything in parallel."],
  ["Campañas de llamadas automatizadas","Automation",
   "Activación por Schedule Trigger en horarios específicos: lee contactos desde Sheets, inyecta variables dinámicas en Retell, ejecuta las llamadas una por una y se desactiva notificando vía GHL.",
   ["n8n","Retell AI","Google Sheets","Go High Level"],"assets/proj8.png",
   "Automated calling campaigns","Triggered on a schedule: reads contacts from Sheets, injects dynamic variables into Retell, runs the calls one by one, then deactivates itself and notifies through GHL."],
  ["Extracción masiva de datos con visión IA","Data + AI",
   "Procesamiento de +300 imágenes con datos de clientes en Google Drive. Extracción automática con visión IA, mapeo de campos y volcado estructurado en Sheets, con filtro anti-duplicados.",
   ["n8n","Google Drive","OpenAI Vision","Sheets"],"assets/proj7.png",
   "Bulk data extraction with AI vision","Processing 300+ images of customer data stored in Google Drive. Automatic extraction with AI vision, field mapping and structured dumping into Sheets, with a duplicate filter."],
  ["Generador automatizado de videos con IA","AI Content",
   "Pipeline que scrapea videos de referencia en Instagram vía Apify, los registra en Sheets como base anti-duplicados, los describe con IA, genera un prompt y produce el video final vía API.",
   ["n8n","Apify","OpenAI","Google Sheets"],"assets/proj3.png",
   "Automated AI video generator","Pipeline that scrapes reference videos from Instagram via Apify, logs them in Sheets as a duplicate guard, describes them with AI, builds a prompt and produces the final video via API."],
  ["Generador de posts con IA para redes","AI Content",
   "Flujo que extrae posts de Instagram, aplica un filtro IA para clasificar entre noticias y publicidad, transforma el diseño con nueva marca y publica automáticamente con caption generado.",
   ["n8n","OpenAI","Banana Pro","Instagram API"],"assets/proj5.png",
   "AI social post generator","Flow that pulls Instagram posts, applies an AI filter to classify news versus advertising, restyles the design under a new brand and publishes automatically with a generated caption."],
  ["Botsconia — Landing page","Web",
   "Landing page para empresa de automatizaciones. Diseño orientado a conversión, con integración de formularios y llamadas a la acción claras.",
   ["JavaScript","HTML/CSS","GitHub Pages"],"assets/page.png",
   "Botsconia — Landing page","Landing page for an automation company. Conversion-oriented design with form integration and clear calls to action."]
];

const EXPERIENCE = {
  es: [
    ["Ingeniero de Automatización · Freelance","Clientes independientes — Remoto","Jul 2026 – Presente",
     ["Automaticé de punta a punta la operación de una lavandería —recepción de pedidos, seguimiento de estados y comunicación con el cliente—, dejando el ciclo completo funcionando sin intervención manual del personal.",
      "Diseñé la arquitectura como un flujo orquestador con subflujos especializados en n8n, de modo que cada proceso se modifica, prueba y escala sin afectar al resto del sistema.",
      "Construí agentes con nodos LangChain Code que interpretan solicitudes en lenguaje natural y enrutan cada caso al subflujo correcto, sin menús rígidos ni árboles de decisión predefinidos.",
      "Diseñé la capa de persistencia operativa sobre Google Sheets, con validaciones y sincronización automática entre procesos.",
      "Integré APIs REST de terceros y canales de mensajería para notificaciones automáticas, con mapeo de datos entre sistemas y manejo de errores."],
     ["n8n","LangChain","Google Sheets","REST API"]],
    ["Desarrollador de Automatizaciones e Integraciones SAP · Medio tiempo","Callcom — México · Remoto","Jul 2026 – Presente",
     ["Desarrollo automatizaciones en n8n que integran SAP Business One con los sistemas internos de la operación, eliminando cargas y consultas manuales sobre el ERP.",
      "Consumo el Service Layer (OData) de SAP Business One y APIs REST de terceros para lectura y escritura de datos entre sistemas, con manejo de autenticación, control de errores y reintentos.",
      "Uso las Data tables de n8n como tablas temporales dentro del flujo, validando y consolidando la información antes de escribirla en el ERP.",
      "Modelé la capa de consulta sobre Google Sheets para que el personal no técnico revise el estado de la operación sin acceder al ERP."],
     ["n8n","SAP Business One","OData","Google Sheets"]],
    ["Especialista en Automatizaciones","Camia — Remoto","Sep 2025 – Jul 2026",
     ["Entregué automatizaciones en n8n y Go High Level a clientes de distintos sectores —ventas, atención al cliente y reservas—, cada una desde el levantamiento del proceso hasta la puesta en producción.",
      "Puse en producción agentes telefónicos con IA (Retell AI) que atienden y captan clientes de forma autónoma, sin operador humano en la primera línea.",
      "Conecté plataformas mediante APIs REST para flujos de datos en tiempo real, con transformación de formatos entre sistemas.",
      "Implementé scraping de redes sociales para alimentar el análisis de mercado de los clientes con datos actualizados de forma automática.",
      "Automaticé la producción de contenido multimedia con IA para campañas en Instagram y gestioné los leads y pipelines resultantes en el CRM de Go High Level."],
     ["n8n","Go High Level","Retell AI","APIs"]],
    ["Desarrollador de Automatizaciones","Entropía — Remoto","Abr 2025 – Sep 2025",
     ["Diseñé e implementé flujos de trabajo en n8n para nichos de ventas, información, servicio al cliente y reservas de restaurantes.",
      "Unifiqué la atención al cliente de varios canales en un solo panel sobre Chatwoot CRM, integrando APIs de terceros para el intercambio de datos.",
      "Construí agentes telefónicos automatizados para atención y captación de clientes."],
     ["n8n","Vapi","Chatwoot","WhatsApp API"]],
    ["Desarrollador Web","Ing. Diego Maigualca — Latacunga","Abr 2024 – Abr 2025",
     ["Desarrollé y mantuve sitios web dinámicos y responsivos (HTML, CSS, JavaScript, PHP, MySQL), además de soluciones personalizadas en WordPress · Elementor para clientes de distintos sectores."],
     ["HTML/CSS","PHP","WordPress","MySQL"]]
  ],
  en: [
    ["Automation Engineer · Freelance","Independent clients — Remote","Jul 2026 – Present",
     ["Automated a laundry business end to end —order intake, status tracking and customer communication— leaving the full cycle running without manual staff intervention.",
      "Designed the architecture as an orchestrator flow with specialised subflows in n8n, so each process can be changed, tested and scaled without affecting the rest of the system.",
      "Built agents with LangChain Code nodes that interpret natural-language requests and route each case to the right subflow, with no rigid menus or predefined decision trees.",
      "Designed the operational persistence layer on Google Sheets, with validations and automatic sync between processes.",
      "Integrated third-party REST APIs and messaging channels for automated notifications, with data mapping between systems and error handling."],
     ["n8n","LangChain","Google Sheets","REST API"]],
    ["SAP Automation & Integrations Developer · Part-time","Callcom — Mexico · Remote","Jul 2026 – Present",
     ["I build n8n automations that integrate SAP Business One with the internal systems of the operation, removing manual uploads and lookups against the ERP.",
      "I consume the SAP Business One Service Layer (OData) and third-party REST APIs to read and write data between systems, handling authentication, error control and retries.",
      "I use n8n Data tables as temporary tables inside the flow, validating and consolidating data before writing it to the ERP.",
      "I modelled the query layer on Google Sheets so non-technical staff can check the state of the operation without accessing the ERP."],
     ["n8n","SAP Business One","OData","Google Sheets"]],
    ["Automation Specialist","Camia — Remote","Sep 2025 – Jul 2026",
     ["Delivered n8n and Go High Level automations to clients across sectors —sales, customer service and bookings— each from process discovery through to production.",
      "Shipped AI phone agents (Retell AI) that handle and capture customers autonomously, with no human operator on the front line.",
      "Connected platforms through REST APIs for real-time data flows, with format transformation between systems.",
      "Implemented social media scraping to feed client market analysis with automatically updated data.",
      "Automated multimedia content production with AI for Instagram campaigns and managed the resulting leads and pipelines in the Go High Level CRM."],
     ["n8n","Go High Level","Retell AI","APIs"]],
    ["Automation Developer","Entropía — Remote","Apr 2025 – Sep 2025",
     ["Designed and implemented n8n workflows for sales, information, customer service and restaurant booking niches.",
      "Unified multi-channel customer service into a single panel on Chatwoot CRM, integrating third-party APIs for data exchange.",
      "Built automated phone agents for customer service and acquisition."],
     ["n8n","Vapi","Chatwoot","WhatsApp API"]],
    ["Web Developer","Ing. Diego Maigualca — Latacunga","Apr 2024 – Apr 2025",
     ["Developed and maintained dynamic, responsive websites (HTML, CSS, JavaScript, PHP, MySQL), plus custom WordPress · Elementor solutions for clients across sectors."],
     ["HTML/CSS","PHP","WordPress","MySQL"]]
  ]
};

export default function App() {
  const [lang, setLang] = useState("es");
  const [lightbox, setLightbox] = useState(null);
  const t = COPY[lang];
  const en = lang === "en";

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hover = (el, prop, on, off) => ({
    onMouseEnter: (e) => { e.currentTarget.style[prop] = on; },
    onMouseLeave: (e) => { e.currentTarget.style[prop] = off; },
  });

  const sectionHead = (num, title, sub, color = ACCENT) => (
    <>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: sub ? "0.75rem" : "3rem" }}>
        <span style={{ fontFamily: MONO, fontSize: 10, color, letterSpacing: "0.2em" }}>{num}</span>
        <h2 style={{ fontFamily: MONO, fontSize: "clamp(1.3rem,2.6vw,1.85rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{title}</h2>
      </div>
      {sub && <p style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.86rem", marginBottom: "2.75rem", paddingLeft: "2.1rem" }}>{sub}</p>}
    </>
  );

  const tag = (label) => (
    <span key={label} style={{ fontFamily: MONO, fontSize: 8.5, color: "rgba(255,255,255,0.32)", background: "rgba(74,158,255,0.06)", borderRadius: 2, padding: "3px 6px", letterSpacing: "0.04em" }}>{label}</span>
  );

  return (
    <div style={{ background: BG, color: "#e8eaf0", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", WebkitFontSmoothing: "antialiased" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(4,6,10,0.94)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: "2.5rem" }}>
          <img src={lightbox} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", borderRadius: 6, objectFit: "contain", border: "1px solid rgba(74,158,255,0.2)" }} />
        </div>
      )}

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.9rem 3rem", background: "rgba(8,12,20,0.88)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${BORDER}` }}>
        <a href="#hero" style={{ fontFamily: MONO, fontSize: 13, fontWeight: 700, color: ACCENT, letterSpacing: "0.14em", textDecoration: "none" }}>KP</a>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {t.nav.map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 12.5, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em", textDecoration: "none", transition: "color .2s" }} {...hover(null, "color", "#fff", "rgba(255,255,255,0.45)")}>{label}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.08em" }}>
            <span onClick={() => setLang("es")} style={{ cursor: "pointer", color: en ? "rgba(255,255,255,0.35)" : ACCENT }}>ES</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>/</span>
            <span onClick={() => setLang("en")} style={{ cursor: "pointer", color: en ? ACCENT : "rgba(255,255,255,0.35)" }}>EN</span>
          </div>
          <a href="https://wa.me/593989162764" target="_blank" rel="noreferrer" style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.32)", letterSpacing: "0.06em", padding: "0.4rem 0.85rem", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 2, textDecoration: "none", transition: "border-color .2s, color .2s" }} {...hover(null, "color", ACCENT, "rgba(255,255,255,0.32)")}>{t.navCta}</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "7rem 0 4rem" }}>
        <img src={setup} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "106%", objectFit: "cover", objectPosition: "center", filter: "grayscale(45%) brightness(0.26) saturate(0.4)", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right,${BG} 42%,rgba(8,12,20,0.35) 78%,transparent)`, zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top,${BG} 4%,transparent 38%)`, zIndex: 1 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom,${BG} 0%,transparent 20%)`, zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 4rem", maxWidth: 760, width: "100%" }}>
          <p style={{ fontFamily: MONO, fontSize: 10.5, color: ACCENT, letterSpacing: "0.3em", marginBottom: "2rem", textTransform: "uppercase" }}>Automation &amp; AI Engineer</p>
          <h1 style={{ fontFamily: MONO, fontWeight: 700, fontSize: "clamp(3.2rem,7.5vw,6rem)", lineHeight: 0.92, letterSpacing: "-0.02em", margin: "0 0 0.06em", color: "#b9c4d6" }}>KENNY</h1>
          <h1 style={{ fontFamily: MONO, fontWeight: 700, fontSize: "clamp(3.2rem,7.5vw,6rem)", lineHeight: 0.92, letterSpacing: "-0.02em", margin: "0 0 2rem", color: "#fff" }}>PEDREROS</h1>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "rgba(255,255,255,0.62)", maxWidth: 530, marginBottom: "0.9rem", textWrap: "pretty" }}>{t.heroLead}</p>
          <p style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", marginBottom: "2.75rem" }}>{t.heroMeta}</p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#sap" style={{ background: ACCENT, color: "#061020", fontFamily: MONO, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", padding: "0.75rem 1.5rem", borderRadius: 2, textDecoration: "none", transition: "background .2s" }} {...hover(null, "background", "#7cbaff", ACCENT)}>{t.ctaWork}</a>
            <a href="#projects" style={{ color: "#e8eaf0", fontFamily: MONO, fontSize: 11, letterSpacing: "0.08em", padding: "0.75rem 1.5rem", borderRadius: 2, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none", transition: "border-color .2s, color .2s" }} {...hover(null, "borderColor", ACCENT, "rgba(255,255,255,0.2)")}>{t.ctaResume}</a>
          </div>
          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center", marginTop: "3.5rem", fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.1em" }}>
            {[["LINKEDIN", "https://www.linkedin.com/in/kenny-pedreros-1b5919340"], ["GITHUB", "https://github.com/KennyPedreros"], ["EMAIL", "mailto:kennypedreros10@gmail.com"]].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color .2s" }} {...hover(null, "color", ACCENT, "rgba(255,255,255,0.35)")}>{label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ position: "relative", overflow: "hidden", borderTop: `1px solid ${BORDER}` }}>
        <img src={proj2a} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(70%) brightness(0.2) saturate(0.35)", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom,${BG} 0%,rgba(8,12,20,0.86) 45%,${BG} 100%)`, zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "2.5rem" }}>
            <span style={{ fontFamily: MONO, fontSize: 10, color: ACCENT, letterSpacing: "0.2em" }}>01</span>
            <h2 style={{ fontFamily: MONO, fontSize: "clamp(1.3rem,2.6vw,1.85rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{t.aboutTitle}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2.5rem", maxWidth: 900 }}>
            <p style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.95, textWrap: "pretty" }}>{t.aboutP1}</p>
            <p style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.95, textWrap: "pretty" }}>{t.aboutP2}</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "3.5rem", marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: `1px solid ${BORDER}` }}>
            {t.facts.map(([value, label]) => (
              <div key={label}>
                <div style={{ fontFamily: MONO, fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.35rem" }}>{value}</div>
                <div style={{ fontFamily: MONO, fontSize: 9.5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.26)", letterSpacing: "0.1em", marginTop: "2.5rem" }}>{t.aboutEdu}</p>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem", borderTop: `1px solid ${BORDER}` }}>
        {sectionHead("02", t.stackTitle, t.stackSub)}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(190px,1fr))", gap: 8 }}>
          {STACK.map(([abbr, name, typeEs, slug, typeEn]) => (
            <div key={name} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.85rem 1rem", display: "flex", alignItems: "center", gap: 11, transition: "border-color .2s, background .2s" }} {...hover(null, "borderColor", "rgba(74,158,255,0.4)", BORDER)}>
              <div style={{ width: 30, height: 30, borderRadius: 5, flexShrink: 0, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {slug
                  ? <img src={`https://cdn.simpleicons.org/${slug}`} alt={name} width="16" height="16" style={{ display: "block" }} />
                  : <span style={{ fontFamily: MONO, fontSize: 8, fontWeight: 700, color: ACCENT, letterSpacing: "0.03em" }}>{abbr}</span>}
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "#e8eaf0" }}>{name}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)" }}>{en ? typeEn : typeEs}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAP */}
      <section id="sap" style={{ borderTop: `1px solid ${BORDER}`, background: "#0a1018" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem" }}>
          {sectionHead("03", t.sapTitle, t.sapSub, AMBER)}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12, marginBottom: "3rem" }}>
            {t.sapPillars.map(([kicker, title, desc]) => (
              <div key={title} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 7, padding: "1.75rem 1.5rem" }}>
                <div style={{ fontFamily: MONO, fontSize: 9.5, color: AMBER, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.85rem" }}>{kicker}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff", marginBottom: "0.6rem" }}>{title}</div>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.75, textWrap: "pretty" }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{t.sapGalleryTitle}</div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.24)", letterSpacing: "0.08em" }}>{t.sapGalleryNote}</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 12 }}>
            {SAP_FLOWS.map(([titleEs, img, descEs, titleEn, descEn], i) => (
              <div key={img} onClick={() => setLightbox(IMG[img])} style={{ border: "1px solid rgba(245,166,35,0.18)", borderRadius: 7, background: SURFACE, overflow: "hidden", cursor: "zoom-in", display: "flex", flexDirection: "column", transition: "border-color .2s" }} {...hover(null, "borderColor", "rgba(245,166,35,0.5)", "rgba(245,166,35,0.18)")}>
                <div style={{ position: "relative", height: 172, flexShrink: 0, overflow: "hidden", background: "#0a1018", borderBottom: "1px solid rgba(245,166,35,0.14)" }}>
                  <img src={IMG[img]} alt={en ? titleEn : titleEs} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "left top" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(10,16,24,0.7) 0%,transparent 55%)" }} />
                  <div style={{ position: "absolute", top: 8, left: 8, fontFamily: MONO, fontSize: 8.5, color: AMBER, letterSpacing: "0.1em", background: "rgba(8,12,20,0.8)", border: "1px solid rgba(245,166,35,0.35)", borderRadius: 2, padding: "2px 6px" }}>
                    {(en ? "FLOW " : "FLUJO ") + String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div style={{ padding: "0.95rem 1.1rem 1.1rem", flex: 1 }}>
                  <div style={{ fontFamily: MONO, fontSize: 11.5, fontWeight: 700, color: "#fff", marginBottom: "0.45rem" }}>{en ? titleEn : titleEs}</div>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, textWrap: "pretty" }}>{en ? descEn : descEs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem", borderTop: `1px solid ${BORDER}` }}>
        {sectionHead("04", t.projTitle, t.projSub)}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(330px,1fr))", gap: 14 }}>
          {PROJECTS.map(([titleEs, badge, descEs, tags, img, titleEn, descEn]) => (
            <div key={img + titleEs} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color .2s" }} {...hover(null, "borderColor", "rgba(74,158,255,0.4)", BORDER)}>
              <div onClick={() => setLightbox(IMG[img])} style={{ position: "relative", height: 172, overflow: "hidden", cursor: "zoom-in", flexShrink: 0 }}>
                <img src={IMG[img]} alt={en ? titleEn : titleEs} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(13,21,32,0.92) 0%,transparent 58%)" }} />
                <div style={{ position: "absolute", top: 9, right: 9, fontFamily: MONO, fontSize: 8.5, padding: "3px 7px", borderRadius: 2, letterSpacing: "0.08em", border: "1px solid rgba(74,158,255,0.45)", color: "#8fc4ff", background: "rgba(8,12,20,0.78)" }}>{badge}</div>
              </div>
              <div style={{ padding: "1.1rem 1.25rem", flex: 1 }}>
                <div style={{ fontFamily: MONO, fontSize: "0.82rem", fontWeight: 700, color: "#fff", marginBottom: "0.55rem", lineHeight: 1.4 }}>{en ? titleEn : titleEs}</div>
                <p style={{ fontSize: "0.775rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.75, textWrap: "pretty" }}>{en ? descEn : descEs}</p>
              </div>
              <div style={{ padding: "0.7rem 1.25rem", borderTop: "1px solid rgba(74,158,255,0.1)", display: "flex", flexWrap: "wrap", gap: 5 }}>{tags.map(tag)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem", borderTop: `1px solid ${BORDER}` }}>
        {sectionHead("05", t.expTitle)}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem", position: "relative", paddingLeft: "2rem", borderLeft: "1px solid rgba(74,158,255,0.14)" }}>
          {EXPERIENCE[lang].map(([role, company, date, bullets, tags]) => (
            <div key={role} style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "-2.32rem", top: 5, width: 9, height: 9, borderRadius: "50%", background: ACCENT, border: `2px solid ${BG}` }} />
              <div style={{ display: "flex", gap: "0.9rem", alignItems: "center", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: MONO, fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em" }}>{date}</span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: ACCENT, letterSpacing: "0.06em" }}>{company}</span>
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>{role}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.9rem", padding: 0 }}>
                {bullets.map((b) => (
                  <li key={b} style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, paddingLeft: "1rem", position: "relative", textWrap: "pretty" }}>
                    <span style={{ position: "absolute", left: 0, color: "rgba(74,158,255,0.6)" }}>—</span>{b}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>{tags.map(tag)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1120, margin: "0 auto", padding: "7rem 3rem 8rem", borderTop: `1px solid ${BORDER}` }}>
        {sectionHead("06", t.contactTitle, t.contactSub)}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 10 }}>
          {t.contacts.map(([label, value, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.15rem 1.3rem", display: "block", textDecoration: "none", transition: "border-color .2s, background .2s" }} {...hover(null, "borderColor", "rgba(74,158,255,0.4)", BORDER)}>
              <div style={{ fontFamily: MONO, fontSize: 9.5, color: "rgba(255,255,255,0.28)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: "#e8eaf0", marginTop: 5 }}>{value}</div>
            </a>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "1.6rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em" }}>Kenny Pedreros · Latacunga, Ecuador · 2026</span>
        <span style={{ fontFamily: MONO, fontSize: 10.5, color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em" }}>Automation &amp; AI Engineer</span>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${BG}; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${BG}; }
        ::-webkit-scrollbar-thumb { background: #1a2a3a; border-radius: 3px; }
      `}</style>
    </div>
  );
}
