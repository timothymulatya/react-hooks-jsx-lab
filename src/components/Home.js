import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      <h1 sytle={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
