import React from "react";
import "./index.css";

// Insira as props necessárias
const ResumeItem = ({ title, value, color }) => {
  return (
    <div className="resume-container">
      <div className="title">{title}</div>
      <div className="info" style={{ color: color }}>
        R$ {value}
      </div>
    </div> 
  );
};

export default ResumeItem;
