import Button from "@/components/Button";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/data";
import React from "react";

const Projects: React.FC = async () =>
{
  const projects = await fetchProjects();

  return (
    <section className = "pt-[100px]">
      <Container>
        <div className = "text-center px-4 md:px-0">
          <h2 className = "text-3xl md:text-4xl font-medium">
            Success Project With
          </h2>

          <h2 className = "text-3xl md:text-4xl font-medium">Supernova</h2>

          <p className = "mt-4 text-secondary">
            Proudly, here are some examples of websites we have worked on.
          </p>
        </div>

        <div className = "flex flex-col gap-4 md:gap-8 mt-8">
          {
            projects && projects.map(
              (project, idx) => 
              (
                <ProjectCard
                  key = {idx}
                  id = {idx}
                  description = {project.description}
                  imgUrl = {project.imageUrl}
                  job = {project.job}
                  link = {project.projectLink}
                  title = {project.title}
                />
              )
            )
          }
        </div>

        <div className = "mt-8 flex justify-center">
          <Button bgColor = "bg-accent">Built a Project</Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;