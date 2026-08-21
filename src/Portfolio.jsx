import React, { useEffect, useRef, useState, useCallback } from "react";
import "./index.css";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowUp,
  Mail,
  ExternalLink,
} from "lucide-react";

/* Ikon GitHub & LinkedIn dibuat manual (SVG) karena lucide-react versi
   terbaru (1.0+) sudah menghapus semua ikon brand/logo pihak ketiga. */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.79.55C20.71 21.38 24 17.07 24 12c0-6.27-5.23-11.5-12-11.5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={props.size || 18} height={props.size || 18} fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/* =========================================================================
   TEMPLATE PORTOFOLIO — React
   -------------------------------------------------------------------------
   Cara pakai:
   1. Ganti semua data di object DATA di bawah ini dengan data Anda.
   2. Foto profil & foto proyek ditaruh di folder public/ (bukan src/),
      lalu path-nya ditulis TANPA kata "public" di depan.
      Contoh: file di public/project/ke1.jpg -> path: "/project/ke1.jpg"
   3. Ganti tautan "#" pada tombol CV, GitHub, LinkedIn, dan email.
   ========================================================================= */

const DATA = {
  name: "Muhammad Hanif Nasrulloh",
  role: "Software Engineer & AI Engineer",
  tagline:
    "Building functional and efficient applications and AI-powered solutions - from concept to implementation.",
  email: "hanif16e@gmail.com",
  github: "https://github.com/hanif16n-g",
  linkedin: "https://linkedin.com/",
  cvUrl: "https://drive.google.com/file/d/1WItmPuzI7kbihKCKAn_u3vIwXCdBuMqx/view?usp=sharing",
  location: "Jakarta, Indonesia",
  avatar: "/potoprofil.png",
  about: {
    paragraphs: [
      "I am a Software Engineering student with a strong interest in AI Engineering and backend development. I enjoy building practical applications, APIs, and AI-powered solutions while continuously improving my programming and problem-solving skills.",
      "My focus is on developing efficient, maintainable, and practical software by combining backend engineering with artificial intelligence to solve real-world problems.",
    ],
    stats: [
      { value: "RPL", label: "Student" },
      { value: "AI", label: "Focus" },
      { value: "API", label: "Backend" },
    ],
  },
  skills: [
    {
      category: "Pengembangan",
      items: [
        { name: "Python", level: 4 },
        { name: "Laravel/PHP", level: 5 },
        { name: "SQL & MySQL", level: 4 },
        { name: "REST API", level: 3 },
      ],
    },
    {
      category: "AI & Data",
      items: [
        { name: "Machine Learning", level: 2 },
        { name: "Data Processing", level: 3 },
        { name: "AI Development", level: 2 },
      ],
    },
    {
      category: "Tools & Lainnya",
      items: [
        { name: "Git & GitHub", level: 5 },
        { name: "Docker", level: 4 },
        { name: "Problem Solving", level: 3 },
      ],
    },
  ],
  projects: [
    {
      title: "Voice-controlled",
      description:
        "A voice-controlled laptop program that works across the entire system (not just in the browser).",
      tags: ["Python"],
      link: "https://github.com/hanif16n-g/Aksara.git",
      image: "/project/ke1.png",
    },
    {
      title: "IoT-Based Smart Solar Tracker System",
      description:
        "An ESP32 and IoT-based automatic solar tracking system featuring status and battery voltage monitoring notifications via a Telegram bot.",
      tags: [ "ESP32", "C++"],
      link: "https://github.com/hanif16n-g/Smart-Solar-Tracker-System.git",
      image: "/project/panel.jpg",
    },
    {
      title: "Arunika Kopi",
      description:
        "Arunika Kopi is a Laravel-based coffee shop website created as a web application development project.",
      tags: ["Laravel", "My SQL", "Livewire"],
      link: "https://github.com/hanif16n-g/myproject.git",
      image: "/project/arunika.png",
    },
  ],
  certificates: [
    {
      year: "2026",
      title: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding academy",
    },
    {
      year: "2026",
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding academy",
    },
    
    
  ],
  navLinks: [
    { id: "tentang", label: "About" },
    { id: "keahlian", label: "Skill" },
    { id: "proyek", label: "Project" },
    { id: "sertifikat", label: "Certificate" },
    { id: "kontak", label: "Contact" },
  ],
};

/* -------------------------------------------------------------------------
   Hook: reveal elemen saat masuk viewport (scroll animation)
   ------------------------------------------------------------------------- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* Wrapper generik untuk animasi fade-up saat discroll */
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

/* Judul section dengan garis tanda-tangan yang "menggambar" sendiri */
function SectionTitle({ eyebrow, title }) {
  const [ref, visible] = useReveal(0.4);
  return (
    <div className="section-title" ref={ref}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      <svg
        className={`signature-line ${visible ? "signature-line--drawn" : ""}`}
        width="120"
        height="14"
        viewBox="0 0 120 14"
        fill="none"
      >
        <path
          d="M2 10C15 2 25 2 35 8C45 14 55 4 65 6C75 8 85 2 95 6C102 8.5 108 5 118 4"
          stroke="#9C6B30"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["beranda", ...DATA.navLinks.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="pf-root">
      {/* ---------------- NAVBAR ---------------- */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar-inner">
          <button className="brand" onClick={() => scrollTo("beranda")}>
            MHN<span className="brand-dot">.</span>
          </button>

          <nav className="nav-links">
            {DATA.navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`nav-link ${
                  activeSection === link.id ? "nav-link--active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
            <a className="btn btn--outline btn--sm" href={DATA.cvUrl}>
              Download CV
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          {DATA.navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="mobile-menu-link"
            >
              {link.label}
            </button>
          ))}
          <a className="btn btn--outline btn--sm" href={DATA.cvUrl}>
            Download CV
          </a>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="beranda" className="hero">
        <div className="hero-inner">
          <p className="eyebrow hero-eyebrow fade-in-1">
            
          </p>
          <h1 className="hero-name fade-in-2">{DATA.name}</h1>
          <svg
            className="hero-underline fade-in-3"
            width="260"
            height="16"
            viewBox="0 0 260 16"
            fill="none"
          >
            <path
              d="M2 11C35 3 55 3 80 9C105 15 125 4 150 6C175 8 195 2 220 6C235 8.5 245 5 258 4"
              stroke="#9C6B30"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <p className="hero-role fade-in-3">{DATA.role}</p>
          <p className="hero-tagline fade-in-4">{DATA.tagline}</p>
          <div className="hero-actions fade-in-4">
            <button
              className="btn btn--primary"
              onClick={() => scrollTo("proyek")}
            >
              View Project <ArrowUpRight size={16} />
            </button>
            <button
              className="btn btn--outline"
              onClick={() => scrollTo("kontak")}
            >
              Contact me
            </button>
          </div>
        </div>
        <button
          className="scroll-cue"
          onClick={() => scrollTo("tentang")}
          aria-label="Gulir ke bawah"
        >
          <span className="scroll-cue-line" />
          <span>Scroll</span>
        </button>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="tentang" className="section">
        <div className="section-inner">
          <SectionTitle eyebrow="01 — Profile" title="About me" />

          <div className="about-grid">
            <Reveal className="about-media">
              <div className="avatar-frame">
                <div className="avatar-placeholder">
                  <img
                    src={DATA.avatar}
                    alt={DATA.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 20%",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="about-text">
              {DATA.about.paragraphs.map((p, i) => (
                <p key={i} className="about-paragraph">
                  {p}
                </p>
              ))}
              <div className="stats-row">
                {DATA.about.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="keahlian" className="section section--alt">
        <div className="section-inner">
          <SectionTitle eyebrow="02 — Competence" title="Skill" />

          <div className="skills-grid">
            {DATA.skills.map((group, gi) => (
              <Reveal delay={gi * 100} key={group.category}>
                <h3 className="skill-category">{group.category}</h3>
                <ul className="skill-list">
                  {group.items.map((skill) => (
                    <li className="skill-item" key={skill.name}>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-dots" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`dot ${
                              i < skill.level ? "dot--filled" : ""
                            }`}
                          />
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="proyek" className="section">
        <div className="section-inner">
          <SectionTitle eyebrow="03 — Work" title="selected projects" />

          <div className="projects-grid">
            {DATA.projects.map((project, i) => (
              <Reveal delay={i * 100} key={project.title}>
                <a
                  href={project.link}
                  className="project-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="project-media"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="project-media-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="project-media-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CERTIFICATES ---------------- */}
      <section id="sertifikat" className="section section--alt">
        <div className="section-inner">
          <SectionTitle eyebrow="04 — Credentials" title="certificate" />

          <div className="timeline">
            {DATA.certificates.map((cert, i) => (
              <Reveal delay={i * 80} key={cert.title} className="timeline-row">
                <div className="timeline-marker">
                  <span className="timeline-year">{cert.year}</span>
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{cert.title}</h3>
                  <p className="timeline-issuer">{cert.issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="kontak" className="section contact-section">
        <div className="section-inner">
          <SectionTitle eyebrow="05 — Contact" title="Let's Collaborate" />

          <Reveal delay={100}>
            <p className="contact-lead">
              Sedang mencari kolaborator untuk proyek berikutnya, atau
              sekadar ingin berdiskusi soal produk digital? Kotak masuk saya
              selalu terbuka.
            </p>

            <a href={`mailto:${DATA.email}`} className="contact-email">
              {DATA.email}
              <ArrowUpRight size={20} />
            </a>

            <div className="contact-meta">
              <span>{DATA.location}</span>
              <div className="social-row">
                <a href={DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
                <a href={`mailto:${DATA.email}`} aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {DATA.name}. Dibuat dengan teliti.
        </span>
        <a
          href={DATA.linkedin}
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          LinkedIn <ExternalLink size={14} />
        </a>
      </footer>

      <button
        className={`back-to-top ${showTop ? "back-to-top--visible" : ""}`}
        onClick={() => scrollTo("beranda")}
        aria-label="Kembali ke atas"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}