import React from 'react';

const ProjectDetail = ({ title, description }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  );
};

export default ProjectDetail;
