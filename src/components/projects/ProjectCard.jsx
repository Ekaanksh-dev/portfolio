import { useState } from "react";

export default function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  const [linkHov, setLinkHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:   hov ? "rgba(255,255,255,0.05)" : "rgba(8,10,22,0.7)",
        border:       `1px solid ${hov ? p.color + "66" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 20,
        padding:      "26px 24px",
        boxShadow:    hov
          ? `0 0 40px ${p.color}22, 0 16px 48px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.2)",
        transition:   "all 0.35s ease",
        transform:    hov ? "translateY(-7px)" : "translateY(0)",
        cursor:       "pointer",
        position:     "relative",
        overflow:     "hidden",
      }}
    >
      {p.wip && (
        <div style={{
          position:      "absolute",
          top:           15,
          right:         15,
          background:    "#f59e0b22",
          border:        "1px solid #f59e0b66",
          color:         "#f59e0b",
          fontSize:      9,
          padding:       "3px 10px",
          borderRadius:  100,
          letterSpacing: "0.1em",
        }}>
          IN PROGRESS
        </div>
      )}

      <div style={{ fontSize: 34, marginBottom: 13 }}>{p.icon}</div>

      <h3 style={{
        color:        "#f1f5f9",
        fontSize:     15,
        fontWeight:   800,
        marginBottom: 9,
      }}>
        {p.title}
      </h3>

      <p style={{
        color:        "rgba(255,255,255,0.45)",
        fontSize:     12,
        lineHeight:   1.75,
        marginBottom: 16,
      }}>
        {p.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {p.tags.map(t => (
          <span
            key={t}
            style={{
              background:    p.color + "18",
              border:        `1px solid ${p.color}44`,
              color:         p.color,
              padding:       "3px 10px",
              borderRadius:  100,
              fontSize:      10,
              letterSpacing: "0.04em",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={p.github}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setLinkHov(true)}
        onMouseLeave={() => setLinkHov(false)}
        style={{
          color:          p.color,
          fontSize:       11,
          textDecoration: "none",
          fontWeight:     700,
          letterSpacing:  "0.05em",
          display:        "inline-flex",
          alignItems:     "center",
          gap:            6,
          opacity:        linkHov ? 0.7 : 1,
          transition:     "opacity 0.2s ease",
        }}
      >
        View on GitHub
      </a>
    </div>
  );
}
