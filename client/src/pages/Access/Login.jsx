import React, { useState } from "react";
import "./css/Login.css";
import { loginUser } from "./Request/Request";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [option, setOption] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      option: option,
      password: password,
    };
    const data = await loginUser(user, setError, navigate);
    console.log("Login Data:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
