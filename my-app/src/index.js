import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class LuckyBelly extends React.Component {

  render() {
    return (
        <h1>Lucky Belly!</h1>
  );
  }
}

ReactDOM.render(<LuckyBelly />, document.getElementById('root'));