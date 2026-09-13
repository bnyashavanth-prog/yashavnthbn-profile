"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ConstellationSVG = ({ className }: { className?: string }) => (
  <svg className={`pointer-events-none ${className || ""}`} viewBox="0 0 500 600">
    <g stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.3">
      <path d="M100,100 L250,250 L400,150" className="draw-line" />
      <path d="M250,250 L150,450 L300,500 L400,150" className="draw-line" />
      <path d="M400,150 L450,300 L300,500" className="draw-line" />
      <path d="M100,100 L50,250 L150,450" className="draw-line" />
    </g>
    <g fill="var(--accent)">
      <circle cx="100" cy="100" r="3" className="pulse-dot" style={{animationDelay: "0s"}} />
      <circle cx="400" cy="150" r="3" className="pulse-dot" style={{animationDelay: "0.2s"}} />
      <circle cx="150" cy="450" r="3" className="pulse-dot" style={{animationDelay: "0.4s"}} />
      <circle cx="300" cy="500" r="3" className="pulse-dot" style={{animationDelay: "0.6s"}} />
      <circle cx="450" cy="300" r="3" className="pulse-dot" style={{animationDelay: "0.8s"}} />
      <circle cx="50" cy="250" r="3" className="pulse-dot" style={{animationDelay: "1s"}} />
      <circle cx="250" cy="250" r="5" className="opacity-80" />
    </g>
    <g fill="var(--accent)" fontSize="11" opacity="0.8" className="tracking-widest font-mono">
      <text x="110" y="95">[ PRODUCT ]</text>
      <text x="310" y="145">[ STRATEGY ]</text>
      <text x="160" y="445">[ SYSTEMS ]</text>
      <text x="310" y="495">[ TECHNOLOGY ]</text>
    </g>
  </svg>
);

const ButtonsAndStats = () => (
  <>
    <div className="flex flex-wrap gap-4 pt-4 fade-in-up" style={{ animationDelay: "1.1s" }}>
      <a href="#work" className="px-[24px] py-[12px] rounded-full bg-[var(--accent)] text-[#0A0908] font-bold focus-ring hover:bg-[#F5A623]/90 transition-colors no-underline flex items-center justify-center gap-2">
        &rarr; View My Work
      </a>
      <a href="#contact" className="px-[24px] py-[12px] rounded-full border border-[var(--accent)] text-[var(--primary)] hover:bg-[#F5A623]/10 focus-ring transition-colors no-underline flex items-center justify-center">
        Get In Touch
      </a>
    </div>
    <div className="flex flex-wrap gap-[40px] pt-12 fade-in-up" style={{ animationDelay: "1.3s" }}>
      <div className="flex flex-col gap-[4px] border-l-2 border-[var(--accent)] pl-[16px] py-[4px]">
        <div className="text-[var(--primary)] text-[28px] font-bold leading-none font-sans">5+</div>
        <div className="text-[var(--secondary)] text-[12px] uppercase font-mono">Projects Built</div>
      </div>
      <div className="flex flex-col gap-[4px] border-l-2 border-[var(--accent)] pl-[16px] py-[4px]">
        <div className="text-[var(--primary)] text-[28px] font-bold leading-none font-sans">3+</div>
        <div className="text-[var(--secondary)] text-[12px] uppercase font-mono">Years Experience</div>
      </div>
      <div className="flex flex-col gap-[4px] border-l-2 border-[var(--accent)] pl-[16px] py-[4px]">
        <div className="text-[var(--primary)] text-[28px] font-bold leading-none font-sans">&infin;</div>
        <div className="text-[var(--secondary)] text-[12px] uppercase font-mono">Learning Always</div>
      </div>
    </div>
  </>
);

export default function Home() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("FULL STACK");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US"));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

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
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  const terminalLinks = ["home", "about", "work", "skills", "contact"];
  const standardLinks = ["about", "yvb", "work", "skills", "creative", "contact"];
  
  const filters = ["FULL STACK", "SAAS", "ERP", "AI", "RESEARCH", "HACKATHON"];

  const projects = [
    { id: "01", category: "SAAS", title: "No-Due Portal", subcat: "No Due Clearance Management System", desc: "Multi-tenant SaaS that digitizes student No Due Certificate workflows, connecting faculty, coordinators, library, accounts, HODs, and administration with automated dues, payments, approvals, and PDF certificates." },
    { id: "02", category: "ERP", title: "AcadOps ERP", subcat: "Engineering College ERP", desc: "Governance-focused ERP for managing admissions, academics, attendance, internal assessments, examinations, mentorship, results, role-based access, and institutional workflows." },
    { id: "03", category: "AI", title: "Neuro Insight", subcat: "AI Research Tool", desc: "Advanced data processing pipeline utilizing transformer models for large scale text analysis and automated insight generation." },
    { id: "04", category: "HACKATHON", title: "Chain Vote", subcat: "Hackathon Winner", desc: "Decentralized voting platform built on Ethereum to ensure tamper-proof elections for university councils." }
  ];

  const filteredProjects = activeFilter === "FULL STACK" ? projects : projects.filter(p => p.category === activeFilter);
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <div className="bg-[var(--background)] min-h-screen text-[var(--primary)] font-sans selection:bg-[#F5A623] selection:text-[#0A0908]">
      
      {/* Decorative vertical label on right edge */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 vertical-text text-[var(--secondary)] text-[10px] uppercase tracking-[0.2em] hidden xl:block opacity-60 pointer-events-none z-0 font-mono">
        / YASHAVNTH BN &mdash; PORTFOLIO /
      </div>

      {/* GLOBAL NAV */}
      <nav className={`fixed top-0 left-0 w-full z-[100] h-[72px] transition-colors duration-300 ${isScrolled ? 'bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]' : 'bg-transparent'} px-6 md:px-[32px] flex justify-between items-center text-[13px] font-mono`}>
        {!isScrolled ? (
          <>
            <div className="flex-1 hidden lg:block text-[var(--secondary)]">
              <span className="text-[var(--accent)] font-bold mr-2">&#10095;</span>yashavnth@portfolio:~
            </div>
            <div className="lg:hidden flex-1 font-bold text-[var(--accent)]">&#10095; menu</div>
            <div className="hidden lg:flex flex-1 justify-center items-center gap-3 text-[var(--secondary)]">
              {terminalLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a href={`#${link}`} className={`focus-ring capitalize transition-colors pb-1 no-underline ${activeSection === link ? "border-b-2 border-[var(--accent)] text-[var(--primary)]" : "hover:text-[var(--primary)] border-b-2 border-transparent"}`}>
                    {link}
                  </a>
                  {index < terminalLinks.length - 1 && <span className="text-[var(--secondary)] opacity-50">&middot;</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="flex-1 flex justify-end items-center gap-2 text-[var(--secondary)]">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot"></div>
              <span className="hidden md:inline">STATUS: ONLINE</span>
              <span className="ml-4 w-auto min-w-[85px] text-right whitespace-nowrap">{time}</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 flex items-center font-bold text-[var(--primary)] text-[16px] tracking-tight font-sans">
              Yashavnth BN.
            </div>
            <div className="hidden lg:flex flex-[2] justify-center items-center gap-4 text-[var(--secondary)]">
              {standardLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <a href={`#${link}`} className={`focus-ring capitalize transition-colors pb-1 no-underline ${activeSection === link ? "border-b-2 border-[var(--accent)] text-[var(--primary)]" : "hover:text-[var(--primary)] border-b-2 border-transparent"}`}>
                    {link === 'yvb' ? 'YVB&Co' : link}
                  </a>
                  {index < standardLinks.length - 1 && <span className="text-[var(--secondary)] opacity-50">&middot;</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="flex-1 flex justify-end items-center">
              <button className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors p-2 rounded-md focus-ring">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              </button>
            </div>
          </>
        )}
      </nav>

      <main className="w-full max-w-6xl mx-auto px-6 pt-[72px] pb-[96px] relative z-10">
        
        {/* 1. HERO */}
        <section id="home" className="grid lg:grid-cols-2 gap-12 items-center py-[80px] lg:min-h-[85vh]">
          <div className="space-y-6">
            <div className="text-[var(--secondary)] text-sm fade-in-up font-mono" style={{ animationDelay: "0.1s" }}>
              // BUILDING DIGITAL SOLUTIONS
            </div>
            
            <h1 className="text-[60px] md:text-[70px] font-bold leading-[1.05] tracking-tight">
              <div className="text-[var(--primary)] fade-in-up" style={{ animationDelay: "0.3s" }}>Yashavnth</div>
              <div className="text-[var(--accent)] fade-in-up" style={{ animationDelay: "0.5s" }}>BN</div>
            </h1>
            
            <div className="flex items-center gap-3 text-[12px] md:text-[14px] fade-in-up text-[var(--secondary)] tracking-widest font-mono" style={{ animationDelay: "0.7s" }}>
              <span className="text-[var(--accent)] text-[10px]">&#9679;</span>
              COO &bull; SOFTWARE DEVELOPER &bull; PRODUCT BUILDER
            </div>
            
            <p className="text-[var(--secondary)] text-[16px] max-w-md leading-relaxed fade-in-up" style={{ animationDelay: "0.9s" }}>
              I build scalable web applications, solve real-world problems and turn ideas into products that make an impact.
            </p>
            
            <ButtonsAndStats />
          </div>
          
          <div className="relative fade-in w-full h-full flex justify-center lg:justify-end items-center min-h-[400px]" style={{ animationDelay: "1.5s" }}>
            <ConstellationSVG className="absolute inset-0 w-full h-full z-0" />
            <div className="w-[340px] h-[440px] max-w-full bg-[var(--card)] rounded-[20px] border border-[var(--border)] relative overflow-hidden flex items-center justify-center shrink-0 z-10 shadow-2xl">
              <img src="/portrait.png" alt="Yashavnth BN" className="absolute inset-0 w-full h-full object-cover object-[75%_top] opacity-90 mix-blend-lighten" />
            </div>
          </div>
        </section>

        {/* 2. ABOUT */}
        <section id="about" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32 py-[64px]">
          <div className="space-y-6">
            <div className="text-[var(--secondary)] text-sm font-mono">
              // ABOUT ME
            </div>
            
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8">
              Who I Am
            </h2>

            <div className="space-y-6 text-[var(--secondary)] leading-relaxed text-[16px]">
              <p className="font-bold text-[18px] text-[var(--primary)] border-l-2 border-[var(--accent)] pl-[20px]">
                I'm a Computer Science &amp; Engineering student pursuing my Bachelor of Engineering at Maharaja Institute of Technology, Mysore, currently maintaining an 8.1 CGPA.
              </p>
              <p>
                As a Software Developer, I have a growing interest in Software Testing. I have hands-on experience with functional testing, bug identification, and API testing to ensure robust deployments.
              </p>
              <p>
                I've built and shipped real-world products end-to-end &mdash; from architecture to deployment &mdash; including complex ERP systems and student platforms. I am deeply interested in the full software lifecycle and optimizing systems for actual users.
              </p>
            </div>
            
            <ButtonsAndStats />
          </div>
          
          <div className="relative fade-in w-full h-full flex justify-center lg:justify-end items-center min-h-[400px]">
            <ConstellationSVG className="absolute inset-0 w-full h-full z-0" />
            <div className="w-[340px] h-[440px] max-w-full bg-[var(--card)] rounded-[20px] border border-[var(--border)] relative overflow-hidden flex items-center justify-center shrink-0 z-10 shadow-2xl">
              <img src="/portrait.png" alt="Yashavnth BN" className="absolute inset-0 w-full h-full object-cover object-[75%_top] opacity-90 mix-blend-lighten" />
            </div>
          </div>
        </section>

        {/* 3. YVB&CO */}
        <section id="yvb" className="scroll-mt-32 py-[64px]">
          <div className="bg-[var(--card)] rounded-[20px] p-[32px] md:p-[48px] border border-[var(--border)] flex flex-col lg:flex-row gap-12 justify-between">
            <div className="flex-1 space-y-6">
              <div className="text-[var(--accent)] text-sm font-mono tracking-widest uppercase">
                PARTNER STUDIO
              </div>
              <h2 className="text-[40px] md:text-[56px] font-bold text-[var(--primary)] leading-none">
                YVB&amp;CO
              </h2>
              <div className="text-[var(--primary)] font-bold text-[18px] tracking-widest">
                ENGINEER YOUR VISION.
              </div>
              <p className="text-[var(--secondary)] leading-relaxed text-[16px] max-w-lg">
                YVB&amp;Co is an independent technology studio based in India, operating globally. We're a team of six engineers and designers building websites, apps, ERP systems, and tools around the way businesses actually work &mdash; not the other way around. I serve as COO, leading the company operations.
              </p>
              <div className="pt-4">
                <a href="#" className="inline-flex items-center gap-2 px-[24px] py-[12px] bg-[var(--primary)] text-[#0A0908] font-bold rounded-full hover:bg-[var(--secondary)] transition-colors focus-ring no-underline">
                  VISIT YVB&amp;CO &nearr;
                </a>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="border border-[var(--border)] rounded-[16px] p-[24px] flex flex-col justify-center bg-[#0A0908]/50">
                <div className="text-[32px] font-bold text-[var(--primary)] font-mono mb-2">02</div>
                <div className="text-[12px] text-[var(--secondary)] uppercase tracking-wider font-mono">&mdash; CORE SYSTEMS DEPLOYED</div>
              </div>
              <div className="border border-[var(--border)] rounded-[16px] p-[24px] flex flex-col justify-center bg-[#0A0908]/50">
                <div className="text-[32px] font-bold text-[var(--primary)] font-mono mb-2">06+</div>
                <div className="text-[12px] text-[var(--secondary)] uppercase tracking-wider font-mono">&mdash; ENGINEERS &amp; DESIGNERS</div>
              </div>
              <div className="border border-[var(--border)] rounded-[16px] p-[24px] flex flex-col justify-center bg-[#0A0908]/50">
                <div className="text-[32px] font-bold text-[var(--primary)] font-mono mb-2">100%</div>
                <div className="text-[12px] text-[var(--secondary)] uppercase tracking-wider font-mono">&mdash; INDEPENDENT &amp; SELF-FUNDED</div>
              </div>
              <div className="border border-[var(--border)] rounded-[16px] p-[24px] flex flex-col justify-center bg-[#0A0908]/50">
                <div className="text-[32px] font-bold text-[var(--primary)] font-mono mb-2">IN</div>
                <div className="text-[12px] text-[var(--secondary)] uppercase tracking-wider font-mono">&mdash; BASED IN INDIA</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORK */}
        <section id="work" className="scroll-mt-32 py-[64px]">
          <div className="mb-[40px]">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8">
              Building systems that solve real-world problems.
            </h2>
            <div className="flex flex-wrap gap-[12px]">
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-[16px] py-[8px] rounded-full text-[12px] font-mono focus-ring transition-colors border ${
                    activeFilter === filter 
                    ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10" 
                    : "border-[var(--secondary)] text-[var(--secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] bg-transparent"
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
                className={`bg-[var(--card)] rounded-[20px] p-[32px] border transition-all duration-150 hover:-translate-y-1 flex flex-col group cursor-pointer ${project.id === "02" ? "border-[var(--accent)]" : "border-[var(--border)] hover:border-[var(--accent)]"}`}
              >
                <div className="flex justify-between items-start mb-[48px]">
                  <div className="text-[16px] text-[var(--secondary)] font-mono">{project.id}</div>
                  <div className={`w-[36px] h-[36px] rounded-full border flex items-center justify-center transition-colors ${project.id === "02" ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--secondary)] text-[var(--secondary)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </div>
                
                <h3 className="text-[28px] font-bold mb-[8px] text-[var(--primary)]">{project.title}</h3>
                <p className="text-[14px] text-[var(--accent)] mb-[24px] tracking-wide uppercase font-mono">{project.subcat}</p>
                <p className="text-[var(--secondary)] text-[15px] flex-1 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SKILLS */}
        <section id="skills" className="scroll-mt-32 py-[64px] grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
          <div>
            <div className="mb-[40px]">
              <div className="text-[var(--accent)] text-sm mb-4 font-mono uppercase tracking-widest">
                TECHNICAL ARSENAL
              </div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)]">
                Tools, technologies, and creative disciplines.
              </h2>
            </div>

            <div className="bg-[var(--card)] rounded-[20px] p-[32px] border border-[var(--border)] flex flex-col gap-[24px]">
              <div className="text-[var(--primary)] font-bold text-[16px] uppercase tracking-wider">
                DEVELOPMENT
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {["C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Node.js", "NestJS"].map(skill => (
                  <span key={skill} className="px-[16px] py-[8px] bg-[#0A0908] border border-[var(--border)] rounded-full text-[13px] text-[var(--primary)] font-mono">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-[var(--card)] rounded-[20px] p-[32px] border border-[var(--border)] flex flex-col gap-[24px] mt-[24px]">
              <div className="text-[var(--primary)] font-bold text-[16px] uppercase tracking-wider">
                TOOLS &amp; PLATFORMS
              </div>
              <div className="flex flex-wrap gap-[10px]">
                {["Git", "Vercel", "Figma", "Postman", "MongoDB", "PostgreSQL", "Docker"].map(skill => (
                  <span key={skill} className="px-[16px] py-[8px] bg-[#0A0908] border border-[var(--border)] rounded-full text-[13px] text-[var(--primary)] font-mono">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-full min-h-[400px] hidden lg:flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 400">
              <g stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.3">
                <path d="M50,100 L250,200 L150,350 Z" className="draw-line" />
                <path d="M150,350 L50,100" className="draw-line" />
              </g>
              <g fill="var(--accent)">
                <circle cx="50" cy="100" r="3" className="pulse-dot" />
                <circle cx="250" cy="200" r="3" className="pulse-dot" style={{animationDelay: "0.4s"}} />
                <circle cx="150" cy="350" r="3" className="pulse-dot" style={{animationDelay: "0.8s"}} />
                <circle cx="150" cy="216" r="5" className="opacity-80" />
              </g>
            </svg>
          </div>
        </section>

        {/* 6. CONTACT */}
        <section id="contact" className="scroll-mt-32 py-[64px] flex flex-col items-center">
          <div className="text-center mb-[24px]">
            <h2 className="text-[36px] md:text-[56px] font-bold text-[var(--primary)] mb-[16px] uppercase">
              LET'S BUILD <span className="text-[var(--accent)]">SOMETHING USEFUL.</span>
            </h2>
            <p className="text-[var(--secondary)] text-[16px] max-w-xl mx-auto leading-relaxed">
              Have an idea, product or technology problem? Let's talk.
            </p>
          </div>
          
          <div className="w-full flex justify-center h-[80px] mb-[24px]">
            <svg width="40" height="80" viewBox="0 0 40 80">
              <line x1="20" y1="0" x2="20" y2="80" stroke="var(--accent)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" className="draw-line" />
              <circle cx="20" cy="40" r="4" fill="var(--accent)" className="pulse-dot" />
            </svg>
          </div>

          <div className="w-full max-w-2xl bg-[var(--card)] rounded-[24px] p-[32px] md:p-[48px] border border-[var(--border)]">
            <form className="flex flex-col gap-[24px]" onSubmit={e => e.preventDefault()}>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] text-[var(--secondary)] font-mono">NAME</label>
                <input type="text" placeholder="John Doe" className="w-full bg-[#0A0908] border border-[rgba(255,255,255,0.08)] focus:border-[var(--accent)] rounded-[12px] px-[16px] py-[16px] text-[15px] focus-ring outline-none transition-colors text-[var(--primary)] placeholder-[var(--secondary)]/40" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] text-[var(--secondary)] font-mono">EMAIL</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-[#0A0908] border border-[rgba(255,255,255,0.08)] focus:border-[var(--accent)] rounded-[12px] px-[16px] py-[16px] text-[15px] focus-ring outline-none transition-colors text-[var(--primary)] placeholder-[var(--secondary)]/40" />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] text-[var(--secondary)] font-mono">MESSAGE</label>
                <textarea placeholder="How can I help you?" className="w-full bg-[#0A0908] border border-[rgba(255,255,255,0.08)] focus:border-[var(--accent)] rounded-[12px] px-[16px] py-[16px] text-[15px] focus-ring outline-none transition-colors text-[var(--primary)] min-h-[140px] resize-y placeholder-[var(--secondary)]/40"></textarea>
              </div>
              
              <button className="w-full py-[16px] mt-[16px] bg-[var(--accent)] text-[#0A0908] font-bold text-[16px] rounded-full focus-ring hover:bg-[#F5A623]/90 transition-colors flex justify-center items-center gap-2 font-mono">
                &rarr; Send Message
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
