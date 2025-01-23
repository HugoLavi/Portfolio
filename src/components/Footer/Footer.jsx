import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Hugo Lavieuville. Tous droits
        réservés.
      </p>
    </footer>
  );
};

export default Footer;
