
//Functional Component Create 2 Here 

import React from 'react';
import ReactDOM from 'react-dom';


function Clock({locale}) {
  return (
    <h1>
      <span> Welcome {new Date().toLocaleTimeString(locale)}</span>
    </h1>
  );
}

ReactDOM.render(<Clock locale="bn-BD" /> ,   document.getElementById('root'));