import React, { useState } from 'react';

import Styles from './index.css';

import Button from '../../components/Button';
import Notepad from '../../components/Notepad';

import About from '../../pages/about.jsx';
import Skills from '../../pages/skills.jsx';
import Contact from '../../pages/contact.jsx';

const Screen = () => {
  const [content, setContent] = useState('about');

  return (
    <div className={Styles.wrapper}>
      <Notepad onClick={page => setContent(page)}>
        {content === 'about' && <About />}
        {content === 'skills' && <Skills />}
        {content === 'contact' && <Contact />}
      </Notepad>
      <div className={Styles.buttons}>
        <Button title="about" onClick={() => setContent('about')} />
        <Button title="skills" onClick={() => setContent('skills')} />
        <Button title="contact" onClick={() => setContent('contact')} />
      </div>
    </div>
  );
};

export default Screen;
