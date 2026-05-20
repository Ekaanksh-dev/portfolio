import { useState, useEffect } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading]   = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setVisible(false), 1900);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position:       "fixed",
      inset:          0,
      zIndex:         1000,
      background:     "#05080f",
      display:        "flex",
      flexDirection:  "column",
      alignItems:     "center",
      justifyContent: "center",
      gap:            24,
      opacity:        fading ? 0 : 1,
      transition:     "opacity 0.5s ease",
      pointerEvents:  fading ? "none" : "all",
    }}>
      {/* Logo */}
      <div style={{
        fontSize:             22,
        fontWeight:           900,
        fontFamily:           "'Courier New', monospace",
        background:           "linear-gradient(90deg, #6366f1, #38bdf8)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor:  "transparent",
        letterSpacing:        "0.05em",
      }}>
        &lt;EP /&gt;
      </div>

      {/* Spinner */}
      <div style={{ position: "relative", width: 40, height: 40 }}>
        <div style={{
          position:     "absolute",
          inset:        0,
          borderRadius: "50%",
          border:       "2px solid rgba(99,102,241,0.15)",
        }} />
        <div style={{
          position:     "absolute",
          inset:        0,
          borderRadius: "50%",
          border:       "2px solid transparent",
          borderTopColor: "#6366f1",
          borderRightColor: "#38bdf8",
          animation:    "spin 0.8s linear infinite",
        }} />
      </div>

      {/* Tagline */}
      <div style={{
        color:         "rgba(255,255,255,0.25)",
        fontSize:      10,
        letterSpacing: "0.2em",
        fontFamily:    "'Courier New', monospace",
      }}>
        INITIALIZING...
      </div>
    </div>
  );
}
