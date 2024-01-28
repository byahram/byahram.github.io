import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars

export const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkLightMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div id="theme">
      <div className="flex gap-3">
        <div className="theme_btns_wrap">
          <button
            className={`theme_btn ${!darkMode ? "bg-light border-dark" : ""}`}
            onClick={toggleDarkLightMode}
          ></button>
          <label className="text-sm">Light</label>
        </div>
        <div className="theme_btns_wrap">
          <button
            className={`theme_btn ${darkMode ? "bg-light border-dark" : ""}`}
            onClick={toggleDarkLightMode}
          ></button>
          <label className="text-sm">Dark</label>
        </div>
      </div>
      <div className="flex gap-4">
        {/* <div className="theme_btns_wrap">
          <input
            id="light"
            className="w-3 h-3 bg-dark border border-solid border-light dark:bg-light dark:border-dark"
          ></input>
          <label htmlFor="light" className="text-sm">
            Monospace
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Theme;
