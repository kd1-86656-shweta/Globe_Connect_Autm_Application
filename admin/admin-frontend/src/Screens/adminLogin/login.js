import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//import { signin } from "../Services/User"; // Assuming you have this service
import './login.css';
import '../adminSignup/signup';
import { adminServiceLogin} from "../../services/admin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSignInClicked = async () => {
    if (email.length === 0) {
      toast.warn('Please Enter Email');
    } else if (password.length === 0) {
      toast.warn('Please Enter Password');
    } else {
      console.log("I am at signInClicked");
  
      // Call the login API
      const result = await adminServiceLogin(email, password);
      console.log(result);
  
      if (result['status'] === 'success') {
        // Assuming the token is in the result's 'token' field or equivalent
        const token = result['jwt'];
  
        // Store the token in session storage
        sessionStorage.setItem('token', token);
  
        // Provide a success message
        toast.success('Login successfully!!!');
  
        // Redirect to the dashboard
        navigate("/dashboard");
      } else {
        console.log(result);
        toast.error("Login failed! Invalid email or Password!!");
      }
    }
  };
  

  return (
    <div className="loginFormHolder">
      <div className="glassEffect">
        <h2>Login</h2>
        <div className="loginInputHolder">
          <input 
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <input 
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div style={{ margin: "2vh 0 0 0" }}>
          <p style={{ color: "#555" }}>
            Don't have an account? <Link to='/signup' style={{ color: "#007bff", textDecoration: "none" }}>Signup</Link>
          </p>
        </div>
        <div className="loginButtonHolder">
          <button onClick={onSignInClicked}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
