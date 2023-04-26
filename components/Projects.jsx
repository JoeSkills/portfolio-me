import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client, urlFor } from '@/client';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectFilter, setProjectFilter] = useState([]);
  const [projectActiveFilter, setProjectActiveFilter] = useState('Show All');
  const NoProject = () => {
    return (
      <span className="projects-section__projects__no-projects">
        Sorry😔 I Forgot To Add A Project👨‍💻 For This Category
      </span>
    );
  };
  const projectCategories = [
    'Show All',
    'React',
    'NextJs',
    'Plain Js',
    'Games',
  ];

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        setProjectFilter(data);
        setProjectActiveFilter('Show All');
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProjectFilter = (item) => {
    if (item === 'Show All') {
      setProjectActiveFilter(item);
      setProjectFilter(projects);
    } else {
      setProjectActiveFilter(item);
      setProjectFilter(
        projects.filter((project) => project.tags.includes(item))
      );
    }
  };

  return (
    <div className="projects-section section-spacing" id="My Projects">
      <span className="projects-section__title">Here's Some Of My Work👨‍💻</span>
      <div className="projects-section__tags">
        {projectCategories.map((item, index) => {
          return (
            <span
              className={`projects-section__tags__tag${
                projectActiveFilter === item ? ' tag--active' : ''
              }`}
              key={index}
              onClick={() => handleProjectFilter(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="projects-section__projects">
        {projectFilter.length ? (
          projectFilter?.map((project, index) => {
            return (
              <div className="projects-section__projects__project" key={index}>
                <img
                  src={urlFor(project.imgUrl)}
                  width="50"
                  height="50"
                  className="projects-section__projects__project__image"
                />
                <span className="projects-section__projects__project__title">
                  <a
                    href={project.projectLink}
                    className="projects-section__projects__project__title__link"
                  >
                    {project.title}
                  </a>
                </span>
                <span className="projects-section__projects__project__desc">
                  {project.description}
                </span>

                <div className="projects-section__projects__project__btn">
                  <a
                    className="projects-section__projects__project__btn__btn btn--live"
                    href={project.projectLink}
                  >
                    <FiExternalLink className="projects-section__projects__project__btn__link-logo" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    className="projects-section__projects__project__btn__btn btn--github"
                    href={project.codeLink}
                  >
                    <FaGithub className="projects-section__projects__project__btn__github-logo" />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <NoProject />
        )}
      </div>
    </div>
  );
};

export default Projects;
