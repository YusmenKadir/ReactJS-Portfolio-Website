import React from "react";
import { GrMail, GrPhone, GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h2>CONTACT WITH ME..</h2>
        <div className="bottom-line"></div>
      </div>

      <div className="contact-grid">
        <div>
          <GrLocation size={40} />
          <h3>Location</h3>
          <p>Eindhoven,The Netherlands</p>
        </div>
        <div>
          <GrMail size={40} />
          <h3>Email</h3>
          <p>kadirmedia@gmail.com</p>
        </div>
        <div>
          <GrPhone size={40} />
          <h3>Phone</h3>
          <p>+001355768</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
