import React from 'react';
import './Calculator.css';
import calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: '',
    };
    this.onClickEventHandler = this.onClickEventHandler.bind(this);
  }

  onClickEventHandler(e) {
    this.setState({ button: e.target.innerHTML });
    const { button } = this.state;
    console.log(button);
  }

  render() {
    return (
      <main id="main">
        <div className="height" id="answer">
          <p id="spaceright">0</p>
        </div>
        <div className="height">
          <button type="button" onClick={this.onClickEventHandler} className="button">AC</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">+/-</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">%</button>
          <button type="button" onClick={this.onClickEventHandler} className="button symbols">&divide;</button>
        </div>
        <div className="height">
          <button type="button" onClick={this.onClickEventHandler} className="button">7</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">8</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">9</button>
          <button type="button" onClick={this.onClickEventHandler} className="button symbols">&#215;</button>
        </div>
        <div className="height">
          <button type="button" onClick={this.onClickEventHandler} className="button">4</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">5</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">6</button>
          <button type="button" onClick={this.onClickEventHandler} className="button symbols">-</button>
        </div>
        <div className="height">
          <button type="button" onClick={this.onClickEventHandler} className="button">1</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">2</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">3</button>
          <button type="button" onClick={this.onClickEventHandler} className="button symbols">+</button>
        </div>
        <div className="height">
          <button type="button" onClick={this.onClickEventHandler} className="button1">0</button>
          <button type="button" onClick={this.onClickEventHandler} className="button">.</button>
          <button type="button" onClick={this.onClickEventHandler} className="button symbols">=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
