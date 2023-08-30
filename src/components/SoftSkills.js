import React from "react";

const softSkillsData = [
  "Ambitious attitude",
  "Like to learn new things",
  "Easily adapt to new environments",
  "Great confidence",
  "Great work ethic",
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="section">
      <h2 className="section-header">Soft Skills</h2>
      <div className="soft-skills-box">
        <ul className="soft-skills-list">
          {softSkillsData.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftSkills;
