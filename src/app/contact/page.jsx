import React from "react";
import "./contact.scss";
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const ContactPage = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">Get in Touch </h1>
      <div className="contact__wrapper">
        <form className="contact__form">
          <div className="contact__input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="contact__input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="contact__input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>
        <div className="contact__content">
          <div className="contact__content-item">
            <IoHome className="contact__content-icon" />
            <div>
              <p>Rwanda</p>
              <p>Kigali, kg st 654</p>
            </div>
          </div>
          <div className="contact__content-item">
            <FaPhoneVolume className="contact__content-icon" />

            <div>
              <p>+250 784 635 871</p>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="contact__content-item">
            <SiMinutemailer className="contact__content-icon" />

            <div>
              <p>ironji.sales@gmail.com </p>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
