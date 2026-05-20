import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#05080f", color: "#f1f5f9", fontFamily: "'Courier New', monospace", textAlign: "center", padding: "0 6vw" }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>404</div>
      <div style={{ color: "#6366f1", fontSize: 10, letterSpacing: "0.2em", marginBottom: 20 }}>// PAGE NOT FOUND</div>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 36 }}>
        This route doesn't exist in the pipeline.
      </p>
      <Link to="/" style={{ padding: "12px 28px", background: "linear-gradient(135deg,#6366f1,#4f46e5)", borderRadius: 12, color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>
        ← Back to Home
      </Link>
    </div>
  );
}
