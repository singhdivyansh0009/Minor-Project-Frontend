import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footerLinks}>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className={styles.contactInfo}>
          <p>&copy; {new Date().getFullYear()} E-Marketplace for Lawyers. All rights reserved.</p>
          <p>Email: info@lawyersmarketplace.com | Phone: (123) 456-7890</p>
        </div>
    </div>
  );
};

export default Footer;
