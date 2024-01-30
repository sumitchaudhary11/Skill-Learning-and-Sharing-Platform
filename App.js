import React from 'react';
import Signup from './Sign_up.js';
import { Link } from 'react-router-dom';
import './App.css';
import './loginform.css';
import imageskill from './skillsimg1.jpeg';


function App() {
  return (
  	
	
	
      		<div className="App">
      		<div className="top">
			<Link className="App-link" to="/Signup">
        	    <button class="sign">Sign up or Register</button>
	          </Link>
          <button className="submit-main">Sign Up</button> Sign in 
		</div>
	      <header className="main-header">
          <b><font size="9">Welcome to Skill Sharing and Learning Platform</font></b>
		<div className="quote"><i>Learn, Discover and share skills with others </i></div>
          </header>

    
          <div className="Image">
	   <img src={imageskill} alt="Description" style={{ borderRadius:'10px', width: '350px', height: '280px' }} />
	</div>
          </div>
    
  );
}

export default App;

