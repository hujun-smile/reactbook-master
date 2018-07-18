'use strict';

import React from './build/react';
import ReactDOM from './build/react-dom';
import Logo from './components/Logo';

ReactDOM.render(
  <h1>
    <Logo /> Welcome to The App!
  </h1>,
  document.getElementById('app')
);