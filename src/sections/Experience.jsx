import SectionTitle from "../components/common/SectionTitle";
import CertificateCard from "../components/certifications/CertificateCard";
import GlassCard from "../components/common/GlassCard";
import CERTS from "../data/certifications";

const css = `
  .exp-section {
    padding: 100px 0;
    background: rgba(255,255,255,0.01);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    box-sizing: border-box;
  }

  .exp-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 6vw;
    box-sizing: border-box;
  }

  .exp-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .exp-work-card {
    padding: 28px;
  }

  .exp-work-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  @media (max-width: 760px) {
    .exp-section {
      padding: 80px 0;
    }

    .exp-inner {
      padding: 0 18px;
    }

    .exp-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .exp-work-card {
      padding: 20px 16px;
    }

    .exp-work-row {
      gap: 12px;
    }
  }
`;

const WORK_BULLETS = [
  "Completed 6-week IBM SkillsBuild AI internship in association with AICTE",
  "Studied AI strategy frameworks and BI methodologies",
  "Explored real-world AI adoption case studies across industries",
];

export default function Experience() {
  return (
    <>
      <style>{css}</style>
      <section id="experience" className="exp-section">
        <div className="exp-inner">
          <SectionTitle tag="// experience" title="Experience & Certifications" />

          <div className="exp-grid">

            {/* Work */}
            <div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.16em", marginBottom: 22 }}>
                // WORK EXPERIENCE
              </div>
              <GlassCard glow="#10b981" style={{ padding: 0 }}>
                <div className="exp-work-card">
                  <div className="exp-work-row">
                    <span style={{ fontSize: 28, marginTop: 2, flexShrink: 0 }}>🏢</span>
                    <div>
                      <div style={{ color: "#10b981", fontSize: 10, letterSpacing: "0.1em", marginBottom: 6 }}>
                        MAR 2026 – APR 2026
                      </div>
                      <h4 style={{ color: "#f1f5f9", fontSize: 15, fontWeight: 800, marginBottom: 6 }}>
                        AI Strategy & BI Intern
                      </h4>
                      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, marginBottom: 14 }}>
                        CSRBOX Foundation / IBM SkillsBuild / AICTE
                      </div>
                      {WORK_BULLETS.map((item, i) => (
                        <div key={i} style={{
                          color: "rgba(255,255,255,0.4)", fontSize: 12, lineHeight: 1.7,
                          paddingLeft: 14, position: "relative", marginBottom: 4,
                        }}>
                          <span style={{ position: "absolute", left: 0, color: "#10b981" }}>›</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Certs */}
            <div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "0.16em", marginBottom: 22 }}>
                // CERTIFICATIONS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {CERTS.map(c => <CertificateCard key={c.title} c={c} />)}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
