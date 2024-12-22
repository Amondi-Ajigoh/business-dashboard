import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#111",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      fontSize: "14px",
      position: "relative",
      bottom: "0",
      width: "100%",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>© 2024 Business Dashboard. All Rights Reserved.</p>
      <p>
          <a href="/privacy" style={{ color: "#ddd" }}>
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" style={{ color: "#ddd" }}>
            Terms of Service
          </a>
        </p>
    </footer>
  );
};

export default Footer;
