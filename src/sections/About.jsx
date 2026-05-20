import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";
import TIMELINE from "../data/timeline";

const css = `
  .about-section {
    padding: 100px 6vw;
    max-width: 1160px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .about-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 60px;
  }

  .about-timeline {
    position: relative;
    padding-left: 30px;
  }

  @media (max-width: 700px) {
    .about-section {
      padding: 80px 18px;
    }

    .about-cards {
      grid-template-columns: 1fr;
      gap: 14px;
      margin-bottom: 40px;
    }

    .about-timeline {
      padding-left: 24px;
    }
  }
`;

export default function About() {
  return (
    <>
      <style>{css}</style>
      <section id="about" className="about-section">
        <SectionTitle tag="// about" title="Who I Am" subtitle="A passionate engineer at the intersection of AI and DevOps" />

        <div className="about-cards">
          <GlassCard glow="#6366f1" style={{ padding: 30 }}>
            <div style={{ color: "#6366f1", fontSize: 10, letterSpacing: "0.12em", marginBottom: 14 }}>PROFESSIONAL SUMMARY</div>
            <p style={{ color: "rgba(255,255,255,0.56)", lineHeight: 1.9, fontSize: 13, margin: 0 }}>
              Motivated BSc IT student with hands-on experience building AI-powered DevOps tools and automation pipelines. Experienced integrating LLMs (LLaMA 3.3 70B via Groq) into real-world DevOps workflows. Strong knowledge of CI/CD, containerization with Docker & Jenkins, and GitHub Actions.
            </p>
          </GlassCard>

          <GlassCard glow="#38bdf8" style={{ padding: 30 }}>
            <div style={{ color: "#38bdf8", fontSize: 10, letterSpacing: "0.12em", marginBottom: 14 }}>MISSION & VISION</div>
            <p style={{ color: "rgba(255,255,255,0.56)", lineHeight: 1.9, fontSize: 13, margin: 0 }}>
              I believe DevOps + AI will define the next era of software engineering. My goal is to build systems that are intelligent, automated, and self-healing. Currently expanding into Kubernetes and Terraform for infrastructure-as-code, and working toward cloud certifications.
            </p>
          </GlassCard>
        </div>

        {/* Timeline */}
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.18em", marginBottom: 32 }}>
          // LEARNING JOURNEY
        </div>
        <div className="about-timeline">
          <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom,#6366f1,#38bdf8,transparent)" }} />
          {TIMELINE.map((t, i) => (
            <div key={i} style={{ position: "relative", marginBottom: 34 }}>
              <div style={{ position: "absolute", left: -26, top: 4, width: 12, height: 12, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 12px #6366f1" }} />
              <div style={{ color: "#6366f1", fontSize: 11, marginBottom: 5, letterSpacing: "0.08em" }}>{t.year} {t.icon}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.65 }}>{t.event}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
