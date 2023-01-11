import React from 'react';
import './Calculator.css';
import calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
    this.onClickEventHandler = this.onClickEventHandler.bind(this);
  }

  onClickEventHandler(e) {
    const { value } = e.target;
    this.setState((state) => calculate({
      total: state.total,
      next: state.next,
      operation: state.operation,
    }, value));
  }

  render() {
    const { total, next, operation } = this.state;
    let result = '';
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = `${next || ''} ${operation || ''}`;
    }
    return (
      <main id="main">
        <div className="height" id="answer">
          <p id="spaceright">{result || 0}</p>
        </div>
        <div className="height">
          <button type="button" value="AC" onClick={this.onClickEventHandler} className="button">AC</button>
          <button type="button" value="+/-" onClick={this.onClickEventHandler} className="button">+/-</button>
          <button type="button" value="%" onClick={this.onClickEventHandler} className="button">%</button>
          <button type="button" value="÷" onClick={this.onClickEventHandler} className="button symbols">&divide;</button>
        </div>
        <div className="height">
          <button type="button" value="7" onClick={this.onClickEventHandler} className="button">7</button>
          <button type="button" value="8" onClick={this.onClickEventHandler} className="button">8</button>
          <button type="button" value="9" onClick={this.onClickEventHandler} className="button">9</button>
          <button type="button" value="x" onClick={this.onClickEventHandler} className="button symbols">&#215;</button>
        </div>
        <div className="height">
          <button type="button" value="4" onClick={this.onClickEventHandler} className="button">4</button>
          <button type="button" value="5" onClick={this.onClickEventHandler} className="button">5</button>
          <button type="button" value="6" onClick={this.onClickEventHandler} className="button">6</button>
          <button type="button" value="-" onClick={this.onClickEventHandler} className="button symbols">-</button>
        </div>
        <div className="height">
          <button type="button" value="1" onClick={this.onClickEventHandler} className="button">1</button>
          <button type="button" value="2" onClick={this.onClickEventHandler} className="button">2</button>
          <button type="button" value="3" onClick={this.onClickEventHandler} className="button">3</button>
          <button type="button" value="+" onClick={this.onClickEventHandler} className="button symbols">+</button>
        </div>
        <div className="height">
          <button type="button" value="0" onClick={this.onClickEventHandler} className="button1">0</button>
          <button type="button" value="." onClick={this.onClickEventHandler} className="button">.</button>
          <button type="button" value="=" onClick={this.onClickEventHandler} className="button symbols">=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
