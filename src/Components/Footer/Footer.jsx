import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.right}>Copy Right Holder Mahir Solutions</p>
      <ul className={styles.rightlist}>
        <li>All right reserved</li>
        <li>Term of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
