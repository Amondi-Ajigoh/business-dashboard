import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Welcome = () => {
  const navigate = useNavigate(); // Hook for navigation

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh", // Ensures the footer stays at the bottom
    },
    content: {
      flexGrow: 1, // Allows the content to take available space
      textAlign: "center",
      padding: "50px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#2575fc",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <h1>Welcome to Business Dashboard</h1>
        <p>Your all-in-one platform for managing business operations.</p>
        <button style={styles.button} onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
