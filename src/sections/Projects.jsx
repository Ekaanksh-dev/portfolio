import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import PROJECTS from "../data/projects";

const css = `
  .projects-section {
    padding: 100px 6vw;
    max-width: 1160px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 20px;
  }

  @media (max-width: 640px) {
    .projects-section {
      padding: 80px 18px;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }
`;

export default function Projects() {
  return (
    <>
      <style>{css}</style>
      <section id="projects" className="projects-section">
        <SectionTitle tag="// projects" title="What I've Built" subtitle="Real projects with real impact." />
        <div className="projects-grid">
          {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
        </div>
      </section>
    </>
  );
}
