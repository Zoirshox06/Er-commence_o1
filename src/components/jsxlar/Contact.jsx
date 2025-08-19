import React from "react";
import "../../style/Contact.css";
import phone from '../../assets/icons-phone.png'
import icons from '../../assets/icons-mail.png'

const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <img src={phone} alt="" />
            </div>
            <div>
              <h4 className="contact-heading">Call To Us</h4>
              <p>We are available 24/7, 7 days a week.</p>
              <p className="contact-subtext">Phone: +8801611112222</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <img src={icons} alt="" />
            </div>
            <div>
              <h4 className="contact-heading">Write To Us</h4>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p className="contact-subtext">Emails: customer@exclusive.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" required />
          </div>
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

   
    </>
  );
};

export default Contact;
