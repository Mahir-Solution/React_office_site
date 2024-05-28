import React from "react";
import "./Ttitle.css";
function Title({ subtitle, title }) {
  return (
    <div>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
