import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({
    total: 0,
    next: '',
    operation: '',
  });

  const onClickEventHandler = (e) => {
    const { value } = e.target;
    setCalculation((prevState) => calculate({
      total: prevState.total,
      next: prevState.next,
      operation: prevState.operation,
    }, value));
  };

  const { total, next, operation } = calculation;
  const result = (
    <p id="spaceright">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
      {' '}
    </p>
  );

  return (
    <main id="main">
      <div className="height" id="answer">
        {result}
      </div>
      <div className="height">
        <button type="button" value="AC" onClick={onClickEventHandler} className="button">AC</button>
        <button type="button" value="+/-" onClick={onClickEventHandler} className="button">+/-</button>
        <button type="button" value="%" onClick={onClickEventHandler} className="button">%</button>
        <button type="button" value="÷" onClick={onClickEventHandler} className="button symbols">&divide;</button>
      </div>
      <div className="height">
        <button type="button" value="7" onClick={onClickEventHandler} className="button">7</button>
        <button type="button" value="8" onClick={onClickEventHandler} className="button">8</button>
        <button type="button" value="9" onClick={onClickEventHandler} className="button">9</button>
        <button type="button" value="x" onClick={onClickEventHandler} className="button symbols">&#215;</button>
      </div>
      <div className="height">
        <button type="button" value="4" onClick={onClickEventHandler} className="button">4</button>
        <button type="button" value="5" onClick={onClickEventHandler} className="button">5</button>
        <button type="button" value="6" onClick={onClickEventHandler} className="button">6</button>
        <button type="button" value="-" onClick={onClickEventHandler} className="button symbols">-</button>
      </div>
      <div className="height">
        <button type="button" value="1" onClick={onClickEventHandler} className="button">1</button>
        <button type="button" value="2" onClick={onClickEventHandler} className="button">2</button>
        <button type="button" value="3" onClick={onClickEventHandler} className="button">3</button>
        <button type="button" value="+" onClick={onClickEventHandler} className="button symbols">+</button>
      </div>
      <div className="height">
        <button type="button" value="0" onClick={onClickEventHandler} className="button1">0</button>
        <button type="button" value="." onClick={onClickEventHandler} className="button">.</button>
        <button type="button" value="=" onClick={onClickEventHandler} className="button symbols">=</button>
      </div>
    </main>
  );
};

export default Calculator;
