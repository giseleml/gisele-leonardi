import React from 'react';

import Styles from './index.css';

import code from './images/code.png';
import email from './images/email.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.png';
import talk from './images/talk.png';

const general = `Here are a few ways you can get in contact with me.`;
const Contact = () => (
  <div className={Styles.contact_wrapper}>
    <h2>Contact &hearts;</h2>
    <img src={talk} alt="Person speaking" />
    <p>{general}</p>
    <br />
    <p>
      I am also on twitter as @leonardigi but I do not log in there as often as
      I do on these other social medias:
    </p>
    <br />
    <div className={Styles.medias}>
      <a href="mailto:giselemaraleo@gmail.com">
        {' '}
        <img src={email} alt="email icon" />
      </a>
      <a href="https://github.com/giseleml">
        {' '}
        <img src={github} alt="github icon" />
      </a>
      <a href="https://codepen.io/giseleml">
        {' '}
        <img src={code} alt="code icon" />
      </a>
      <a href="https://linkedin.com/in/gisele-leonardi-724245176">
        {' '}
        <img src={linkedin} alt="linkedin icon" />
      </a>
    </div>
    <p>
      Thank you for checking my website. Please let me know if you have any
      questions, suggestions and such, preferably through my email.
    </p>
    <p>
      Let it be known that every single icon used on this website is free and
      are both from Freepik and Icons8 as well.
    </p>
  </div>
);

export default Contact;
