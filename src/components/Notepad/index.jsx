import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.css';

import heart from './images/heart.png';

const Notepad = ({ children }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.hearts}>
        <img src={heart} alt="heart" />
        <img src={heart} alt="heart" />
        <img src={heart} alt="heart" />
      </div>
      <div className={Styles.block}>{children}</div>
    </div>
  );
};

export default Notepad;

Notepad.propTypes = {
  children: PropTypes.element,
};
