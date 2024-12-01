import React from "react";
import Lcard from "./card";
import { location } from "./json";
import "../styles/location.scss";

const Location = () => {
  return (
    <div className="location-section">
      <div className="location-container">
        {location.map((item, index) => (
          <Lcard
            icon={item.icon}
            key={index}
            title={item.title}
            description={item.description}
            titleStyle={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
