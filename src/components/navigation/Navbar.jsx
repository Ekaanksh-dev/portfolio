import { useState, useEffect } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";
import { NAV_LINKS } from "../../utils/constants";

const css = `
  .nav-links {
    display: flex;
    gap: 28px;
  }

  .nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    background: none;
    border: none;
  }

  .nav-hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: rgba(255,255,255,0.6);
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .nav-mobile-menu {
    display: none;
  }

  @media (max-width: 680px) {
    .nav-links {
      display: none;
    }

    .nav-hamburger {
      display: flex;
    }

    .nav-mobile-menu {
      display: flex;
      flex-direction: column;
      gap: 0;
      position: fixed;
      top: 62px;
      left: 0;
      right: 0;
      background: rgba(5,8,15,0.97);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(99,102,241,0.15);
      z-index: 199;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.35s ease;
    }

    .nav-mobile-menu.open {
      max-height: 400px;
    }

    .nav-mobile-link {
      padding: 15px 24px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s, background 0.2s;
    }

    .nav-mobile-link:last-child {
      border-bottom: none;
    }
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map(l => l.toLowerCase()));

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (open) setOpen(false);
  }, [active]);

  return (
    <>
      <style>{css}</style>

      <nav style={{
        position:     "fixed",
        top:          0,
        left:         0,
        right:        0,
        zIndex:       200,
        background:   scrolled || open ? "rgba(5,8,15,0.92)" : "transparent",
        backdropFilter: scrolled || open ? "blur(20px)" : "none",
        borderBottom: scrolled || open ? "1px solid rgba(99,102,241,0.15)" : "none",
        transition:   "all 0.4s ease",
        padding:      "0 6vw",
      }}>
        <div style={{
          maxWidth:       1160,
          margin:         "0 auto",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          height:         62,
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontSize:             16,
            fontWeight:           900,
            background:           "linear-gradient(90deg,#6366f1,#38bdf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor:  "transparent",
            textDecoration:       "none",
            flexShrink:           0,
          }}>
            &lt;EP /&gt;
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map(link => {
              const isActive = active === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color:         isActive ? "#38bdf8" : "rgba(255,255,255,0.5)",
                    textDecoration:"none",
                    fontSize:      11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight:    600,
                    transition:    "color 0.2s",
                    borderBottom:  isActive ? "1px solid #38bdf8" : "1px solid transparent",
                    paddingBottom: 2,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#38bdf8"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = isActive ? "#38bdf8" : "rgba(255,255,255,0.5)"; }}
                >
                  {link}
                </a>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`nav-mobile-menu${open ? " open" : ""}`}>
        {NAV_LINKS.map(link => {
          const isActive = active === link.toLowerCase();
          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-mobile-link"
              style={{
                color: isActive ? "#38bdf8" : "rgba(255,255,255,0.55)",
                background: isActive ? "rgba(99,102,241,0.06)" : "transparent",
              }}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
}
