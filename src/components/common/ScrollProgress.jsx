import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{
      position:  "fixed",
      top:       0,
      left:      0,
      right:     0,
      height:    3,
      zIndex:    999,
      background: "rgba(255,255,255,0.06)",
    }}>
      <div style={{
        height:     "100%",
        width:      `${progress}%`,
        background: "linear-gradient(90deg, #6366f1, #38bdf8)",
        transition: "width 0.1s linear",
        boxShadow:  "0 0 10px #6366f1aa",
      }} />
    </div>
  );
}
