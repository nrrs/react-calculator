import React from 'react';
import ReactDOM from 'react-dom';

import Calculator from './calculator';

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>React Calculator!</h1>
        <Calculator />
      </div>
    );
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});
