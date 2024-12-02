import React from "react";
import Image from "next/image";
import { images } from "../common";
import Input from "../common/Input";
import Button from "../common/Button";
import "../styles/welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__image-container">
        <Image src={images.truck1} alt={"background"} />
      </div>
      <div className="welcome__overlay">
        <div className="welcome__content">
          <h1 className="welcome__title">
            Safe & Reliable{" "}
            <span className="welcome__title-highlight">Logistic</span> <br />{" "}
            Solutions!
          </h1>
          <div className="welcome__tracking">
            <div className="welcome__tracking-container">
              <Input
                type="input"
                inputType="text"
                placeholder="Your Tracking ID"
                inputStyle="welcome__tracking-input"
              />
              <Button
                title="TRACK & TRACE"
                path="#"
                className="welcome__tracking-button"
              />
            </div>
            <p className="welcome__tracking-status">
              For order status inquiry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
