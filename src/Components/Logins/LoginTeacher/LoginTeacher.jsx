import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import LoginUser from "../LoginUser";
const LoginTeacher = () => {
    const navigate = useNavigate()
    const field = [
        {
            name: "Email",
            label: "Email",
            placeholder: "Email",
            type: "text"
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password"
        },
    ];
    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="Login" >
            <form onSubmit={handleSubmit} className="login-wrap" >
                <div className="LoginForm">
                <LoginUser/>
                    {field.map((i) => (
                        <label key={i.name}>
                            <input
                                className="LoginInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                value={loginData[i.name] || ""}
                                onChange={handleChange}
                            />
                        </label>
                    ))}
                    <button type="submit" className="Loginbtt" onClick={() => navigate("/admin")} >Login</button>
                </div>
                <hr style={{ transform: 'rotate(180deg)', height: '100vh' }} className="verticalSign" />
                <div className="ImageWrap">
                    <div className="login-text">
                        <h1>Start managing now</h1>
                        <p>Stop struggling with common tasks and focus<br />
                            on the real choke points. Discover a full<br />
                            featured & 100% efficient platform.</p>
                    </div>
                    <img src="/login4.png"
                        alt="loginimg"
                        className='LoginImage' />
                </div>
            </form>
        </main>
    );
};

export default LoginTeacher;
