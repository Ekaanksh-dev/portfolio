import { useState, useEffect } from "react";
import { fetchGithubStats } from "../../services/githubApi";
import GlassCard from "../common/GlassCard";

const css = `
  .gh-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-bottom: 14px;
  }

  .gh-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    border-radius: 12px;
    background: linear-gradient(135deg, #6366f1, #38bdf8);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-decoration: none;
    transition: all 0.22s ease;
    word-break: break-all;
  }

  @media (max-width: 600px) {
    .gh-cards {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .gh-card-inner {
      display: flex;
      align-items: center;
      gap: 16px;
      text-align: left !important;
    }

    .gh-card-inner .gh-icon {
      font-size: 22px;
      margin-bottom: 0 !important;
      flex-shrink: 0;
    }

    .gh-link {
      font-size: 11px;
      padding: 11px 18px;
      width: 100%;
      justify-content: center;
      word-break: break-all;
    }
  }
`;

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchGithubStats().then(setStats).catch(() => setError(true));
  }, []);

  const cards = [
    { ic: "📦", v: stats ? stats.repoCount + "+" : "—", l: "Repositories", c: "#6366f1" },
    { ic: "⭐", v: stats ? stats.stars            : "—", l: "Stars earned",  c: "#f59e0b" },
    { ic: "💬", v: stats ? stats.languages + "+"  : "—", l: "Languages",     c: "#38bdf8" },
  ];

  return (
    <>
      <style>{css}</style>

      <div className="gh-cards">
        {cards.map(s => (
          <GlassCard key={s.l} glow={s.c} style={{ padding: "22px 18px", textAlign: "center" }}>
            <div className="gh-card-inner">
              <div className="gh-icon" style={{ fontSize: 26, marginBottom: 9 }}>{s.ic}</div>
              <div>
                <div style={{ color: s.c, fontSize: 26, fontWeight: 900, marginBottom: 5 }}>{s.v}</div>
                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: "0.08em" }}>{s.l}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {error && (
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, textAlign: "center", marginBottom: 14 }}>
          Could not load live stats.
        </p>
      )}

      <GlassCard style={{ padding: 26, textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 16 }}>// github profile</p>
        <a
          href="https://github.com/Ekaanksh-dev"
          target="_blank"
          rel="noreferrer"
          className="gh-link"
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.opacity = "1"; }}
        >
          ⬡ github.com/Ekaanksh-dev →
        </a>
      </GlassCard>
    </>
  );
}
