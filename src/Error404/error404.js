import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>
        Oops! The page you are looking for might have been removed or is
        temporarily unavailable.
      </p>
      <Link to="/" style={styles.link}>
        Go back to home page
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#333",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#666",
  },
  link: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
};

export default Error404;
