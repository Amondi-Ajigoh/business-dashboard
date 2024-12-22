import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const styles = {
    container: {
      height: "calc(100vh - 60px)", // Adjust for Navbar height
      width: isCollapsed ? "80px" : "250px",
      backgroundColor: "#2575fc",
      color: "#fff",
      padding: "20px",
      boxSizing: "border-box",
      position: "sticky",
      top: "60px", // Start below Navbar
      transition: "width 0.3s ease-in-out",
      overflow: "hidden",
    },
    toggleButton: {
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "20px",
      marginBottom: "20px",
      outline: "none",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      margin: "20px 0",
      fontSize: isCollapsed ? "0" : "18px",
      opacity: isCollapsed ? 0 : 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "opacity 0.3s ease-in-out, font-size 0.3s ease-in-out",
    },
    icon: {
      marginRight: isCollapsed ? "0" : "10px",
      transition: "margin-right 0.3s ease-in-out",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      {/* Toggle Button */}
      <button style={styles.toggleButton} onClick={handleToggle}>
        {isCollapsed ? "☰" : "←"}
      </button>

      {/* Menu Items */}
      <div style={styles.menuItem}>
        <span style={styles.icon}>🏠</span>
        <Link to="/dashboard/overview" style={styles.link}>
          {!isCollapsed && "Overview"}
        </Link>
      </div>
      <div style={styles.menuItem}>
        <span style={styles.icon}>📊</span>
        <Link to="/dashboard/reports" style={styles.link}>
          {!isCollapsed && "Reports"}
        </Link>
      </div>
      <div style={styles.menuItem}>
        <span style={styles.icon}>📈</span>
        <Link to="/dashboard/analytics" style={styles.link}>
          {!isCollapsed && "Analytics"}
        </Link>
      </div>
      <div style={styles.menuItem}>
        <span style={styles.icon}>⚙️</span>
        <Link to="/dashboard/settings" style={styles.link}>
          {!isCollapsed && "Settings"}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
