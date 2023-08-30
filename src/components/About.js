import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="about-content">
        <div className="profile-info">
          <img
            src="/andikha_photo_porto.jpg"
            alt="Your Name"
            className="profile-image"
          />
          <div className="name">
            <h1>Andikha Wisanggeni</h1>
          </div>
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            A third year Computer Engineering student at the University of
            Indonesia. Have experience in programming languages such as Python,
            C, Java, JavaScript, and, SQL, along with hands-on experience in
            hardware coding on Arduino ATMega 328P. With an ambitious attitude,
            passion to learn new things, quick adaptability, and a strong work
            ethic, I am eager to make contribution on your dynamic teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
