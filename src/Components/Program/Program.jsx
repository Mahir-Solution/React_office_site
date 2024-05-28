import React from "react";
import "./Program.css";
import degree1 from "../../assets/degree1.jpg";
import diploma from "../../assets/diploma.jpg";
import computer_degree from "../../assets/computer_degree.jpg";
import degree_eco from "../../assets/degree_eco.jpg";

const Program = () => {
  return (
    <>
      <div className="programs" id="program">
        <div program>
          <img
            src={degree1}
            alt=""
            style={{ height: "300px", width: "250px" }}
          />
          <div className="caption">
            <p>Commerce Degree</p>
          </div>
        </div>
        <div program>
          <img
            src={diploma}
            alt=""
            style={{ height: "300px", width: "250px" }}
          />
          <div className="caption">
            <p>Diploma Certificate</p>
          </div>
        </div>
        <div program>
          <img
            src={computer_degree}
            alt=""
            style={{ height: "300px", width: "250px" }}
          />
          <div className="caption">
            <p>Computer Degree</p>
          </div>
        </div>
        <div program>
          <img
            src={degree_eco}
            alt=""
            style={{ height: "300px", width: "250px" }}
          />
          <div className="caption">
            <p>Economics Degree</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Program;
