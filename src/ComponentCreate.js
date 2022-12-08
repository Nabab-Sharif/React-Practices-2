
//Functional Component Create Here

import React from 'react';
import ReactDOM from 'react-dom';


function Clock() {
  return (
    <h1>
      <span> Welcome {new Date().toLocaleTimeString()}</span>
    </h1>
  );
}

ReactDOM.render(
  <div>
    <Clock />
    <Clock />
  </div>,

  document.getElementById('root')
);