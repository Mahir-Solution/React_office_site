import React from "react";
import "./Team.css";
import team1 from "../../assets/team1.PNG";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
const Team = () => {
  return (
    <div className="team-container" id="team">
      <div className="team">
        <img src={team1} alt="" height={300} width={250} />
        <div className="caption">
          <h6>CEO</h6>
        </div>
      </div>
      <div className="team">
        <img src={team2} alt="" height={300} width={250} />
        <div className="caption">
          <h6>Sofware Engineer</h6>
        </div>
      </div>
      <div className="team">
        <img src={team3} alt="" height={300} width={250} />
        <div className="caption">
          <h6>Administrator</h6>
        </div>
      </div>
      <div className="team">
        <img src={team2} alt="" height={300} width={250} />
        <div className="caption">
          <h6>Sofware Engineer</h6>
        </div>
      </div>
    </div>
  );
};

export default Team;
