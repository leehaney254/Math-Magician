import {
  Route, Routes,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Calculator />} />
      </Routes>
    </>
  );
}

export default App;
