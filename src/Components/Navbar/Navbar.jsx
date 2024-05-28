import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

// import django from "../../../assets/django.png";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setsticky(true) : setsticky(false);
    });
  }, []);

  return (
    <div id="header">
      {/* <img src= {django} alt="django.PNG" /> */}
      <ul className={`navbar ${sticky ? "dark-nav" : ""} `}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Hero
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={0} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={0} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="team" smooth={true} offset={0} duration={500}>
            Team
          </Link>
        </li>
        <li>
          <Link
            to="Registration"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Registration
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Contact_Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
