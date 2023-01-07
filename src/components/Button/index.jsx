import React from 'react';
import PropTypes from 'prop-types';

import Styles from './index.css';

const Button = ({ onClick }) => (
  <button type="button" className={Styles.button} onClick={onClick}>
    Click me
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
