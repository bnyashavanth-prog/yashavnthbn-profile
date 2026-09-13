"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [skillsVisible, setSkillsVisible] = useState(false);
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
            if (entry.target.id === "skills") {
              setSkillsVisible(true);
            }
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
  
  const filters = ["FULL STACK", "SAAS", "ERP", "AI", "RESEARCH", "HACKATHON"];

  const projects = [
    { id: "01", category: "ERP", subcat: "Architecture & Infrastructure", title: "Enterprise ERP", desc: "A comprehensive monolithic architecture for supply chain logistics with real-time tracking.", tags: ["React", "Node.js", "PostgreSQL"] },
    { id: "02", category: "AI", subcat: "Machine Learning Platform", title: "Predictive Analytics", desc: "SaaS platform leveraging machine learning models for user behavior prediction and clustering.", tags: ["Python", "AWS", "Next.js"] },
    { id: "03", category: "SAAS", subcat: "Financial Engine", title: "Fintech Platform", desc: "Peer-to-peer lending engine built for high-throughput financial transactions.", tags: ["Go", "Redis", "Docker"] },
    { id: "04", category: "FULL STACK", subcat: "Workflow Automation", title: "Ops Studio", desc: "Internal tooling for operational management and automated reporting pipelines.", tags: ["TypeScript", "Express", "SQL"] }
  ];

  const filteredProjects = activeFilter === "FULL STACK" ? projects : projects.filter(p => p.category === activeFilter);
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <div className="bg-[#141210] min-h-screen text-[#F5F1EA] font-sans selection:bg-[#F0A94E] selection:text-[#141210]">
      {/* GLOBAL NAV - sticky, fixed height, full width */}
      <nav className="sticky top-0 z-[100] w-full h-[72px] bg-[#141210] border-b border-[rgba(245,241,234,0.1)] px-[32px] flex justify-between items-center text-sm font-mono">
        <div className="flex-1 hidden md:block text-[#F5F1EA]">
          <span className="text-[#F0A94E]">&gt;</span> yashavnth@portfolio:~
        </div>
        
        <div className="md:hidden flex-1 font-bold text-[#F0A94E]">
          &gt; menu
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`focus-ring capitalize transition-colors pb-1 no-underline ${
                activeSection === link
                  ? "border-b-2 border-[#F0A94E] text-[#F5F1EA]"
                  : "text-[#B8AFA3] hover:text-[#F5F1EA] border-b-2 border-transparent"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-2 text-xs md:text-sm text-[#B8AFA3]">
          <div className="w-2 h-2 rounded-full bg-[#F0A94E] pulse-dot"></div>
          <span className="hidden md:inline text-[#B8AFA3]">STATUS: ONLINE</span>
          <span className="ml-2 w-auto min-w-[65px] text-right text-[#B8AFA3] whitespace-nowrap">{time}</span>
        </div>
      </nav>

      {/* Padding top is applied naturally by sticky nav, but we keep some padding to separate content */}
      <main className="w-full max-w-6xl mx-auto px-6 pb-[96px]">
        
        {/* 1. HERO */}
        <section id="home" className="grid md:grid-cols-2 gap-12 items-center py-[64px]">
          <div className="space-y-6">
            <div className="font-mono text-[#B8AFA3] text-sm fade-in-up" style={{ animationDelay: "0.1s" }}>
              // building digital solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-sans leading-tight tracking-tight text-[#F5F1EA]">
              <div className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-transparent max-w-full sm:typewriter text-[#F5F1EA]">Yashavnth</div><br />
              <div className="text-[#F0A94E] fade-in-up" style={{ animationDelay: "1.1s" }}>BN.</div>
            </h1>
            
            <div className="flex items-center gap-3 font-mono text-sm md:text-base fade-in-up text-[#F5F1EA]" style={{ animationDelay: "1.3s" }}>
              <div className="w-2 h-2 rounded-full bg-[#F0A94E]"></div>
              COO · Software Developer · Product Builder
            </div>
            
            <p className="text-[#B8AFA3] text-lg max-w-md leading-relaxed fade-in-up font-sans" style={{ animationDelay: "1.5s" }}>
              I architect systems that scale, lead teams that ship, and build products that solve real problems. Blending deep technical expertise with operational strategy.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 fade-in-up" style={{ animationDelay: "1.7s" }}>
              <a href="#work" className="px-[24px] py-[12px] rounded-[20px] bg-[#F0A94E] text-[#141210] font-bold focus-ring hover:bg-[#F0A94E]/90 transition-colors no-underline font-sans flex items-center justify-center">
                &rarr; View My Work
              </a>
              <a href="#contact" className="px-[24px] py-[12px] rounded-[20px] border border-[rgba(245,241,234,0.1)] hover:border-[#F0A94E] text-[#F5F1EA] hover:text-[#F0A94E] focus-ring transition-colors no-underline font-sans flex items-center justify-center">
                Get In Touch
              </a>
            </div>
            
            <div className="flex flex-wrap gap-[40px] pt-12 fade-in-up" style={{ animationDelay: "1.9s" }}>
              <div className="flex flex-col gap-[4px] border-l-2 border-[#F0A94E] pl-[16px] py-[8px] pr-[16px]">
                <div className="text-[#F5F1EA] text-[24px] font-bold font-sans leading-none">5+</div>
                <div className="text-[#B8AFA3] font-mono text-[12px] uppercase">Projects Built</div>
              </div>
              <div className="flex flex-col gap-[4px] border-l-2 border-[#F0A94E] pl-[16px] py-[8px] pr-[16px]">
                <div className="text-[#F5F1EA] text-[24px] font-bold font-sans leading-none">3+</div>
                <div className="text-[#B8AFA3] font-mono text-[12px] uppercase">Years Exp</div>
              </div>
              <div className="flex flex-col gap-[4px] border-l-2 border-[#F0A94E] pl-[16px] py-[8px] pr-[16px]">
                <div className="text-[#F5F1EA] text-[24px] font-bold font-sans leading-none">&infin;</div>
                <div className="text-[#B8AFA3] font-mono text-[12px] uppercase">Learning Always</div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in w-full flex justify-center md:justify-end" style={{ animationDelay: "2.1s" }}>
            {/* Portrait fixed frame */}
            <div className="w-[380px] h-[480px] max-w-full bg-[#1C1916] rounded-[24px] border border-[rgba(245,241,234,0.1)] relative overflow-hidden flex items-center justify-center shrink-0">
              
              {/* Actual Portrait Photo using CSS cropping to focus on the right side of the mockup */}
              <img src="/portrait.png" alt="Yashavnth BN" className="absolute inset-0 w-full h-full object-cover object-[75%_top] opacity-90 mix-blend-lighten" />

              {/* Node Graph Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 480">
                <g stroke="rgba(240, 169, 78, 0.4)" strokeWidth="1" fill="none">
                  <path d="M90,90 L190,190 L290,140" />
                  <path d="M190,190 L140,340 L240,390 L290,140" />
                </g>
                <g fill="#F0A94E">
                  <circle cx="90" cy="90" r="4" className="pulse-dot" style={{animationDelay: "0s"}} />
                  <circle cx="290" cy="140" r="4" className="pulse-dot" style={{animationDelay: "0.2s"}} />
                  <circle cx="140" cy="340" r="4" className="pulse-dot" style={{animationDelay: "0.4s"}} />
                  <circle cx="240" cy="390" r="4" className="pulse-dot" style={{animationDelay: "0.6s"}} />
                  <circle cx="190" cy="190" r="6" />
                </g>
                <g fill="#F0A94E" fontSize="10" fontFamily="monospace" className="opacity-80">
                  <text x="100" y="93">[STRATEGY]</text>
                  <text x="300" y="143">[PRODUCT]</text>
                  <text x="50" y="343">[SYSTEMS]</text>
                  <text x="250" y="393">[TECHNOLOGY]</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* 2. ABOUT */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-start scroll-mt-24 py-[64px]">
          <div className="space-y-6">
            <div className="font-mono text-[#B8AFA3] text-sm">
              // about
            </div>
            <div className="border-l-2 border-[#F0A94E] pl-[16px] space-y-4 text-[#B8AFA3] font-sans leading-relaxed">
              <p>
                I am a technical leader passionate about the intersection of business strategy and software engineering. I started my journey writing code, but quickly realized that the best code solves operational bottlenecks.
              </p>
              <p>
                Currently, I split my time between overseeing operations at a scaling studio and getting my hands dirty with system architecture and full-stack development.
              </p>
              <p className="text-[#F5F1EA]">
                When I'm not in the terminal, I'm analyzing processes, editing videos, or optimizing my own athletic performance.
              </p>
            </div>
          </div>
          
          <div className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)] font-mono text-sm space-y-4">
            <div className="grid grid-cols-[90px_1fr] gap-x-2 gap-y-4">
              <div className="text-[#B8AFA3]">ROLE</div>
              <div className="text-[#F5F1EA]">: Chief Operating Officer / Developer</div>
              
              <div className="text-[#B8AFA3]">LOCATION</div>
              <div className="text-[#F5F1EA]">: Mysuru, India (Remote-friendly)</div>
              
              <div className="text-[#B8AFA3]">FOCUS</div>
              <div className="text-[#F5F1EA]">: SaaS, ERP, Infrastructure</div>
              
              <div className="text-[#B8AFA3]">STATUS</div>
              <div className="text-[#F0A94E]">: ALL_SYSTEMS_OPERATIONAL</div>
            </div>
          </div>
        </section>

        {/* 3. COMPANY */}
        <section id="company" className="scroll-mt-24 py-[64px]">
          <div className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)] transition-colors group">
            <div className="flex justify-between items-start mb-[16px]">
              <div className="px-[14px] py-[8px] border border-[#F0A94E] text-[#F0A94E] font-mono text-[13px] rounded-[10px] bg-[#221E1A]">
                CURRENT
              </div>
              <a href="#" className="font-mono text-[13px] text-[#B8AFA3] hover:text-[#F0A94E] hover:underline decoration-[#F0A94E] underline-offset-4 focus-ring rounded no-underline flex items-center gap-1">
                Visit <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
            
            <h3 className="text-[32px] font-bold font-sans text-[#F5F1EA] mb-1">YVB&Co</h3>
            <p className="text-[16px] text-[#F0A94E] mb-4 font-sans">Independent Studio / Chief Operating Officer</p>
            <p className="text-[#B8AFA3] max-w-3xl mb-8 font-sans leading-relaxed">
              Driving operational excellence and technical strategy for a suite of digital products. Managing a high-performance team to deliver scalable systems and B2B solutions across global markets.
            </p>
            
            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[20px] border-t border-[rgba(245,241,234,0.1)] pt-[24px]">
              <div>
                <div className="font-mono text-[12px] uppercase text-[#B8AFA3] mb-[6px]">SYSTEMS</div>
                <div className="font-sans text-[18px] font-bold text-[#F5F1EA]"><span className="text-[#F0A94E]">12+</span> Deployed</div>
              </div>
              <div>
                <div className="font-mono text-[12px] uppercase text-[#B8AFA3] mb-[6px]">TEAM</div>
                <div className="font-sans text-[18px] font-bold text-[#F5F1EA]"><span className="text-[#F0A94E]">15</span> Members</div>
              </div>
              <div>
                <div className="font-mono text-[12px] uppercase text-[#B8AFA3] mb-[6px]">STAGE</div>
                <div className="font-sans text-[18px] font-bold text-[#F5F1EA]">Seed</div>
              </div>
              <div>
                <div className="font-mono text-[12px] uppercase text-[#B8AFA3] mb-[6px]">IMPACT</div>
                <div className="font-sans text-[18px] font-bold text-[#F5F1EA]">Global</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORK */}
        <section id="work" className="scroll-mt-24 py-[64px]">
          <div className="mb-[32px]">
            <div className="font-mono text-[#B8AFA3] text-sm mb-4">
              // selected work
            </div>
            <h2 className="text-[28px] md:text-[36px] font-bold font-sans text-[#F5F1EA] mb-8 max-w-2xl leading-tight">
              Building systems that solve real-world problems.
            </h2>
            <div className="flex flex-wrap gap-[10px]">
              {filters.map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-[14px] py-[8px] rounded-[10px] font-mono text-[13px] border focus-ring transition-colors ${
                    activeFilter === filter 
                    ? "border-[#F0A94E] text-[#F0A94E] bg-[#221E1A]" 
                    : "border-[rgba(245,241,234,0.1)] text-[#B8AFA3] hover:border-[rgba(245,241,234,0.3)] bg-transparent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-[24px]">
            {displayProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)] transition-all duration-150 hover:-translate-y-1 hover:border-[#F0A94E] hover:bg-[#221E1A] flex flex-col group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-[48px]">
                  <div className="font-mono text-[14px] text-[#B8AFA3]">{project.id}</div>
                  <div className="w-[32px] h-[32px] rounded-full border border-[rgba(245,241,234,0.1)] flex items-center justify-center text-[#B8AFA3] group-hover:border-[#F0A94E] group-hover:text-[#F0A94E] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </div>
                
                <h3 className="text-[24px] font-bold font-sans mb-[8px] text-[#F5F1EA]">{project.title}</h3>
                <p className="text-[14px] text-[#F0A94E] mb-[16px] font-sans">{project.subcat}</p>
                <p className="text-[#B8AFA3] text-[15px] mb-[32px] flex-1 font-sans leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-[8px] mt-auto border-t border-[rgba(245,241,234,0.1)] pt-[24px]">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-[12px] py-[6px] bg-[#141210] rounded-[8px] text-[12px] font-mono text-[#F5F1EA] border border-[rgba(245,241,234,0.1)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SKILLS */}
        <section id="skills" className="scroll-mt-24 py-[64px]">
          <div className="mb-[32px]">
            <div className="font-mono text-[#B8AFA3] text-sm mb-4">
              // technical arsenal
            </div>
            <h2 className="text-[28px] md:text-[36px] font-bold font-sans text-[#F5F1EA] max-w-2xl leading-tight">
              Tools, technologies, and disciplines I work with.
            </h2>
          </div>

          <div className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)]">
            <div className="grid md:grid-cols-2 gap-y-[48px] gap-x-[32px]">
              
              <div className={`flex flex-col gap-[16px] ${skillsVisible ? "fade-in" : "opacity-0"}`}>
                <div className="font-sans font-bold text-[#F5F1EA] text-[15px]">Development</div>
                <div className="flex flex-wrap gap-[10px]">
                  {["TypeScript", "Python", "Go", "JavaScript", "React", "Next.js", "Node.js"].map(skill => (
                    <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] font-mono text-[#F5F1EA]">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className={`flex flex-col gap-[16px] ${skillsVisible ? "fade-in" : "opacity-0"}`} style={{animationDelay: "0.1s"}}>
                <div className="font-sans font-bold text-[#F5F1EA] text-[15px]">Infrastructure</div>
                <div className="flex flex-wrap gap-[10px]">
                  {["PostgreSQL", "Redis", "Docker", "AWS", "SQL", "Linux"].map(skill => (
                    <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] font-mono text-[#F5F1EA]">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className={`flex flex-col gap-[16px] ${skillsVisible ? "fade-in" : "opacity-0"}`} style={{animationDelay: "0.2s"}}>
                <div className="font-sans font-bold text-[#F5F1EA] text-[15px]">Product & Design</div>
                <div className="flex flex-wrap gap-[10px]">
                  {["System Design", "Agile Operations", "Figma", "Strategy", "UI/UX"].map(skill => (
                    <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] font-mono text-[#F5F1EA]">{skill}</span>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-[16px] ${skillsVisible ? "fade-in" : "opacity-0"}`} style={{animationDelay: "0.3s"}}>
                <div className="font-sans font-bold text-[#F5F1EA] text-[15px]">Tools</div>
                <div className="flex flex-wrap gap-[10px]">
                  {["Git", "Webpack", "Vite", "Jest", "Tailwind CSS"].map(skill => (
                    <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] font-mono text-[#F5F1EA]">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. CONTACT */}
        <section id="contact" className="scroll-mt-24 py-[64px] flex flex-col items-center">
          <div className="text-center mb-[48px]">
            <h2 className="text-[32px] md:text-[40px] font-bold font-sans text-[#F5F1EA] mb-[12px]">
              Let's build something <span className="text-[#F0A94E]">useful.</span>
            </h2>
            <p className="text-[#B8AFA3] font-sans text-[16px]">
              Currently open for new opportunities and collaborations.
            </p>
          </div>

          <div className="w-full max-w-2xl bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)]">
            <form className="flex flex-col gap-[16px]" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-mono text-[12px] uppercase text-[#B8AFA3]">NAME</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#1C1916] border border-[rgba(245,241,234,0.15)] focus:border-[#F0A94E] rounded-[10px] px-[16px] py-[14px] text-[15px] font-sans focus-ring outline-none transition-colors text-[#F5F1EA] placeholder-[#B8AFA3]/50" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="font-mono text-[12px] uppercase text-[#B8AFA3]">EMAIL</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#1C1916] border border-[rgba(245,241,234,0.15)] focus:border-[#F0A94E] rounded-[10px] px-[16px] py-[14px] text-[15px] font-sans focus-ring outline-none transition-colors text-[#F5F1EA] placeholder-[#B8AFA3]/50" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-mono text-[12px] uppercase text-[#B8AFA3]">MESSAGE</label>
                <textarea placeholder="How can I help you?" className="w-full bg-[#1C1916] border border-[rgba(245,241,234,0.15)] focus:border-[#F0A94E] rounded-[10px] px-[16px] py-[14px] text-[15px] font-sans focus-ring outline-none transition-colors text-[#F5F1EA] min-h-[120px] resize-y placeholder-[#B8AFA3]/50"></textarea>
              </div>
              
              <button className="w-full py-[16px] mt-[8px] bg-[#F0A94E] text-[#141210] font-bold font-sans text-[16px] rounded-[10px] focus-ring hover:bg-[#F0A94E]/90 transition-colors flex justify-center items-center">
                [ execute &rarr; ]
              </button>
            </form>
          </div>

          <div className="w-full max-w-2xl mt-[32px] flex flex-wrap justify-center gap-[12px]">
            <a href="mailto:hello@example.com" className="flex items-center gap-[8px] px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] font-mono text-[13px] text-[#F5F1EA] hover:border-[#F0A94E] focus-ring transition-colors no-underline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a href="#" className="flex items-center gap-[8px] px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] font-mono text-[13px] text-[#F5F1EA] hover:border-[#F0A94E] focus-ring transition-colors no-underline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href="#" className="flex items-center gap-[8px] px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] font-mono text-[13px] text-[#F5F1EA] hover:border-[#F0A94E] focus-ring transition-colors no-underline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </section>

      </main>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-[rgba(245,241,234,0.1)] text-center text-sm text-[#B8AFA3] font-mono flex items-center justify-center gap-2">
        &copy; 2026 Yashavnth BN &mdash; built with intent. <span className="w-2 h-2 rounded-full bg-[#F0A94E] inline-block ml-2 pulse-dot"></span>
      </footer>
    </div>
  );
}
