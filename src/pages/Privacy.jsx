import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 80px)", // Adjust height to account for navbar and footer
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
          <h1 style={styles.heading}>Privacy Policy</h1>
          <p>
            At Business Dashboard, we value your privacy. This Privacy Policy outlines how
            we collect, use, and safeguard your information while you use our platform.
          </p>
          <h2>Your Information</h2>
          <p>
            We collect personal data such as your name, email, and usage patterns to provide 
            better service and enhance your experience. Your information is securely stored 
            and never shared without consent.
          </p>
          <h2>How We Use Your Data</h2>
          <p>
            Your data is used to personalize content, improve services, and communicate 
            important updates. We ensure compliance with industry security standards.
          </p>
          <p>
            If you have any questions, please{" "}
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

export default Privacy;
