import React from "react"; // eslint-disable-line no-unused-vars

import Mask from "../components/bg/Mask";
import Frame from "../components/bg/Frame";
import Theme from "../components/bg/Theme";
import Header from "../components/Header";
import Home from "../pages/Home";

const Background = () => {
  return (
    <>
      <Mask />
      <Frame />
      <Theme />
      <Header />
      <main id="main">
        <Home />
      </main>
    </>
  );
};

export default Background;
