import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const styles = {
    pageContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#f0f4f8",
      color: "#333",
    },
    navbar: {
      backgroundColor: "#2575fc",
      color: "white",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: "0",
      zIndex: "1000",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
    },
    navLinkHover: {
      color: "#ffdd00",
    },
    cardContainer: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    card: {
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      width: "100%",
      maxWidth: "400px",
      padding: "30px",
      textAlign: "center",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    input: {
      width: "100%",
      padding: "12px 15px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px 20px",
      margin: "10px 0",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "#2575fc",
      color: "white",
      transition: "all 0.3s",
    },
    error: {
      color: "red",
      marginBottom: "10px",
    },
    footer: {
      backgroundColor: "#111",
      color: "white",
      textAlign: "center",
      padding: "10px",
      fontSize: "14px",
      position: "sticky",
      bottom: "0",
    },
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const mockUsers = [
      { email: "admin@example.com", password: "admin123", role: "admin" },
      { email: "user@example.com", password: "user123", role: "user" },
    ];

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      navigate("/dashboard"); // Navigate to Dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Log In</h2>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button style={styles.button} onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
