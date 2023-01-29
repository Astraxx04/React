import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
      <div><Link to="/" className='nav-item' >Homepage</Link></div>
      <div><Link to="/about" className='nav-item' >About Us</Link></div>
      <div><Link to="/contact" className='nav-item' >Homepage</Link></div>
      </nav>
      <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/about" element={ <Aboutme /> } />
      <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
