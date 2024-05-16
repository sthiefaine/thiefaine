import { Card } from "@/components/Card/card";
import PageTitle from "@/components/PageTitle/pageTitle";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <PageTitle>Projets</PageTitle>
      <main>
        {projectsData.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </main>
    </>
  );
}
