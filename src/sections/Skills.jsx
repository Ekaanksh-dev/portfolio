import SectionTitle from "../components/common/SectionTitle";
import SkillBar from "../components/skills/SkillBar";
import SKILLS from "../data/skills";

const css = `
  .skills-section {
    padding: 100px 0;
    background: rgba(255,255,255,0.01);
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    box-sizing: border-box;
  }

  .skills-inner {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 6vw;
    box-sizing: border-box;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 14px;
  }

  @media (max-width: 640px) {
    .skills-section {
      padding: 80px 0;
    }

    .skills-inner {
      padding: 0 18px;
    }

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
`;

export default function Skills() {
  return (
    <>
      <style>{css}</style>
      <section id="skills" className="skills-section">
        <div className="skills-inner">
          <SectionTitle tag="// skills" title="Technical Arsenal" subtitle="Tools and technologies I work with daily" />
          <div className="skills-grid">
            {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
