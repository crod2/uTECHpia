import logo from './logo.svg';
import './App.css';

function App() {
  const title = "<uTECHpia>"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         {title} 
        </h1>
      </header>
    </div>
  );
}

export default App;
