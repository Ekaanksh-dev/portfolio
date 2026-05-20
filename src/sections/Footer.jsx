export default function Footer() {
  return (
    <footer style={{ padding: "36px 6vw", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
      <div style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, marginBottom: 8 }}>
        <span style={{ color: "#6366f1" }}>&lt;</span> Built with passion by Ekaanksh Patil <span style={{ color: "#6366f1" }}>/&gt;</span>
      </div>
      <div style={{ color: "rgba(255,255,255,0.12)", fontSize: 10 }}>
        DevOps Engineer · AI Enthusiast · Mumbai 🇮🇳 · {new Date().getFullYear()}
      </div>
    </footer>
  );
}
