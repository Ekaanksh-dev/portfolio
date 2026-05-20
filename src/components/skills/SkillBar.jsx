import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function SkillBar({ name, icon, level, color }) {
  const [ref, visible] = useIntersectionObserver(0.3);

  return (
    <div
      ref={ref}
      style={{
        background:     "rgba(8,10,22,0.75)",
        border:         "1px solid rgba(255,255,255,0.08)",
        borderRadius:   20,
        backdropFilter: "blur(16px)",
        boxShadow:      "0 8px 40px rgba(0,0,0,0.4)",
        padding:        "18px 22px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 19 }}>{icon}</span>
          <span style={{ color: "#e2e8f0", fontSize: 13 }}>{name}</span>
        </div>
        <span style={{ color, fontSize: 11, fontWeight: 800 }}>{level}%</span>
      </div>

      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 100, height: 5, overflow: "hidden" }}>
        <div style={{
          height:       "100%",
          borderRadius: 100,
          background:   `linear-gradient(90deg, ${color}, ${color}aa)`,
          width:        visible ? `${level}%` : "0%",
          transition:   "width 1.3s cubic-bezier(0.4,0,0.2,1)",
          boxShadow:    `0 0 10px ${color}88`,
        }} />
      </div>
    </div>
  );
}
