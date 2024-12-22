import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    mainContent: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    form: {
      maxWidth: "500px",
      width: "100%",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#2575fc",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
    },
    error: {
      color: "red",
      fontSize: "0.9rem",
    },
    success: {
      color: "green",
      fontSize: "1rem",
      marginTop: "10px",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
      setErrors({});
      // Add your form submission logic here (e.g., send data to API)
      console.log("Form submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.mainContent}>
        <h1>Contact Us</h1>
        {isSubmitted && (
          <p style={styles.success}>Thank you for contacting us! We'll get back to you soon.</p>
        )}
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <textarea
            style={styles.input}
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
          ></textarea>
          {errors.message && <p style={styles.error}>{errors.message}</p>}

          <button style={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
