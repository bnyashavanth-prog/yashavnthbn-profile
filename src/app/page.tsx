"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [skillsVisible, setSkillsVisible] = useState(false);

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

  const navLinks = ["home", "about", "company", "work", "skills", "contact"];

  return (
    <div className="bg-[#141210] min-h-screen text-[#F5F1EA] font-sans selection:bg-[#F0A94E] selection:text-[#141210]">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#141210]/90 backdrop-blur-md border-b border-[rgba(245,241,234,0.1)] px-6 py-4 flex justify-between items-center text-sm font-mono">
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
          <span className="hidden md:inline text-[#B8AFA3]">STATUS: ONLINE</span>
          <span className="ml-2 w-16 text-right text-[#B8AFA3]">{time}</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        <section id="home" className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh] my-[64px]">
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
              <a href="#work" className="px-6 py-3 rounded-full bg-[#F0A94E] text-[#141210] font-bold focus-ring hover:bg-[#F0A94E]/90 transition-colors no-underline font-sans flex items-center justify-center">
                &rarr; View My Work
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full border border-[rgba(245,241,234,0.1)] hover:border-[#F0A94E] text-[#F5F1EA] hover:text-[#F0A94E] focus-ring transition-colors no-underline font-sans flex items-center justify-center">
                Get In Touch
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-12 fade-in-up" style={{ animationDelay: "1.9s" }}>
              <div className="border-l border-[#F0A94E] pl-4 font-mono text-xs">
                <div className="text-[#F5F1EA] text-lg font-bold font-sans mb-1">5+</div>
                <div className="text-[#B8AFA3]">Projects Built</div>
              </div>
              <div className="border-l border-[#F0A94E] pl-4 font-mono text-xs">
                <div className="text-[#F5F1EA] text-lg font-bold font-sans mb-1">3+</div>
                <div className="text-[#B8AFA3]">Years Exp</div>
              </div>
              <div className="border-l border-[#F0A94E] pl-4 font-mono text-xs">
                <div className="text-[#F5F1EA] text-lg font-bold font-sans mb-1">&infin;</div>
                <div className="text-[#B8AFA3]">Learning Always</div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in" style={{ animationDelay: "2.1s" }}>
            <div className="aspect-[4/5] bg-[#1C1916] rounded-[20px] border border-[rgba(245,241,234,0.1)] relative overflow-hidden flex items-center justify-center">
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

        <section id="about" className="grid md:grid-cols-2 gap-12 items-start scroll-mt-24 my-[64px]">
          <div className="space-y-6">
            <h2 className="text-[28px] font-bold font-sans text-[#F5F1EA] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> About
            </h2>
            <div className="border-l-2 border-[#F0A94E] pl-6 space-y-4 text-[#B8AFA3] font-sans leading-relaxed">
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
            <div className="text-[#F0A94E] mb-6">// SYSTEM_INFO</div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <div className="text-[#B8AFA3]">ROLE</div>
              <div className="text-[#F5F1EA]">: Chief Operating Officer / Dev</div>
              <div className="text-[#B8AFA3]">LOCATION</div>
              <div className="text-[#F5F1EA]">: Global (Remote-First)</div>
              <div className="text-[#B8AFA3]">FOCUS</div>
              <div className="text-[#F5F1EA]">: SaaS, ERP, Infrastructure</div>
              <div className="text-[#B8AFA3]">STATUS</div>
              <div className="text-[#F0A94E]">: ALL_SYSTEMS_OPERATIONAL</div>
            </div>
          </div>
        </section>

        <section id="company" className="scroll-mt-24 my-[64px]">
          <h2 className="text-[28px] font-bold font-sans text-[#F5F1EA] flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Current Venture
          </h2>
          <div className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)] transition-colors group">
            <div className="inline-block px-[14px] py-[8px] border border-[#F0A94E] text-[#F0A94E] font-mono text-[13px] rounded-[10px] mb-4 bg-[#221E1A]">
              CURRENT
            </div>
            
            <div className="flex justify-between items-center mb-2 flex-wrap gap-4">
              <h3 className="text-[28px] font-bold font-sans text-[#F5F1EA]">YVB&Co</h3>
              <a href="#" className="font-mono text-[#B8AFA3] hover:text-[#F0A94E] hover:underline decoration-[#F0A94E] underline-offset-4 focus-ring rounded no-underline">Visit &nearr;</a>
            </div>
            
            <p className="text-lg text-[#F0A94E] mb-4 font-sans">Independent Studio / Chief Operating Officer</p>
            <p className="text-[#B8AFA3] max-w-2xl mb-8 font-sans">
              Driving operational excellence and technical strategy for a suite of digital products. Managing a high-performance team to deliver scalable systems and B2B solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-x-[32px] gap-y-[20px] border-t border-[rgba(245,241,234,0.1)] pt-6">
              <div>
                <div className="font-mono text-[12px] uppercase text-[#B8AFA3] mb-[6px]">SYSTEMS</div>
                <div className="font-sans text-[18px] font-bold text-[#F5F1EA]">12+ Deployed</div>
              </div>
              <div>
                <div className="font-mono text-[12px] uppercase text-[#B8AFA3] mb-[6px]">TEAM</div>
                <div className="font-sans text-[18px] font-bold text-[#F5F1EA]">15 Members</div>
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

        <section id="work" className="scroll-mt-24 my-[64px]">
          <h2 className="text-[28px] font-bold font-sans text-[#F5F1EA] flex items-center gap-3 mb-8">
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
                className="bg-[#1C1916] rounded-[20px] border border-[rgba(245,241,234,0.1)] overflow-hidden transition-all duration-150 hover:-translate-y-1 hover:border-[#F0A94E] flex flex-col group"
              >
                <div className="bg-[#141210] px-4 h-[40px] flex items-center gap-4 border-b border-[rgba(245,241,234,0.1)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#F5F1EA]/20 group-hover:bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5F1EA]/20 group-hover:bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5F1EA]/20 group-hover:bg-[#27C93F]"></div>
                  </div>
                  <div className="font-mono text-xs text-[#B8AFA3] opacity-70">{project.file}</div>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-[#1C1916] to-[#221E1A] m-4 rounded-[12px] flex items-center justify-center border border-[rgba(245,241,234,0.1)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8AFA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                
                <div className="px-[24px] pb-[24px] pt-[8px] flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-sans mb-2 text-[#F5F1EA] group-hover:text-[#F0A94E] transition-colors">{project.title}</h3>
                  <p className="text-[#B8AFA3] text-sm mb-6 flex-1 font-sans">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-[10px] mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-[14px] py-[8px] bg-[#221E1A] rounded-[8px] text-[13px] font-mono text-[#F5F1EA] border border-[rgba(245,241,234,0.1)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 my-[64px]">
          <h2 className="text-[28px] font-bold font-sans text-[#F5F1EA] flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Technical Skills
          </h2>
          <div className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)] font-mono space-y-[24px]">
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#F0A94E] text-sm md:text-base">$ stack --languages</div>
              <div className={`flex flex-wrap gap-[10px] ${skillsVisible ? "fade-in" : "opacity-0"}`}>
                {["TypeScript", "Python", "Go", "JavaScript", "SQL", "HTML/CSS"].map(skill => (
                  <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] text-[#F5F1EA]">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#F0A94E] text-sm md:text-base">$ stack --frontend</div>
              <div className={`flex flex-wrap gap-[10px] ${skillsVisible ? "fade-in" : "opacity-0"}`} style={{animationDelay: "0.2s"}}>
                {["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"].map(skill => (
                  <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] text-[#F5F1EA]">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-[16px]">
              <div className="text-[#F0A94E] text-sm md:text-base">$ stack --backend</div>
              <div className={`flex flex-wrap gap-[10px] ${skillsVisible ? "fade-in" : "opacity-0"}`} style={{animationDelay: "0.4s"}}>
                {["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"].map(skill => (
                  <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] text-[#F5F1EA]">{skill}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="text-[#F0A94E] text-sm md:text-base">$ stack --product</div>
              <div className={`flex flex-wrap gap-[10px] ${skillsVisible ? "fade-in" : "opacity-0"}`} style={{animationDelay: "0.6s"}}>
                {["System Design", "Agile Operations", "Figma", "Strategy"].map(skill => (
                  <span key={skill} className="px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] text-[13px] text-[#F5F1EA]">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="text-[#B8AFA3] animate-pulse font-mono">_</div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 my-[64px] max-w-2xl">
          <h2 className="text-[28px] font-bold font-sans text-[#F5F1EA] flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F0A94E]"></span> Contact
          </h2>
          <div className="bg-[#1C1916] rounded-[20px] p-[24px] border border-[rgba(245,241,234,0.1)]">
            <div className="font-mono text-[#F0A94E] mb-8 text-sm md:text-base">&gt; send_message()</div>
            
            <form className="flex flex-col gap-[16px]" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-[16px]">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[13px] text-[#B8AFA3]">name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-[#1C1916] border border-[rgba(245,241,234,0.15)] focus:border-[#F0A94E] rounded-[10px] px-[16px] py-[14px] text-sm focus-ring outline-none transition-colors text-[#F5F1EA] placeholder-[#B8AFA3]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[13px] text-[#B8AFA3]">email</label>
                  <input type="email" placeholder="Your email" className="w-full bg-[#1C1916] border border-[rgba(245,241,234,0.15)] focus:border-[#F0A94E] rounded-[10px] px-[16px] py-[14px] text-sm focus-ring outline-none transition-colors text-[#F5F1EA] placeholder-[#B8AFA3]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[13px] text-[#B8AFA3]">message</label>
                <textarea rows={4} placeholder="Your message..." className="w-full bg-[#1C1916] border border-[rgba(245,241,234,0.15)] focus:border-[#F0A94E] rounded-[10px] px-[16px] py-[14px] text-sm focus-ring outline-none transition-colors text-[#F5F1EA] min-h-[120px] resize-y placeholder-[#B8AFA3]"></textarea>
              </div>
              
              <button className="w-full py-[16px] mt-[8px] bg-[#F0A94E] text-[#141210] font-semibold font-sans text-[16px] rounded-[10px] focus-ring hover:bg-[#F0A94E]/90 transition-colors flex justify-center items-center">
                [ execute &rarr; ]
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-[rgba(245,241,234,0.1)] flex flex-wrap gap-[12px]">
              <a href="mailto:hello@example.com" className="flex items-center gap-2 px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] font-mono text-[13px] text-[#F5F1EA] hover:border-[#F0A94E] focus-ring transition-colors no-underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email
              </a>
              <a href="#" className="flex items-center gap-2 px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] font-mono text-[13px] text-[#F5F1EA] hover:border-[#F0A94E] focus-ring transition-colors no-underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub
              </a>
              <a href="#" className="flex items-center gap-2 px-[14px] py-[8px] bg-[#221E1A] border border-[rgba(245,241,234,0.1)] rounded-[8px] font-mono text-[13px] text-[#F5F1EA] hover:border-[#F0A94E] focus-ring transition-colors no-underline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-[rgba(245,241,234,0.1)] text-center text-sm text-[#B8AFA3] font-mono flex items-center justify-center gap-2">
        &copy; 2026 Yashavnth BN &mdash; built with intent. <span className="w-2 h-2 rounded-full bg-[#F0A94E] inline-block ml-2 pulse-dot"></span>
      </footer>
    </div>
  );
}
