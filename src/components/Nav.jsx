import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import { NavList } from "../utils/NavList";

const Nav = () => {
  return (
    <>
      {/* desktop nav */}
      <nav className="md:block hidden">
        <ul className="nav_list">
          {NavList.map((item, index) => (
            <li key={index} className="mt-1 underline-offset-1">
              <Link to={item.url} className="text-[#424444]">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
