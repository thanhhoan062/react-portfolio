import React from 'react';
import { Projects } from '../containers';
import projects from '../../constants/projects';

const ProjectsPage = () => {
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;
