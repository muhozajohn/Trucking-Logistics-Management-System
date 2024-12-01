import React from "react";
import "./contact.scss";

const ContactPage = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">Get in Touch </h1>
      <div className="contact__wrapper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          exercitationem. Expedita, in! Laboriosam perferendis eaque debitis
          facilis, dicta quidem rem.
        </p>
        <form className="contact__form">
          <div className="contact__input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="contact__input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="contact__input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="contact__button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
