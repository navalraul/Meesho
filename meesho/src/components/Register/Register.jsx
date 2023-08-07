
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "Buyer" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Meesho-Users")) || [];
            const Ls = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                role: userData.role,
                cart: []
            };
            array.push(Ls);

            localStorage.setItem("Meesho-Users",JSON.stringify(array));
            setUserData({ name: "", email: "", password: "", role:"Buyer" })
            alert("Registration Successful..")
            router('/login')
        } else {
            alert("Please fill all the details")
        }
    }

    function selectRole(event) {
        setUserData({...userData, ["role"]: event.target.value})
    }

    return (
        <div id='Rmain'>
            <div id="body">
                <div>
                    <img
                        src="https://images.meesho.com/images/marketing/1661417516766.webp" />
                </div>
                <div>
                    <div class="log">
                        <h3>Register</h3>
                        <p>to continue</p>
                    </div>
                    <div class="in">
                        <form onSubmit={handleSubmit} >
                            <input onChange={handleChange} name='name' type="text" placeholder="Enter your Name" /><br />
                            <label>Select Role:</label><br />
                            <select onChange={selectRole}>
                                <option value="Buyer">Buyer</option>
                                <option value="Seller">Seller</option>
                            </select>
                            <input onChange={handleChange} name='email' type="text" placeholder="Enter your Email" /><br />
                            <input onChange={handleChange} name='password' type="password" placeholder="Enter your Password" /><br />
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                    <div class="text">
                        <h5>By continuing, I agree to the</h5>
                        <p>Terms of Use</p>
                        <h5>&</h5>
                        <p>Privacy Policy</p>
                    </div>
                    <div class="text2">
                        <h5>Already registered?</h5>
                        <p onClick={() => router('/login')}>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
    