"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    // Clock
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Intersection Observer for Nav
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

  return (
    <div className="bg-[#141210] min-h-screen text-[#F5F1EA] font-sans selection:bg-[#F0A94E] selection:text-[#141210]">
      {/* Global Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#141210]/90 backdrop-blur-md border-b border-default px-6 py-4 flex justify-between items-center text-sm font-mono">
        <div className="flex-1 hidden md:block">
          <span className="text-[#F0A94E]">&gt;</span> yashavnth@portfolio:~
        </div>
        
        {/* Mobile Menu Icon (Placeholder for functionality) */}
        <div className="md:hidden flex-1 font-bold text-[#F0A94E]">
          &gt; menu
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`focus-ring capitalize transition-colors pb-1 ${
                activeSection === link
                  ? "border-b-2 border-[#F0A94E] text-[#F0A94E]"
                  : "text-[#B8AFA3] hover:text-[#F5F1EA]"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center gap-2 text-xs md:text-sm text-[#B8AFA3]">
          <div className="w-2 h-2 rounded-full bg-[#F0A94E] pulse-dot"></div>
          <span className="hidden md:inline">STATUS: ONLINE</span>
          <span className="ml-2 w-16 text-right">{time}</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* 1. HERO */}
        <section id="home" className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-6">
            <div className="font-mono text-[#B8AFA3] text-sm fade-in-up" style={{ animationDelay: "0.1s" }}>
              // building digital solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <div className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-transparent max-w-full sm:typewriter">Yashavnth</div><br />
              <div className="text-[#F0A94E] fade-in-up" style={{ animationDelay: "1.1s" }}>BN.</div>
            </h1>
            
            <div className="flex items-center gap-3 font-mono text-sm md:text-base fade-in-up" style={{ animationDelay: "1.3s" }}>
              <div className="w-2 h-2 rounded-full bg-[#F0A94E]"></div>
              COO · Software Developer · Product Builder
            </div>
            
            <p className="text-[#B8AFA3] text-lg max-w-md leading-relaxed fade-in-up" style={{ animationDelay: "1.5s" }}>
              I architect systems that scale, lead teams that ship, and build products that solve real problems. Blending deep technical expertise with operational strategy.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 fade-in-up" style={{ animationDelay: "1.7s" }}>
              <a href="#work" className="px-6 py-3 rounded-full bg-[#F0A94E] text-[#141210] font-bold focus-ring hover:bg-[#F0A94E]/90 transition-colors">
                &rarr; View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-default hover:border-[#F0A94E] hover:text-[#F0A94E] focus-ring transition-colors">
                Get In Touch
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-12 fade-in-up" style={{ animationDelay: "1.9s" }}>
              <div className="border-l border-[#F0A94E] pl-4 font-mono text-xs">
                <div className="text-[#F5F1EA] text-lg font-bold mb-1">5+</div>
                <div className="text-[#B8AFA3]">Projects Built</div>
              </div>
              <div className="border-l border-[#F0A94E] pl-4 font-mono text-xs">
                <div className="text-[#F5F1EA] text-lg font-bold mb-1">3+</div>
                <div className="text-[#B8AFA3]">Years Exp</div>
              </div>
              <div className="border-l border-[#F0A94E] pl-4 font-mono text-xs">
                <div className="text-[#F5F1EA] text-lg font-bold mb-1">&infin;</div>
                <div className="text-[#B8AFA3]">Learning Always</div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in" style={{ animationDelay: "2.1s" }}>
            <div className="aspect-[4/5] bg-[#1C1916] rounded-[20px] border-default relative overflow-hidden flex items-center justify-center">
              <div className="text-[#B8AFA3]/30 font-mono text-sm">[PORTRAIT PHOTO]</div>
              
              {/* SVG Overlay */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 500">
                <g stroke="rgba(240, 169, 78, 0.4)" strokeWidth="1" fill="none">
                  <path d="M100,100 L200,200 L300,150" />
                  <path d="M200,200 L150,350 L250,400 L300,150" />
                </g>
                <g fill="#F0A94E">
                  <circle cx="100" cy="100" r="4" className="pulse-dot" style={{animationDelay: "0s"}} />
                  <circle cx="300" cy="150" r="4" className="pulse-dot" style={{animationDelay: "0.2s"}} />
                  <circle cx="150" cy="350" r="4" className="pulse-dot" style={{animationDelay: "0.4s"}} />
                  <circle cx="250" cy="400" r="4" className="pulse-dot" style={{animationDelay: "0.6s"}} />
                  <circle cx="200" cy="200" r="6" />
                </g>
                <g fill="#F0A94E" fontSize="10" fontFamily="monospace" className="opacity-80">
                  <text x="110" y="103">[STRATEGY]</text>
                  <text x="310" y="153">[PRODUCT]</text>
                  <text x="60" y="353">[SYSTEMS]</text>
                  <text x="260" y="403">[TECHNOLOGY]</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

        {/* 2. ABOUT */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-start scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> About
            </h2>
            <div className="border-l-2 border-[#F0A94E] pl-6 space-y-4 text-[#B8AFA3] leading-relaxed">
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
          
          <div className="bg-[#1C1916] rounded-[20px] p-8 border-default font-mono text-sm space-y-4">
            <div className="text-[#F0A94E] mb-6">// SYSTEM_INFO</div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <div className="text-[#B8AFA3]">ROLE</div>
              <div>: Chief Operating Officer / Dev</div>
              <div className="text-[#B8AFA3]">LOCATION</div>
              <div>: Global (Remote-First)</div>
              <div className="text-[#B8AFA3]">FOCUS</div>
              <div>: SaaS, ERP, Infrastructure</div>
              <div className="text-[#B8AFA3]">STATUS</div>
              <div className="text-[#F0A94E]">: ALL_SYSTEMS_OPERATIONAL</div>
            </div>
          </div>
        </section>

        {/* 3. COMPANY */}
        <section id="company" className="scroll-mt-24">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Current Venture
          </h2>
          <div className="bg-[#1C1916] rounded-[20px] p-8 md:p-10 border-default hover:border-[#F0A94E]/50 transition-colors relative group">
            <div className="absolute top-8 right-8 text-[#F0A94E] opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="#" className="font-mono hover:underline focus-ring rounded">Visit &nearr;</a>
            </div>
            
            <div className="inline-block px-3 py-1 border border-[#F0A94E] text-[#F0A94E] font-mono text-xs rounded-[10px] mb-6">
              CURRENT
            </div>
            
            <h3 className="text-4xl font-bold mb-2">YVB&Co</h3>
            <p className="text-xl text-[#F0A94E] mb-4">Independent Studio / Chief Operating Officer</p>
            <p className="text-[#B8AFA3] max-w-2xl mb-8">
              Driving operational excellence and technical strategy for a suite of digital products. Managing a high-performance team to deliver scalable systems and B2B solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm border-t border-default pt-6">
              <div>
                <div className="text-[#B8AFA3] mb-1">SYSTEMS</div>
                <div className="text-xl text-[#F5F1EA]">12+ Deployed</div>
              </div>
              <div>
                <div className="text-[#B8AFA3] mb-1">TEAM</div>
                <div className="text-xl text-[#F5F1EA]">15 Members</div>
              </div>
              <div>
                <div className="text-[#B8AFA3] mb-1">STAGE</div>
                <div className="text-xl text-[#F5F1EA]">Seed</div>
              </div>
              <div>
                <div className="text-[#B8AFA3] mb-1">IMPACT</div>
                <div className="text-xl text-[#F5F1EA]">Global</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORK */}
        <section id="work" className="scroll-mt-24">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Selected Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Enterprise ERP", file: "erp_core.exe", desc: "A comprehensive monolithic architecture for supply chain logistics.", tags: ["React", "Node", "PostgreSQL"] },
              { title: "AI Analytics", file: "predictive_ml.py", desc: "SaaS platform leveraging machine learning for user behavior prediction.", tags: ["Python", "AWS", "Next.js"] },
              { title: "Fintech Platform", file: "lending_p2p.go", desc: "Peer-to-peer lending engine built for high-throughput transactions.", tags: ["Go", "Redis", "Docker"] }
            ].map((project, i) => (
              <div 
                key={i} 
                className="bg-[#1C1916] rounded-[20px] border-default overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:border-[#F0A94E] flex flex-col group"
              >
                {/* Terminal Header */}
                <div className="bg-[#141210] px-4 py-3 flex items-center gap-2 border-b border-default">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#F5F1EA]/20 group-hover:bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5F1EA]/20 group-hover:bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5F1EA]/20 group-hover:bg-[#27C93F]"></div>
                  </div>
                  <div className="font-mono text-xs text-[#B8AFA3] mx-auto opacity-70">{project.file}</div>
                </div>
                
                {/* Thumbnail Placeholder */}
                <div className="h-40 bg-[#141210]/50 border-b border-default flex items-center justify-center text-[#B8AFA3]/20 font-mono text-sm">
                  [THUMBNAIL_PREVIEW]
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#F0A94E] transition-colors">{project.title}</h3>
                  <p className="text-[#B8AFA3] text-sm mb-6 flex-1">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-[#141210] rounded-[10px] text-xs font-mono text-[#B8AFA3] border-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Technical Skills
          </h2>
          <div className="bg-[#1C1916] rounded-[20px] p-8 border-default font-mono text-sm md:text-base space-y-6">
            <div className="flex flex-col gap-1">
              <div className="text-[#F0A94E]">$ stack --languages</div>
              <div className={skillsVisible ? "sm:typewriter" : "opacity-0"}>[ "TypeScript", "Python", "Go", "JavaScript", "SQL", "HTML/CSS" ]</div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="text-[#F0A94E]">$ stack --frontend</div>
              <div className={skillsVisible ? "sm:typewriter" : "opacity-0"} style={{animationDelay: "1s"}}>[ "React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux" ]</div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="text-[#F0A94E]">$ stack --backend</div>
              <div className={skillsVisible ? "sm:typewriter" : "opacity-0"} style={{animationDelay: "2s"}}>[ "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS" ]</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-[#F0A94E]">$ stack --product</div>
              <div className={skillsVisible ? "sm:typewriter" : "opacity-0"} style={{animationDelay: "3s"}}>[ "System Design", "Agile Operations", "Figma", "Strategy" ]</div>
            </div>
            
            <div className="text-[#B8AFA3] animate-pulse">_</div>
          </div>
        </section>

        {/* 6. CONTACT */}
        <section id="contact" className="scroll-mt-24 max-w-2xl">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Contact
          </h2>
          <div className="bg-[#1C1916] rounded-[20px] p-8 border-default">
            <div className="font-mono text-[#F0A94E] mb-8">&gt; send_message()</div>
            
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#B8AFA3]">name</label>
                  <input type="text" className="w-full bg-[#141210] border-default focus:border-[#F0A94E] rounded-[10px] p-3 text-sm focus-ring outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#B8AFA3]">email</label>
                  <input type="email" className="w-full bg-[#141210] border-default focus:border-[#F0A94E] rounded-[10px] p-3 text-sm focus-ring outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#B8AFA3]">message</label>
                <textarea rows={4} className="w-full bg-[#141210] border-default focus:border-[#F0A94E] rounded-[10px] p-3 text-sm focus-ring outline-none transition-colors"></textarea>
              </div>
              
              <button className="w-full py-4 bg-[#F0A94E] text-[#141210] font-bold rounded-[10px] focus-ring hover:bg-[#F0A94E]/90 transition-colors font-mono">
                [ execute &rarr; ]
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-default flex flex-wrap gap-4">
              <a href="mailto:hello@example.com" className="px-4 py-2 bg-[#141210] border-default rounded-[10px] font-mono text-xs text-[#B8AFA3] hover:text-[#F0A94E] hover:border-[#F0A94E] focus-ring transition-colors">
                email_direct
              </a>
              <a href="#" className="px-4 py-2 bg-[#141210] border-default rounded-[10px] font-mono text-xs text-[#B8AFA3] hover:text-[#F0A94E] hover:border-[#F0A94E] focus-ring transition-colors">
                github
              </a>
              <a href="#" className="px-4 py-2 bg-[#141210] border-default rounded-[10px] font-mono text-xs text-[#B8AFA3] hover:text-[#F0A94E] hover:border-[#F0A94E] focus-ring transition-colors">
                linkedin
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer className="py-8 border-t border-default text-center text-sm text-[#B8AFA3] font-mono flex items-center justify-center gap-2">
        &copy; 2026 Yashavnth BN &mdash; built with intent. <span className="w-2 h-2 rounded-full bg-[#F0A94E] inline-block ml-2"></span>
      </footer>
    </div>
  );
}
