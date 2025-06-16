import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div style={styles.links}>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "rgb(205,205,205)",
    color: "black",
    padding: "1rem 0",
    marginTop: "2%",
    textAlign: "center",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  text: {
    marginBottom: "0.5rem",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  link: {
    color: "#9ca3af",
    textDecoration: "none",
  },
};

export default Footer;