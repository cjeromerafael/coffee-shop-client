// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Attempting login with:", username, password);

    try {
      // Send login request to Node.js backend
      const res = await fetch(
        `http://localhost:5000/login?username=${username}&password=${password}`
      );
      const data = await res.json();

      if (data.success) {
        // Store login state temporarily (clears when browser closes)
        sessionStorage.setItem("isAuthenticated", "true");
        console.log("✅ Logged in successfully!");
        navigate("/reviews");
      } else {
        alert("Invalid credentials! Try again.");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      alert("Server connection failed. Make sure your backend is running.");
    }
  };

  return (
    <div className="container text-center my-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
