import logo from './logo.svg';
import './App.css';
import CurrentMessage from './components/CurrentMessage';

function App() {
  const day = new Date().getDay();
  return (
    <div className="App">
      <CurrentMessage day={day} />
    </div>
  );
}

export default App;
