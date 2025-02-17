import React, { useState } from "react";
import './Register.css';
import { signup } from '../Services/User';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const navigate = useNavigate();

    const onRegisterClicked = async () => {
        if (!firstName || !lastName || !email || !userName || !password || !confirmPassword) {
            toast.warn('Please fill all fields');
            return;
        }
        if (password !== confirmPassword) {
            toast.warn('Passwords do not match');
            return;
        }

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("userName", userName);
        formData.append("password", password);
        if (profileImage) {
            formData.append("profileImage", profileImage);
        }

        const result = await signup(formData);
        console.log(result.message)
        if (result.message) {
            toast.success('User Registered Successfully');
            navigate('/login');
        } else {
            toast.error(result.error || 'Registration failed');
        }
    };

    return (
        <div className="registerFormHolder" >
            <h2>Create Your Account</h2>
            <div className="registerInputHolder">
                <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                <input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} />
            </div>
            <div className="loginAndRegisterLinks">
                <p>Already have an account? <Link to='/login' style={{ color: "#000", textDecoration: "none" }}>Login</Link></p>
            </div>
            <div className="registerButtonHolder">
                <button onClick={onRegisterClicked}>Create Account</button>
            </div>
        </div>
    );
};

export default Register;
