import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

// Import the data components
import Overview from "./dashboard/Overview";
import Reports from "./dashboard/Reports";
import Analytics from "./dashboard/Analytics";
import Settings from "./dashboard/Settings";

const Dashboard = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    contentWrapper: {
      display: "flex",
      flex: 1,
    },
    content: {
      flex: 1,
      padding: "20px",
      boxSizing: "border-box",
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div style={styles.contentWrapper}>
        <Sidebar />
        <div style={styles.content}>
          <h1>Dashboard</h1>
          <p>Welcome to the dynamic business dashboard. Select a menu item to begin.</p>
        </div>
        <div style={styles.content}>
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
