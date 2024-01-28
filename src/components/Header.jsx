import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {nav ? (
        <AiOutlineClose size={30} onClick={handleNav} className="mobile_nav" />
      ) : (
        <AiOutlineMenu size={30} onClick={handleNav} className="mobile_nav" />
      )}

      {/* desktop header */}
      <header className="fixed md:left-[3.5rem] md:top-[3.5rem] left-[3rem] top-[3rem] z-10">
        {/* <h2 className="font-light md:block hidden md:text-5xl">Ahram Kim</h2>
        <h2 className="font-light md:hidden block text-2xl">AR.K</h2>
        <p className="mt-1 md:block hidden">Frontend Developer</p> */}

        {/* desktop nav */}
        {/* <Nav /> */}

        {/* mobile nav */}
        {/* {nav ? <MobileNav /> : ""} */}
      </header>
    </>
  );
};

export default Header;
