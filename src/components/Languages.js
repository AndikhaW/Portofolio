import React from "react";

const languageData = [
  {
    name: "Python",
    logo: "/python.svg",
    description: "High-level programming language",
  },
  {
    name: "JavaScript",
    logo: "/js.svg",
    description: "Client-side scripting language",
  },
  {
    name: "C",
    logo: "/c.svg",
    description: "General-purpose programming language",
  },
  {
    name: "Assembly",
    logo: "/assembly.svg",
    description: "Low-level programming language",
  },
  {
    name: "VHDL",
    logo: "/vhdl.svg",
    description: "Hardware description language",
  },
  {
    name: "Java",
    logo: "/java.svg",
    description: "General-purpose programming language",
  },
  {
    name: "SQL",
    logo: "/sql.svg",
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
