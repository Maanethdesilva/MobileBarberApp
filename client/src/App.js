import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>Register</a>
        <br />
        <label>
          Username
        </label>
        <input type="text" name="username" />
        <label>
          Password
        </label>
        <input type="text" name="password" />      
        <button> Register </button>
      </header>
    </div>
  );
}

export default App;
