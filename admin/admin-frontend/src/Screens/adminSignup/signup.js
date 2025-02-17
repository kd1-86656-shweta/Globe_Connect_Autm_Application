import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { adminServiceSignup } from "../../services/admin";
import './signup.css';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  
  const onSignUpClicked = async () => {
    // Regex for normal password: at least 8 characters, 1 lowercase letter, and 1 uppercase letter
    const normalPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    // Regex for valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    // Check for empty fields and validate input
    if (userName.length === 0) {
      toast.warn('Please Enter Username');
    } else if (userName.length < 3) {
      toast.warn('Username must be at least 3 characters long');
    } else if (!/^[a-zA-Z0-9_]+$/.test(userName)) {
      toast.warn('Username can only contain letters, numbers, and underscores');
    } else if (email.length === 0) {
      toast.warn('Please Enter Email');
    } else if (!emailRegex.test(email)) {
      toast.warn('Please enter a valid email address');
    } else if (password.length === 0) {
      toast.warn('Please Enter Password');
    } else if (!normalPasswordRegex.test(password)) {
      toast.warn('Password must be at least 8 characters long and include one uppercase and one lowercase letter');
    } else if (confirmPassword !== password) {
      toast.warn('Passwords do not match');
    } else {
      console.log("i am at signupclicked");
      const result = await adminServiceSignup(userName, email, password);
      console.log(result);
      if (result['status'] === 'success') {
        toast.success('Successfully registered a new admin');
        navigate("/login");
      } else {
        console.log(result);
        toast.error("Signup failed! username or email must be unique!!");
      }
    }
  };
  
  

  return (
    <div className="signupFormHolder">
      <div className="glassEffect">
        <h2>Sign Up</h2>
        <div className="signupInputHolder">
          <input
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-control"
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <input
            type="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <div style={{ margin: "2vh 0 0 0" }}>
          <p style={{ color: "#555" }}>
            Already have an account? <Link to='/login' style={{ color: "#007bff", textDecoration: "none" }}>Login</Link>
          </p>
        </div>
        <div className="signupButtonHolder">
          <button onClick={onSignUpClicked}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
