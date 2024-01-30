import React from 'react';
import Signup from './Sign_up.js';
import { Link } from 'react-router-dom';
import './App.css';
import './loginform.css';


function App() {
  return (

      <div className="App">
        <header className="App-header">
          <b><font size="9">Welcome to Skill Sharing and Learning Platform</font></b>
          <i><font size="3"> Learn, Discover and share skills with others </font></i>

	 <div className="login-form-container">

    	  <h2>Login</h2>
	      <form>
        	<label htmlFor="username">Username:</label>
        	<input type="text" id="username"
        	  name="username"
        	/>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
        <div>
        <button className="submit"> Login</button>
        
          <Link className="App-link" to="/Signup">
            <button class="sign">Sign up or Register</button>
          </Link>
          
          </div>
          

      </form>
    </div>

    </header>
      </div>
  );
}

export default App;

