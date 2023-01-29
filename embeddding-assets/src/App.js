import logo from './logo.svg';
import './App.css';
import genesis from './assets/images/Genesis - circle.png';
import ReactPlayer from "react-player";

function App() {
  const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  ); 
 
  function toggle1() { 
    if (bird1.paused) {
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }; 
 
  function toggle2() { 
    if (bird2.paused) {
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  };

  return (
    <div className="App">
      <h1>Image asset</h1>
      <img 
      height={200}
      src={require('./assets/images/Genesis - circle.png')}
      alt="Genesis logo" 
      />

      <img 
      height={200}
      src={genesis}
      alt="Genesis logo" 
      />

      <h1>Video asset</h1>
      <ReactPlayer 
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
      playing={true}
      volume={.5}
      />

      <h1>Audio asset</h1>
      <div> 
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
      </div> 
    </div>
  );
}

export default App;
