"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("FULL STACK");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => {
      clearInterval(timer);
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  const navLinks = ["home", "about", "work", "skills", "contact"];
  
  const filters = ["FULL STACK", "SAAS", "ERP", "AI", "HACKATHON"];

  const projects = [
    { id: "01", category: "FULL STACK", title: "Enterprise ERP", subcat: "Architecture & Infrastructure", desc: "A comprehensive monolithic architecture for supply chain logistics with real-time tracking.", tags: ["React", "Node.js", "PostgreSQL"] },
    { id: "02", category: "AI", title: "Predictive Analytics", subcat: "Machine Learning Platform", desc: "SaaS platform leveraging machine learning models for user behavior prediction and clustering.", tags: ["Python", "AWS", "Next.js"] },
    { id: "03", category: "SAAS", title: "Fintech Platform", subcat: "Financial Engine", desc: "Peer-to-peer lending engine built for high-throughput financial transactions.", tags: ["Go", "Redis", "Docker"] },
    { id: "04", category: "ERP", title: "Ops Studio", subcat: "Workflow Automation", desc: "Internal tooling for operational management and automated reporting pipelines.", tags: ["TypeScript", "Express", "SQL"] }
  ];

  const filteredProjects = activeFilter === "FULL STACK" ? projects : projects.filter(p => p.category === activeFilter);
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--primary)] font-mono selection:bg-[#F2A93B] selection:text-[#0B0B0D]">
      
      {/* Decorative vertical label on right edge */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 vertical-text text-[var(--secondary)] text-[10px] uppercase tracking-[0.2em] hidden xl:block opacity-60 pointer-events-none z-0">
        / YASHAVNTH BN &mdash; PORTFOLIO /
      </div>

      {/* GLOBAL NAV */}
      <nav className="sticky top-0 z-[100] w-full h-[72px] bg-[var(--background)] border-b border-[var(--border)] px-[32px] flex justify-between items-center text-[13px]">
        <div className="flex-1 hidden lg:block text-[var(--secondary)]">
          <span className="text-[#F2A93B] font-bold mr-2">&gt;</span>yashavnth@portfolio:~
        </div>
        
        <div className="lg:hidden flex-1 font-bold text-[#F2A93B]">
          &gt; menu
        </div>

        <div className="hidden lg:flex flex-1 justify-center items-center gap-3 text-[var(--secondary)]">
          {navLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a
                href={`#${link}`}
                className={`focus-ring capitalize transition-colors pb-1 no-underline ${
                  activeSection === link
                    ? "border-b-2 border-[#F2A93B] text-[var(--primary)]"
                    : "hover:text-[var(--primary)] border-b-2 border-transparent"
                }`}
              >
                {link}
              </a>
              {index < navLinks.length - 1 && <span className="text-[var(--secondary)] opacity-50">&middot;</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-2 text-[var(--secondary)]">
          <div className="w-2 h-2 rounded-full bg-[#F2A93B] pulse-dot"></div>
          <span className="hidden md:inline">STATUS: ONLINE</span>
          <span className="ml-4 w-auto min-w-[75px] text-right whitespace-nowrap">{time}</span>
        </div>
      </nav>

      <main className="w-full max-w-6xl mx-auto px-6 pb-[96px] relative z-10">
        
        {/* 1. HERO */}
        <section id="home" className="grid lg:grid-cols-2 gap-12 items-center py-[80px] lg:min-h-[85vh]">
          <div className="space-y-6">
            <div className="text-[var(--secondary)] text-sm fade-in-up" style={{ animationDelay: "0.1s" }}>
              // BUILDING DIGITAL SOLUTIONS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              <div className="text-[var(--primary)] fade-in-up" style={{ animationDelay: "0.3s" }}>Yashavnth</div>
              <div className="text-[#F2A93B] fade-in-up" style={{ animationDelay: "0.5s" }}>BN</div>
            </h1>
            
            <div className="flex items-center gap-3 text-sm md:text-base fade-in-up text-[var(--secondary)]" style={{ animationDelay: "0.7s" }}>
              <span className="text-[#F2A93B] text-[10px]">&#9679;</span>
              COO &middot; SOFTWARE DEVELOPER &middot; PRODUCT BUILDER
            </div>
            
            <p className="text-[var(--secondary)] text-[16px] max-w-md leading-relaxed fade-in-up" style={{ animationDelay: "0.9s" }}>
              I build scalable web applications, solve real-world problems and turn ideas into products that make an impact.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 fade-in-up" style={{ animationDelay: "1.1s" }}>
              <a href="#work" className="px-[24px] py-[12px] rounded-full bg-[#F2A93B] text-[#0B0B0D] font-bold focus-ring hover:bg-[#F2A93B]/90 transition-colors no-underline flex items-center justify-center gap-2">
                &rarr; View My Work
              </a>
              <a href="#contact" className="px-[24px] py-[12px] rounded-full border border-[#F2A93B] text-[var(--primary)] hover:bg-[#F2A93B]/10 focus-ring transition-colors no-underline flex items-center justify-center">
                Get In Touch
              </a>
            </div>
            
            <div className="flex flex-wrap gap-[40px] pt-12 fade-in-up" style={{ animationDelay: "1.3s" }}>
              <div className="flex flex-col gap-[4px] border-l-2 border-[#F2A93B] pl-[16px] py-[4px]">
                <div className="text-[var(--primary)] text-[28px] font-bold leading-none">5+</div>
                <div className="text-[var(--secondary)] text-[12px] uppercase">Projects Built</div>
              </div>
              <div className="flex flex-col gap-[4px] border-l-2 border-[#F2A93B] pl-[16px] py-[4px]">
                <div className="text-[var(--primary)] text-[28px] font-bold leading-none">3+</div>
                <div className="text-[var(--secondary)] text-[12px] uppercase">Years Experience</div>
              </div>
              <div className="flex flex-col gap-[4px] border-l-2 border-[#F2A93B] pl-[16px] py-[4px]">
                <div className="text-[var(--primary)] text-[28px] font-bold leading-none">&infin;</div>
                <div className="text-[var(--secondary)] text-[12px] uppercase">Learning Always</div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in w-full h-full flex justify-center lg:justify-end items-center min-h-[400px]" style={{ animationDelay: "1.5s" }}>
            {/* Constellation Network Graphic */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 600">
              <g stroke="#F2A93B" strokeWidth="1" fill="none" opacity="0.3">
                <path d="M100,100 L250,250 L400,150" className="draw-line" />
                <path d="M250,250 L150,450 L300,500 L400,150" className="draw-line" />
                <path d="M400,150 L450,300 L300,500" className="draw-line" />
                <path d="M100,100 L50,250 L150,450" className="draw-line" />
              </g>
              <g fill="#F2A93B">
                <circle cx="100" cy="100" r="3" className="pulse-dot" style={{animationDelay: "0s"}} />
                <circle cx="400" cy="150" r="3" className="pulse-dot" style={{animationDelay: "0.2s"}} />
                <circle cx="150" cy="450" r="3" className="pulse-dot" style={{animationDelay: "0.4s"}} />
                <circle cx="300" cy="500" r="3" className="pulse-dot" style={{animationDelay: "0.6s"}} />
                <circle cx="450" cy="300" r="3" className="pulse-dot" style={{animationDelay: "0.8s"}} />
                <circle cx="50" cy="250" r="3" className="pulse-dot" style={{animationDelay: "1s"}} />
                <circle cx="250" cy="250" r="5" className="opacity-80" />
              </g>
              <g fill="#F2A93B" fontSize="11" opacity="0.8" className="tracking-widest">
                <text x="110" y="95">[ PRODUCT ]</text>
                <text x="310" y="145">[ STRATEGY ]</text>
                <text x="160" y="445">[ SYSTEMS ]</text>
                <text x="310" y="495">[ TECHNOLOGY ]</text>
              </g>
            </svg>
            
            {/* Portrait inside the network */}
            <div className="w-[340px] h-[440px] max-w-full bg-[var(--card)] rounded-[24px] border border-[var(--border)] relative overflow-hidden flex items-center justify-center shrink-0 z-10 shadow-2xl">
              <img src="/portrait.png" alt="Yashavnth BN" className="absolute inset-0 w-full h-full object-cover object-[75%_top] opacity-90 mix-blend-lighten" />
            </div>
          </div>
        </section>

        {/* 2. ABOUT */}
        <section id="about" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 py-[64px]">
          <div className="space-y-6">
            <div className="text-[var(--secondary)] text-sm">
              // ABOUT ME
            </div>
            
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8">
              Who I Am
            </h2>

            <div className="border-l-2 border-[#F2A93B] pl-[20px] space-y-6 text-[var(--secondary)] leading-relaxed text-[15px]">
              <p>
                I'm a Computer Science & Engineering student and full-stack developer with hands-on experience building SaaS platforms, ERP systems, and AI-driven tools.
              </p>
              <p>
                I've built and shipped real-world products end-to-end &mdash; from architecture to deployment &mdash; while also serving as COO at a software studio, balancing engineering with business operations.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-[10px] pt-4">
              {["Full-Stack", "ERP", "SaaS", "AI"].map(tag => (
                <span key={tag} className="px-[16px] py-[6px] border border-[#F2A93B] rounded-full text-[12px] text-[#F2A93B]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
             {/* Secondary Constellation Motif */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <g stroke="#F2A93B" strokeWidth="1" fill="none" opacity="0.2">
                <path d="M50,200 L200,50 L350,200 L200,350 Z" className="draw-line" />
                <path d="M200,50 L200,350" className="draw-line" />
                <path d="M50,200 L350,200" className="draw-line" />
              </g>
              <g fill="#F2A93B">
                <circle cx="200" cy="50" r="3" className="pulse-dot" />
                <circle cx="350" cy="200" r="3" className="pulse-dot" style={{animationDelay: "0.3s"}} />
                <circle cx="200" cy="350" r="3" className="pulse-dot" style={{animationDelay: "0.6s"}} />
                <circle cx="50" cy="200" r="3" className="pulse-dot" style={{animationDelay: "0.9s"}} />
                <circle cx="200" cy="200" r="5" className="opacity-80" />
              </g>
              <g fill="#F2A93B" fontSize="11" opacity="0.8" className="tracking-widest">
                <text x="210" y="215">[ PROFILE ]</text>
              </g>
            </svg>
          </div>
        </section>

        {/* 3. WORK */}
        <section id="work" className="scroll-mt-24 py-[64px]">
          <div className="mb-[40px]">
            <div className="text-[var(--secondary)] text-sm mb-4">
              // SELECTED WORK
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8">
              Things I've Built
            </h2>
            <div className="flex flex-wrap gap-[12px]">
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-[16px] py-[8px] rounded-full text-[12px] focus-ring transition-colors border ${
                    activeFilter === filter 
                    ? "border-[#F2A93B] text-[#F2A93B] bg-[#F2A93B]/10" 
                    : "border-[var(--secondary)] text-[var(--secondary)] hover:border-[#F2A93B] hover:text-[#F2A93B] bg-transparent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-[24px]">
            {displayProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-[var(--card)] rounded-[20px] p-[32px] border border-[var(--border)] transition-all duration-150 hover:-translate-y-1 hover:border-[#F2A93B] flex flex-col group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-[48px]">
                  <div className="text-[16px] text-[var(--secondary)]">{project.id}</div>
                  <div className="w-[36px] h-[36px] rounded-full border border-[var(--secondary)] flex items-center justify-center text-[var(--secondary)] group-hover:border-[#F2A93B] group-hover:text-[#F2A93B] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </div>
                
                <h3 className="text-[28px] font-bold mb-[8px] text-[var(--primary)]">{project.title}</h3>
                <p className="text-[14px] text-[#F2A93B] mb-[24px] tracking-wide uppercase">{project.subcat}</p>
                <p className="text-[var(--secondary)] text-[15px] mb-[40px] flex-1 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-[8px] mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-[12px] py-[6px] bg-[#0B0B0D] rounded-[6px] text-[12px] text-[var(--secondary)] border border-[var(--border)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SKILLS */}
        <section id="skills" className="scroll-mt-24 py-[64px]">
          <div className="mb-[40px]">
            <div className="text-[var(--secondary)] text-sm mb-4">
              // TECHNICAL ARSENAL
            </div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8">
              Tools &amp; Technologies
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-[24px]">
            {/* Category Card 1 */}
            <div className="bg-[var(--card)] rounded-[20px] p-[32px] border border-[var(--border)] flex flex-col gap-[24px]">
              <div className="text-[#F2A93B] text-[14px] tracking-widest uppercase">
                DEVELOPMENT
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {["C", "C++", "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS"].map(skill => (
                  <span key={skill} className="px-[16px] py-[8px] bg-[#0B0B0D] border border-[var(--border)] rounded-[8px] text-[13px] text-[var(--primary)]">{skill}</span>
                ))}
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="bg-[var(--card)] rounded-[20px] p-[32px] border border-[var(--border)] flex flex-col gap-[24px]">
              <div className="text-[#F2A93B] text-[14px] tracking-widest uppercase">
                TOOLS &amp; PLATFORMS
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {["Git", "Vercel", "Figma", "Postman", "MongoDB", "PostgreSQL", "Docker", "AWS"].map(skill => (
                  <span key={skill} className="px-[16px] py-[8px] bg-[#0B0B0D] border border-[var(--border)] rounded-[8px] text-[13px] text-[var(--primary)]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTACT */}
        <section id="contact" className="scroll-mt-24 py-[64px] flex flex-col items-center">
          <div className="text-center mb-[48px]">
            <h2 className="text-[36px] md:text-[48px] font-bold text-[var(--primary)] mb-[16px]">
              Let's Build Something <span className="text-[#F2A93B]">Great.</span>
            </h2>
            <p className="text-[var(--secondary)] text-[16px] max-w-xl mx-auto leading-relaxed">
              Got an idea, a product, or a technical problem? Let's talk it through.
            </p>
          </div>

          <div className="w-full max-w-2xl bg-[var(--card)] rounded-[24px] p-[32px] md:p-[48px] border border-[var(--border)]">
            <form className="flex flex-col gap-[24px]" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] text-[var(--secondary)]">$ name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-[#0B0B0D] border border-[rgba(245,241,234,0.15)] focus:border-[#F2A93B] rounded-[10px] px-[16px] py-[14px] text-[15px] focus-ring outline-none transition-colors text-[var(--primary)] placeholder-[var(--secondary)]/40" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px] text-[var(--secondary)]">$ email</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-[#0B0B0D] border border-[rgba(245,241,234,0.15)] focus:border-[#F2A93B] rounded-[10px] px-[16px] py-[14px] text-[15px] focus-ring outline-none transition-colors text-[var(--primary)] placeholder-[var(--secondary)]/40" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] text-[var(--secondary)]">$ message</label>
                <textarea placeholder="What are we building?" className="w-full bg-[#0B0B0D] border border-[rgba(245,241,234,0.15)] focus:border-[#F2A93B] rounded-[10px] px-[16px] py-[14px] text-[15px] focus-ring outline-none transition-colors text-[var(--primary)] min-h-[140px] resize-y placeholder-[var(--secondary)]/40"></textarea>
              </div>
              
              <button className="w-full py-[16px] mt-[16px] bg-[#F2A93B] text-[#0B0B0D] font-bold text-[16px] rounded-full focus-ring hover:bg-[#F2A93B]/90 transition-colors flex justify-center items-center gap-2">
                &rarr; Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-[48px] flex items-center justify-center gap-3 text-[12px] tracking-widest uppercase text-[var(--secondary)]">
            <span className="text-[#F2A93B] text-[10px]">&#9679;</span>
            STATUS: AVAILABLE FOR WORK
          </div>
        </section>

      </main>
    </div>
  );
}
