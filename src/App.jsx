import Navbar from "./components/navigation/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/common/Loader";
import ScrollProgress from "./components/common/ScrollProgress";

export default function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />

      <div style={{
        background:  "#05080f",
        minHeight:   "100vh",
        color:       "#f1f5f9",
        fontFamily:  "'Courier New', monospace",
        overflowX:   "hidden",
        width:       "100%",
        maxWidth:    "100vw",
        position:    "relative",
      }}>

        {/* Background grid */}
        <div style={{
          position:        "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(99,102,241,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,.055) 1px,transparent 1px)",
          backgroundSize:  "56px 56px",
        }} />

        {/* Ambient blobs */}
        <div style={{ position: "fixed", top: "6%", left: "3%", width: "min(500px,80vw)", height: "min(500px,80vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(99,102,241,.16) 0%,transparent 70%)", filter: "blur(30px)", animation: "pulse 5s ease infinite", pointerEvents: "none", zIndex: 0, willChange: "opacity" }} />
        <div style={{ position: "fixed", bottom: "12%", right: "4%", width: "min(360px,70vw)", height: "min(360px,70vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(56,189,248,.12) 0%,transparent 70%)", filter: "blur(30px)", animation: "pulse 7s ease infinite 2s", pointerEvents: "none", zIndex: 0, willChange: "opacity" }} />
        <div style={{ position: "fixed", top: "50%", left: "48%", width: "min(240px,60vw)", height: "min(240px,60vw)", borderRadius: "50%", background: "radial-gradient(circle,rgba(16,185,129,.07) 0%,transparent 70%)", filter: "blur(30px)", animation: "pulse 6s ease infinite 3.5s", pointerEvents: "none", zIndex: 0, willChange: "opacity" }} />

        <Navbar />

        <div style={{ position: "relative", zIndex: 2, width: "100%", boxSizing: "border-box" }}>
          <AppRoutes />
        </div>
      </div>
    </>
  );
}
