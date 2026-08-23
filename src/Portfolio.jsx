import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  ExternalLink,
  Mail,
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  Award,
  CheckCircle2,
  Menu,
  X,
  QrCode,
  FileText,
  RotateCw,
  Send,
  MessageSquare,
  MapPin,
  Phone,
  Move,
  Code,
  ShieldCheck,
} from "lucide-react";

// Hook for scroll fade & slide animations
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
}

function RevealSection({ children, className = "", delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-[0.98]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Dynamic Motion values for elastic lanyard physics
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Transform coordinates to rotate and stretch the strap naturally
  const strapRotate = useTransform(dragX, [-100, 100], [-25, 25]);
  const strapScaleY = useTransform(dragY, [-50, 150], [0.8, 1.8]);
  const cardRotateZ = useTransform(dragX, [-100, 100], [-12, 12]);

  // CV / Resume URL
  const cvUrl = "https://drive.google.com/file/d/1Ecf51nqMXgGei2mhTxBNzaTqAuq0hmAH/view?usp=sharing";

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const skills = [
    { name: "Python", category: "AI & Backend" },
    { name: "HTML, CSS & JS", category: "Frontend" },
    { name: "Laravel / PHP", category: "Backend & Web" },
    { name: "React.js & Tailwind", category: "Frontend" },
    { name: "MySQL", category: "Database" },
    { name: "Cloud & Gen AI", category: "Machine Learning" },
  ];

  const certificates = [
    {
      year: "2026",
      title: "Getting Started with Python Programming",
      issuer: "Dicoding Academy",
      link: "https://www.dicoding.com/certificates/RVZKM943NXD5",
    },
    {
      year: "2026",
      title: "Cloud & Generative AI Fundamentals on AWS",
      issuer: "Dicoding Academy",
      link: "https://www.dicoding.com/certificates/2VX3VW28QPYQ",
    },
  ];

  const projects = [
    {
      title: "Voice - Controlled",
      description:
        "A Python-based voice assistant that enables system-wide laptop control, not limited to browser actions.",
      tags: ["Python"],
      link: "https://github.com/hanif16n-g/Aksara.git",
      image: "/project/ke1.png",
    },
    {
      title: "IoT-based Solar Tracker System",
      description:
        "An ESP32 and IoT-based automatic solar tracker system with real-time status and battery voltage monitoring via Telegram Bot.",
      tags: ["Telegram Bot", "C++", "ESP32"],
      link: "https://github.com/hanif16n-g/Smart-Solar-Tracker-System.git",
      image: "/project/panel.jpg",
    },
    {
      title: "Arunika Kopi Web Application",
      description:
        "A Laravel-based coffee shop website developed as a full-featured web application project.",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      link: "https://github.com/hanif16n-g/myproject.git",
      image: "/project/arunika.png",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -left-20 w-[400px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-lg tracking-tight"
          >
            <Terminal className="w-5 h-5 text-indigo-400" />
            <span className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Gareng<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-400 font-medium">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#certificates"
              className="hover:text-indigo-400 transition-colors"
            >
              Certificates
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-6 py-4 space-y-3 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-indigo-400 py-1"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-indigo-400 py-1"
            >
              Skills
            </a>
            <a
              href="#certificates"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-indigo-400 py-1"
            >
              Certificates
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-indigo-400 py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-indigo-400 pt-2 border-t border-slate-800/80"
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative max-w-5xl mx-auto px-6 pt-16 sm:pt-20 pb-20 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Bio Info */}
        <RevealSection className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Software & AI Engineer
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-300 bg-clip-text text-transparent">
              Muhammad Hanif Nasrulloh
            </span>
          </h1>

          <div className="space-y-3 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              I am a Software Engineering student focused on backend development
              and AI Engineering, with hands-on experience building functional
              frontends using React. I enjoy developing end-to-end practical
              applications, robust APIs, and AI-powered solutions while
              continuously honing my problem-solving skills.
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              My focus is on creating efficient, maintainable software by
              combining solid backend architecture, AI capabilities, and
              interactive web interfaces to solve real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm transition-all shadow-lg shadow-indigo-600/20"
            >
              View My Work
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/hanif16n-g"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-indigo-400 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-hanif-99a298381?"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-indigo-400 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 3.32 0 1.66 1.66 0 0 0-1.66-1.66z" />
                </svg>
              </a>

              <a
                href="mailto:hanif16e@gmail.com"
                aria-label="Email"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-indigo-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </RevealSection>

        {/* Right Animated DRAGGABLE with ELASTIC LANYARD & 3D FLIP */}
        <RevealSection
          delay={200}
          className="lg:col-span-5 flex flex-col items-center justify-center pt-16"
        >
          {/* Hint text above card */}
          <div className="text-center mb-6 flex items-center justify-center gap-3 text-[11px] text-indigo-300 font-medium">
            <span className="flex items-center gap-1">
              <Move className="w-3 h-3 text-indigo-400" /> Pull card to stretch
            </span>
            <span>•</span>
            <button
              type="button"
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex items-center gap-1 hover:underline text-indigo-200 cursor-pointer"
            >
              <RotateCw
                className={`w-3 h-3 transition-transform duration-500 ${isFlipped ? "rotate-180" : ""}`}
              />
              {isFlipped ? "View Profile" : "Scan CV"}
            </button>
          </div>

          <div
            className="relative select-none flex flex-col items-center"
            style={{ perspective: "1000px" }}
          >
            {/* Top Anchor Pin */}
            <div className="absolute -top-12 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-600 shadow-md z-10 flex items-center justify-center pointer-events-none">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            </div>

            {/* Framer Motion Draggable Container */}
            <motion.div
              drag
              dragSnapToOrigin={true}
              dragElastic={0.65}
              style={{
                x: dragX,
                y: dragY,
                rotateZ: cardRotateZ,
              }}
              dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 12,
                power: 0.2,
              }}
              whileDrag={{
                scale: 1.05,
                cursor: "grabbing",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                mass: 0.8,
              }}
              className="cursor-grab active:cursor-grabbing touch-none relative pt-12"
            >
              {/* Elastic Lanyard Strap */}
              <motion.div
                style={{
                  scaleY: strapScaleY,
                  transformOrigin: "top center",
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none"
              >
                <div className="w-4 h-12 bg-indigo-900/90 border-x border-indigo-700/60 relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-indigo-500/20 animate-pulse" />
                </div>
                <div className="w-8 h-4 bg-slate-400 rounded-sm border border-slate-300 shadow-sm flex items-center justify-center">
                  <div className="w-4 h-1.5 bg-slate-600 rounded-xs" />
                </div>
              </motion.div>

              {/* 3D Flip Card Container */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
                className="relative w-72 h-[435px] transition-transform duration-700 ease-in-out shadow-2xl"
              >
                {/* FRONT SIDE: Profile & Credentials */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 rounded-2xl p-5 shadow-2xl flex flex-col justify-between hover:border-indigo-500/50 transition-colors"
                >
                  {/* Top Clip Hole */}
                  <div>
                    <div className="w-10 h-2 bg-slate-950 border border-slate-700 mx-auto rounded-full shadow-inner" />
                  </div>

                  {/* Profile & Identity Section with Balanced Spacing */}
                  <div className="flex flex-col items-center text-center space-y-3.5 my-auto">
                    {/* Profile Picture */}
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-lg group-hover:border-indigo-500/40 transition-colors">
                      <img
                        src="/potoprofil.png"
                        alt="Muhammad Hanif Nasrulloh"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
                        }}
                      />
                    </div>

                    {/* Name & Role */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-100 text-base tracking-wide leading-tight">
                        M. Hanif Nasrulloh
                      </h3>
                      <p className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                        Software & AI Engineer
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono">
                        ID: Gareng-2004-Dev
                      </p>
                    </div>

                    {/* Badge Chips to Fill Space Naturally */}
                    <div className="pt-1 flex flex-wrap items-center justify-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-900/50 text-[10px] font-medium flex items-center gap-1">
                        <Code className="w-3 h-3" /> Full-Stack & AI
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 text-[10px] font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Status Bar */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-slate-300 text-xs">Active</span>
                    </div>

                    <div className="flex gap-[2px] h-4 items-end opacity-60">
                      <div className="w-[2px] h-4 bg-slate-300" />
                      <div className="w-[1px] h-3 bg-slate-300" />
                      <div className="w-[3px] h-4 bg-slate-300" />
                      <div className="w-[1px] h-2 bg-slate-300" />
                      <div className="w-[2px] h-4 bg-slate-300" />
                      <div className="w-[1px] h-3 bg-slate-300" />
                    </div>
                  </div>
                </div>

                {/* BACK SIDE: QR Code & CV */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-indigo-500/50 rounded-2xl p-5 shadow-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-2 bg-slate-950 border border-slate-700 mx-auto rounded-full mb-4 shadow-inner" />

                    <div className="text-center mb-3">
                      <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
                        <QrCode className="w-3.5 h-3.5" /> Scan Resume / CV
                      </span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Scan via your phone camera
                      </p>
                    </div>

                    {/* QR Code Container */}
                    <div className="bg-white p-2.5 rounded-xl w-36 h-36 mx-auto shadow-md flex items-center justify-center">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(cvUrl)}&color=0f172a`}
                        alt="QR Code CV"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-indigo-600/20"
                    >
                      <FileText className="w-3.5 h-3.5" /> Open CV Directly
                    </a>
                    <p className="text-center text-[10px] text-slate-500">
                      Click card to return
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </RevealSection>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <RevealSection>
          <div className="flex items-center gap-2 mb-8">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-200">
              Tech Stack & Tools
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:-translate-y-1 transition-all duration-200 text-center"
              >
                <span className="text-xs text-slate-500 block mb-1">
                  {skill.category}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <RevealSection>
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-200">
              Certifications & Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium text-indigo-400/90">
                      {cert.issuer}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                      {cert.year}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition"
                  >
                    View Credential <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <RevealSection>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-200">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg"
              >
                {/* Project Image Thumbnail */}
                <div className="relative w-full h-48 bg-slate-950 shrink-0 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover block hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-100">
                        {proj.title}
                      </h3>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-indigo-400 transition shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-900/50 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <RevealSection>
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-200">
              Get in Touch
            </h2>
          </div>
          <p className="text-slate-400 text-sm mb-10 max-w-lg">
            Interested in collaborating on AI engineering & software
            development, or just want to discuss a project? Feel free to drop a
            message!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Direct Contact Info */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-900/50 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Email
                    </h4>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      hanif16e@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-900/50 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-900/50 text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Availability
                    </h4>
                    <p className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                      Open to Collaboration & Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Message / Project Details
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Hello Hanif, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>

                {formSent && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-4 h-4" /> Message sent
                    successfully! Thank you for reaching out.
                  </div>
                )}
              </form>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Muhammad Hanif Nasrulloh. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="mailto:hanif16e@gmail.com"
              className="hover:text-slate-400 transition"
            >
              Email
            </a>
            <a
              href="https://github.com/hanif16n-g"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-hanif-99a298381?"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
