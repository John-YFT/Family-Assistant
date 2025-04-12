import React from "react";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";

const About = () => {
  return (
    <div className="w-full bg-primary">
      <Team />
      <div className="bg-stroke">
        <Contact />
      </div>
    </div>
  );
};

export default About;
