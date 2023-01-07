import React from 'react';

import Screen from './containers/Screen';

import Styles from './index.css';

const App = () => {
  return (
    <div className={Styles.main}>
      <Screen />
      <div className={Styles.footer}>
        Made with <span style={{ color: '#000' }}>&#9829;</span> by me
      </div>
    </div>
  );
};

export default App;
