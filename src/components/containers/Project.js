import React from 'react';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  return (
    <article className="project">
      <img src={image} alt={title} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>

        <a href={url} target="_blank" className="project-slug">
          <h3>{title}</h3>
        </a>

        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
