import React from 'react';
import Title from '../layout/Title';
import projects from '../../constants/projects';
import Project from './Project';
import { Link } from 'react-router-dom';
import '../../asset/css/Projects.css';

const Projects = ({ title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn-common center-btn">
          projects
        </Link>
      )}
    </section>
  );
};
export default Projects;
