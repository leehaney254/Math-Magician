import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <main id="main">
        <div className="height">
          <p>0</p>
        </div>
        <div className="height">
          <button type="button" className="button">AC</button>
          <button type="button" className="button">+/-</button>
          <button type="button" className="button">%</button>
          <button type="button" className="button">&divide;</button>
        </div>
        <div className="height">
          <button type="button" className="button">7</button>
          <button type="button" className="button">8</button>
          <button type="button" className="button">9</button>
          <button type="button" className="button">&#215;</button>
        </div>
        <div className="height">
          <button type="button" className="button">4</button>
          <button type="button" className="button">5</button>
          <button type="button" className="button">6</button>
          <button type="button" className="button">-</button>
        </div>
        <div className="height">
          <button type="button" className="button">1</button>
          <button type="button" className="button">2</button>
          <button type="button" className="button">3</button>
          <button type="button" className="button">+</button>
        </div>
        <div className="height">
          <button type="button" className="button1">0</button>
          <button type="button" className="button">.</button>
          <button type="button" className="button">=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
