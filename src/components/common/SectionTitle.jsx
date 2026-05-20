export default function SectionTitle({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <div style={{
        color:         "#6366f1",
        fontSize:      10,
        letterSpacing: "0.2em",
        marginBottom:  12,
        textTransform: "uppercase",
      }}>
        {tag}
      </div>
      <h2 style={{
        fontSize:     "clamp(26px,4vw,40px)",
        fontWeight:   900,
        color:        "#f1f5f9",
        marginBottom: 12,
        lineHeight:   1.2,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          color:     "rgba(255,255,255,0.4)",
          fontSize:  14,
          maxWidth:  480,
          margin:    "0 auto",
          lineHeight:1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
