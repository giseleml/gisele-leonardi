import React from 'react';
import PropTypes from 'prop-types';

import Styles from './index.css';

const Button = ({ title, onClick }) => (
  <button type="button" className={Styles.button} onClick={onClick}>
    {title}
  </button>
);

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
