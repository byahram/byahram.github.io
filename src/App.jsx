import React, { useState, useEffect, useContext } from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter as Router } from "react-router-dom";
// import { motion } from "framer-motion";
// import { CursorContext } from "./context/CursorContext";

import Layout from "./layout/Layout";

function App() {
  // const { cursorVariatns, cursorBG } = useContext(CursorContext);
  
  return (
    <>
      <Router>
        <Layout />
      </Router>

      {/** cursor */}
      {/* <motion.div
        variants={cursorVariatns}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full z-[999]"
      ></motion.div> */}
    </>
  );
}

export default App;
