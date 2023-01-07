import React from 'react';

import Styles from './index.css';

import web from './images/web-development.png';

const general = `I'm very dedicated to my code reviewing as I see it as one of the main ways to 
improve coding skills; I pay attention to details and make sure we're following the best practices
along with the team's defined pattern.`;
const front = `# Front-End: React, NextJS, Redux, React-Router, SCSS, Less and CSS Modules`;
const back = `# Back-End: NodeJS, Docker, Kubernetes and Amazon Web Services. Integrating and consuming API's`;
const testing = `# Testing: Jest and Supertest`;
const softSkills = `# Soft Skills: Team working, time management and decision-making`;

const Skills = () => (
  <div className={Styles.wrapper}>
    <img
      src={web}
      className={Styles.skillsImg}
      alt="a colorful computer illustrating programming"
    />
    <h2>Skills &hearts;</h2>
    <p>{general}</p>
    <p>{front}</p>
    <br />
    <p>{back}</p>
    <br />
    <p>{testing}</p>
    <br />
    <p>{softSkills}</p>
  </div>
);

export default Skills;
