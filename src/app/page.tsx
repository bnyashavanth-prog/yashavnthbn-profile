"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Terminal, ArrowRight, Globe, Briefcase, Mail } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "COMPANY", id: "company" },
    { name: "WORK", id: "work" },
    { name: "SKILLS", id: "skills" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm z-50 brutalist-border border-l-0 border-r-0 border-t-0 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl flex items-center gap-2">
            <Terminal size={24} className="text-accent" />
            <a href="#hero">SYS.INIT()</a>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`hidden md:block transition-colors font-bold ${
                  activeSection === link.id ? "text-accent bg-foreground px-2" : "hover:text-accent"
                }`}
              >
                {link.name}
              </a>
            ))}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="p-2 ml-4 brutalist-border bg-card brutalist-shadow transition-brutalist hover:bg-accent hover:text-black"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col gap-8 py-12 md:py-24">
          <div className="inline-flex flex-wrap gap-3">
            {["COO", "SOFTWARE_DEVELOPER", "PRODUCT_BUILDER"].map((tag, i) => (
              <span key={i} className="px-3 py-1 text-sm font-bold bg-accent text-black brutalist-border">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-tight max-w-4xl">
            Architecting digital solutions. Building scalable infrastructure.
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl opacity-80 border-l-4 border-accent pl-4">
            Computer science student and startup COO cultivating innovation from code to strategy.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#work" 
              className="px-8 py-4 bg-accent text-black font-bold brutalist-border brutalist-shadow transition-brutalist flex items-center gap-2"
            >
              [ VIEW_WORK ] <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-card text-foreground font-bold brutalist-border brutalist-shadow transition-brutalist hover:bg-foreground hover:text-background"
            >
              [ CONTACT_SYS ]
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold brutalist-border border-x-0 border-t-0 pb-4 flex items-center gap-4">
            <span className="text-accent">01.</span> // ABOUT_ME
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 bg-card p-8 brutalist-border brutalist-shadow transition-brutalist hover:-translate-y-1">
              <h3 className="text-xl font-bold bg-foreground text-background inline-block px-2">EDUCATION</h3>
              <p className="leading-relaxed">
                Currently pursuing a Computer Science degree with a focus on scalable systems, 
                distributed computing, and software architecture.
              </p>
            </div>
            <div className="space-y-6 bg-card p-8 brutalist-border brutalist-shadow transition-brutalist hover:-translate-y-1">
              <h3 className="text-xl font-bold bg-foreground text-background inline-block px-2">TECHNICAL BACKGROUND</h3>
              <p className="leading-relaxed">
                Deep expertise in modern full-stack development, transitioning seamlessly between
                frontend micro-interactions and backend systems engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Company Spotlight */}
        <section id="company" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold brutalist-border border-x-0 border-t-0 pb-4 flex items-center gap-4">
            <span className="text-accent">02.</span> // COMPANY_SPOTLIGHT
          </h2>
          <div className="bg-foreground text-background p-8 brutalist-border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Terminal size={120} />
            </div>
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-4xl font-black mb-2 text-accent">YVB&Co</h3>
                <p className="text-lg">Independent Studio / Chief Operating Officer</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-background/20">
                <div>
                  <div className="text-sm opacity-60">SYSTEMS DEPLOYED</div>
                  <div className="text-2xl font-bold text-accent">12+</div>
                </div>
                <div>
                  <div className="text-sm opacity-60">TEAM SIZE</div>
                  <div className="text-2xl font-bold text-accent">15</div>
                </div>
                <div>
                  <div className="text-sm opacity-60">STATUS</div>
                  <div className="text-2xl font-bold text-accent">Seed</div>
                </div>
                <div>
                  <div className="text-sm opacity-60">LOCATION</div>
                  <div className="text-2xl font-bold text-accent">Global</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold brutalist-border border-x-0 border-t-0 pb-4 flex items-center gap-4">
            <span className="text-accent">03.</span> // SELECTED_WORK
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Enterprise ERP", sub: "Supply Chain Management", desc: "A comprehensive monolithic architecture for supply chain logistics.", tags: ["ERP", "Full Stack"] },
              { title: "AI Analytics", sub: "Predictive Models", desc: "SaaS platform leveraging machine learning for user behavior prediction.", tags: ["AI", "SaaS"] },
              { title: "Quantum Research", sub: "Academic Project", desc: "Exploratory research on quantum algorithm optimization.", tags: ["Research"] },
              { title: "Hackathon Winner", sub: "Fintech App", desc: "P2P lending platform built in 48 hours.", tags: ["Hackathon", "Full Stack"] }
            ].map((work, i) => (
              <div key={i} className="bg-card p-6 brutalist-border brutalist-shadow transition-brutalist hover:bg-accent group">
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 py-1 border border-foreground group-hover:border-black group-hover:text-black font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-black">{work.title}</h3>
                <h4 className="text-sm opacity-70 mb-4 group-hover:text-black font-bold">{work.sub}</h4>
                <p className="group-hover:text-black">{work.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold brutalist-border border-x-0 border-t-0 pb-4 flex items-center gap-4">
            <span className="text-accent">04.</span> // TECHNICAL_SKILLS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 brutalist-border">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-foreground pb-2">DEVELOPMENT</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Node.js", "Python", "Go"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm brutalist-border hover:bg-accent hover:text-black cursor-default transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-6 brutalist-border">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-foreground pb-2">INFRASTRUCTURE</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Redis", "Docker", "AWS", "Vercel", "CI/CD"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm brutalist-border hover:bg-accent hover:text-black cursor-default transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 brutalist-border">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-foreground pb-2">CONCEPTS & TOOLS</h3>
              <div className="flex flex-wrap gap-2">
                {["System Design", "Agile / Scrum", "Figma", "Git", "Operations", "Product Strategy"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm brutalist-border hover:bg-accent hover:text-black cursor-default transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Creative / Athletics */}
        <section id="creative" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold brutalist-border border-x-0 border-t-0 pb-4 flex items-center gap-4">
            <span className="text-accent">05.</span> // CREATIVE_&_ATHLETICS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 brutalist-border border-l-4 border-l-accent bg-card">
              <h3 className="text-xl font-bold mb-4">VIDEO_EDITING</h3>
              <p>Professional grade video editing for marketing campaigns and independent creative projects. Mastering flow, pacing, and visual storytelling.</p>
            </div>
            <div className="p-8 brutalist-border border-l-4 border-l-accent bg-card">
              <h3 className="text-xl font-bold mb-4">ATHLETICS</h3>
              <p>Competitive sports achievements demonstrating discipline, teamwork, and continuous self-improvement outside of the terminal.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-8 scroll-mt-24 max-w-2xl">
          <h2 className="text-3xl font-bold brutalist-border border-x-0 border-t-0 pb-4 flex items-center gap-4">
            <span className="text-accent">06.</span> // INITIALIZE_CONTACT
          </h2>
          <form className="space-y-6 bg-card p-8 brutalist-border brutalist-shadow" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="block text-sm font-bold">&gt; NAME</label>
              <input type="text" className="w-full bg-background brutalist-border p-4 focus:outline-none focus:ring-2 focus:ring-accent transition-colors" placeholder="Enter name..." />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold">&gt; EMAIL</label>
              <input type="email" className="w-full bg-background brutalist-border p-4 focus:outline-none focus:ring-2 focus:ring-accent transition-colors" placeholder="Enter email..." />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold">&gt; MESSAGE</label>
              <textarea rows={5} className="w-full bg-background brutalist-border p-4 focus:outline-none focus:ring-2 focus:ring-accent transition-colors" placeholder="Enter message..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-accent text-black font-bold brutalist-border transition-brutalist hover:bg-foreground hover:text-background active:scale-[0.98]">
              [ SUBMIT_TRANSMISSION ]
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="brutalist-border border-x-0 border-b-0 p-8 mt-20 bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold">© {new Date().getFullYear()} // ALL_RIGHTS_RESERVED</div>
          <div className="flex gap-4">
            <a href="#" className="p-2 brutalist-border hover:bg-accent hover:text-black transition-colors"><Globe size={20} /></a>
            <a href="#" className="p-2 brutalist-border hover:bg-accent hover:text-black transition-colors"><Briefcase size={20} /></a>
            <a href="#" className="p-2 brutalist-border hover:bg-accent hover:text-black transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
