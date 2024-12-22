import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 80px)", // Adjust height for navbar and footer
      padding: "20px",
      backgroundColor: "#f9f9f9",
    },
    content: {
      maxWidth: "800px",
      textAlign: "center",
      color: "#333",
      lineHeight: "1.8",
      fontSize: "16px",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Terms and Conditions</h1>
          <p>
            Welcome to Business Dashboard! These Terms and Conditions govern your use of our 
            platform. By using our services, you agree to these terms.
          </p>
          <h2>User Responsibilities</h2>
          <p>
            Users must ensure that their account credentials remain confidential and are 
            responsible for all activities conducted under their account.
          </p>
          <h2>Prohibited Activities</h2>
          <p>
            You must not engage in activities that could harm the platform, other users, or 
            violate applicable laws.
          </p>
          <p>
            For further details or concerns, please{" "}
            <a href="/contact" style={{ color: "#2575fc", textDecoration: "none" }}>
              contact us
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
