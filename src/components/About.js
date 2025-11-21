import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I enjoy building creative solutions and learning new technologies.
      </p>
        <img src={require("./demo.png")} alt="I made this" />
    </div>
  );
}

export default About;
