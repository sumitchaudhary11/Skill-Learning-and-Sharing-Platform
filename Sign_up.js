import React from 'react';
import App from './App.js';
import { Link } from 'react-router-dom';
import './App.css';
import './signup.css';
import './loginform.css';

function Sign_up_acc() {
  return (
<div>	
	<div className="top">
		 <Link className="App-link" to="/Signup">
        	    <button class="sign">Sign up or Register</button>
	          </Link>
          <button className="submit-main">Sign Up</button> Sign in 
	</div>

	<div className="signup-form-container">
    	  <h2>Create Account:</h2>
	  <form>
	      <label htmlFor="Firstname">First Name:</label>
        	<input type="text" id="First Name"
        	  name="First Name"
        	/>
        	<label htmlFor="LastName">Last Name:</label>
        	<input type="text" id="Last Name"
        	  name="Last Name"
        	/>
        	
        	
        	<label htmlFor="username">Username:</label>
        	<input type="text" id="username"
        	  name="username"
        	/>
        	 <label htmlFor="Occupation:">Username:</label>
        	<input type="text" id="username"
        	  name="username"
        	/>
	
        	<label htmlFor="password">Create Password:</label>
        	<input
        	  type="password"
        	  id="password"
        	  name="password"
        	/>
		<label htmlFor="password">Confirm Password:</label>
        	<input
	          type="password"
        	  id="password"
        	  name="password"
        	/>
        	<div>
        	<button className="submit"> Create</button>
		<Link className="App-link" to="/App">
        	        <button class="sign">Login</button>
		</Link>
          
		</div>
	</form>
	</div> 
</div>
  );
}

export default Sign_up_acc;
