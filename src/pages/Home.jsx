import React from "react"; // eslint-disable-line no-unused-vars
// import { TypeAnimation } from "react-type-animation";

import Nav from "../components/Nav";
import Card from "../components/home/Card";

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="inner">
        <div className="section__container">
          <Nav />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Home;
