import React from "react";

const languageData = [
  {
    name: "Python",
    logo: process.env.PUBLIC_URL + "/python.svg",
    description: "High-level programming language",
  },
  {
    name: "JavaScript",
    logo: process.env.PUBLIC_URL + "/js.svg",
    description: "Client-side scripting language",
  },
  {
    name: "C",
    logo: process.env.PUBLIC_URL + "/c.svg",
    description: "General-purpose programming language",
  },
  {
    name: "Assembly",
    logo: process.env.PUBLIC_URL + "/assembly.svg",
    description: "Low-level programming language",
  },
  {
    name: "VHDL",
    logo: process.env.PUBLIC_URL + "/vhdl.svg",
    description: "Hardware description language",
  },
  {
    name: "Java",
    logo: process.env.PUBLIC_URL + "/java.svg",
    description: "General-purpose programming language",
  },
  {
    name: "SQL",
    logo: process.env.PUBLIC_URL + "/sql.svg",
    description: "Structured Query Language",
  },
];

const Languages = () => {
  return (
    <section id="languages" className="section">
      <h2 className="section-header">Programming Languages</h2>
      <div className="language-list">
        {languageData.map((language, index) => (
          <div className="language-card" key={index}>
            <img
              src={language.logo}
              alt={`${language.name} Logo`}
              className="language-logo"
            />
            <h3>{language.name}</h3>
            <p>{language.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
