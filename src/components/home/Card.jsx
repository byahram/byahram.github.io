import React, { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars

import Sns from "./Sns";
import Text from "./Text";
import Image from "./Image";

const Card = () => {
  return (
    <>
      <div className="card_cont">
        <div className="flex">
          <div className="img_cont">
            <Image />
          </div>
          <div className="intro_cont">
            <Text />
            <Sns />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
