import React from "react"; // eslint-disable-line no-unused-vars
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiSolidConversation,
} from "react-icons/bi";

const Sns = () => {
  return (
    <>
      <div className="flex">
        <BiLogoGmail
          onClick={() => window.open(`mailto:ahram0223@naver.com`)}
          size={50}
          className="icon"
        />
        <BiSolidConversation
          onClick={() => window.open(`tel:01046874654`)}
          size={50}
          className="icon"
        />
        <BiLogoGithub
          onClick={() => window.open(`https://github.com/byahram/`)}
          size={50}
          className="icon"
        />
        <BiLogoInstagramAlt
          onClick={() => window.open(`https://www.instagram.com/__ahram.k/`)}
          size={50}
          className="icon"
        />
      </div>
    </>
  );
};

export default Sns;
