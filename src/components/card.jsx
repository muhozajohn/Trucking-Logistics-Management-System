import React from "react";
import "../styles/Lcard.scss";

const Lcard = ({ icon, title, description, titleStyle = false }) => {
  return (
    <div className="lcard">
      <span className="icon">{icon}</span>
      <div className="content">
        <h3 className={titleStyle ? "title title--large" : "title title--small"}>
          {title}
        </h3>
        <p className={titleStyle ? "description description--small" : "description description--large"}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Lcard;
