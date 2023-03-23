import logo from './logo.svg';
import './App.css';
import scaloneta from './scaloneta.jpg'
import 'animate.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <img src={scaloneta} className="scaloneta animate__animated animate__backInLeft" />
          <p>
          Hoy juega la Scaloneta
        </p>
      </header>
    </div>
  );
}

export default App;
