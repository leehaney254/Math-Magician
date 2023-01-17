import {
  Route, Routes,
} from 'react-router-dom';
import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/Math-Magician/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
