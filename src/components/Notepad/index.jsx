/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.css';

import heart from './images/heart.png';

const Notepad = ({ children, onClick }) => {
  const pages = ['about', 'skills', 'contact'];

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.hearts}>
        {pages.map((page, idx) => (
          <img
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            src={heart}
            onClick={() => onClick(page)}
            alt="heart"
          />
        ))}
      </div>
      <div className={Styles.block}>{children}</div>
    </div>
  );
};

export default Notepad;

Notepad.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.element,
};
