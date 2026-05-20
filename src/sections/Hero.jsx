
import { useState, useEffect } from "react";
import useTypingEffect from "../hooks/useTypingEffect";
import Terminal from "../components/hero/Terminal";
import GlassCard from "../components/common/GlassCard";
import FloatingParticles from "../components/common/FloatingParticles";
import AnimatedCounter from "../components/common/AnimatedCounter";
import ROLES from "../data/roles";
import { FLOATING_ICONS, WORKING_ON, TECH_STACK } from "../utils/constants";

const css = `
  .hero-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 40px 60px;
    box-sizing: border-box;
    width: 100%;
  }

  .hero-inner {
    max-width: 1160px;
    width: 100%;
  }

  .hero-badges {
    display: flex;
    gap: 11px;
    flex-wrap: wrap;
    margin-bottom: 36px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 56px;
    align-items: start;
  }

  .hero-right {
    display: block;
  }

  .hero-btns {
    display: flex;
    gap: 11px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .hero-stats {
    display: flex;
    gap: 20px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  }

  .hero-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  .hero-stat-num {
    font-size: 22px;
    font-weight: 900;
    background: linear-gradient(135deg, #6366f1, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Courier New', monospace;
  }

  .hero-stat-label {
    color: rgba(255,255,255,0.3);
    font-size: 9px;
    letter-spacing: 0.12em;
  }

  .hero-tech {
    margin-top: 68px;
  }

  .hero-tech-pills {
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 14px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 28px;
    justify-content: center;
  }

  .fi {
    position: fixed;
    z-index: 0;
    pointer-events: none;
  }

  /* ── Tablet ── */
  @media (max-width: 960px) {
    .hero-wrap { padding: 100px 24px 60px; }
    .hero-grid { grid-template-columns: 1fr; gap: 40px; }
    .hero-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      align-items: start;
    }
    .hero-avatar-block {
      grid-column: 1 / -1;
      display: flex;
      justify-content: center;
    }
    .fi { display: none; }
  }

  /* ── Phablet ── */
  @media (max-width: 700px) {
    .hero-wrap { padding: 88px 18px 48px; }
    .hero-right { grid-template-columns: 1fr; }
    .hero-avatar-block { grid-column: auto; }
    .hero-btns { flex-direction: column; }
    .hero-btns a { width: 100%; justify-content: center !important; }
    .hero-tech { margin-top: 40px; }
    .hero-badges { margin-bottom: 24px; }
    .hero-stats { gap: 16px; }
    .hero-stat-num { font-size: 18px; }
  }
`;

export default function Hero() {
  const typed = useTypingEffect(ROLES);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(id);
  }, []);

  const fd = (delay = 0) => ({
    opacity:    mounted ? 1 : 0,
    transform:  mounted ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <>
      <style>{css}</style>

      {/* Particle background */}
      <FloatingParticles />

      {/* Floating icons — hidden on tablet/mobile via CSS */}
      {FLOATING_ICONS.map(ic => (
        <div key={ic.label} className="fi" style={{ left: ic.x, top: ic.y }}>
          <div style={{ animation: `floatUp ${ic.dur}s ease-in-out ${ic.delay}s infinite alternate` }}>
            <span style={{ fontSize: 20 }}>{ic.emoji}</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, letterSpacing: "0.08em", display: "block", textAlign: "center" }}>
              {ic.label}
            </span>
          </div>
        </div>
      ))}

      <section className="hero-wrap">
        <div className="hero-inner">

          {/* Availability badges */}
          <div className="hero-badges" style={fd(0.05)}>
            {[
              { dot: "#10b981", txt: "AVAILABLE FOR INTERNSHIPS", bg: "rgba(16,185,129,0.08)", c: "#10b981", border: "rgba(16,185,129,0.25)" },
              { dot: "#38bdf8", txt: "OPEN TO COLLABORATIONS",    bg: "rgba(56,189,248,0.08)",  c: "#38bdf8", border: "rgba(56,189,248,0.25)" },
            ].map(b => (
              <div key={b.txt} style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: b.bg, border: `1px solid ${b.border}`,
                padding: "6px 14px", borderRadius: 100,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: b.dot, boxShadow: `0 0 6px ${b.dot}` }} />
                <span style={{ color: b.c, fontSize: 10, letterSpacing: "0.1em", fontWeight: 600 }}>{b.txt}</span>
              </div>
            ))}
          </div>

          {/* Main grid */}
          <div className="hero-grid">

            {/* ── LEFT ── */}
            <div className="hero-left">
              <div style={fd(0.14)}>
                <div style={{ color: "rgba(255,255,255,0.28)", fontSize: 10, letterSpacing: "0.2em", marginBottom: 14 }}>
                  // BUILDING THE FUTURE
                </div>
                <h1 style={{ fontSize: "clamp(28px,3.8vw,52px)", fontWeight: 900, lineHeight: 1.12, margin: 0 }}>
                  <span style={{ color: "#f1f5f9" }}>Building Intelligent</span><br />
                  <span style={{ background: "linear-gradient(135deg,#6366f1 0%,#38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Infrastructure &amp;
                  </span><br />
                  <span style={{ color: "#e2e8f0" }}>Automation Systems</span>
                </h1>
              </div>

              {/* Typing role */}
              <div style={{ height: 32, display: "flex", alignItems: "center", marginTop: 18, marginBottom: 18, ...fd(0.22) }}>
                <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, marginRight: 8 }}>→</span>
                <span style={{ color: "#38bdf8", fontSize: 14, fontWeight: 700 }}>{typed}</span>
                <span style={{ color: "#6366f1", animation: "blink 1s step-end infinite", marginLeft: 2, fontSize: 16 }}>|</span>
              </div>

              <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 14, lineHeight: 1.8, marginBottom: 28, maxWidth: 480, ...fd(0.28) }}>
                BSc IT student at Guru Nanak College, Mumbai — focused on DevOps, Cloud,
                AI-powered tooling, and scalable automation systems. I turn pipelines into
                intelligent infrastructure.
              </p>

              {/* Animated stats */}
              <div className="hero-stats" style={fd(0.3)}>
                {[
                  { to: 4,  suffix: "+", label: "PROJECTS BUILT" },
                  { to: 5,  suffix: "+", label: "CERTIFICATIONS" },
                  { to: 1,  suffix: "",  label: "INTERNSHIP"     },
                  { to: 10, suffix: "+", label: "TOOLS & TECH"   },
                ].map(s => (
                  <div key={s.label} className="hero-stat">
                    <span className="hero-stat-num">
                      <AnimatedCounter to={s.to} suffix={s.suffix} duration={1600} />
                    </span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="hero-btns" style={fd(0.38)}>
                {[
                  { label: "⬇ Download Resume", href: "/resume.pdf",                      cls: "primary" },
                  { label: "🚀 Let's Connect",   href: "#contact",                         cls: "outline" },
                  { label: "⬡ GitHub",           href: "https://github.com/Ekaanksh-dev", cls: "ghost", external: true },
                ].map(btn => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    {...(btn.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "12px 22px", borderRadius: 12, fontSize: 12, fontWeight: 700,
                      letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.22s ease",
                      ...(btn.cls === "primary" ? { background: "linear-gradient(135deg,#6366f1,#38bdf8)", color: "#fff" } : {}),
                      ...(btn.cls === "outline" ? { background: "transparent", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.35)" } : {}),
                      ...(btn.cls === "ghost"   ? { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.08)" } : {}),
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.opacity = "0.88"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.opacity = "1"; }}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="hero-right" style={fd(0.2)}>

              <div className="hero-avatar-block" style={{ marginBottom: 26 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "inline-block" }}>
                    {/* Spinning ring */}
                    <div style={{
                      position: "absolute", inset: -11, borderRadius: "50%",
                      background: "conic-gradient(#6366f1,#38bdf8,#6366f1)",
                      opacity: 0.5, animation: "spin 8s linear infinite",
                    }} />
                    <div style={{ position: "absolute", inset: -5, borderRadius: "50%", border: "1px solid rgba(99,102,241,0.3)" }} />

                    {/* Profile photo */}
                    <div style={{
                      width: 126, height: 126, borderRadius: "50%",
                      position: "relative", overflow: "hidden",
                    }}>
                      <img
                        src="/profile/profile.jpg"
                        alt="Ekaanksh Patil"
                        style={{
                          width: "100%", height: "100%",
                          objectFit: "cover",
                          objectPosition: "35% 15%",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 17, color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.12em" }}>
                    📍 MUMBAI, INDIA 🇮🇳
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 9, marginTop: 3, letterSpacing: "0.08em" }}>
                    BSc IT · Guru Nanak College · 2nd Year
                  </div>
                </div>
              </div>

              <Terminal />

              <GlassCard glow="#10b981" style={{ marginTop: 14, padding: "16px 20px" }}>
                <div style={{ color: "#10b981", fontSize: 9, letterSpacing: "0.15em", marginBottom: 10 }}>
                  // CURRENTLY WORKING ON
                </div>
                {WORKING_ON.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: i < WORKING_ON.length - 1 ? 7 : 0 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.62)", fontSize: 11 }}>{item}</span>
                  </div>
                ))}
              </GlassCard>

            </div>
          </div>

          {/* Tech stack strip */}
          <div className="hero-tech" style={fd(0.5)}>
            <div style={{ color: "rgba(255,255,255,0.18)", fontSize: 9, letterSpacing: "0.2em", marginBottom: 14, textAlign: "center" }}>
              TECH STACK
            </div>
            <div className="hero-tech-pills">
              {TECH_STACK.map(t => (
                <span key={t} style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.08em" }}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
