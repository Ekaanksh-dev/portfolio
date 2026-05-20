import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/contact/ContactForm";

const css = `
  .contact-section {
    padding: 100px 6vw;
    background: rgba(255,255,255,0.01);
    box-sizing: border-box;
  }

  .contact-inner {
    max-width: 700px;
    margin: 0 auto;
  }

  .contact-card {
    padding: 38px;
  }

  .contact-info-row {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .contact-info-value {
    color: #e2e8f0;
    font-size: 13px;
    word-break: break-all;
  }

  .contact-info-link {
    color: #38bdf8;
    font-size: 13px;
    text-decoration: none;
    word-break: break-all;
    transition: opacity 0.2s;
  }

  .contact-info-link:hover {
    opacity: 0.75;
  }

  @media (max-width: 600px) {
    .contact-card {
      padding: 24px 18px;
    }

    .contact-info-row {
      gap: 12px;
      align-items: flex-start;
    }

    .contact-info-value,
    .contact-info-link {
      font-size: 12px;
    }
  }
`;

const INFO = [
  { icon: "📧", label: "EMAIL",    value: "patilekanksh487@gmail.com", href: "mailto:patilekanksh487@gmail.com" },
  { icon: "🔗", label: "GITHUB",   value: "github.com/Ekaanksh-dev",   href: "https://github.com/Ekaanksh-dev", external: true },
  { icon: "📍", label: "LOCATION", value: "Mumbai, Maharashtra, India", href: null },
];

export default function Contact() {
  return (
    <>
      <style>{css}</style>
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <SectionTitle tag="// contact" title="Let's Connect" subtitle="Open to internships, collaborations, and interesting problems." />
          <GlassCard glow="#6366f1" style={{ padding: 0 }}>
            <div className="contact-card">
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                {INFO.map(c => (
                  <div key={c.label} className="contact-info-row">
                    <span style={{ fontSize: 19, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 9, letterSpacing: "0.15em", marginBottom: 3 }}>
                        {c.label}
                      </div>
                      {c.href
                        ? <a href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noreferrer" : undefined} className="contact-info-link">{c.value}</a>
                        : <span className="contact-info-value">{c.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
              <ContactForm />
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
