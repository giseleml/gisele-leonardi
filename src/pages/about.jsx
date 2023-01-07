import React from 'react';

import Styles from './index.css';

import me from './images/me.jpg';

const professional = `Hello! I'm a brazilian dev who loves coding. I'm a great team worker - 
I like to help and listen to others' point of view but I also can guide myself well.
I've gratuaded in "Systems For The Internet" (equivalent of Associate Degree) and I've
been working as a software developer for 2,5 years`;

const professional2 = `I got experience in front-end,
back-end and a bit of CI/CD (github workflows and deploying with AWS/Kubernetes). I've
also had my fair share of dealing with bugs and quick solving problems in production environment.
I love clean code and following patterns chosen by the team to deliver a higher quality code.
`;

const general = `My general interests are technology, games, music, movies, languages,
cyberpunk universe and cute stuff. 
I like to play the bass (quite badly but still), befriendling new animals on animal crossing
and I'm a huge skincare enthusiast. Let's share our routines!`;

const About = () => (
  <div className={Styles.wrapper}>
    <h2>Gisele Leonardi &hearts; Software Developer</h2>
    <img src={me} alt="A selfie of me" />
    <br />
    <p>{professional}</p>
    <br />
    <p>{professional2}</p>
    <br />
    <p>{general}</p>
  </div>
);

export default About;
