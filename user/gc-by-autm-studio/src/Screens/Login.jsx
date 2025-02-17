import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signin } from "../Services/User";
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    // const onSignInClicked = async() => {

    //     if(email.length === 0)
    //     {
    //       toast.warn('Please Enter Email');
    //     }
    //     else if(password.length === 0)
    //     {
    //       toast.warn('Please Enter Password');
    //     }
    //      else {

    //         // We'll check login credentials here by comparing with Db
    //          navigate('/home')

    //     }

    // }


    const onSignInClicked = async () => {
        if (email.length === 0) {
            toast.warn("Please Enter Email");
        } else if (password.length === 0) {
            toast.warn("Please Enter Password");
        } else {
            try {
                const response = await fetch("http://localhost:8080/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    const userData = await response.json();
                    console.log(userData);

                    // Save data in sessionStorage
                    sessionStorage.setItem("userId", userData.id);
                    sessionStorage.setItem("userName", userData.userName);
                    sessionStorage.setItem("userId", userData.id);
                    sessionStorage.setItem("userName", userData.userName);
                    sessionStorage.setItem("email", userData.email);
                    sessionStorage.setItem("firstName", userData.firstName);
                    sessionStorage.setItem("lastName", userData.lastName);
                    sessionStorage.setItem("bio", userData.bio || "");
                    sessionStorage.setItem("dateOfBirth", userData.dateOfBirth || "");
                    sessionStorage.setItem("createdAt", userData.createdAt);


                    if (userData.profileImage) {
                        sessionStorage.setItem("profileImage", `data:image/jpeg;base64,${userData.profileImage}`);
                    }

                    toast.success("Login Successful!");
                    navigate("/home");
                } else {
                    toast.error("Invalid Credentials!");
                }
            } catch (error) {
                console.error("Login failed", error);
                toast.error("Something went wrong!");
            }
        }
    };




    return <>

        <div className="loginFormHolder">
            <div className="glassEffect">
                <h2>Login </h2>
                <div className="loginInputHolder">
                    <input onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                        type='text'
                        placeholder="Username / Email" />


                    <input onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                        type='password'
                        placeholder="Create Password" />



                </div>
                <div style={{ margin: "2vh 0 0 0" }}>
                    <p style={{ color: "#fff", fontWeight:500 }}>Don't have account? <Link to='/signup' style={{ color: "#000", textDecoration: "none" }}>Register</Link></p>
                </div>
                <div className="loginButtonHolder">
                    <button onClick={onSignInClicked}>Login</button>
                </div>
            </div>

        </div>

    </>
}

export default Login;