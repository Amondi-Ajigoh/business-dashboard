import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (if any)
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to login page
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#2575fc",
      color: "white",
    },
    navLinks: {
      display: "flex",
      gap: "15px",
    },
    logo: {
      cursor: "pointer",
    },
    button: {
      backgroundColor: "white",
      color: "#2575fc",
      border: "none",
      borderRadius: "5px",
      padding: "8px 15px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.navbar}>
      <h1 style={styles.logo} onClick={() => navigate("/")}>
        Business Dashboard
      </h1>
      <div style={styles.navLinks}>
        <button style={styles.button} onClick={() => navigate("/")}>
          Home
        </button>
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
