import { useState } from "react";

export default function CertificateCard({ c }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:   hov ? `${c.color}0d` : "rgba(255,255,255,0.02)",
        border:       `1px solid ${c.color}28`,
        borderLeft:   `3px solid ${c.color}`,
        borderRadius: 12,
        padding:      "13px 17px",
        transition:   "all 0.22s ease",
        // translateX removed — was causing overflow flash on mobile
        cursor:       c.file ? "pointer" : "default",
        boxSizing:    "border-box",
        width:        "100%",
      }}
      onClick={() => c.file && window.open(c.file, "_blank")}
    >
      <div style={{
        color: "#f1f5f9", fontSize: 12, fontWeight: 700, marginBottom: 5,
        wordBreak: "break-word",
      }}>
        {c.title}
      </div>
      <div style={{
        display:    "flex",
        flexWrap:   "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap:        "4px 10px",
      }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, wordBreak: "break-word" }}>{c.org}</span>
        <span style={{ color: c.color, fontSize: 9, letterSpacing: "0.08em", flexShrink: 0 }}>{c.date}</span>
      </div>
    </div>
  );
}
