import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Contact Me</h2>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/AndikhaW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/github-icon.svg"}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/andikha-wisanggeni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/linkedin-icon.svg"}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/andikha.w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={process.env.PUBLIC_URL + "/instagram-icon.svg"}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
