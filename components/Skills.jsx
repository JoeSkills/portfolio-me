import React, { useState, useEffect } from 'react';
import { urlFor, client } from '@/client';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client
      .fetch(query)
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="skills-section section-spacing" id="My Skills">
      <span className="skills-section__title">What Can I do💪</span>
      <div className="skills-section__desc">
        From HTML & CSS🥱 to Next.Js🔥, React.JS, MongoDB and Node.JS. Check out
        some the skills🎯 I've attained in web development.
      </div>
      <div className="skills-section__tech-logos">
        {skills.map((skill, index) => {
          return (
            <div className="skills-section__tech-logos__logo" key={index}>
              <img
                src={urlFor(skill.imgUrl)}
                width="30"
                height="30"
                className="skills-section__tech-logos__logo__image"
              />
              <span className="skills-section__tech-logos__logo__title">
                {skill.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
