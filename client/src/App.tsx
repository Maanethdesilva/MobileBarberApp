import { useState } from 'react';
import './App.css';
import Axios from 'axios'


function App() {

  const logo = require("./logo.svg") as string;
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitRegister = () => {
    Axios.post("http://localhost:3002/api/register", 
    {
      username: username,
      password: password,
    }).then(() => {
      alert("success")
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a>Register</a>
        <br />
        <label>
          Username
        </label>
        <input type="text" 
          name="username" 
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <label>
          Password
        </label>
        <input type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
         />      
        <button onClick={submitRegister}> Register </button>
      </header>
    </div>
  );
}

export default App;
