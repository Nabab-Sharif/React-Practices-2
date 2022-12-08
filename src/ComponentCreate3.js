
//class Component create here

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

  render() {
    return (
      <h1>
        <span>Welcome {new Date().toLocaleTimeString()}</span>
      </h1>
    );

  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));