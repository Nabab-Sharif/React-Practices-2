import React from 'react';
import ReactDOM from 'react-dom';

const index = 0;
const element = (
  <h1 className='heading' tabIndex={index}>
    <span className='text'>Welcome to react</span>
  </h1>
);

ReactDOM.render(element, document.getElementById('root'));