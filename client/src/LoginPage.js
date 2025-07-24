import React, { useState } from "react";
import axios from "axios";

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f6fa"
};

const boxStyle = {
  padding: "32px",
  borderRadius: "12px",
  background: "#fff",
  boxShadow: "0 2px 16px rgba(34, 34, 34, 0.08)",
  width: "320px"
};

const labelStyle = {
  margin: "8px 0 4px 0",
  fontWeight: 600,
};

const inputStyle = {
  width: "100%",
  padding: "9px 10px",
  marginBottom: "18px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#4e8cff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer"
};

const errorStyle = {
  color: "#e74c3c",
  marginBottom: "15px",
  textAlign: "center"
};

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });
      onLogin(res.data.token);
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div style={pageStyle}>
      <form style={boxStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Login</h2>
        {error && <div style={errorStyle}>{error}</div>}
        <label style={labelStyle}>Username</label>
        <input
          style={inputStyle}
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <label style={labelStyle}>Password</label>
        <input
          style={inputStyle}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button style={buttonStyle} type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
