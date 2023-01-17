import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Welcome to our home page!';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 80);
    }
  }, [index, text]);

  return (
    <main id="homeContainer">
      <div className="homeContent">
        <h1>{text}</h1>
        <p id="homeText">
          This is a simple and easy-to-use calculator.
          Our goal is to provide you with a quick and efficient way
          to perform basic mathematical calculations.
          Whether you need to add, subtract, multiply, or divide, our calculator can handle it all.
          We understand that sometimes all you need is a straightforward solution,
          that&apos;s why we have designed our calculator to be straightforward and easy to use.
          It&apos;s perfect for students, professionals, and anyone who needs a reliable
          calculator for everyday use.
          Our calculator is free to use and you can access it anytime from anywhere.
          Try it out now and see for yourself how convenient it can be.
        </p>
      </div>
    </main>
  );
};

export default Home;
