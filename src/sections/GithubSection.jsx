import SectionTitle from "../components/common/SectionTitle";
import GithubStats from "../components/github/GithubStats";

export default function GithubSection() {
  return (
    <section style={{ padding: "80px 6vw", maxWidth: 1160, margin: "0 auto", boxSizing: "border-box" }}>
      <SectionTitle tag="// github" title="GitHub Activity" />
      <GithubStats />
    </section>
  );
}
