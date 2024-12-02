import React from "react";
import { trackingFeatures } from "../../components/json";
import Lcard from "../../components/card";
import "../../styles/services.scss";

const ServicePage = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h4>Our Services</h4>
        <h1>What We Can Do For You</h1>
      </div>

      <div className="services-grid">
        {trackingFeatures.map((feature, index) => (
          <Lcard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            titleStyle={true}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
