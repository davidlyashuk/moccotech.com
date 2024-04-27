import { ProjectsInterface } from '@/interfaces/projects';
import { urlFor } from '@/lib/sanity';
import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsList({
  projects,
}: {
  projects: ProjectsInterface[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          id={project.slug}
          title={project.title}
          shortDescription={project.description}
          image={urlFor(project.images[0]).url()}
        />
      ))}
    </div>
  );
}
