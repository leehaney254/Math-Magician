import './Quote.css';

const Quote = () => (
  <main id="footerContainer">
    <ul className="homeContent">
      <li className="listspace">
        &quot;Mathematics is not about numbers, equations,
        computations, or algorithms: it is about understanding.
        &quot; -
        <span className="author"> William Paul Thurston</span>
      </li>
      <li className="listspace">
        &quot;The beauty of mathematics only shows itself to more patient followers.&quot;
        -
        <span className="author"> Aristotle</span>
      </li>
      <li className="listspace">
        &quot;Mathematics is the queen of the sciences and arithmetic is
        the queen of mathematics.&quot;
        -
        <span className="author"> Carl Friedrich Gauss</span>
      </li>
    </ul>
  </main>
);

export default Quote;
