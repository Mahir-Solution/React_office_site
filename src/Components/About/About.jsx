import React from "react";
import "./About.css";
import wasi from "../../assets/wasi.png";
function About() {
  return (
    <div className="about" id="about">
      <div className="left-about">
        <img src={wasi} alt="" />
        <img src="" alt="" />
      </div>
      <div className="right-about">
        <p>About</p>
        <h2>wasim abbas</h2>
        <p className="paragraph">
          Good morning, everyone! First and foremost, I want to express my
          sincere gratitude to each and every one of you. Your hard work,
          dedication, and innovative spirit have been the driving forces behind
          our success. Thank you for your commitment and for always striving for
          excellence.
        </p>
        <p>
          As we reflect on the past year, we have many reasons to be proud.
          Together, we have achieved remarkable milestones. Our revenue has
          grown by 20%, we have launched three groundbreaking products, and we
          have expanded our customer base globally. These accomplishments are
          not just numbers; they represent the impact we are making in the lives
          of our customers and the footprint we are leaving in our industry.
        </p>
      </div>
    </div>
  );
}

export default About;
