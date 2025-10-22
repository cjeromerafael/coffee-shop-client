// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://coffee-shop-server-rwgb.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Account created successfully! You can now log in.");
        navigate("/login");
      } else {
        alert("Signup failed. Try another username.");
      }
    } catch (error) {
      console.error("❌ Signup error:", error);
      alert("Server connection failed. Please try again later.");
    }
  };

  return (
    <div className="container text-center my-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit" className="btn btn-dark w-100 mb-3">
          Create Account
        </button>
        <button
          type="button"
          className="btn btn-outline-dark w-100"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
